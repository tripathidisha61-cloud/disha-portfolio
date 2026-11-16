"use client";

import { PEER_ENDORSEMENTS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Quote, Sparkles, CheckCircle2, Award, HeartHandshake } from "lucide-react";

export function Endorsements() {
  return (
    <section
      id="endorsements"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80 bg-[#F4F6FA] dark:bg-[#050B14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3B6FD8] dark:text-[#8DA4C4]">
              07.1 // Social Proof & Collaboration
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#050B14] dark:text-[#F1F5F9]">
                Mentorship & Peer Endorsements
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Verifiable testimonials from academic faculty mentors, hackathon teammates, and
                student chapter co-leads reflecting engineering ownership and work ethic.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1B33] text-xs font-mono text-slate-500 dark:text-slate-400 self-start md:self-auto">
              <HeartHandshake className="w-3.5 h-3.5 text-[#8DA4C4]" />
              <span>Collaborative Track Record</span>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PEER_ENDORSEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1B33] hover:border-slate-300 dark:hover:border-[#3B6FD8]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#3B6FD8]/10 transition-all">
                <div>
                  {/* Top Bar with Quote Icon and Relationship Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#050B14] border border-slate-200/80 dark:border-slate-800 text-[#3B6FD8] dark:text-[#8DA4C4]">
                      <Quote className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-[#3B6FD8]/30 bg-[#3B6FD8]/10 text-[#3B6FD8] dark:text-[#8DA4C4]">
                      <Sparkles className="w-3 h-3 text-[#8DA4C4]" />
                      {item.relationship}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Impact Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-[#050B14] text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Metadata Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-[#050B14] border border-blue-100 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-[#3B6FD8] dark:text-[#8DA4C4] shrink-0 font-mono">
                    {item.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#050B14] dark:text-[#F1F5F9] truncate flex items-center gap-1.5">
                      <span>{item.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {item.role}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">
                      {item.organization}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Collaboration Trust Banner */}
        <Reveal delay={0.3}>
          <div className="mt-8 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1B33] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />
              <span>
                Demonstrated high-ownership collaboration across hackathons, academic labs, and open-source teams.
              </span>
            </div>
            <a
              href="#contact"
              className="text-[#3B6FD8] dark:text-[#8DA4C4] hover:underline font-semibold shrink-0"
            >
              Request Peer References →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
