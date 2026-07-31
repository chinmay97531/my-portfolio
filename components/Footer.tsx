"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  emailAddress,
  emailUrl,
  githubUrl,
  linkedinUrl,
  leetcodeUrl,
  phoneDisplay,
  whatsappUrl,
} from "@/lib/data";

const contactLinks = [
  { label: "GitHub", href: githubUrl, icon: Github },
  { label: "LinkedIn", href: linkedinUrl, icon: Linkedin },
  { label: "LeetCode", href: leetcodeUrl, icon: SiLeetcode },
  { label: "Email", href: emailUrl, icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-base-800 bg-base-900 px-8 py-14 text-center text-white sm:px-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            Contact
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Have a role, project, or idea in mind? I&apos;d love to hear from
            you — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
            >
              <Mail size={16} />
              {emailAddress}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-soft/50 hover:bg-white/10"
            >
              <Phone size={16} />
              {phoneDisplay}
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-2.5">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-accent-soft/50 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-end gap-3 border-t border-base-200 pt-8 text-sm text-base-500 sm:flex-row">
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
