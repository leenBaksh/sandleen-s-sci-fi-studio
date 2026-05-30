import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { HeroSceneMobile } from "./HeroSceneMobile";

function handleScrollToProjects(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute inset-0 grid-bg animate-grid opacity-60" />
      </div>

      {/* Scene behind text: lightweight SVG keeps the preview panel stable */}
      <div className="pointer-events-auto absolute inset-0">
        <HeroSceneMobile />
      </div>

      {/* Vignette to keep text readable over the scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(0.16_0.02_265/0.85)_75%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          AI · Full-Stack · Creative Engineering
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
          className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
        >
          {[
            { text: "SANDLEEN", gradient: false },
            { text: "WASEEM", gradient: true },
          ].map((line) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
                className={`inline-block ${line.gradient ? "text-gradient" : ""}`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Fusing <span className="text-foreground">AI intelligence</span> with{" "}
          <span className="text-foreground">creative design</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-primary opacity-60 blur-xl animate-glow" />
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
