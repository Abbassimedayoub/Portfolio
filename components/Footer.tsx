"use client";

import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-line/60 py-9">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-[12.5px] text-muted">
        <p>
          © {year} {profile.name} · {t.footer} <span className="text-neon">❯</span> Next.js · Framer Motion
        </p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-dim transition-colors hover:text-neon">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-dim transition-colors hover:text-neon">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-dim transition-colors hover:text-neon">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
