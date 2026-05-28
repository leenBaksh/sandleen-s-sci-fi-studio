import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
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
      <AmbientBlobs />
      <ScrollProgress />
      <Nav />
      <Cursor />
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
          <Experience />
          <Skills />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
