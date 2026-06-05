import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Telescope } from "lucide-react";

export function FutureLens({ vision }: { vision: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block" style={{ transform: "translateZ(40px)" }}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-expanded={open}
        className="glass group inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-secondary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-secondary-foreground transition-colors hover:border-secondary/80"
      >
        <Telescope className="h-3 w-3 text-secondary" />
        <span>🔮 2030 Lens</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-30 mt-2 w-[min(20rem,80vw)]"
          >
            <div className="glass-strong relative rounded-xl border border-secondary/40 p-3.5 shadow-xl shadow-secondary/20">
              <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-secondary">
                <Sparkles className="h-3 w-3" />
                In 2030
              </div>
              <p className="text-xs leading-relaxed text-foreground">{vision}</p>
              <span className="absolute -top-1.5 left-5 h-3 w-3 rotate-45 border-l border-t border-secondary/40 bg-[oklch(0.21_0.03_265/0.75)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
