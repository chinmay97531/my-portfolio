"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setOpen(false);
    setActive(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`section-shell flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/10 dark:shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(event) => goToSection(event, "#home")}
          className="font-display text-lg font-semibold tracking-tight text-fg/90 transition-colors hover:text-fg"
        >
          Chinmay Mittal
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => goToSection(event, link.href)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href ? "text-fg" : "text-fg/70 hover:text-fg"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent/70" />
                )}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle className="ml-1" />
          </li>
          <li>
            <a
              href="#contact"
              onClick={(event) => goToSection(event, "#contact")}
              className="ml-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg text-fg/80 transition-colors hover:bg-fg/5"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="section-shell mt-2 md:hidden"
          >
            <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => goToSection(event, link.href)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-fg/5 hover:text-fg ${
                      active === link.href ? "bg-fg/5 text-fg" : "text-fg/80"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(event) => goToSection(event, "#contact")}
                  className="mt-1 block rounded-lg bg-accent px-4 py-3 text-center text-base font-semibold text-ink"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
