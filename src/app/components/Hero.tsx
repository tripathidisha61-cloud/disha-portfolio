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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F4F7F3] dark:bg-[#0B1718] transition-colors">
      {/* Background radial spotlight in Obsidian × Glacier × Acid Lime */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] bg-gradient-to-tr from-[#246D61]/15 dark:from-[#5CC8B2]/20 via-[#5CC8B2]/15 to-[#8BAE44]/10 dark:to-[#D6F36A]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[#D8E2D7] dark:border-[#203F40] bg-white dark:bg-[#122526] text-[#142522] dark:text-[#F1F5EF] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8BAE44] dark:bg-[#D6F36A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8BAE44] dark:bg-[#D6F36A]" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#246D61]/30 dark:border-[#5CC8B2]/30 bg-[#246D61]/10 dark:bg-[#5CC8B2]/10 text-[#246D61] dark:text-[#5CC8B2]">
                <Trophy className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>SIH 2026 Internal Cleared</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#8BAE44]/30 dark:border-[#D6F36A]/30 bg-[#8BAE44]/10 dark:bg-[#D6F36A]/10 text-[#246D61] dark:text-[#D6F36A]">
                <GitBranch className="w-3.5 h-3.5 text-[#8BAE44] dark:text-[#D6F36A]" />
                <span>GSoC 2027 Aspirant</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#142522] dark:text-[#F1F5EF] leading-[1.14]"
            >
              Hi, I&apos;m <span className="underline decoration-[#246D61] dark:decoration-[#D6F36A] underline-offset-8">Disha Tripathi</span> — I build <span className="text-[#246D61] dark:text-[#5CC8B2]">intelligent, scalable</span> & impactful solutions.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg font-medium text-slate-700 dark:text-[#A6B8B2]"
            >
              Software Engineering · AI · Innovation
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-[#A6B8B2] leading-relaxed"
            >
              3rd-year B.Tech Computer Science student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10).
              Beyond the Ordinary. Built for What&apos;s Next. with resilient full-stack architectures, applied machine learning systems, and high-performance algorithms.
            </motion.p>

            {/* Quick info row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400 font-mono"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#246D61] dark:text-[#5CC8B2]" />
                RKGIT Ghaziabad • CSE
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#246D61] dark:text-[#5CC8B2]" />
                CGPA: 8.8 / 10
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#246D61] dark:text-[#5CC8B2]" />
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#246D61] hover:bg-[#1B5249] dark:bg-[#5CC8B2] dark:hover:bg-[#4EB39E] text-white dark:text-[#0B1718] transition-all shadow-[0_0_20px_rgba(92,200,178,0.25)] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-[#D8E2D7] dark:border-[#203F40] bg-white dark:bg-[#193334] hover:bg-[#EBF1EA] dark:hover:bg-[#203F40] text-[#142522] dark:text-[#F1F5EF] transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#246D61] dark:text-[#5CC8B2]" />
                <span>Download Resume</span>
              </a>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-[#8BAE44]/40 bg-[#8BAE44]/10 text-[#246D61] hover:bg-[#8BAE44]/20 dark:border-[#D6F36A]/30 dark:bg-[#D6F36A]/10 dark:text-[#D6F36A] dark:hover:bg-[#D6F36A]/20 transition-all shadow-xs active:scale-[0.98]"
                  aria-label="Open 60-Second Recruiter Fast-Track"
                >
                  <Zap className="w-4 h-4 text-[#8BAE44] dark:text-[#D6F36A]" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-[#D8E2D7] dark:border-[#203F40] flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />

              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#246D61] dark:hover:text-[#5CC8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#246D61] dark:hover:text-[#5CC8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg text-slate-400 hover:text-[#246D61] dark:hover:text-[#5CC8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-[#D8E2D7] dark:border-[#203F40] text-slate-500 hover:text-[#246D61] dark:hover:text-[#5CC8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
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
            <div className="rounded-2xl border border-[#D8E2D7] dark:border-[#203F40] bg-white dark:bg-[#0B1718] shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#EBF1EA] dark:bg-[#122526] border-b border-[#D8E2D7] dark:border-[#203F40]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-[#8BAE44] dark:bg-[#D6F36A]" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-[#A6B8B2] flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5 text-[#246D61] dark:text-[#5CC8B2]" />
                    disha.candidate.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#246D61] dark:text-[#D6F36A] font-medium">TypeScript</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] leading-relaxed text-slate-700 dark:text-slate-300 overflow-x-auto space-y-1 bg-[#F4F7F3]/70 dark:bg-[#0B1718]">
                <div>
                  <span className="text-[#246D61] dark:text-[#5CC8B2]">export const</span>{" "}
                  <span className="text-[#8BAE44] dark:text-[#D6F36A]">disha</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">name:</span>{" "}
                  <span className="text-[#142522] dark:text-[#F1F5EF]">&quot;Disha Tripathi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">degree:</span>{" "}
                  <span className="text-[#246D61] dark:text-[#5CC8B2]">&quot;B.Tech Computer Science&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">college:</span>{" "}
                  <span className="text-[#142522] dark:text-[#F1F5EF]">&quot;RKGIT Ghaziabad&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">cgpa:</span>{" "}
                  <span className="text-[#8BAE44] dark:text-[#D6F36A] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">hackathons:</span> [
                  <span className="text-[#246D61] dark:text-[#5CC8B2]">&quot;SIH 2026 Internal Cleared&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">openSource:</span>{" "}
                  <span className="text-[#8BAE44] dark:text-[#D6F36A]">&quot;GSoC 2027 Aspirant&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">leetcodeSolved:</span>{" "}
                  <span className="text-[#246D61] dark:text-[#5CC8B2] font-bold">311</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">stack:</span> [
                  <span className="text-slate-700 dark:text-[#A6B8B2]">&quot;Python&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#A6B8B2]">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#A6B8B2]">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#A6B8B2]">&quot;C++&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#A6B8B2]">openToInternships:</span>{" "}
                  <span className="text-[#8BAE44] dark:text-[#D6F36A] font-bold">true</span>,
                </div>
                <div>{"};"}</div>
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-[#EBF1EA] dark:bg-[#122526] border-t border-[#D8E2D7] dark:border-[#203F40] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-[#A6B8B2]">
                <span className="flex items-center gap-1.5 text-[#246D61] dark:text-[#D6F36A]">
                  <span className="w-2 h-2 rounded-full bg-[#8BAE44] dark:bg-[#D6F36A] animate-pulse" />
                  Status: Available for Hire
                </span>
                <span className="text-slate-400 dark:text-[#A6B8B2]">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
