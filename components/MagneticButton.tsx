"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}

/** A button/link that gently follows the cursor (magnetic hover effect). */
export function MagneticButton({ href, children, variant = "primary", external }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  const base =
    "inline-flex items-center gap-2.5 rounded-lg px-6 py-3.5 font-mono text-sm font-semibold transition-[transform,box-shadow,border-color,color] duration-200";
  const styles =
    variant === "primary"
      ? "bg-neon text-[#04160c] shadow-glow-soft hover:shadow-[0_12px_34px_-8px_rgba(0,255,135,0.7)]"
      : "border border-line text-offwhite hover:border-neon hover:text-neon hover:shadow-glow";

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}
