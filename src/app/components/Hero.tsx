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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F3F8FA] dark:bg-[#0D1B29] transition-colors">
      {/* Background radial spotlight in Obsidian × Glacier × Acid Lime */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] bg-gradient-to-tr from-[#147F91]/15 dark:from-[#18A3B7]/20 via-[#18A3B7]/15 to-[#147F91]/10 dark:to-[#27E6EC]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#122638] text-[#142F40] dark:text-[#F2FAFC] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#147F91] dark:bg-[#27E6EC] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#147F91] dark:bg-[#27E6EC]" />
                </span>
                <span className="uppercase text-[11px] font-mono tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#147F91]/30 dark:border-[#18A3B7]/30 bg-[#147F91]/10 dark:bg-[#18A3B7]/10 text-[#147F91] dark:text-[#18A3B7]">
                <Trophy className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>SIH 2026 Internal Cleared</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#147F91]/30 dark:border-[#27E6EC]/30 bg-[#147F91]/10 dark:bg-[#27E6EC]/10 text-[#147F91] dark:text-[#27E6EC]">
                <GitBranch className="w-3.5 h-3.5 text-[#147F91] dark:text-[#27E6EC]" />
                <span>GSoC &apos;26 Contributor &bull; GSoC &apos;27</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#142F40] dark:text-[#F2FAFC] leading-[1.15]"
            >
              Hi, I&apos;m <span className="underline decoration-[#147F91] dark:decoration-[#27E6EC] underline-offset-8">Disha Tripathi</span> — Building ideas into <span className="text-[#147F91] dark:text-[#27E6EC]">intelligent solutions</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-3 text-base sm:text-lg font-medium text-[#147F91] dark:text-[#5AA5CD]"
            >
              Software Engineer &amp; AI/ML Enthusiast
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-[#B5C8D5] leading-relaxed"
            >
              I design, develop and explore technology-driven solutions to meaningful real-world problems. 3rd-year B.Tech CSE student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10), Smart India Hackathon (SIH 2026) internal level cleared, GSoC 2026 contributor with The Honeynet Project, and actively preparing for GSoC 2027.
            </motion.p>

            {/* Quick stats pills */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] text-xs font-mono shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#147F91] dark:text-[#27E6EC]" />
                <span className="font-bold text-[#142F40] dark:text-[#F2FAFC]">8.8</span>
                <span className="text-slate-500 dark:text-[#B5C8D5]">CGPA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] text-xs font-mono shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-[#147F91] dark:text-[#5AA5CD]" />
                <span className="font-bold text-[#142F40] dark:text-[#F2FAFC]">311+</span>
                <span className="text-slate-500 dark:text-[#B5C8D5]">LeetCode</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] text-xs font-mono shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#147F91] dark:text-[#27E6EC]" />
                <span className="font-bold text-[#142F40] dark:text-[#F2FAFC]">CSE</span>
                <span className="text-slate-500 dark:text-[#B5C8D5]">RKGIT</span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#147F91] hover:bg-[#106675] dark:bg-[#18A3B7] dark:hover:bg-[#27E6EC] text-white dark:text-[#0D1B29] transition-all shadow-[0_4px_20px_rgba(24,163,183,0.3)] active:scale-[0.98]"
              >
                <span>Explore Projects ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] hover:bg-[#E5F0F4] dark:hover:bg-[#1E536E] text-[#142F40] dark:text-[#F2FAFC] transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#147F91] dark:text-[#5AA5CD]" />
                <span>Download Resume</span>
              </a>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-[#147F91]/40 bg-[#147F91]/10 text-[#147F91] hover:bg-[#147F91]/20 dark:border-[#27E6EC]/30 dark:bg-[#27E6EC]/10 dark:text-[#27E6EC] dark:hover:bg-[#27E6EC]/20 transition-all shadow-xs active:scale-[0.98]"
                  aria-label="Open 60-Second Recruiter Fast-Track"
                >
                  <Zap className="w-4 h-4 text-[#147F91] dark:text-[#27E6EC]" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-[#D9E6EC] dark:border-[#29495D] flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />

              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#147F91] dark:hover:text-[#18A3B7] hover:bg-[#E5F0F4] dark:hover:bg-[#1A334A] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#147F91] dark:hover:text-[#18A3B7] hover:bg-[#E5F0F4] dark:hover:bg-[#1A334A] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg text-slate-400 hover:text-[#147F91] dark:hover:text-[#18A3B7] hover:bg-[#E5F0F4] dark:hover:bg-[#1A334A] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-[#D9E6EC] dark:border-[#29495D] text-slate-500 hover:text-[#147F91] dark:hover:text-[#18A3B7] hover:bg-[#E5F0F4] dark:hover:bg-[#1A334A] transition-colors"
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
            <div className="rounded-2xl border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#0D1B29] shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#E5F0F4] dark:bg-[#122638] border-b border-[#D9E6EC] dark:border-[#29495D]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-[#147F91] dark:bg-[#27E6EC]" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-[#B5C8D5] flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5 text-[#147F91] dark:text-[#18A3B7]" />
                    disha.candidate.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#147F91] dark:text-[#27E6EC] font-medium">TypeScript</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] leading-relaxed text-slate-700 dark:text-slate-300 overflow-x-auto space-y-1 bg-[#F3F8FA]/70 dark:bg-[#0D1B29]">
                <div>
                  <span className="text-[#147F91] dark:text-[#18A3B7]">export const</span>{" "}
                  <span className="text-[#147F91] dark:text-[#27E6EC]">disha</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">name:</span>{" "}
                  <span className="text-[#142F40] dark:text-[#F2FAFC]">&quot;Disha Tripathi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">degree:</span>{" "}
                  <span className="text-[#147F91] dark:text-[#18A3B7]">&quot;B.Tech Computer Science&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">college:</span>{" "}
                  <span className="text-[#142F40] dark:text-[#F2FAFC]">&quot;RKGIT Ghaziabad&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">cgpa:</span>{" "}
                  <span className="text-[#147F91] dark:text-[#27E6EC] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">hackathons:</span> [
                  <span className="text-[#147F91] dark:text-[#18A3B7]">&quot;SIH 2026 Internal Cleared&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">openSource:</span>{" "}
                  <span className="text-[#147F91] dark:text-[#27E6EC]">&quot;GSoC &apos;26 (Honeynet) &bull; GSoC &apos;27&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">leetcodeSolved:</span>{" "}
                  <span className="text-[#147F91] dark:text-[#18A3B7] font-bold">311</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">stack:</span> [
                  <span className="text-slate-700 dark:text-[#B5C8D5]">&quot;Python&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#B5C8D5]">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#B5C8D5]">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#B5C8D5]">&quot;C++&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#B5C8D5]">openToInternships:</span>{" "}
                  <span className="text-[#147F91] dark:text-[#27E6EC] font-bold">true</span>,
                </div>
                <div>{"};"}</div>
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-[#E5F0F4] dark:bg-[#122638] border-t border-[#D9E6EC] dark:border-[#29495D] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-[#B5C8D5]">
                <span className="flex items-center gap-1.5 text-[#147F91] dark:text-[#27E6EC]">
                  <span className="w-2 h-2 rounded-full bg-[#147F91] dark:bg-[#27E6EC] animate-pulse" />
                  Status: Available for Hire
                </span>
                <span className="text-slate-400 dark:text-[#B5C8D5]">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
