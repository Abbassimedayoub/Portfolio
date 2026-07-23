"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type Lang = "fr" | "en";

/** UI strings (labels, headings, CTAs). Section CONTENT lives in lib/data.ts. */
export const ui = {
  fr: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", cv: "Download CV" },
    hero: {
      this: "Bonjour, voici",
      role: "Développeur Full-Stack",
      arrow: "DevOps & Cloud",
      headline:
        "Développeur Full-Stack passionné par la création de solutions robustes et l'évolution vers l'écosystème DevOps & Cloud.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
      available: "Disponible",
    },
    about: {
      tag: "About",
      title: "Mon Parcours",
      sub: "De la précision du bloc opératoire à l'automatisation cloud — une trajectoire, une même exigence.",
      p1: "Développeur Full-Stack formé à Holberton School Paris (pédagogie intensive par projets), spécialisé React, Django REST et Node.js. Ancien infirmier de bloc opératoire, j'apporte une rigueur de zéro-erreur, une vraie gestion de crise et une pensée « systèmes ».",
      p2: "Ma direction est claire : consolider mon socle full-stack sur des projets réels, puis monter en DevOps & Cloud (Docker, CI/CD, Linux, automatisation). Ce portfolio est conteneurisé et déployé via un pipeline — ma première brique DevOps.",
    },
    skills: {
      tag: "Skills",
      title: "Stack Technique",
      sub: "⟳ = en apprentissage actif (axe DevOps / Cloud).",
    },
    projects: { tag: "Projects", title: "Mes Réalisations", more: "Plus de repos sur", flagship: "Projet phare · Medtech", demo: "Démo", code: "Code" },
    contact: {
      tag: "Contact",
      title: "Connectons-nous",
      copy: "Copier",
      copied: "Copié ✓",
      name: "Nom",
      message: "Message",
      send: "Envoyer le message",
      note: "// Branchez votre endpoint Formspree (gratuit) à la place de VOTRE_ID.",
    },
    footer: "Codé avec",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", cv: "Download CV" },
    hero: {
      this: "This is",
      role: "Full-Stack Developer",
      arrow: "DevOps & Cloud",
      headline:
        "Full-Stack Developer passionate about building scalable solutions and evolving toward DevOps & Cloud Architecture.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      available: "Available",
    },
    about: {
      tag: "About",
      title: "My Journey",
      sub: "From operating-theatre precision to cloud automation — one path, the same standard.",
      p1: "Full-Stack developer trained at Holberton School Paris (intensive, project-based), specialised in React, Django REST and Node.js. A former operating-theatre nurse, I bring a zero-error standard, real crisis management and systems thinking.",
      p2: "My direction is clear: consolidate my full-stack foundation on real projects, then grow into DevOps & Cloud (Docker, CI/CD, Linux, automation). This portfolio is containerised and shipped through a pipeline — my first DevOps building block.",
    },
    skills: {
      tag: "Skills",
      title: "Skill Matrix",
      sub: "⟳ = actively learning (DevOps / Cloud track).",
    },
    projects: { tag: "Projects", title: "My Portfolio", more: "More repos on", flagship: "Flagship · Medtech", demo: "Demo", code: "Code" },
    contact: {
      tag: "Contact",
      title: "Connect with me",
      copy: "Copy",
      copied: "Copied ✓",
      name: "Name",
      message: "Message",
      send: "Send message",
      note: "// Wire your free Formspree endpoint in place of VOTRE_ID.",
    },
    footer: "Built with",
  },
} as const;

type UiStrings = (typeof ui)["fr"];

interface Ctx {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
  t: UiStrings;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);
  return (
    <LangContext.Provider value={{ lang, toggle, setLang, t: ui[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within <LanguageProvider>");
  return ctx;
}
