import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  ImageIcon,
  Lock,
  ScanLine,
  Shield,
  Sparkles,
  TerminalSquare,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useRef, type ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

/* -------- Shared 3D tilt wrapper -------- */
function TiltCard({
  children,
  className = "",
  span = "",
}: {
  children: ReactNode;
  className?: string;
  span?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative [transform-style:preserve-3d] ${span}`}
    >
      <div className={`relative h-full overflow-hidden rounded-2xl ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}

function Links() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2" style={{ transform: "translateZ(40px)" }}>
      <a
        href="#"
        className="glass inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 text-xs font-medium transition-colors hover:text-primary"
      >
        <Github className="h-4 w-4" /> GitHub
      </a>
      <a
        href="#"
        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        <ExternalLink className="h-4 w-4" /> Live Demo
      </a>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
      {children}
    </span>
  );
}

/* -------- 1. Robotics Book — 3D flip -------- */
function RoboticsBook() {
  return (
    <TiltCard className="glass p-6 md:col-span-2" span="md:col-span-2">
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-secondary/30 blur-3xl" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
        {/* Book */}
        <div className="relative mx-auto h-44 w-32 shrink-0 [perspective:1200px]">
          <motion.div
            initial={{ rotateY: -25 }}
            animate={{ rotateY: [-25, -10, -25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: -85 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative h-full w-full"
          >
            {/* Cover */}
            <div
              className="absolute inset-0 rounded-r-md rounded-l-sm shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.21 0.05 280), oklch(0.16 0.02 265))",
                transformOrigin: "left center",
                border: "1px solid oklch(0.82 0.16 200 / 0.3)",
              }}
            >
              <div className="absolute inset-0 grid place-items-center p-3 text-center">
                <div>
                  <BookOpen className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-primary/80">
                    Vol. 01
                  </p>
                  <p className="mt-1 text-[10px] font-semibold leading-tight text-foreground">
                    Physical AI & Humanoid Robotics
                  </p>
                </div>
              </div>
              <div className="absolute left-1.5 top-2 bottom-2 w-px bg-primary/40" />
            </div>
            {/* Spine */}
            <div
              className="absolute left-0 top-0 h-full w-2 bg-secondary"
              style={{ transform: "rotateY(-90deg) translateZ(1px)" }}
            />
          </motion.div>
        </div>

        <div className="relative flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-foreground border border-secondary/40">
              <Trophy className="h-3 w-3" /> Hackathon Highlight
            </span>
            <Tag>Research</Tag>
            <Tag>Robotics</Tag>
          </div>
          <h3 className="mt-3 text-xl font-semibold">
            Physical-AI-Humanoid-Robotics Book
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A long-form technical book exploring perception, kinematics, and
            AI-driven autonomy for humanoid platforms — built during a hackathon
            sprint and refined into a publishable reference.
          </p>
          <Links />
        </div>
      </div>
    </TiltCard>
  );
}

/* -------- 2. Encryption — scanning light -------- */
function EncryptionCard() {
  return (
    <TiltCard className="glass p-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/25 to-transparent blur-md"
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_3px,oklch(0.82_0.16_200/0.04)_3px_4px)]" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
            <Lock className="h-5 w-5" />
          </div>
          <ScanLine className="h-5 w-5 animate-glow text-primary" />
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-primary/80">
          Security · Streamlit
        </p>
        <h3 className="mt-1.5 text-lg font-semibold">Secure Data Encryption System</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Streamlit-powered encryption console with AES + RSA pipelines, key
          rotation, and a real-time scanner for verifying ciphered payloads.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <Tag>
            <Shield className="mr-1 inline h-2.5 w-2.5" /> AES-256
          </Tag>
          <Tag>
            <TerminalSquare className="mr-1 inline h-2.5 w-2.5" /> Streamlit
          </Tag>
          <Tag>
            <Cpu className="mr-1 inline h-2.5 w-2.5" /> Python
          </Tag>
        </div>
        <Links />
      </div>
    </TiltCard>
  );
}

/* -------- 3. Growth Mindset — progress -------- */
function GrowthCard() {
  const stats = [
    { label: "Consistency", value: 92 },
    { label: "Learning", value: 78 },
    { label: "Momentum", value: 64 },
  ];
  return (
    <TiltCard className="glass relative p-6">
      <div className="pointer-events-none absolute -top-16 -left-16 h-44 w-44 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
            Day 30 / 30
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold">Growth Mindset Challenge</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          An interactive web app that tracks daily learning goals, streaks, and
          reflection prompts with vibrant progress visualization.
        </p>

        <div className="mt-5 space-y-2.5">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="mb-1 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>{s.label}</span>
                <span className="text-primary">{s.value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-background/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.15 * i, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </div>
          ))}
        </div>
        <Links />
      </div>
    </TiltCard>
  );
}

