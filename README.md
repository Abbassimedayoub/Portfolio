# Abbassi Med Ayoub — Portfolio

Portfolio développeur **Full-Stack → DevOps & Cloud**, esthétique « Dev-Core Terminal & Circuit ».
Bilingue **FR / EN**, animations Framer Motion, **export statique** déployé sur **GitHub Pages** via GitHub Actions.

**Stack :** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

---

## 🚀 Démarrage rapide (local)

Prérequis : **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` génère le dossier **`out/`** (site statique prêt à héberger).

---

## 📁 Structure

```
ama-portfolio/
├── app/           layout (fonts, SEO, i18n) · page · globals.css
├── components/    Navbar · Hero · About · Skills · Projects · Contact · Footer
│                  + CircuitLine · MagneticButton · SectionHeading
├── lib/
│   ├── i18n.tsx   contexte langue + libellés UI (FR/EN)
│   └── data.ts    CONTENU : profil, timeline, skills, projets (bilingue)
├── public/cv/     CV_Abbassi_Med_Ayoub_FR.pdf · _EN.pdf  (déjà inclus ✅)
├── .github/workflows/
│   ├── deploy.yml GitHub Pages (build + export + deploy)
│   └── ci.yml     lint + build sur les PR
├── Dockerfile     (option) build statique + nginx
└── next.config.mjs
```

> **Modifier le contenu :** projets / skills / parcours → `lib/data.ts`. Libellés d'interface → `lib/i18n.tsx`.

---

## ☁️ 1. Pousser dans le repo existant `Portfolio`

Le déploiement vise **https://github.com/Abbassimedayoub/Portfolio** (site `abbassimedayoub.github.io/Portfolio/`).
Pousser ce nouveau projet **remplace** l'ancien contenu du repo.

```bash
# identité git à ton nom (pour le graphe de contributions)
git config --global user.name "Abbassi Med Ayoub"
git config --global user.email "abbassimohamedayoub@gmail.com"

cd ama-portfolio
git init
git add .
git commit -m "feat: nouveau portfolio Next.js (Dev-Core, FR/EN)"
git branch -M main
git remote add origin https://github.com/Abbassimedayoub/Portfolio.git

# écrase l'ancien portfolio par le nouveau (force, car les historiques diffèrent)
git push -u origin main --force
```

> `--force` **remplace** l'ancien site. Si tu veux d'abord garder une copie de l'ancien,
> renomme sa branche sur GitHub avant de pousser.

## 🌐 2. Activer GitHub Pages (déploiement automatique)

1. Repo `Portfolio` → **Settings → Pages**.
2. **Build and deployment → Source : GitHub Actions** (et non « Deploy from a branch »).
3. À chaque `git push` sur `main`, le workflow `deploy.yml` build + publie automatiquement.
4. URL : **https://abbassimedayoub.github.io/Portfolio/**

> ✅ Le `basePath` est **déjà réglé sur `/Portfolio`** (variable `BASE_PATH` en haut de
> `next.config.mjs`) pour que le CSS/JS et le bouton **Download CV** fonctionnent à cette URL.
> Quand tu brancheras ton domaine .tech (racine), mets simplement `BASE_PATH = ""`.

## 🎓 3. Domaine `.tech` gratuit (pack étudiant) + branchement

Ton adresse `@holbertonstudents.com` te donne droit au **GitHub Student Developer Pack**, qui inclut un **domaine .tech gratuit 1 an**.

1. Active le pack : https://education.github.com/pack → *Get student benefits* (vérif. avec ton mail école).
2. Dans le pack, trouve l'offre **.TECH Domains** → récupère ton coupon et enregistre un domaine sur https://get.tech (ex. `ayoub-abbassi.tech`).
3. **Côté GitHub** → repo → **Settings → Pages → Custom domain** : saisis `ayoub-abbassi.tech` puis *Save*. GitHub crée un fichier `CNAME` et attend la vérification DNS.
4. **Côté get.tech (DNS)** — ajoute ces enregistrements :
   - 4 enregistrements **A** vers les IP de GitHub Pages :
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (option `www`) un **CNAME** `www` → `abbassimedayoub.github.io`
5. Reviens sur **Settings → Pages** et coche **Enforce HTTPS** (une fois le certificat émis, ~15 min à 1 h).
6. Comme tu passes sur un domaine **racine**, mets `BASE_PATH = ""` en haut de `next.config.mjs`,
   puis recommit/repush (le workflow redéploie tout seul).

> Astuce : tu peux aussi committer le domaine en créant `public/CNAME` contenant une seule ligne
> `ayoub-abbassi.tech` — il sera copié dans `out/` à chaque build.

---

## 🐳 (Option) Docker

```bash
docker build -t ama-portfolio .
docker run -p 8080:80 ama-portfolio   # http://localhost:8080
```

Build statique servi par nginx — utile pour montrer la conteneurisation en entretien.

---

## ✅ Rappels avant mise en ligne

- **Formulaire de contact** : crée un endpoint gratuit sur https://formspree.io et remplace
  `VOTRE_ID` dans `components/Contact.tsx`.
- **LinkedIn** : vérifie l'URL exacte dans `lib/data.ts` (`profile.linkedin`).
- **Santech** : le case study annonce *PostgreSQL + Docker* → assure-toi que le repo le reflète.

## 🌱 Améliorations futures

SEO (`sitemap.ts`, `robots.ts`, image OG) · `next/image` pour les visuels · Vercel/Plausible Analytics ·
tests Playwright dans la CI · previews automatiques par PR.

---

© Abbassi Med Ayoub
