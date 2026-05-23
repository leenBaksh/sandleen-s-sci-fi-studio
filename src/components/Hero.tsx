import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for AI & full-stack collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Sandleen <span className="text-gradient">Waseem</span>
          </motion.h1>

          <div className="mt-4 h-9 text-xl text-muted-foreground md:text-2xl">
            <Typewriter
              className="font-mono text-foreground/90"
              words={[
                "AI-Powered Full-Stack Developer",
                "Creative Technologist",
                "Builder of Intelligent Systems",
              ]}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I design and engineer intelligent products — from neural-powered web
            apps and cryptographic systems to robotics research. Where code
            meets imagination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
            >
              Explore my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-card"
            >
              Get in touch
            </a>
            <div className="ml-2 flex items-center gap-2 text-muted-foreground">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#contact" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="glass rounded-full p-2.5 transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square w-full max-w-[560px] justify-self-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl" />
          <div className="relative h-full w-full">
            <HeroScene />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
