import type { Lang } from "./i18n";

/** Base path injected at build time (see next.config.mjs). Empty on a root domain. */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** A string available in both languages. */
export type Localized = Record<Lang, string>;

/* ------------------------------------------------------------------ */
/* CONTACT / PROFILE                                                   */
/* ------------------------------------------------------------------ */
export const profile = {
  name: "Abbassi Med Ayoub",
  firstLine: "Abbassi",
  secondLine: "Med Ayoub",
  monogram: "AMA",
  email: "abbassimohamedayoub@gmail.com",
  github: "https://github.com/Abbassimedayoub",
  githubHandle: "Abbassimedayoub",
  // NOTE: confirm this exact slug — taken from your CV.
  linkedin: "https://www.linkedin.com/in/mohamed-ayoub-abbassi",
  location: { fr: "Villejuif (94) · Île-de-France", en: "Villejuif (94) · Paris area" },
  // Language-aware CV. Files live in public/cv/.
  // BASE_PATH is prefixed so the link works under github.io/Portfolio/ AND a root domain.
  cvUrl: {
    fr: `${BASE_PATH}/cv/CV_Abbassi_Med_Ayoub_FR.pdf`,
    en: `${BASE_PATH}/cv/CV_Abbassi_Med_Ayoub_EN.pdf`,
  },
};

/* ------------------------------------------------------------------ */
/* ABOUT — journey timeline                                            */
/* ------------------------------------------------------------------ */
export interface TimelineItem {
  phase: string;
  step: Localized;
  title: Localized;
  org: Localized;
  desc: Localized;
}

