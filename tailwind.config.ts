import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#F7F8FA",
          100: "#EEF0F4",
          200: "#E2E5EC",
          300: "#C5CAD6",
          500: "#6B7280",
          700: "#374151",
          800: "#1F2937",
          900: "#0F172A",
          950: "#020617",
        },
        accent: {
          DEFAULT: "#1D4ED8",
          soft: "#3B82F6",
          deep: "#1E3A8A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        lift: "0 12px 40px rgba(15, 23, 42, 0.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "live-pan": {
          "0%": { transform: "scale(1.06) translate(0%, 0%)" },
          "50%": { transform: "scale(1.12) translate(-1.5%, -1%)" },
          "100%": { transform: "scale(1.06) translate(0%, 0%)" },
        },
      },
      animation: {
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
