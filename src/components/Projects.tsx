import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Cpu, Lock, Sparkles, Bot, Network } from "lucide-react";

const projects = [
  {
    icon: BookOpen,
    title: "Robotics Book",
    tag: "Research · Authorship",
    desc: "A comprehensive deep-dive into modern robotics — kinematics, perception, and AI-driven autonomy — structured for engineers and curious minds alike.",
    tech: ["Robotics", "AI", "Research"],
    accent: "from-cyan-400/30 to-transparent",
  },
  {
    icon: Lock,
    title: "Encryption System",
    tag: "Security · Cryptography",
    desc: "Custom hybrid encryption pipeline combining AES + RSA with key rotation. Built for secure data exchange across distributed services.",
    tech: ["AES", "RSA", "Node.js"],
    accent: "from-purple-400/30 to-transparent",
  },
  {
    icon: Bot,
    title: "AI Chat Assistant",
    tag: "LLM · Full-Stack",
    desc: "RAG-powered conversational interface with streaming responses, tool calls, and contextual memory across long sessions.",
    tech: ["OpenAI", "Vector DB", "Next.js"],
    accent: "from-cyan-400/30 to-transparent",
  },
  {
    icon: Network,
    title: "Neural Pipeline",
    tag: "MLOps · Vision",
    desc: "End-to-end image classification pipeline with automated training, evaluation dashboards, and edge deployment.",
    tech: ["PyTorch", "FastAPI", "Docker"],
    accent: "from-purple-400/30 to-transparent",
  },
  {
    icon: Cpu,
    title: "IoT Control Hub",
    tag: "Embedded · Realtime",
    desc: "Low-latency device control panel with WebSocket telemetry, role-based access, and analytics overlay.",
    tech: ["MQTT", "React", "Postgres"],
    accent: "from-cyan-400/30 to-transparent",
  },
  {
    icon: Sparkles,
    title: "Creative Portfolio CMS",
    tag: "Product · Design",
    desc: "Headless CMS tuned for visual creators — drag-to-arrange layouts, instant previews, and a polished editor experience.",
    tech: ["TypeScript", "tRPC", "Prisma"],
    accent: "from-purple-400/30 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Projects at the <span className="text-gradient">intelligent edge</span></>}
          subtitle="A snapshot of systems I've built where AI, design, and engineering converge."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-cyan"
            >
              <div
                className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative flex items-start justify-between">
                <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <p className="relative mt-6 font-mono text-[11px] uppercase tracking-widest text-primary/80">
                {p.tag}
              </p>
              <h3 className="relative mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-primary"
      >
        / {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
