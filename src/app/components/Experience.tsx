"use client";

import { EXPERIENCES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Briefcase, Calendar, MapPin, GitBranch, ShieldCheck } from "lucide-react";

export function Experience() {
  const allExperiences = [
    ...EXPERIENCES,
    {
      id: "honeynet-gsoc",
      role: "Open Source Contributor & GSoC 2027 Research Aspirant",
      organization: "The Honeynet Project (Community Research)",
      period: "2024 - Present",
      location: "Remote / Open Source",
      description: [
        "Analyzing distributed sensor network architectures and honeypot packet telemetry for automated threat categorization.",
        "Authoring formal GSoC 2027 proposal focusing on telemetry aggregation engines and log triage modules.",
        "Contributing documentation clarifications, reproduction scripts, and test harnesses to target open-source repositories.",
      ],
      tags: ["GSoC 2027", "Telemetry", "Open Source", "Python", "Docker"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#203F40]/80 bg-[#EBF1EA]/70 dark:bg-[#122526] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#5CC8B2]">
              05 // Experience & Open Source
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142522] dark:text-[#F4F7F3]">
            Experience & Open Source
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#A6B8B2] max-w-2xl">
            Technical leadership, open-source proposal preparation, and collegiate community mentoring across developer organizations.
          </p>
        </Reveal>

        <div className="mt-12 relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-6 top-4 bottom-4 w-0.5 bg-[#3B82F6]/30 -translate-x-1/2" />

          <div className="space-y-8">
            {allExperiences.map((exp, idx) => (
              <Reveal key={exp.id} delay={idx * 0.1}>
                <div className="relative md:pl-14">
                  {/* Milestone dot */}
                  <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#8BAE44] dark:bg-[#D6F36A] shadow-[0_0_12px_rgba(34,211,238,0.6)] items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] hover:border-[#5CC8B2]/40 shadow-xs hover:shadow-lg transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-[#203F40]">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1718] text-[#2563EB] dark:text-[#5CC8B2] shrink-0 mt-0.5">
                          {exp.id.includes("gsoc") ? <GitBranch className="w-5 h-5 text-[#8BAE44] dark:text-[#D6F36A]" /> : <Briefcase className="w-5 h-5 text-[#5CC8B2]" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#142522] dark:text-[#F4F7F3]">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-medium text-slate-700 dark:text-[#A6B8B2] mt-0.5">
                            {exp.organization}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-500 dark:text-[#94A3B8] font-mono shrink-0">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#5CC8B2]" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#5CC8B2]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-[#A6B8B2] flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8BAE44] dark:bg-[#D6F36A] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#203F40] flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono border border-slate-200 dark:border-[#203F40] bg-slate-50 dark:bg-[#0B1718] text-slate-600 dark:text-[#A6B8B2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
