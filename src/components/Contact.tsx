import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Rocket,
  Twitter,
} from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/leenBaksh", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sandaleen-waseem-a51200266", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/", label: "Twitter / X" },
  { icon: Mail, href: "mailto:Sandleenbakshi@gmail.com", label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-gradient glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15" />
          <div className="absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/30 blur-3xl" />

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            / Let's collaborate
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Have an idea worth <span className="text-gradient">building?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Whether it's an AI product, a research prototype, or a brand-new
            interface — I'd love to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:Sandleenbakshi@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
            >
              Sandleenbakshi@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground">
            <a href="tel:+923103871019" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+92 310 3871019</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Global Readiness Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid gap-3 md:grid-cols-3"
        >
          {[
            {
              icon: Globe2,
              eyebrow: "Timezone",
              text: "🌍 PKT — async with US · EU · ME",
            },
            {
              icon: Radio,
              eyebrow: "Available for",
              text: "📡 Remote · Freelance · Contract · Research Collab",
            },
            {
              icon: Rocket,
              eyebrow: "Next learning",
              text: "🚀 WebAssembly + Rust + Spatial SDKs",
            },
          ].map((b, i) => (
            <motion.div
              key={b.eyebrow}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="glass group flex items-start gap-3 rounded-2xl border border-primary/15 p-4"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <b.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  {b.eyebrow}
                </p>
                <p className="mt-1 text-xs text-foreground">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <footer className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
            <p className="font-mono text-xs">
              © {new Date().getFullYear()} Sandleen Waseem. Crafted with intent.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={`f-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center font-mono text-[11px] leading-relaxed text-muted-foreground/80">
            <span className="text-primary">✦</span> This portfolio is version 1.0 of a
            living document. Version 2.0 will add real-time AI chat and 3D spatial
            navigation.
          </p>
        </footer>
      </div>
    </section>
  );
}
