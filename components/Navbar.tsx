"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";

function NavItem({ index, label, href, onClick }: { index: string; label: string; href: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group font-mono text-[12.5px] text-muted transition-colors hover:text-offwhite whitespace-nowrap"
    >
      {index}. <span className="text-dim">&lt;</span>
      <span className="text-neon group-hover:[text-shadow:0_0_10px_rgba(0,255,135,0.6)]">{label}</span>
      <span className="text-dim">/&gt;</span>
    </a>
  );
}

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { index: "//01", label: t.nav.home, href: "#top" },
    { index: "//02", label: t.nav.about, href: "#about" },
    { index: "//03", label: t.nav.projects, href: "#projects" },
    { index: "//04", label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-obsidian/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between gap-4 px-6">
        {/* left links (desktop) */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.slice(0, 2).map((l) => (
            <NavItem key={l.href} {...l} />
          ))}
        </nav>

        {/* brand */}
        <a
          href="#top"
          className="rounded-lg border border-line px-3 py-1.5 font-mono text-xl font-extrabold tracking-widest text-offwhite"
        >
          A<span className="text-neon">M</span>A<span className="text-neon">/</span>
        </a>

        {/* right links + actions */}
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 md:flex">
            {links.slice(2).map((l) => (
              <NavItem key={l.href} {...l} />
            ))}
          </nav>

          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-lg border border-line bg-surface px-2.5 py-1.5 font-mono text-xs font-bold text-muted transition-colors hover:border-neon hover:text-neon"
          >
            <span className={lang === "fr" ? "text-neon" : ""}>FR</span> ·{" "}
            <span className={lang === "en" ? "text-neon" : ""}>EN</span>
          </button>

          <a
            href={profile.cvUrl[lang]}
            className="hidden items-center gap-2 rounded-lg border border-neon/40 px-3 py-1.5 font-mono text-xs text-neon transition-all hover:shadow-glow sm:flex"
          >
            <Download size={13} /> {t.nav.cv}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="rounded-lg border border-line p-1.5 text-offwhite md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-b border-line bg-surface px-6 py-5 md:hidden">
          {links.map((l) => (
            <NavItem key={l.href} {...l} onClick={close} />
          ))}
          <a
            href={profile.cvUrl[lang]}
            onClick={close}
            className="flex items-center gap-2 font-mono text-xs text-neon"
          >
            <Download size={13} /> {t.nav.cv}
          </a>
        </nav>
      )}
    </header>
  );
}
