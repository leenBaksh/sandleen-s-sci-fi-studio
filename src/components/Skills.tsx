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
import { MasteryBars } from "./MasteryBars";

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
    subtitle: "Prompt engineering, spec-driven dev, and multi-model agent workflows.",
    icon: Bot,
    accent: "oklch(0.82 0.16 200)",
    skills: [
      { label: "OpenAI Agents SDK", brandColor: "#10a37f", icon: Bot },
      { label: "Gemini API", brandColor: "#4285f4", icon: Sparkles },
      { label: "Claude", brandColor: "#d97757", icon: Sparkles },
      { label: "Qwen", brandColor: "#a855f7", icon: Sparkles },
      { label: "OpenClaw", brandColor: "#22d3ee", icon: Workflow },
      { label: "Prompt Eng", brandColor: "#ec4899", icon: PenTool },
      { label: "Spec-Driven Dev", brandColor: "#f59e0b", icon: Cpu },
      { label: "n8n", brandColor: "#ea4b71", icon: Workflow },
    ],
  },
  {
    key: "frontend",
    span: "md:col-span-2",
    title: "Frontend",
    subtitle: "Next.js 15, React, TypeScript, Tailwind, ShadCN & Aceternity UI.",
    icon: Code2,
    accent: "oklch(0.62 0.27 300)",
    skills: [
      { label: "Next.js 15", brandColor: "#ffffff", icon: Layers },
      { label: "React", brandColor: "#61dafb", icon: Code2 },
      { label: "TypeScript", brandColor: "#3178c6", icon: Braces },
      { label: "Tailwind", brandColor: "#38bdf8", icon: Brush },
      { label: "ShadCN UI", brandColor: "#ffffff", icon: Layout },
      { label: "Aceternity UI", brandColor: "#a855f7", icon: Layout },
      { label: "HTML / CSS", brandColor: "#e34f26", icon: Layout },
      { label: "Git / GitHub", brandColor: "#f97316", icon: GitBranch },
    ],
  },
  {
    key: "devops",
    span: "",
    title: "Backend & DevOps",
    subtitle: "FastAPI, Node, containers, CI/CD, and automation.",
    icon: Container,
    accent: "#2496ed",
    skills: [
      { label: "FastAPI", brandColor: "#009688", icon: Server },
      { label: "Node.js", brandColor: "#68a063", icon: Terminal },
      { label: "Docker", brandColor: "#2496ed", icon: Container },
      { label: "Kubernetes", brandColor: "#326ce5", icon: Cloud },
      { label: "GKE", brandColor: "#4285f4", icon: Cloud },
      { label: "CI/CD", brandColor: "#2088ff", icon: GitBranch },
      { label: "Puppeteer", brandColor: "#40b5a4", icon: Workflow },
      { label: "Stripe", brandColor: "#635bff", icon: Server },
    ],
  },
  {
    key: "data",
    span: "",
    title: "Databases & CMS",
    subtitle: "Data layers and content management.",
    icon: Database,
    accent: "#47a248",
    skills: [
      { label: "MongoDB", brandColor: "#47a248", icon: Database },
      { label: "SQLite", brandColor: "#0f80cc", icon: Database },
      { label: "Sanity CMS", brandColor: "#f03e2f", icon: Layers },
      { label: "ShipEngine", brandColor: "#f59e0b", icon: Workflow },
    ],
  },
  {
    key: "design",
    span: "md:col-span-2",
    title: "Design & Presentation",
    subtitle: "Adobe Suite, Canva, Figma, and decks that tell a story.",
    icon: Palette,
    accent: "#f24e1e",
    skills: [
      { label: "Illustrator", brandColor: "#ff9a00", icon: PenTool },
      { label: "Photoshop", brandColor: "#31a8ff", icon: PenTool },
      { label: "Lightroom", brandColor: "#31a8ff", icon: PenTool },
      { label: "Figma", brandColor: "#f24e1e", icon: Layout },
      { label: "Canva", brandColor: "#00c4cc", icon: Brush },
      { label: "PowerPoint", brandColor: "#d24726", icon: Layout },
      { label: "Google Slides", brandColor: "#f4b400", icon: Layout },
      { label: "Keynote / Prezi", brandColor: "#a855f7", icon: Layout },
    ],
  },
  {
    key: "office",
    span: "md:col-span-2",
    title: "Productivity & Office",
    subtitle: "Planning, analysis, and day-to-day delivery tools.",
    icon: Layout,
    accent: "#2b7a78",
    skills: [
      { label: "MS Word", brandColor: "#2b579a", icon: Layout },
      { label: "MS Excel", brandColor: "#217346", icon: Layout },
      { label: "Digital Planners", brandColor: "#a855f7", icon: PenTool },
      { label: "Budget Analysis", brandColor: "#22d3ee", icon: Cpu },
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

        <div className="mt-12">
          <MasteryBars />
        </div>

        <div className="mt-10 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-4">
          {categories.map((c, i) => (
            <BentoCard key={c.key} c={c} index={i} />
          ))}
        </div>

        <DesignThinkingBadge />
      </div>
    </section>
  );
}
