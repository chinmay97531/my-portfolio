"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { githubUrl, linkedinUrl, leetcodeUrl } from "@/lib/data";

const contactLinks = [
  { label: "GitHub", href: githubUrl, icon: Github },
  { label: "LinkedIn", href: linkedinUrl, icon: Linkedin },
  { label: "LeetCode", href: leetcodeUrl, icon: SiLeetcode },
  { label: "Email", href: "mailto:chinmaymittal0000@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.15),transparent_60%)]" />
          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
              Have a project in mind or just want to say hi? My inbox is always
              open — I&apos;ll get back to you as soon as I can.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:chinmaymittal0000@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-base-950 transition-transform hover:scale-105"
              >
                <Mail size={18} />
                Say hello
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
