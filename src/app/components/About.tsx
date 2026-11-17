"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GraduationCap, Award, Compass, Code2, Trophy, GitPullRequest, Download, Sparkles, Brain, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function About() {
  const stats = [
    { label: "Current CGPA", value: PERSONAL_INFO.cgpa, note: "RKGIT CSE Undergrad" },
    { label: "Program", value: "B.Tech CSE", note: "3rd Year (Class of 2028)" },
    { label: "National Hackathon", value: "SIH 2026", note: "Internal Level Cleared" },
    { label: "Open Source", value: "GSoC 2027", note: "Proposal & Research" },
  ];

  const exploringTopics = [
    { name: "Deep Learning & PyTorch", icon: <Brain className="w-3.5 h-3.5 text-[#8B5CF6]" />, tag: "AI/ML" },
    { name: "Retrieval-Augmented Generation (RAG)", icon: <Sparkles className="w-3.5 h-3.5 text-[#5CC8B2]" />, tag: "LLMs" },
    { name: "High-Throughput C++ & FastAPI", icon: <Cpu className="w-3.5 h-3.5 text-[#8BAE44] dark:text-[#D6F36A]" />, tag: "Backend" },
    { name: "Telemetry & Sensor Architectures", icon: <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />, tag: "Telemetry" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#203F40]/80 bg-[#EBF1EA]/70 dark:bg-[#122526] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#5CC8B2]">
              01 // Background & Identity
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142522] dark:text-[#F4F7F3]">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#A6B8B2] max-w-2xl">
            Passionate software developer and undergraduate engineer blending rigorous computer science fundamentals with applied artificial intelligence and scalable distributed systems.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-[#A6B8B2] text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                I am a dedicated 3rd-year Computer Science and Engineering student at{" "}
                <span className="font-semibold text-[#142522] dark:text-[#F4F7F3]">
                  Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad
                </span>
                . Maintaining a top-tier{" "}
                <span className="font-semibold text-[#2563EB] dark:text-[#5CC8B2]">
                  8.8 / 10 CGPA
                </span>
                , my engineering philosophy revolves around solving intricate computational problems through clean, maintainable, and mathematically sound architectures.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                I cleared the internal qualification round for{" "}
                <span className="font-semibold text-[#142522] dark:text-[#F4F7F3]">
                  Smart India Hackathon (SIH 2026)
                </span>{" "}
                and am actively conducting preparatory research for{" "}
                <span className="font-semibold text-[#2563EB] dark:text-[#5CC8B2]">
                  Google Summer of Code (GSoC 2027)
                </span>
                , focusing on open-source honeynet telemetry capture pipelines and automated vulnerability diagnostics.
              </p>
            </Reveal>

            {/* Approach to Problem Solving */}
            <Reveal delay={0.3}>
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-xs space-y-3">
                <div className="flex items-center gap-2 font-semibold text-[#142522] dark:text-[#F4F7F3] text-sm">
                  <Compass className="w-4 h-4 text-[#2563EB] dark:text-[#8BAE44] dark:text-[#D6F36A]" />
                  <span>My Approach to Problem Solving</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-[#A6B8B2] leading-relaxed">
                  I approach engineering bottlenecks from first principles: decomposing requirements into formal invariants, benchmarking p99 latency trade-offs, and shipping modular, observable code with end-to-end automated testing.
                </p>
              </div>
            </Reveal>

            {/* Core Values / Highlights */}
            <Reveal delay={0.4}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-xs">
                  <div className="flex items-center gap-2 font-medium text-[#142522] dark:text-[#F4F7F3] mb-1 text-sm">
                    <Trophy className="w-4 h-4 text-[#FBBF24]" />
                    SIH 2026 Internal Cleared
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    Selected in the college evaluation round for developing innovative real-time institutional telemetry software.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-xs">
                  <div className="flex items-center gap-2 font-medium text-[#142522] dark:text-[#F4F7F3] mb-1 text-sm">
                    <GitPullRequest className="w-4 h-4 text-[#5CC8B2]" />
                    GSoC 2027 Preparation
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    Actively preparing open-source research proposals and contributing bug fixes to upstream telemetry tools.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Resume Action */}
            <Reveal delay={0.5}>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </Link>
                <span className="text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
                  Updated for 2026/2027 Recruiter Cycles
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Academic Card & Currently Exploring */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-[#203F40]">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1718] text-[#2563EB] dark:text-[#5CC8B2]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#142522] dark:text-[#F4F7F3] text-sm">
                      Academic Overview
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                      RKGIT Ghaziabad • CSE Class of 2028
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5 rounded-xl border border-slate-100 dark:border-[#203F40] bg-slate-50/80 dark:bg-[#0B1718]"
                    >
                      <div className="text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-base sm:text-lg font-bold text-[#2563EB] dark:text-[#5CC8B2] truncate">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
                        {stat.note}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-500 dark:text-[#94A3B8] border-t border-slate-100 dark:border-[#203F40] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#5CC8B2]" />
                    Academic Excellence
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">2022 - 2028</span>
                </div>
              </div>
            </Reveal>

            {/* Currently Exploring Card */}
            <Reveal delay={0.3}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8BAE44] dark:text-[#D6F36A]" />
                  <h3 className="font-semibold text-[#142522] dark:text-[#F4F7F3] text-sm">
                    Currently Exploring
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                  Active technical frontiers where I am currently building prototypes, studying whitepapers, and committing code:
                </p>

                <div className="space-y-2.5">
                  {exploringTopics.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-[#203F40] bg-slate-50 dark:bg-[#0B1718] text-xs"
                    >
                      <div className="flex items-center gap-2.5 text-[#142522] dark:text-[#F4F7F3] font-medium">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-slate-200 dark:border-[#203F40] text-slate-600 dark:text-[#A6B8B2]">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
