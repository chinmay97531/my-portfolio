"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setShowAvatar(y > window.innerHeight * 0.55);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-base-200/80 bg-white/90 py-2.5 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <AnimatePresence initial={false}>
            {showAvatar && (
              <motion.span
                key="nav-avatar"
                initial={{ opacity: 0, scale: 0.7, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 32 }}
                exit={{ opacity: 0, scale: 0.7, width: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-8 shrink-0 overflow-hidden rounded-full ring-2 ring-base-200"
              >
                <Image
                  src="/images/mine.webp"
                  alt="Chinmay Mittal"
                  fill
                  sizes="32px"
                  className="scale-110 object-cover object-top"
                />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-base-900">
            Chinmay<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-base-500 transition-colors hover:bg-base-100 hover:text-base-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#contact" className="btn-primary !py-2 !text-sm">
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg text-base-800 transition-colors hover:bg-base-100 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="section-shell mt-3 md:hidden"
          >
            <ul className="surface flex flex-col gap-0.5 rounded-xl p-2 shadow-soft">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-base-800 transition-colors hover:bg-base-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