export const timeline: TimelineItem[] = [
  {
    phase: "01",
    step: { fr: "Le point de départ", en: "The origin" },
    title: { fr: "Santé / Paramédical", en: "Healthcare / Paramedical" },
    org: { fr: "Infirmier de bloc · 2019–2022 · Tunisie", en: "Scrub nurse · 2019–2022 · Tunisia" },
    desc: {
      fr: "Environnement stérile à responsabilité vitale : précision sous pression, fiabilité, sang-froid.",
      en: "Sterile, life-critical environment: precision under pressure, reliability, composure.",
    },
  },
  {
    phase: "02",
    step: { fr: "Le virage", en: "The pivot" },
    title: { fr: "Holberton School Paris", en: "Holberton School Paris" },
    org: { fr: "Bachelor Dév. Full-Stack · 2023–2026", en: "Software Eng. Bachelor · 2023–2026" },
    desc: {
      fr: "Coding intensif par projets : algorithmique, back-end, front-end, bases de données, Linux.",
      en: "Intensive project-based coding: algorithms, back-end, front-end, databases, Linux.",
    },
  },
  {
    phase: "03",
    step: { fr: "La maîtrise", en: "The mastery" },
    title: { fr: "Full-Stack Web", en: "Full-Stack Web" },
    org: { fr: "React · Django REST · Node.js", en: "React · Django REST · Node.js" },
    desc: {
      fr: "Applications complètes du modèle de données à l'interface — dont Santech (medtech).",
      en: "Complete apps from data model to UI — including Santech (medtech).",
    },
  },
  {
    phase: "04",
    step: { fr: "L'évolution", en: "The evolution" },
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    org: { fr: "Docker · CI/CD · Linux · Cloud", en: "Docker · CI/CD · Linux · Cloud" },
    desc: {
      fr: "En cours : conteneurisation, pipelines automatisés et fondamentaux cloud.",
      en: "In progress: containerisation, automated pipelines and cloud fundamentals.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* SKILLS — bento grid                                                 */
/* ------------------------------------------------------------------ */
export type SkillLevel = "core" | "base" | "learn";
export interface SkillGroup {
  title: Localized;
  note: string;
  span2?: boolean;
  skills: { name: string; level: SkillLevel }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { fr: "Frontend", en: "Frontend" },
    note: "// react-core",
    span2: true,
    skills: [
      { name: "React.js", level: "core" },
      { name: "JavaScript ES6+", level: "core" },
      { name: "TypeScript", level: "base" },
      { name: "Tailwind CSS", level: "base" },
      { name: "Framer Motion", level: "base" },
      { name: "HTML5", level: "base" },
      { name: "CSS3", level: "base" },
      { name: "Jest", level: "base" },
    ],
  },
  {
    title: { fr: "Backend", en: "Backend" },
    note: "// api-layer",
    span2: true,
    skills: [
      { name: "Python", level: "core" },
      { name: "Django", level: "core" },
      { name: "Django REST", level: "core" },
      { name: "Node.js", level: "base" },
      { name: "Express", level: "base" },
      { name: "REST API", level: "base" },
      { name: "JWT", level: "base" },
      { name: "Flask", level: "base" },
    ],
  },
  {
    title: { fr: "Database", en: "Database" },
    note: "// data",
    span2: true,
    skills: [
      { name: "SQL", level: "base" },
      { name: "PostgreSQL", level: "base" },
      { name: "MySQL", level: "base" },
      { name: "SQLite", level: "base" },
      { name: "MongoDB", level: "base" },
      { name: "Redis", level: "base" },
    ],
  },
  {
    title: { fr: "DevOps & Cloud", en: "DevOps & Cloud" },
    note: "// infra",
    span2: true,
    skills: [
      { name: "Linux", level: "core" },
      { name: "Bash/Shell", level: "core" },
      { name: "Git", level: "core" },
      { name: "Docker", level: "learn" },
      { name: "CI/CD", level: "learn" },
      { name: "GitHub Actions", level: "learn" },
      { name: "Cloud", level: "learn" },
      { name: "Automation", level: "learn" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* PROJECTS                                                            */
/* ------------------------------------------------------------------ */
export interface CaseStudy {
  problem: Localized;
  solution: Localized;
  architecture: Localized;
  challenge: Localized;
}
export interface Project {
  id: string;
  icon: string;
  flagship?: boolean;
  stack: string[];
  title: Localized;
  desc: Localized;
  links: { demo?: string; code: string };
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "santech",
    icon: "🏥",
    flagship: true,
    stack: ["React", "Django REST", "PostgreSQL", "Docker", "JWT"],
    title: { fr: "Santech", en: "Santech" },
    desc: {
      fr: "Plateforme de gestion pour établissements de santé — le pont entre mon expertise médicale et le développement full-stack moderne.",
      en: "Management platform for healthcare facilities — the bridge between my medical domain expertise and modern full-stack development.",
    },
    links: { demo: "https://youtu.be/XO5b9wKNm84", code: "https://github.com/Abbassimedayoub/Santech" },
    caseStudy: {
      problem: {
        fr: "Les établissements jonglent entre stocks de médicaments, RH, fournisseurs et facturation sur des outils dispersés.",
        en: "Facilities juggle drug inventory, HR, suppliers and billing across scattered tools.",
      },
      solution: {
        fr: "Une application unifiée : inventaire, gestion employés/salaires, demandes clients et facturation, en temps réel.",
        en: "A unified app: inventory, employee/payroll, customer requests and billing, in real time.",
      },
      architecture: {
        fr: "Front React ⟶ API Django REST sécurisée par JWT ⟶ PostgreSQL. Conteneurisé avec Docker.",
        en: "React front ⟶ JWT-secured Django REST API ⟶ PostgreSQL. Containerised with Docker.",
      },
      challenge: {
        fr: "Modéliser un domaine métier riche et sécuriser les échanges front/back (JWT, CORS).",
        en: "Modelling a rich business domain and securing front/back exchanges (JWT, CORS).",
      },
    },
  },
  {
    id: "files-manager",
    icon: "🗂️",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Bull"],
    title: { fr: "Files Manager", en: "Files Manager" },
    desc: {
      fr: "API REST de hosting/partage de fichiers : auth par token, permissions et génération asynchrone de miniatures via file d'attente.",
      en: "File hosting/sharing REST API: token auth, permissions and async thumbnail generation via a queue.",
    },
    links: { code: "https://github.com/Abbassimedayoub/holbertonschool-files_manager" },
  },
  {
    id: "airbnb",
    icon: "🏠",
    stack: ["Python", "Flask", "MySQL", "SQLAlchemy", "MVC"],
    title: { fr: "AirBnB Clone v4", en: "AirBnB Clone v4" },
    desc: {
      fr: "Plateforme full-stack : front dynamique + API REST Flask, persistance MySQL via ORM SQLAlchemy, tests unitaires.",
      en: "Full-stack platform: dynamic front + Flask REST API, MySQL persistence via SQLAlchemy ORM, unit tests.",
    },
    links: { code: "https://github.com/Abbassimedayoub/holbertonschool-AirBnB_clone_v4" },
  },
  {
    id: "react-ts",
    icon: "⚛️",
    stack: ["React", "TypeScript", "Webpack", "Jest"],
    title: { fr: "React & TypeScript", en: "React & TypeScript" },
    desc: {
      fr: "Composants, hooks, gestion d'état et outillage de build (Webpack/Babel), avec tests automatisés Jest.",
      en: "Components, hooks, state management and build tooling (Webpack/Babel), with automated Jest tests.",
    },
    links: { code: "https://github.com/Abbassimedayoub/holbertonschool-web_react" },
  },
];
