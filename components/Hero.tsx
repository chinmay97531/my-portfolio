"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  role,
  githubUrl,
  linkedinUrl,
  resumeUrl,
  leetcodeUrl,
} from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-40 sm:pb-48"
    >
      <div className="section-shell">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </motion.span>

            <motion.p
              variants={item}
              className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              Hi, I&apos;m Chinmay Mittal
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              I&apos;m a{" "}
              <span className="text-gradient animate-gradient-x">{role}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
            >
              I design and build fast, accessible, and delightful web and app
              experiences — from polished front-ends to robust back-ends.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-base-950 transition-transform hover:scale-105"
              >
                View my work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-3">
                <SocialIconLink href={githubUrl} label="GitHub">
                  <Github size={20} />
                </SocialIconLink>
                <SocialIconLink href={linkedinUrl} label="LinkedIn">
                  <Linkedin size={20} />
                </SocialIconLink>
                <SocialIconLink href={leetcodeUrl} label="LeetCode">
                  <SiLeetcode size={19} />
                </SocialIconLink>
                <SocialIconLink href={resumeUrl} label="Resume">
                  <FileText size={20} />
                </SocialIconLink>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="group relative flex items-center justify-center">
              {/* Soft spotlight glow behind the photo */}
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/30 via-sky-400/20 to-transparent blur-3xl sm:h-[380px] sm:w-[380px]" />
              <div className="relative animate-float">
                <Image
                  src="/images/mine.webp"
                  alt="Chinmay Mittal"
                  width={420}
                  height={420}
                  priority
                  className="h-[300px] w-[300px] rounded-full object-cover ring-1 ring-white/10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)] sm:h-[400px] sm:w-[400px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Oversized editorial name band */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-4 flex w-full select-none justify-center overflow-hidden sm:bottom-8"
        aria-hidden="true"
      >
        <span className="bg-gradient-to-b from-white/[0.12] to-white/[0.02] bg-clip-text font-display text-[19vw] font-black leading-none tracking-tighter text-transparent">
          CHINMAY&nbsp;MITTAL
        </span>
      </motion.div>
    </section>
  );
}

function SocialIconLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
    >
      {children}
    </a>
  );
}
