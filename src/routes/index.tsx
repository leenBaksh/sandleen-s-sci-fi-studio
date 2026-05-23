import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandleen Waseem — AI-Powered Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sandleen Waseem, an AI-powered full-stack developer and creative professional building intelligent products, robotics research, and cryptographic systems.",
      },
      { property: "og:title", content: "Sandleen Waseem — AI-Powered Full-Stack Developer" },
      {
        property: "og:description",
        content: "Intelligent products, robotics, and crafted interfaces.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
