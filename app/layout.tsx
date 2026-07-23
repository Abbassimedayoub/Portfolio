import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abbassi Med Ayoub — Full-Stack Developer → DevOps & Cloud",
  description:
    "Abbassi Med Ayoub — Full-Stack Developer (React · Django · Node.js) evolving toward DevOps & Cloud. Dual expertise in healthcare & software. Paris area.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Django",
    "Node.js",
    "DevOps",
    "Docker",
    "CI/CD",
    "Cloud",
    "Holberton School",
    "Portfolio",
  ],
  authors: [{ name: "Abbassi Med Ayoub" }],
  openGraph: {
    title: "Abbassi Med Ayoub — Full-Stack Developer → DevOps & Cloud",
    description:
      "Full-Stack Developer evolving toward DevOps & Cloud. Dual expertise in healthcare & software.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
