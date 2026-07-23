"use client";

import { motion } from "framer-motion";
import { Play, Code2, Star, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, profile, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

function CaseBlock({ k, children }: { k: string; children: string }) {
  return (
    <div className="rounded-xl border border-line/70 bg-surface2 p-3.5">
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-neon">{k}</div>
      <p className="text-[13px] text-dim">{children}</p>
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { t, lang } = useI18n();
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]",
        p.flagship ? "border-neon/35 bg-gradient-to-b from-neon/[0.03] to-surface md:col-span-2" : "",
      ].join(" ")}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-neon to-cyanx opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-3.5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface2 text-xl">
          {p.icon}
        </div>
        <div className="flex gap-4 font-mono text-[13px]">
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted transition-colors hover:text-neon"
            >
              <Play size={13} /> {t.projects.demo}
            </a>
          )}
          <a
            href={p.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted transition-colors hover:text-neon"
          >
            <Code2 size={13} /> {t.projects.code}
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-offwhite">{p.title[lang]}</h3>
      {p.flagship && (
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md border border-amber-400/35 px-2.5 py-1 font-mono text-[11px] text-amber-400">
          <Star size={11} /> {t.projects.flagship}
        </span>
      )}

      <p className="mb-3.5 mt-3 flex-grow text-[14.5px] text-dim">{p.desc[lang]}</p>

      {p.caseStudy && (
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CaseBlock k={lang === "fr" ? "Problème" : "Problem"}>{p.caseStudy.problem[lang]}</CaseBlock>
          <CaseBlock k="Solution">{p.caseStudy.solution[lang]}</CaseBlock>
          <CaseBlock k="Architecture">{p.caseStudy.architecture[lang]}</CaseBlock>
          <CaseBlock k={lang === "fr" ? "Défi relevé" : "Challenge"}>{p.caseStudy.challenge[lang]}</CaseBlock>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-line/70 bg-surface2 px-2.5 py-1 font-mono text-[11.5px] text-cyanx"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="//03" tag={t.projects.tag} title={t.projects.title} />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <p className="mt-7 font-mono text-[13px] text-muted">
          {t.projects.more}{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neon hover:underline"
          >
            github.com/{profile.githubHandle} <ArrowUpRight size={13} />
          </a>
        </p>
      </div>
    </section>
  );
}
