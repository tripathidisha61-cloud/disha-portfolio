"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background radial spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-neutral-200/40 dark:bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]"
          >
            Hi, I&apos;m <span className="underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-8">Disha Tripathi</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-300"
          >
            Software Developer and AI/ML Enthusiast
          </motion.p>

          {/* Bio paragraph */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            3rd-year B.Tech Computer Science student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10).
            Passionate about architecting resilient full-stack applications, deep learning solutions, and developer
            tooling with performance, scalability, and recruiter-ready clean code.
          </motion.p>

          {/* Quick info row */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-500 dark:text-neutral-400 font-mono"
          >
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              RKGIT Ghaziabad • CSE 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              CGPA: 8.8 / 10
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {PERSONAL_INFO.location}
            </span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-all shadow-xs active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-neutral-500" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Connect
            </span>
            <div className="h-3 w-[1px] bg-neutral-300 dark:bg-neutral-700" />
            
            <a
              href={PERSONAL_INFO.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="LeetCode profile"
            >
              LeetCode
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
