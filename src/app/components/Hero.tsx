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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F9FC] dark:bg-[#0A1020] transition-colors">
      {/* Background radial spotlight in Midnight Engineering (Primary Blue, Electric Blue, Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[400px] bg-gradient-to-tr from-[#2563EB]/20 via-[#60A5FA]/15 to-[#22D3EE]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-[#263B5A] bg-white dark:bg-[#111A2B] text-slate-800 dark:text-[#F7F9FC] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA]">
                <Trophy className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>SIH 2026 Internal Cleared</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#2563EB] dark:text-[#22D3EE]">
                <GitBranch className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>GSoC 2027 Aspirant</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828] dark:text-[#F7F9FC] leading-[1.14]"
            >
              Hi, I&apos;m <span className="underline decoration-[#2563EB] dark:decoration-[#22D3EE] underline-offset-8">Disha Tripathi</span> — I build <span className="text-[#2563EB] dark:text-[#60A5FA]">intelligent, scalable</span> & impactful solutions.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-[#C9D4E5]"
            >
              Software Development | AI/ML | Problem Solving
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed"
            >
              3rd-year B.Tech Computer Science student at Raj Kumar Goel Institute of Technology (CGPA: 8.8/10).
              Engineering ideas into reality with resilient full-stack architectures, applied machine learning systems, and high-performance algorithms.
            </motion.p>

            {/* Quick info row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400 font-mono"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                RKGIT Ghaziabad • CSE
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                CGPA: 8.8 / 10
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-[#263B5A] bg-white dark:bg-[#172238] hover:bg-sky-50 dark:hover:bg-[#263B5A] text-[#0A1020] dark:text-[#F7F9FC] transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#2563EB]" />
                <span>Download Resume</span>
              </a>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] hover:bg-[#2563EB]/20 transition-all shadow-xs active:scale-[0.98]"
                  aria-label="Open 60-Second Recruiter Fast-Track"
                >
                  <Zap className="w-4 h-4 text-[#2563EB]" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-slate-200 dark:border-[#263B5A] flex items-center gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />

              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg text-slate-400 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-slate-200 dark:border-[#263B5A] text-slate-500 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
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
            <div className="rounded-2xl border border-slate-200 dark:border-[#263B5A] bg-white dark:bg-[#0A1020] shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#111A2B] border-b border-slate-200 dark:border-[#263B5A]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-[#22D3EE]/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-[#C9D4E5] flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    disha.candidate.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#2563EB] dark:text-[#22D3EE] font-medium">TypeScript</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] leading-relaxed text-slate-700 dark:text-slate-300 overflow-x-auto space-y-1 bg-slate-50/60 dark:bg-[#0A1020]">
                <div>
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">export const</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#22D3EE]">disha</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">name:</span>{" "}
                  <span className="text-[#101828] dark:text-[#F7F9FC]">&quot;Disha Tripathi&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">degree:</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">&quot;B.Tech Computer Science&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">college:</span>{" "}
                  <span className="text-[#101828] dark:text-[#F7F9FC]">&quot;RKGIT Ghaziabad&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">cgpa:</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#22D3EE] font-bold">8.8</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">hackathons:</span> [
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">&quot;SIH 2026 Internal Cleared&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">openSource:</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#22D3EE]">&quot;GSoC 2027 Aspirant&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">leetcodeSolved:</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">311</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">stack:</span> [
                  <span className="text-slate-700 dark:text-[#C9D4E5]">&quot;Python&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#C9D4E5]">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#C9D4E5]">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-slate-700 dark:text-[#C9D4E5]">&quot;C++&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-[#94A3B8]">openToInternships:</span>{" "}
                  <span className="text-[#2563EB] dark:text-[#22D3EE] font-bold">true</span>,
                </div>
                <div>{"};"}</div>
              </div>

              {/* Status footer */}
              <div className="px-4 py-2.5 bg-slate-100 dark:bg-[#111A2B] border-t border-slate-200 dark:border-[#263B5A] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#22D3EE]">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                  Status: Available for Hire
                </span>
                <span className="text-slate-400 dark:text-[#94A3B8]">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