/* -------- 4. Ad Work & Branding — gallery -------- */
function BrandingCard() {
  const tiles = [
    { from: "from-fuchsia-500/40", to: "to-cyan-500/30", label: "Logo" },
    { from: "from-cyan-400/40", to: "to-violet-500/30", label: "Reels" },
    { from: "from-amber-400/40", to: "to-pink-500/30", label: "Posters" },
    { from: "from-emerald-400/40", to: "to-cyan-400/30", label: "Ads" },
  ];
  return (
    <TiltCard className="glass p-6 md:col-span-2" span="md:col-span-2">
      <div className="relative grid gap-6 md:grid-cols-2">
        <div>
          <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
            <ImageIcon className="h-5 w-5" />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-primary/80">
            Creative · Digital Services
          </p>
          <h3 className="mt-1.5 text-lg font-semibold">Ad Work & Branding</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A mini-gallery of brand systems, social campaigns, and motion ads
            crafted for emerging creators and startups.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Tag>Identity</Tag>
            <Tag>Social</Tag>
            <Tag>Motion</Tag>
          </div>
          <Links />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${t.from} ${t.to} border border-border`}
            >
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/90">
                  {t.label}
                </span>
              </div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

/* -------- 5a. Neumorphic Calculator -------- */
function CalculatorCard() {
  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"];
  return (
    <TiltCard className="glass p-6">
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
            <Calculator className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
            Neumorphic
          </span>
        </div>

        <h3 className="mt-5 text-base font-semibold">Calculator</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Soft-UI calculator with tactile shadows and crisp arithmetic.
        </p>

        <div
          className="mt-4 rounded-2xl p-3"
          style={{
            background: "oklch(0.20 0.03 265)",
            boxShadow:
              "inset 6px 6px 12px oklch(0.13 0.02 265), inset -6px -6px 12px oklch(0.27 0.04 265)",
          }}
        >
          <div className="mb-2 rounded-md bg-background/60 px-3 py-2 text-right font-mono text-sm">
            1,337
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {keys.map((k) => (
              <div
                key={k}
                className="grid h-7 place-items-center rounded-md text-[10px] font-mono"
                style={{
                  background: "oklch(0.22 0.03 265)",
                  boxShadow:
                    "2px 2px 4px oklch(0.13 0.02 265), -2px -2px 4px oklch(0.27 0.04 265)",
                  color: k === "=" ? "oklch(0.82 0.16 200)" : undefined,
                }}
              >
                {k}
              </div>
            ))}
          </div>
        </div>
        <Links />
      </div>
    </TiltCard>
  );
}

/* -------- 5b. Glassmorphism To-Do -------- */
function TodoCard() {
  const todos = [
    { text: "Ship hero section", done: true },
    { text: "Polish bento grid", done: true },
    { text: "Add 3D tilt to cards", done: false },
    { text: "Wire contact form", done: false },
  ];
  return (
    <TiltCard className="glass p-6">
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
            Glassmorphism
          </span>
        </div>

        <h3 className="mt-5 text-base font-semibold">To-Do App</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Frosted-glass task manager with smooth check animations.
        </p>

        <ul className="mt-4 space-y-2">
          {todos.map((t, i) => (
            <motion.li
              key={t.text}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs"
            >
              <span
                className={`grid h-4 w-4 place-items-center rounded-md border ${
                  t.done
                    ? "border-primary bg-primary/20 text-primary"
                    : "border-border"
                }`}
              >
                {t.done && <CheckCircle2 className="h-3 w-3" />}
              </span>
              <span className={t.done ? "text-muted-foreground line-through" : ""}>
                {t.text}
              </span>
            </motion.li>
          ))}
        </ul>
        <Links />
      </div>
    </TiltCard>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Projects where ideas <span className="text-gradient">come alive</span>
            </>
          }
          subtitle="Research, products, and creative experiments — each one a sandbox for new ideas."
        />

        <div className="mt-14 grid gap-5 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <RoboticsBook />
          </div>
          <EncryptionCard />
          <GrowthCard />
          <CalculatorCard />
          <div className="md:col-span-2 lg:col-span-3">
            <BrandingCard />
          </div>
          <TodoCard />
          <div className="glass relative hidden items-center justify-center rounded-2xl p-6 lg:flex">
            <div className="text-center">
              <Sparkles className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                More shipping soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
