import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "AI-Powered Full-Stack Developer",
    org: "Freelance & Collaborations",
    period: "2023 — Present",
    points: [
      "Shipped LLM-integrated products across web and mobile, from prototype to production.",
      "Architected RAG pipelines, secure APIs, and realtime dashboards for international clients.",
    ],
  },
  {
    role: "Robotics Researcher & Author",
    org: "Independent Research",
    period: "2022 — Present",
    points: [
      "Authored a robotics book covering perception, control, and autonomous systems.",
      "Published experiments on sensor fusion and AI-driven motion planning.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Product Team",
    period: "2021 — 2023",
    points: [
      "Built scalable React + Node platforms serving thousands of daily users.",
      "Owned the design system, accessibility, and frontend performance baselines.",
    ],
  },
  {
    role: "Computer Science — University",
    org: "Foundations & Theory",
    period: "2019 — 2023",
    points: [
      "Specialized in AI, cryptography, and distributed systems.",
      "Led student initiatives on applied machine learning and developer education.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title={<>A timeline of <span className="text-gradient">building</span> & learning</>}
          subtitle="Roles, research, and the throughline of curiosity that connects them."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />
          <ul className="space-y-12">
            {items.map((it, i) => (
              <motion.li
                key={it.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`md:${i % 2 === 0 ? "text-right pr-12" : "col-start-2 pl-12"} pl-12 md:pl-0`}
                >
                  <div className="glass rounded-2xl p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                      {it.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{it.role}</h3>
                    <p className="text-sm text-muted-foreground">{it.org}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <span className="relative grid h-8 w-8 place-items-center rounded-full glass-strong">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    <span className="absolute inset-0 animate-glow rounded-full bg-primary/30 blur-md" />
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
