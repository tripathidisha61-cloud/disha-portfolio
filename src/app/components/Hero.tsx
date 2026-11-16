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
  Trophy,
  GitBranch,
  Zap,
  Code2,
  FileCode,
} from "lucide-react";

interface HeroProps {
  onOpenRecruiter?: () => void;
}

export function Hero({ onOpenRecruiter }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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
      {/* Background radial spotlight in Deep Navy + Slate Blue + Cool Grey */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] bg-gradient-to-tr from-[#3B6FD8]/20 via-[#5B8BF7]/15 to-[#8DA4C4]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main narrative & CTA column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Status Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-[#1E2D4A] bg-white dark:bg-[#0E1B33] text-slate-800 dark:text-[#F1F5F9] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B8BF7] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B8BF7]" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#3B6FD8]/30 bg-[#3B6FD8]/10 text-[#3B6FD8] dark:text-[#8DA4C4]">
                <Trophy className="w-3.5 h-3.5 text-[#3B6FD8]" />
                <span>SIH 2026 Internal Cleared</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#5B8BF7]/30 bg-[#5B8BF7]/10 text-[#3B6FD8] dark:text-[#8DA4C4]">
                <GitBranch className="w-3.5 h-3.5 text-[#5B8BF7]" />
                <span>GSoC 2027 Aspirant</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#050B14] dark:text-[#F1F5F9] leading-[1.12]"
            >
              Hi, I&apos;m <span className="underline decoration-[#3B6FD8] dark:decoration-[#8DA4C4] underline-offset-8">Disha Tripathi</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl font-medium text-[#050B14] dark:text-slate-200"
            >
              Software Developer and AI/ML Enthusiast
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              3rd-year B.Tech Computer Science student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10).
              Internal level cleared for Smart India Hackathon (SIH 2026) and actively preparing for Google Summer of Code (GSoC 2027).
              Passionate about architecting resilient full-stack applications, deep learning solutions, and developer
              tooling with performance, scalability, and recruiter-ready clean code.
            </motion.p>

            {/* Quick info row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400 font-mono"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#3B6FD8]" />
                RKGIT Ghaziabad • CSE
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5B8BF7]" />
                CGPA: 8.8 / 10
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3B6FD8]" />
                {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#3B6FD8] text-white hover:bg-[#2B58B8] transition-all shadow-[0_0_25px_rgba(59,111,216,0.35)] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-[#1E2D4A] bg-white dark:bg-[#0E1B33] hover:bg-sky-50 dark:hover:bg-[#1E2D4A] text-[#050B14] dark:text-[#F1F5F9] transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#5B8BF7]" />
                <span>Download Resume</span>
              </a>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-[#3B6FD8]/40 bg-[#3B6FD8]/10 text-[#3B6FD8] dark:text-[#8DA4C4] hover:bg-[#3B6FD8]/20 transition-all shadow-xs active:scale-[0.98]"
                  aria-label="Open 60-Second Recruiter Fast-Track"
                >
                  <Zap className="w-4 h-4 text-[#3B6FD8]" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-slate-200 dark:border-[#1E2D4A] flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />

              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#3B6FD8] dark:hover:text-[#8DA4C4] hover:bg-sky-50 dark:hover:bg-[#0E1B33] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#3B6FD8] dark:hover:text-[#8DA4C4] hover:bg-sky-50 dark:hover:bg-[#0E1B33] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg text-slate-400 hover:text-[#3B6FD8] dark:hover:text-[#8DA4C4] hover:bg-sky-50 dark:hover:bg-[#0E1B33] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-slate-200 dark:border-[#1E2D4A] text-slate-500 hover:text-[#3B6FD8] dark:hover:text-[#8DA4C4] hover:bg-sky-50 dark:hover:bg-[#0E1B33] transition-colors"
                aria-label="LeetCode profile"
              >
                LeetCode (311+)
              </a>
            </motion.div>
          </motion.div>

          {/* Right column: Interactive Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-[#1E2D4A] bg-[#050B14] shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#03070D] border-b border-[#1E2D4A]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-[#8DA4C4]/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5 text-[#3B6FD8]" />
                    disha.candidate.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8DA4C4] font-medium">TypeScript</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] leading-relaxed text-slate-300 overflow-x-auto space-y-1 bg-[#050B14]">
                <div>
                  <span className="text-[#8DA4C4]">export const</span>{" "}
                  <span className="text-[#5B8BF7]">disha</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-[#F1F5F9]">&quot;Disha Tripathi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">degree:</span>{" "}
                  <span className="text-[#8DA4C4]">&quot;B.Tech Computer Science&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">college:</span>{" "}
                  <span className="text-[#F1F5F9]">&quot;RKGIT Ghaziabad&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">cgpa:</span>{" "}
                  <span className="text-[#8DA4C4] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">hackathons:</span> [
                  <span className="text-[#5B8BF7]">&quot;SIH 2026 Internal Cleared&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openSource:</span>{" "}
                  <span className="text-[#8DA4C4]">&quot;GSoC 2027 Aspirant&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">leetcodeSolved:</span>{" "}
                  <span className="text-[#5B8BF7] font-bold">311</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-slate-300">&quot;Python&quot;</span>,{" "}
                  <span className="text-slate-300">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-slate-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-slate-300">&quot;C++&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openToInternships:</span>{" "}
                  <span className="text-[#8DA4C4] font-bold">true</span>,
                </div>
                <div>{"};"}</div>
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-[#03070D] border-t border-[#1E2D4A] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-[#8DA4C4]">
                  <span className="w-2 h-2 rounded-full bg-[#8DA4C4] animate-pulse" />
                  Status: Available for Hire
                </span>
                <span className="text-slate-500">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
