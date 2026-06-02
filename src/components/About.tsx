import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  Users,
  PenTool,
  Lightbulb,
  Award,
  BookOpen,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import animePortrait from "@/assets/anime-portrait.jpg";

const softSkills = [
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "I worked well in cross-functional teams during hackathons and freelance projects.",
  },
  {
    icon: Briefcase,
    title: "Freelancing Success",
    desc: "I consistently delivered high-quality work to clients and managed project timelines.",
  },
  {
    icon: PenTool,
    title: "Presentation Design",
    desc: "I created compelling decks for corporate and educational purposes.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving",
    desc: "I combined design thinking with AI / DevOps solutions to address complex challenges.",
  },
];

const highlights = [
  { icon: BrainCircuit, label: "Agentic AI Engineering", value: "Governor Sindh Initiative — Q4" },
  { icon: BookOpen, label: "Web Development & Freelancing", value: "Bano Qabil — Completed" },
  { icon: Award, label: "C.I.T. Graphic & Presentation Design", value: "Short Course — Completed" },
  { icon: BadgeCheck, label: "Hackathon Highlights", value: "5+ AI & Cloud-Native Events" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title={<>The mind behind the <span className="text-gradient">work</span></>}
          subtitle="Professional summary, soft skills, and the throughline of curiosity that drives every project."
        />

        {/* Anime portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <div className="relative">
            {/* Ambient glow backdrop */}
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-cyan/40 via-purple/20 to-transparent blur-3xl opacity-60" />
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan/20 to-purple/10 blur-2xl" />
            {/* Glassmorphism frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-cyan/10 backdrop-blur-2xl">
              {/* Inner gradient border via ring */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              <img
                src={animePortrait}
                alt="Stylized anime portrait representing the portfolio's creative persona"
                width={1024}
                height={1536}
                loading="lazy"
                className="relative h-auto w-72 rounded-[1.5rem] object-cover shadow-inner sm:w-80 md:w-96"
              />
            </div>
          </div>
        </motion.div>


        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold tracking-tight">Professional Summary</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I am an <span className="text-foreground">AI-Powered Full-Stack Developer</span> and{" "}
                <span className="text-foreground">Creative Professional</span> with a passion for building
                intelligent products that bridge design and engineering.
              </p>
              <p>
                My journey spans agentic AI engineering through the Governor Sindh Initiative (Quarter 4),
                modern web development with Next.js and React, and a thriving freelance career in graphic
                design, presentation decks, and digital merchandise.
              </p>
              <p>
                I have led AI automation workflows using n8n, OpenAI / Gemini APIs, and Puppeteer — cutting
                task effort by 60%. I have shipped production-ready prototypes in 5+ hackathons and combine
                design thinking with AI / DevOps solutions to solve complex challenges.
              </p>
            </div>
          </div>

          {/* Education & Highlights */}
          <div className="flex flex-col gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-12"
        >
          <h3 className="text-center text-xl font-semibold tracking-tight md:text-left">
            Soft Skills & Professional Strengths
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {softSkills.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mt-4 text-sm font-semibold">{s.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
