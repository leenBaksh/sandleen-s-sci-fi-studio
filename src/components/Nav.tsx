import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(94%,1100px)]"
    >
      <nav className="glass-strong flex items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-glow" />
          <span className="text-gradient font-bold tracking-tight">SW.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
