import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Layers, Network, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const signals = [
  {
    icon: Bot,
    title: "Physical AI / Humanoids",
    desc: "Embodied intelligence — Figure, 1X, Unitree. Robotics as the next interface.",
    href: "https://x.com/",
    accent: "oklch(0.82 0.16 200)",
  },
  {
    icon: Network,
    title: "Agentic Workflows",
    desc: "n8n + multi-agent orchestration. Tools, memory, and autonomy in production.",
    href: "https://x.com/",
    accent: "oklch(0.62 0.27 300)",
  },
  {
    icon: Layers,
    title: "Spatial Computing",
    desc: "Vision Pro, AR/XR SDKs, WebXR. Designing for depth, gaze, and gesture.",
    href: "https://x.com/",
    accent: "oklch(0.82 0.16 200)",
  },
  {
    icon: Sparkles,
    title: "Decentralized Identity",
    desc: "DIDs, ZK proofs, Web3 primitives. Portable trust without the gatekeepers.",
    href: "https://x.com/",
    accent: "oklch(0.62 0.27 300)",
  },
];

export function Signals() {
  return (
    <section id="signals" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="▸ Signals I'm Watching"
          title={
            <>
              The frontiers shaping <span className="text-gradient">what's next</span>
            </>
          }
          subtitle="A live radar of the technologies I read, prototype, and bet on."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass group relative block overflow-hidden rounded-2xl p-6"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: s.accent }}
              />
              <div className="relative">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl border"
                  style={{
                    borderColor: `color-mix(in oklab, ${s.accent} 40%, transparent)`,
                    background: `color-mix(in oklab, ${s.accent} 14%, transparent)`,
                  }}
                >
                  <s.icon className="h-5 w-5" style={{ color: s.accent }} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-primary transition-transform group-hover:translate-x-0.5">
                  Research <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
