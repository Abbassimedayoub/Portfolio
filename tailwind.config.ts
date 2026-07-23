import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090C10", // background
        surface: "#11161F", // cards
        surface2: "#161B22", // raised surfaces
        line: "#1c2530", // borders
        neon: "#00FF87", // primary accent
        neon2: "#00FF66",
        cyanx: "#0EA5E9", // secondary (cloud/devops)
        offwhite: "#F8FAFC",
        muted: "#64748B",
        dim: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      dropShadow: {
        glow: "0 0 12px rgba(0,255,135,0.4)",
        "glow-lg": "0 0 24px rgba(0,255,135,0.5)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,255,135,.35), 0 0 24px -6px rgba(0,255,135,.5)",
        "glow-soft": "0 8px 26px -8px rgba(0,255,135,.55)",
      },
      keyframes: {
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        blink: { "50%": { opacity: "0" } },
        pulse2: {
          "70%": { boxShadow: "0 0 0 8px rgba(0,255,135,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,255,135,0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "spin-slower": "spin-slow 26s linear infinite reverse",
        blink: "blink 1s steps(2) infinite",
        pulse2: "pulse2 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
