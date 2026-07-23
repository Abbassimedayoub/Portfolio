"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Check, Copy } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

/**
 * IMPORTANT: replace VOTRE_ID with your own Formspree endpoint
 * (https://formspree.io — free, no backend needed) to receive messages.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID";

const nodes = [
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, offset: "" },
  { icon: Github, label: "GitHub", href: profile.github, offset: "md:-mt-6" },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, offset: "md:mt-4" },
];

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="flex flex-col items-center">
          <SectionHeading index="//04" tag={t.contact.tag} title={t.contact.title} close="</h4>" center />
        </div>

        {/* circular node buttons */}
        <div className="my-14 flex flex-wrap items-center justify-center gap-10">
          {nodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.a
                key={n.label}
                href={n.href}
                target={n.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`flex h-[150px] w-[150px] flex-col items-center justify-center gap-2 rounded-full border border-neon/35 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,135,0.05),transparent)] font-mono text-[13px] text-dim transition-colors hover:border-neon hover:text-offwhite hover:shadow-glow ${n.offset}`}
              >
                <Icon size={26} className="text-neon" />
                <span>
                  &lt;<span className="text-muted">{n.label}</span>/&gt;
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* copy email */}
        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm text-dim">
          <span>{profile.email}</span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-2 font-mono text-xs text-neon transition-all hover:border-neon hover:shadow-glow"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </div>

        {/* form */}
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="mx-auto mt-11 flex max-w-xl flex-col gap-3.5 text-left"
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-dim">
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-[14.5px] text-offwhite transition-all focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/15"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-[14.5px] text-offwhite transition-all focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/15"
              />
            </div>
          </div>
          <div>
            <label htmlFor="msg" className="mb-1.5 block font-mono text-xs text-dim">
              {t.contact.message}
            </label>
            <textarea
              id="msg"
              name="message"
              required
              placeholder="> ..."
              className="min-h-[120px] w-full resize-y rounded-lg border border-line bg-surface px-3.5 py-3 text-[14.5px] text-offwhite transition-all focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/15"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3.5 font-mono text-sm font-semibold text-[#04160c] shadow-glow-soft transition-all hover:shadow-[0_12px_34px_-8px_rgba(0,255,135,0.7)]"
          >
            ❯ {t.contact.send}
          </button>
          <p className="text-center font-mono text-[11.5px] text-muted">{t.contact.note}</p>
        </form>
      </div>
    </section>
  );
}
