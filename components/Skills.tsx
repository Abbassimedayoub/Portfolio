"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { CircuitLine } from "./CircuitLine";

export function Skills() {
  const { t, lang } = useI18n();

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="//—" tag={t.skills.tag} title={t.skills.title} sub={t.skills.sub} />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative col-span-2 overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(340px_180px_at_50%_0%,rgba(0,255,135,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h4 className="relative mb-4 flex items-center gap-2 font-mono text-[13.5px] text-neon">
                ▹ {g.title[lang]} <span className="font-normal text-muted">{g.note}</span>
              </h4>
              <div className="relative flex flex-wrap gap-2.5">
                {g.skills.map((s) => (
                  <span
                    key={s.name}
                    className={[
                      "chip",
                      s.level === "core" ? "!text-offwhite !border-neon/30" : "",
                      s.level === "learn" ? "!border-dashed !text-muted" : "",
                    ].join(" ")}
                  >
                    {s.name}
                    {s.level === "learn" && <span className="text-amber-400"> ⟳</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CircuitLine
        className="pointer-events-none absolute left-1/2 top-[92%] hidden w-[260px] -translate-x-1/2 md:block"
        viewBox="0 0 260 150"
        d="M130 0 V60 Q130 90 100 90 H30 Q0 90 0 120 V140"
        node={{ cx: 0, cy: 142 }}
      />
    </section>
  );
}
