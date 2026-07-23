"use client";

import { motion } from "framer-motion";

interface Props {
  index?: string; // e.g. "//02"
  tag: string; // e.g. "About"
  title: string;
  close?: string; // e.g. "</h2>"
  sub?: string;
  center?: boolean;
}

/** Tag-driven section heading: `//02. <About/>` + big mono title with a muted closing tag. */
export function SectionHeading({ index = "//—", tag, title, close = "</h2>", sub, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center" : ""}
    >
      <span className="mb-3 block font-mono text-[15px] text-muted">
        {index}. <span className="text-neon">&lt;{tag}/&gt;</span>
      </span>
      <h2 className="relative inline-block font-mono text-3xl font-extrabold leading-none tracking-wide sm:text-4xl md:text-5xl">
        {title}
        <span className="ml-2 align-top font-mono text-base font-medium text-muted">{close}</span>
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-dim">{sub}</p>}
    </motion.div>
  );
}
