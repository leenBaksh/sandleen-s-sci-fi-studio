import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Palette,
  Server,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "./Projects";

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    span: "md:col-span-2",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    icon: Server,
    title: "Backend",
    span: "",
    items: ["Node.js", "Express", "FastAPI", "tRPC"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    span: "md:row-span-2",
    items: ["OpenAI", "LangChain", "PyTorch", "TensorFlow", "RAG", "Vector DBs", "Prompt Engineering"],
    featured: true,
  },
  {
    icon: Database,
    title: "Data",
    span: "",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tooling",
    span: "md:col-span-2",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
  {
    icon: Palette,
    title: "Design",
    span: "",
    items: ["Figma", "UI/UX", "Motion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Technical Stack"
          title={<>A toolkit tuned for <span className="text-gradient">intelligent</span> products</>}
          subtitle="The languages, frameworks, and platforms I reach for daily."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl p-6 ${c.span} ${
                c.featured ? "border-gradient glass-strong" : "glass"
              }`}
            >
              {c.featured && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15" />
                  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-secondary/30 blur-3xl animate-glow" />
                </>
              )}
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="glass-strong grid h-10 w-10 place-items-center rounded-xl text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {c.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
