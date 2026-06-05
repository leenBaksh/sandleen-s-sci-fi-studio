import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const START = new Date("2023-01-01T00:00:00Z").getTime();

export function GanbatteCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () =>
      setDays(Math.max(0, Math.floor((Date.now() - START) / 86400000)));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="pointer-events-auto fixed bottom-4 left-4 z-40 hidden md:block"
    >
      <div className="glass-strong group flex items-center gap-2.5 rounded-full border border-primary/25 px-3.5 py-2 shadow-lg shadow-primary/10">
        <span className="relative grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
          <Rocket className="h-3 w-3" />
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
        </span>
        <div className="leading-tight">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            Ganbatte · shipping
          </p>
          <p className="font-mono text-xs">
            <span className="tabular-nums text-foreground">{days.toLocaleString()}</span>{" "}
            <span className="text-muted-foreground">days</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
