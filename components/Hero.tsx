"use client";

import { motion } from "framer-motion";
import { MapPin, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";
import { CircuitLine } from "./CircuitLine";
import { MagneticButton } from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative flex min-h-[88vh] items-center py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-[1.35fr_0.65fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-base text-muted">
            &lt;p&gt;<span className="text-neon">{t.hero.this}</span>&lt;/p&gt;
          </motion.p>

          <motion.span variants={item} className="block font-mono text-sm text-muted">
            &lt;h1&gt;
          </motion.span>
          <motion.h1
            variants={item}
            className="my-1 font-mono text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          >
            {profile.firstLine}
            <br />
            <span className="text-neon glow-text">{profile.secondLine}</span>
          </motion.h1>
          <motion.span variants={item} className="block font-mono text-sm text-muted">
            &lt;/h1&gt;
          </motion.span>

          <motion.p variants={item} className="mt-5 font-mono text-lg text-dim md:text-xl">
            &lt;p&gt; {t.hero.role} <span className="text-neon">➔</span> {t.hero.arrow} &lt;/p&gt;
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#projects" variant="primary">
              ❯ {t.hero.ctaProjects}
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {t.hero.ctaContact}
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap gap-5 font-mono text-[13px] text-muted"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-neon" />
              <b className="text-offwhite">{profile.location[lang]}</b>
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_8px_#00FF87] animate-pulse2" />
              <b className="text-offwhite">{t.hero.available}</b>
            </span>
            <span className="flex items-center gap-2">
              <Languages size={14} className="text-neon" /> FR · EN · AR
            </span>
          </motion.div>
        </motion.div>

        {/* CV BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative flex h-[230px] w-[230px] items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-[18px] animate-spin-slow rounded-full border border-dashed border-neon/25">
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_12px_#00FF87]" />
            </div>
            <div className="absolute inset-9 animate-spin-slower rounded-full border border-cyanx/25" />
            <a
              href={profile.cvUrl[lang]}
              className="flex h-[132px] w-[132px] items-center justify-center rounded-full border border-neon/40 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,135,0.12),#11161F)] text-center font-mono text-sm font-semibold text-neon transition-transform duration-300 hover:scale-105 hover:shadow-glow-soft"
            >
              &lt;Download
              <br />
              CV/&gt;
            </a>
          </div>
        </motion.div>
      </div>

      {/* circuit wire to About */}
      <CircuitLine
        className="pointer-events-none absolute left-1/2 top-[82%] hidden w-[340px] -translate-x-1/2 md:block"
        viewBox="0 0 340 220"
        d="M170 0 V70 Q170 100 140 100 H40 Q10 100 10 130 V210"
        node={{ cx: 10, cy: 212 }}
      />
    </section>
  );
}
