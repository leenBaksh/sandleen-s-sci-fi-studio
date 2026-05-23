import { motion } from "framer-motion";
import {
  Bot,
  Box,
  Braces,
  Brush,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Layout,
  Palette,
  PenTool,
  Server,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { useState } from "react";

/* ---------- Brand-colored icon tiles ---------- */
function SkillIcon({
  icon: Icon,
  label,
  brandColor,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  brandColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.06 }}
      className="flex cursor-default flex-col items-center gap-2.5 rounded-xl p-3 transition-colors"
      style={{
        backgroundColor: hovered
          ? `${brandColor}18`
          : "oklch(0.21 0.03 265 / 0.3)",
        borderColor: hovered ? `${brandColor}44` : "oklch(0.82 0.16 200 / 0.12)",
      }}
    >
      <motion.div
        animate={{ color: hovered ? brandColor : "oklch(0.68 0.03 250)" }}
        className="grid h-10 w-10 place-items-center rounded-lg border border-current/10"
        style={{ borderColor: hovered ? `${brandColor}44` : undefined }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}

/* ---------- Bento cards ---------- */
const categories = [
  {
    key: "ai",
    span: "md:col-span-2 md:row-span-2",
    title: "AI & Agentic Systems",
    subtitle: "Intelligent agents, LLM pipelines, and autonomous orchestration.",
    icon: Bot,
    accent: "oklch(0.82 0.16 200)",
    skills: [
      { label: "OpenAI", brandColor: "#10a37f", icon: Sparkles },
      { label: "Gemini", brandColor: "#4285f4", icon: Cloud },
      { label: "LangChain", brandColor: "#1c3c3c", icon: Workflow },
      { label: "CrewAI", brandColor: "#a855f7", icon: Bot },
      { label: "AutoGen", brandColor: "#f59e0b", icon: Cpu },
      { label: "Vector DBs", brandColor: "#3b82f6", icon: Database },
      { label: "RAG", brandColor: "#22d3ee", icon: Layers },
      { label: "Prompt Eng", brandColor: "#ec4899", icon: PenTool },
    ],
  },
  {
    key: "stack",
    span: "md:col-span-2",
    title: "Full-Stack",
    subtitle: "React, Next.js, FastAPI, and everything in between.",
    icon: Code2,
    accent: "oklch(0.62 0.27 300)",
    skills: [
      { label: "Next.js", brandColor: "#ffffff", icon: Layers },
      { label: "React", brandColor: "#61dafb", icon: Code2 },
      { label: "FastAPI", brandColor: "#009688", icon: Server },
      { label: "TypeScript", brandColor: "#3178c6", icon: Braces },
      { label: "Node.js", brandColor: "#68a063", icon: Terminal },
      { label: "MongoDB", brandColor: "#47a248", icon: Database },
      { label: "PostgreSQL", brandColor: "#336791", icon: Database },
      { label: "GraphQL", brandColor: "#e535ab", icon: GitBranch },
    ],
  },
  {
    key: "devops",
    span: "",
    title: "DevOps & Cloud",
    subtitle: "Containers, orchestration, and CI/CD.",
    icon: Container,
    accent: "#2496ed",
    skills: [
      { label: "Docker", brandColor: "#2496ed", icon: Container },
      { label: "K8s", brandColor: "#326ce5", icon: Cloud },
      { label: "AWS", brandColor: "#ff9900", icon: Cloud },
      { label: "GitHub Actions", brandColor: "#2088ff", icon: GitBranch },
    ],
  },
  {
    key: "design",
    span: "",
    title: "Design & Creative",
    subtitle: "Tools for interfaces, motion, and brand.",
    icon: Palette,
    accent: "#f24e1e",
    skills: [
      { label: "Figma", brandColor: "#f24e1e", icon: Layout },
      { label: "Photoshop", brandColor: "#31a8ff", icon: PenTool },
      { label: "Illustrator", brandColor: "#ff9a00", icon: PenTool },
      { label: "After Effects", brandColor: "#9999ff", icon: Box },
    ],
  },
];

function BentoCard({
  c,
  index,
}: {
  c: (typeof categories)[number];
  index: number;
}) {
  const Icon = c.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-2xl ${c.span}`}
    >
      <div className="glass h-full p-6">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ backgroundColor: c.accent }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl border"
              style={{
                borderColor: `${c.accent}33`,
                backgroundColor: `${c.accent}15`,
              }}
            >
              <Icon className="h-5 w-5" style={{ color: c.accent }} />
            </div>
            <div>
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.subtitle}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {c.skills.map((s) => (
              <SkillIcon
                key={s.label}
                icon={s.icon}
                label={s.label}
                brandColor={s.brandColor}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Design Thinking badge ---------- */
function DesignThinkingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-4 rounded-2xl border-gradient glass-strong p-6 text-center md:flex-row md:text-left"
    >
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10">
        <Brush className="h-7 w-7 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-semibold">Design Thinking</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          A creative-dev hybrid who bridges aesthetics with engineering — from
          first sketch to shipped feature.
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({
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

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Tech Stack"
          title={
            <>
              A toolkit tuned for{" "}
              <span className="text-gradient">intelligent</span> products
            </>
          }
          subtitle="The languages, frameworks, and creative tools I reach for daily — organized by domain."
        />

        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-4">
          {categories.map((c, i) => (
            <BentoCard key={c.key} c={c} index={i} />
          ))}
        </div>

        <DesignThinkingBadge />
      </div>
    </section>
  );
}
