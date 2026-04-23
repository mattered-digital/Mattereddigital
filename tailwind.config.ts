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
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      letterSpacing: {
        widest: "0.25em",
        label: "0.15em"
      }
    }
  },
  plugins: []
};

export default config;
