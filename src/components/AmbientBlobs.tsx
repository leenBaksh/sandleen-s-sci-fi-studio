import { motion } from "framer-motion";

/**
 * Slow, drifting color blobs that live behind every section.
 * Pure CSS + transform animation — GPU friendly, no layout thrash.
 */
export function AmbientBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -70, 40, 0], y: [0, 60, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-[110px]"
      />
    </div>
  );
}
