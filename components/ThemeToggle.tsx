"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark theme" : "Light theme"}
      className={`theme-toggle group relative grid h-10 w-10 place-items-center rounded-xl border border-fg/10 bg-fg/[0.04] text-fg/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${className}`}
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${
          isLight
            ? "scale-100 rotate-0 opacity-100"
            : "scale-50 -rotate-90 opacity-0"
        }`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${
          isLight
            ? "scale-50 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
    </button>
  );
}
