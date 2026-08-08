import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "rgb(var(--c-base-950) / <alpha-value>)",
          900: "rgb(var(--c-base-900) / <alpha-value>)",
          800: "rgb(var(--c-base-800) / <alpha-value>)",
          700: "rgb(var(--c-base-700) / <alpha-value>)",
        },
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        ink: "#05070a",
        accent: {
          DEFAULT: "#2dd4bf",
          soft: "#5eead4",
          deep: "#0d9488",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "live-pan": {
          "0%": { transform: "scale(1.08) translate(0%, 0%)" },
          "50%": { transform: "scale(1.16) translate(-2.5%, -1.5%)" },
          "100%": { transform: "scale(1.08) translate(0%, 0%)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--marquee-duration, 40s) linear infinite",
        "live-pan": "live-pan 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
