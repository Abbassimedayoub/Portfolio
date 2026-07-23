"use client";

import { motion } from "framer-motion";

interface CircuitLineProps {
  /** SVG path data for the connecting wire. */
  d: string;
  viewBox: string;
  /** Node (glowing endpoint) coordinates. */
  node: { cx: number; cy: number };
  className?: string;
}

/**
 * A decorative animated "circuit" wire that draws itself in on scroll,
 * ending in a glowing green node — the signature of the Dev-Core aesthetic.
 * Hidden on small screens (see className usage in sections).
 */
export function CircuitLine({ d, viewBox, node, className }: CircuitLineProps) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <motion.path
        d={d}
        stroke="#00FF87"
        strokeWidth={1.6}
        strokeLinecap="round"
        className="drop-shadow-glow"
        initial={{ pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.circle
        cx={node.cx}
        cy={node.cy}
        r={6}
        fill="#090C10"
        stroke="#00FF87"
        strokeWidth={2}
        className="drop-shadow-glow"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />
    </svg>
  );
}
