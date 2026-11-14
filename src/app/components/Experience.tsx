"use client";

import { EXPERIENCES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-[#22D3EE]">
              06 // Leadership & Community
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-[#F8FAFC]">
            Experience & Activities
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-slate-400 max-w-2xl">
            Mentorship, technical chapter governance, and hackathon execution across collegiate computer science networks.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-slate-800 bg-white dark:bg-[#151F32] hover:border-neutral-300 dark:hover:border-[#3B82F6]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#3B82F6]/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-neutral-100 dark:border-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-[#0B1120] text-neutral-800 dark:text-[#22D3EE] shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F8FAFC]">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-neutral-700 dark:text-slate-300 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-neutral-500 dark:text-slate-400 font-mono shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono border border-neutral-200 dark:border-slate-800 bg-neutral-50 dark:bg-[#0B1120] text-neutral-600 dark:text-slate-300"
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
