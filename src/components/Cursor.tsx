import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 800, damping: 40, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 800, damping: 40, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch / small screens
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]'
      );
      setHovering(interactive);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = hovering ? 56 : 32;
  const dotSize = hovering ? 6 : 5;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        style={{
          translateX: ringX,
          translateY: ringY,
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          scale: pressed ? 0.8 : 1,
          opacity: hovering ? 1 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[28px] -mt-[28px] rounded-full mix-blend-difference"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            border: "1.5px solid oklch(0.82 0.16 200)",
            boxShadow:
              "0 0 24px oklch(0.82 0.16 200 / 0.55), inset 0 0 12px oklch(0.62 0.27 300 / 0.35)",
            background: hovering
              ? "radial-gradient(circle, oklch(0.82 0.16 200 / 0.18), transparent 70%)"
              : "transparent",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        aria-hidden
        style={{
          translateX: dotX,
          translateY: dotY,
          width: dotSize,
          height: dotSize,
        }}
        animate={{ scale: pressed ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background: "oklch(0.82 0.16 200)",
            boxShadow: "0 0 12px oklch(0.82 0.16 200 / 0.9)",
          }}
        />
      </motion.div>
    </>
  );
}
