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
      {/* Background radial spotlight in Obsidian Black + Vibrant Purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] bg-gradient-to-tr from-[#8B5CF6]/25 via-[#C084FC]/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-800 bg-[#18181B]/90 text-[#FAFAFA] backdrop-blur-sm shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C084FC] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C084FC]" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#C084FC]">
                <Trophy className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>SIH 2026 Internal Cleared</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#C084FC]/30 bg-[#C084FC]/10 text-[#C084FC]">
                <GitBranch className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>GSoC 2027 Aspirant</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-[#FAFAFA] leading-[1.12]"
            >
              Hi, I&apos;m <span className="underline decoration-[#8B5CF6] dark:decoration-[#C084FC] underline-offset-8">Disha Tripathi</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300"
            >
              Software Developer and AI/ML Enthusiast
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              3rd-year B.Tech Computer Science student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10).
              Internal level cleared for Smart India Hackathon (SIH 2026) and actively preparing for Google Summer of Code (GSoC 2027).
              Passionate about architecting resilient full-stack applications, deep learning solutions, and developer
              tooling with performance, scalability, and recruiter-ready clean code.
            </motion.p>

            {/* Quick info row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-500 dark:text-zinc-400 font-mono"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                RKGIT Ghaziabad • CSE
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
                CGPA: 8.8 / 10
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-700 bg-[#18181B] hover:bg-[#27272A] text-[#FAFAFA] transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#C084FC]" />
                <span>Download Resume</span>
              </a>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-[#C084FC]/40 bg-[#C084FC]/10 text-[#C084FC] hover:bg-[#C084FC]/20 transition-all shadow-xs active:scale-[0.98]"
                  aria-label="Open 60-Second Recruiter Fast-Track"
                >
                  <Zap className="w-4 h-4 text-[#C084FC]" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Connect
              </span>
              <div className="h-3 w-[1px] bg-zinc-300 dark:bg-zinc-700" />

              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] hover:bg-zinc-100 dark:hover:bg-[#18181B] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] hover:bg-zinc-100 dark:hover:bg-[#18181B] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg text-zinc-400 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] hover:bg-zinc-100 dark:hover:bg-[#18181B] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] hover:bg-zinc-100 dark:hover:bg-[#18181B] transition-colors"
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
            <div className="rounded-2xl border border-zinc-800 bg-[#18181B]/95 backdrop-blur-md shadow-[0_15px_35px_rgba(9,9,11,0.9)] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#09090B] border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-[#C084FC]/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    disha.candidate.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C084FC] font-medium">TypeScript</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] leading-relaxed text-zinc-300 overflow-x-auto space-y-1 bg-[#121215]/90">
                <div>
                  <span className="text-[#8B5CF6]">export const</span>{" "}
                  <span className="text-[#C084FC]">disha</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-[#FAFAFA]">&quot;Disha Tripathi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">degree:</span>{" "}
                  <span className="text-[#C084FC]">&quot;B.Tech Computer Science&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">college:</span>{" "}
                  <span className="text-[#FAFAFA]">&quot;RKGIT Ghaziabad&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">cgpa:</span>{" "}
                  <span className="text-[#C084FC] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">hackathons:</span> [
                  <span className="text-[#8B5CF6]">&quot;SIH 2026 Internal Cleared&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">openSource:</span>{" "}
                  <span className="text-[#C084FC]">&quot;GSoC 2027 Aspirant&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">leetcodeSolved:</span>{" "}
                  <span className="text-[#8B5CF6] font-bold">311</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">stack:</span> [
                  <span className="text-zinc-300">&quot;Python&quot;</span>,{" "}
                  <span className="text-zinc-300">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-zinc-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-zinc-300">&quot;C++&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">openToInternships:</span>{" "}
                  <span className="text-[#C084FC] font-bold">true</span>,
                </div>
                <div>{"};"}</div>
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-[#09090B] border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-[#C084FC]">
                  <span className="w-2 h-2 rounded-full bg-[#C084FC] animate-pulse" />
                  Status: Available for Hire
                </span>
                <span className="text-zinc-500">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
