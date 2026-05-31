import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const SYSTEM_PROMPT = `You are Sandleen Waseem's friendly portfolio assistant. Sandleen is an AI-powered full-stack developer and creative professional with skills in:
- AI/DevOps engineering and Agentic AI (Governor Sindh Initiative for Agentic AI)
- Web development & freelancing (Bano Qabil)
- Graphic & presentation design
- Cross-functional team collaboration in hackathons and freelance projects
- Compelling presentation decks for corporate and educational use
- Problem-solving combining design thinking with AI/DevOps

Education: Intermediate (Commerce) at Degree Girls College, Buffer Zone, Karachi; Matriculation (Science) at Falcon House Grammar School (C-3), Karachi.

Keep replies short (1-3 sentences), warm, and helpful. If asked something outside Sandleen's portfolio, gently redirect to her work, skills, or how to contact her.`;

const ChatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      })
    )
    .min(1)
    .max(30),
});

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          let payload: unknown;
          try {
            payload = await request.json();
          } catch {
            return new Response(JSON.stringify({ error: "Invalid JSON" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const parsed = ChatSchema.safeParse(payload);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "Invalid request" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }
          const { messages } = parsed.data;

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            console.error("Chat route: AI credentials not configured");
            return new Response(JSON.stringify({ error: "Service unavailable" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              stream: true,
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
            }),
          });

          if (!resp.ok) {
            if (resp.status === 429) {
              return new Response(
                JSON.stringify({ error: "Rate limit reached, try again shortly." }),
                { status: 429, headers: { "Content-Type": "application/json" } }
              );
            }
            if (resp.status === 402) {
              return new Response(
                JSON.stringify({ error: "AI credits exhausted." }),
                { status: 402, headers: { "Content-Type": "application/json" } }
              );
            }
            const text = await resp.text();
            console.error("AI gateway error", resp.status, text);
            return new Response(JSON.stringify({ error: "AI gateway error" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(resp.body, {
            headers: { "Content-Type": "text/event-stream" },
          });
        } catch (e) {
          console.error("chat route error", e);
          return new Response(JSON.stringify({ error: "Unknown error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
