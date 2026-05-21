import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        "paper-deep": "rgb(var(--paper-deep-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-dim": "rgb(var(--ink-dim-rgb) / <alpha-value>)",
        "ink-faint": "rgb(var(--ink-faint-rgb) / <alpha-value>)",
        stamp: "rgb(var(--stamp-rgb) / <alpha-value>)",
        accent: "rgb(var(--ink-rgb) / <alpha-value>)",
        bg: "rgb(var(--paper-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
