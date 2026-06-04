import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          className="mt-14 flex justify-center px-2"
        >
          <motion.button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Open enlarged portrait"
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative block max-w-full cursor-zoom-in rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {/* Pulsing ambient glow backdrop */}
            <motion.div
              aria-hidden
              animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 via-accent/25 to-transparent blur-3xl sm:-inset-8"
            />
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent/15 blur-2xl transition-opacity duration-500 group-hover:opacity-90 sm:-inset-4" />

            {/* Glassmorphism frame — theme-tuned */}
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-primary/25 bg-background/30 p-2 shadow-2xl shadow-primary/20 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/40 sm:p-3">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-primary/20" />
              <img
                src={animePortrait}
                alt="Stylized anime portrait representing the portfolio's creative persona"
                width={1024}
                height={1536}
                loading="lazy"
                className="relative block h-auto w-full max-w-[18rem] rounded-[1.5rem] object-cover shadow-inner sm:max-w-xs md:max-w-sm"
              />
            </div>
          </motion.button>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-3xl border-primary/30 bg-background/80 p-2 backdrop-blur-2xl sm:p-4">
            <DialogTitle className="sr-only">Enlarged portrait</DialogTitle>
            <AnimatePresence>
              <motion.img
                key="lightbox-img"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                src={animePortrait}
                alt="Enlarged anime portrait"
                className="mx-auto h-auto max-h-[85vh] w-auto rounded-2xl object-contain"
              />
            </AnimatePresence>
          </DialogContent>
        </Dialog>




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
