"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { timeline } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { CircuitLine } from "./CircuitLine";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="//02" tag={t.about.tag} title={t.about.title} sub={t.about.sub} />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.05fr]">
          {/* copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-dim"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>

          {/* timeline */}
          <div className="relative pl-10 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-neon before:via-cyanx before:to-line">
            {timeline.map((it, i) => (
              <motion.div
                key={it.phase}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-neon bg-obsidian text-[10px] font-bold text-neon shadow-[0_0_14px_rgba(0,255,135,0.5)]">
                  {it.phase}
                </span>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-cyanx">
                  {it.step[lang]}
                </div>
                <h4 className="text-[17px] font-bold text-offwhite">{it.title[lang]}</h4>
                <div className="mb-1.5 font-mono text-[12.5px] text-muted">{it.org[lang]}</div>
                <p className="text-sm text-dim">{it.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CircuitLine
        className="pointer-events-none absolute left-1/2 top-[90%] hidden w-[300px] -translate-x-1/2 md:block"
        viewBox="0 0 300 170"
        d="M30 0 V50 Q30 80 60 80 H260 Q290 80 290 110 V160"
        node={{ cx: 290, cy: 162 }}
      />
    </section>
  );
}
