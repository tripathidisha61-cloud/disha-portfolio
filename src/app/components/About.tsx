"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GraduationCap, Award, Compass, Code2 } from "lucide-react";

export function About() {
  const stats = [
    { label: "Current CGPA", value: PERSONAL_INFO.cgpa, note: "Top tier academic record" },
    { label: "Program", value: "B.Tech CSE", note: "3rd Year Undergraduate" },
    { label: "Core Focus", value: "Full-Stack & AI", note: "ML, Next.js, Systems" },
    { label: "Institution", value: "RKGIT", note: "Ghaziabad, AKTU" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              01 // Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About Me
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                I am a dedicated 3rd-year Computer Science and Engineering student at{" "}
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                  Raj Kumar Goel Institute of Technology, Ghaziabad
                </span>
                . With a strong foundation in computer science principles and a consistent{" "}
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                  8.8 / 10 CGPA
                </span>
                , I specialize in combining robust backend engineering with intuitive, responsive user experiences.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                My technical pursuits center on the intersection of modern web architectures and applied Artificial
                Intelligence. I enjoy developing intelligent systems—such as{" "}
                <span className="text-neutral-900 dark:text-neutral-200 font-medium">RepoMedic AI</span>{" "}
                and high-concurrency event platforms like{" "}
                <span className="text-neutral-900 dark:text-neutral-200 font-medium">Live Hackathon Leaderboard</span>.
                I thrive on solving complex algorithmic puzzles in C++ and Python while exploring cutting-edge retrieval
                mechanisms (RAG) and open-source contributions.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>
                Outside of coursework, I actively lead and participate in technical campus bodies including the{" "}
                <span className="text-neutral-900 dark:text-neutral-200 font-medium">GeeksforGeeks Student Chapter</span>
                , mentoring fellow students in Data Structures and Algorithms, coordinating hackathons, and preparing
                open-source research initiatives for programs like Google Summer of Code (GSoC 2026).
              </p>
            </Reveal>

            {/* Core Values / Philosophy */}
            <Reveal delay={0.4}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40">
                  <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-200 mb-1 text-sm">
                    <Code2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    Clean & Scalable Code
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Strong focus on type safety, modular design patterns, and maintainable architectures.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40">
                  <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-200 mb-1 text-sm">
                    <Compass className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    Continuous Growth
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Proactive explorer of modern tooling, ML pipelines, and distributed cloud computing.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Quick Metrics & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                      Education & Academics
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Academic standing & milestone record
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40"
                    >
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-lg font-bold text-neutral-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-neutral-400 dark:text-neutral-500">
                        {stat.note}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-neutral-400" />
                    Consistent Top Ranker
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">2022 - 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
