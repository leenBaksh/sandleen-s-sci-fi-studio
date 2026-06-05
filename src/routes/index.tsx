import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Signals } from "@/components/Signals";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Chatbot } from "@/components/Chatbot";
import { GanbatteCounter } from "@/components/GanbatteCounter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandleen Waseem — Creative Futurist Engineer · AI × Full-Stack" },
      {
        name: "description",
        content:
          "Sandleen Waseem — Creative Futurist Engineer from Karachi building agentic AI, full-stack web, and design-led products for global teams. Available for remote collaborations.",
      },
      { name: "keywords", content: "Sandleen Waseem, AI engineer, agentic AI, full-stack developer, creative futurist, Karachi, Pakistan, Next.js, React, robotics, portfolio" },
      { property: "og:title", content: "Sandleen Waseem — Creative Futurist Engineer" },
      {
        property: "og:description",
        content: "Agentic AI, full-stack engineering, and design-led product work. From Karachi → to the world.",
      },
      { property: "og:url", content: "https://sandleen-portfolio-dev.lovable.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sandleen Waseem — Creative Futurist Engineer" },
      { name: "twitter:description", content: "Agentic AI × Full-Stack × Design. Available for global collaborations." },
    ],
    links: [
      { rel: "canonical", href: "https://sandleen-portfolio-dev.lovable.app" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sandleen Waseem",
          alternateName: "Sandleen Bakshi",
          jobTitle: "Creative Futurist Engineer — AI-Powered Full-Stack Developer",
          url: "https://sandleen-portfolio-dev.lovable.app",
          email: "mailto:Sandleenbakshi@gmail.com",
          telephone: "+92-310-3871019",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          knowsAbout: [
            "Agentic AI",
            "Full-Stack Development",
            "Next.js",
            "React",
            "Robotics",
            "Creative Engineering",
            "Spatial Computing",
          ],
          sameAs: [
            "https://github.com/leenBaksh",
            "https://linkedin.com/in/sandaleen-waseem-a51200266",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Sandleen Waseem — Creative Futurist Portfolio",
          author: { "@type": "Person", name: "Sandleen Waseem" },
          url: "https://sandleen-portfolio-dev.lovable.app",
          inLanguage: "en",
          about: [
            "Agentic AI systems",
            "Humanoid robotics research",
            "Cryptographic systems",
            "Design-led product engineering",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientBlobs />
      <ScrollProgress />
      <Nav />
      <Cursor />
      <GanbatteCounter />
      <AnimatePresence mode="wait">
        <motion.div
          key="home"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Projects />
          <Signals />
          <Experience />
          <Skills />
          <Contact />
        </motion.div>
      </AnimatePresence>
      <Chatbot />
    </main>
  );
}

