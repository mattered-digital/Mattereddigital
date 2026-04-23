import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        white: "#ffffff",
        gray: {
          DEFAULT: "#999999",
          dark: "#333333",
          light: "#cccccc"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        widest: "0.25em",
        label: "0.15em",
        tight: "-0.02em"
      },
      fontSize: {
        "hero": ["clamp(4rem, 10vw, 12rem)", { lineHeight: "0.9", fontWeight: "700" }],
        "hero-sm": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", fontWeight: "700" }],
        "statement": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1.1", fontWeight: "700" }]
      }
    }
  },
  plugins: []
};

export default config;
