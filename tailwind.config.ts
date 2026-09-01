import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          50: "var(--surface-50)",
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          800: "var(--surface-800)",
          900: "var(--surface-900)",
          950: "var(--surface-950)",
        },
        azure: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#38a9f6",
          500: "#1b64be",
          600: "#1562b8",
          700: "#0f4c94",
          800: "#10417b",
          900: "#123766",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        serif: ["var(--font-serif)", "EB Garamond", "Georgia", "serif"],
        classical: ["var(--font-classical)", "Cinzel", "serif"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(27, 100, 190, 0.35)",
        "glow-lg": "0 0 60px -10px rgba(27, 100, 190, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "sonar-wave": "sonarWave 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite",
      },
      keyframes: {
        sonarWave: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "50%": { transform: "scale(1.2)", opacity: "0.4" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
