import { motion } from "framer-motion";

const mastery = [
  { label: "AI / Agentic Systems", value: 95, color: "oklch(0.82 0.16 200)" },
  { label: "Frontend Engineering", value: 90, color: "oklch(0.62 0.27 300)" },
  { label: "Design Systems", value: 85, color: "oklch(0.82 0.16 200)" },
  { label: "Freelance Ops", value: 80, color: "oklch(0.62 0.27 300)" },
  { label: "Backend / DevOps", value: 75, color: "oklch(0.82 0.16 200)" },
];

export function MasteryBars() {
  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            / Mastery Index
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            Where the hours <span className="text-gradient">live</span>
          </h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:inline">
          Self-rated · live
        </span>
      </div>

      <div className="space-y-5">
        {mastery.map((m, i) => (
          <div key={m.label}>
            <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px]">
              <span className="text-foreground/90">{m.label}</span>
              <span className="text-primary tabular-nums">{m.value}%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-background/60 ring-1 ring-inset ring-primary/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.value}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${m.color}, color-mix(in oklab, ${m.color} 40%, transparent))`,
                  boxShadow: `0 0 18px ${m.color}`,
                }}
              >
                <motion.span
                  aria-hidden
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
