"use client";

import { EXPERIENCES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3B6FD8] dark:text-[#8DA4C4]">
              06 // Leadership & Community
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#050B14] dark:text-[#F1F5F9]">
            Experience & Activities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Mentorship, technical chapter governance, and hackathon execution across collegiate computer science networks.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1B33] hover:border-slate-300 dark:hover:border-[#3B6FD8]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#3B6FD8]/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#050B14] text-[#3B6FD8] dark:text-[#8DA4C4] shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#050B14] dark:text-[#F1F5F9]">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3B6FD8]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8DA4C4]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B6FD8] dark:bg-[#8DA4C4] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#050B14] text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
