import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "AI-Powered Full-Stack Developer",
    org: "Remote Work",
    period: "2023 — Present",
    points: [
      "Led an AI Automation Workflow System using n8n, OpenAI/Gemini APIs and Puppeteer — reducing task effort by 60%.",
      "Built AI systems with OpenAI Agents SDK and spec-driven development, improving delivery and reducing ambiguity.",
      "Participated in 5+ AI and cloud-native hackathons, delivering production-ready prototypes under tight deadlines.",
    ],
  },
  {
    role: "Creative & Digital Freelancer",
    org: "Remote Freelance",
    period: "2022 — 2025",
    points: [
      "Managed projects spanning budget analysis, logo design, posters, banners, business cards, Canva & PowerPoint decks, and digital planners.",
      "Designed merchandise and digital assets — T-Shirts, pillows, mobile covers, and book covers.",
      "Owned client communication, deadlines, and remote project delivery end-to-end.",
    ],
  },
  {
    role: "Agentic AI Engineering — Quarter 4",
    org: "Governor Sindh Initiative for Agentic AI",
    period: "2023 — Present",
    points: [
      "Hands-on training in agentic AI engineering, OpenAI Agents SDK, and spec-driven development.",
      "Building production-grade agent workflows with Gemini, Claude, and Qwen.",
    ],
  },
  {
    role: "Web Development & Freelancing — Bano Qabil",
    org: "Short Course · Completed",
    period: "Completed",
    points: [
      "Foundations of modern web development and remote freelancing workflows.",
      "Completed C.I.T. in Graphic & Presentation Design alongside web specialization.",
    ],
  },
  {
    role: "Intermediate (Commerce)",
    org: "Degree Girls College, Buffer Zone, Karachi",
    period: "Education",
    points: [
      "Matriculation (Science) — Falcon House Grammar School (C-3), Karachi.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title={<>A timeline of <span className="text-gradient">building</span> & learning</>}
          subtitle="Roles, research, and the throughline of curiosity that connects them."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />
          <ul className="space-y-12">
            {items.map((it, i) => (
              <motion.li
                key={it.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`md:${i % 2 === 0 ? "text-right pr-12" : "col-start-2 pl-12"} pl-12 md:pl-0`}
                >
                  <div className="glass rounded-2xl p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                      {it.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{it.role}</h3>
                    <p className="text-sm text-muted-foreground">{it.org}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <span className="relative grid h-8 w-8 place-items-center rounded-full glass-strong">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    <span className="absolute inset-0 animate-glow rounded-full bg-primary/30 blur-md" />
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
