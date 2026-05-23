import { motion } from "framer-motion";

/**
 * Lightweight 2D SVG alternative to the Three.js Hero scene.
 * Designed for mobile performance — pure SVG + CSS/Framer animations.
 */
export function HeroSceneMobile() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full max-h-[520px] max-w-[520px] opacity-90"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 200)" stopOpacity="1" />
            <stop offset="60%" stopColor="oklch(0.65 0.22 290)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.2 0.05 280)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 290)" />
          </linearGradient>
        </defs>

        {/* Glow core */}
        <motion.circle
          cx="200"
          cy="200"
          r="90"
          fill="url(#core)"
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* Inner sphere */}
        <circle
          cx="200"
          cy="200"
          r="60"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          opacity="0.7"
        />

        {/* Orbiting rings */}
        {[110, 140, 170].map((r, i) => (
          <motion.ellipse
            key={r}
            cx="200"
            cy="200"
            rx={r}
            ry={r * 0.35}
            fill="none"
            stroke="url(#ring)"
            strokeWidth="0.8"
            opacity={0.5 - i * 0.1}
            animate={{ rotate: 360 }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          />
        ))}

        {/* Orbit nodes */}
        {[0, 1, 2].map((i) => (
          <motion.g
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          >
            <circle
              cx={200 + 110 + i * 30}
              cy="200"
              r="3.5"
              fill="oklch(0.85 0.18 200)"
            />
          </motion.g>
        ))}

        {/* Sparse stars */}
        {[
          [40, 60], [360, 80], [80, 340], [340, 320], [50, 200], [350, 200],
          [200, 30], [200, 370],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="1.4"
            fill="oklch(0.9 0.05 250)"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.5 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}
