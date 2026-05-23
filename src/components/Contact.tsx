import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

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
              href="mailto:hello@sandleen.dev"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
            >
              hello@sandleen.dev
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@sandleen.dev", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} Sandleen Waseem. Crafted with intent.
          </p>
          <p className="font-mono text-xs">Designed & engineered end-to-end.</p>
        </footer>
      </div>
    </section>
  );
}
