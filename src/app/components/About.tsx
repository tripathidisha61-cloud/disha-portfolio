"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GraduationCap, Award, Compass, Code2, Trophy, GitPullRequest } from "lucide-react";

export function About() {
  const stats = [
    { label: "Current CGPA", value: PERSONAL_INFO.cgpa, note: "Top tier academic record" },
    { label: "Program", value: "B.Tech CSE", note: "3rd Year Undergraduate" },
    { label: "National Hackathon", value: "SIH 2026", note: "Internal Level Cleared" },
    { label: "Open Source", value: "GSoC 2027", note: "Research & Preparation" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3B82F6] dark:text-[#60A5FA]">
              01 // Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111315] dark:text-[#F8FAFC]">
            About Me
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                I am a dedicated 3rd-year Computer Science and Engineering student at{" "}
                <span className="font-semibold text-[#111315] dark:text-[#F8FAFC]">
                  Raj Kumar Goel Institute of Technology, Ghaziabad
                </span>
                . With a strong foundation in computer science fundamentals and a consistent{" "}
                <span className="font-semibold text-[#3B82F6] dark:text-[#60A5FA]">
                  8.8 / 10 CGPA
                </span>
                , I focus on building high-performance backend APIs, scalable web architectures, and applied AI systems.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                I have cleared the internal college qualification round for{" "}
                <span className="font-semibold text-[#111315] dark:text-[#F8FAFC]">
                  Smart India Hackathon (SIH 2026)
                </span>{" "}
                and am actively gearing up for{" "}
                <span className="font-semibold text-[#3B82F6] dark:text-[#60A5FA]">
                  Google Summer of Code (GSoC 2027)
                </span>
                , engaging with open-source communities and honeynet telemetry architectures. My project portfolio spans{" "}
                <span className="text-[#111315] dark:text-[#F8FAFC] font-medium">RepoMedic AI</span>{" "}
                (intelligent repo diagnostics), the{" "}
                <span className="text-[#111315] dark:text-[#F8FAFC] font-medium">Live Hackathon Leaderboard</span>, and{" "}
                <span className="text-[#111315] dark:text-[#F8FAFC] font-medium">SecureHealth Telehealth Platform</span>.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>
                Beyond individual development, I serve as a student leader at the{" "}
                <span className="text-[#111315] dark:text-[#F8FAFC] font-medium">
                  GeeksforGeeks Student Chapter (RKGIT)
                </span>
                , curating algorithmic challenges and mentoring peers in C++ and Python. I also coordinated a 100+ participant campus event as an{" "}
                <span className="text-[#111315] dark:text-[#F8FAFC] font-medium">
                  NSS Event Coordinator
                </span>
                , managing end-to-end logistics and volunteer execution.
              </p>
            </Reveal>

            {/* Core Values / Highlights */}
            <Reveal delay={0.4}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#20252B] shadow-xs">
                  <div className="flex items-center gap-2 font-medium text-[#111315] dark:text-[#F8FAFC] mb-1 text-sm">
                    <Trophy className="w-4 h-4 text-amber-500 dark:text-[#60A5FA]" />
                    SIH 2026 Internal Cleared
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Qualified in the internal campus evaluation round with innovative problem-solving prototypes.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#20252B] shadow-xs">
                  <div className="flex items-center gap-2 font-medium text-[#111315] dark:text-[#F8FAFC] mb-1 text-sm">
                    <GitPullRequest className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA]" />
                    GSoC 2027 Preparation
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Deep-diving into open-source repositories and proposal planning for GSoC 2027.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Quick Metrics & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#20252B] shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111315] text-[#3B82F6] dark:text-[#60A5FA]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111315] dark:text-[#F8FAFC] text-sm">
                      Education & Milestones
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      RKGIT Ghaziabad • CSE Class of 2028
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#111315]"
                    >
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-base sm:text-lg font-bold text-[#3B82F6] dark:text-[#60A5FA] truncate">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
                        {stat.note}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#3B82F6] dark:text-[#60A5FA]" />
                    Consistent Top Ranker
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">2022 - 2028</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
