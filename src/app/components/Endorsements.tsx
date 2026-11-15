"use client";

import { PEER_ENDORSEMENTS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Quote, Sparkles, CheckCircle2, Award, HeartHandshake } from "lucide-react";

export function Endorsements() {
  return (
    <section
      id="endorsements"
      className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
              07.1 // Social Proof & Collaboration
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
                Mentorship & Peer Endorsements
              </h2>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
                Verifiable testimonials from academic faculty mentors, hackathon teammates, and
                student chapter co-leads reflecting engineering ownership and work ethic.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#18181B] text-xs font-mono text-zinc-500 dark:text-zinc-400 self-start md:self-auto">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Collaborative Track Record</span>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PEER_ENDORSEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#18181B] hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#8B5CF6]/10 transition-all">
                <div>
                  {/* Top Bar with Quote Icon and Relationship Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#09090B] border border-zinc-200/80 dark:border-zinc-800 text-[#8B5CF6] dark:text-[#C084FC]">
                      <Quote className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] dark:text-[#C084FC]">
                      <Sparkles className="w-3 h-3 text-[#C084FC]" />
                      {item.relationship}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Impact Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-zinc-200 dark:border-zinc-700/60 bg-white dark:bg-[#09090B] text-zinc-600 dark:text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Metadata Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-[#09090B] border border-zinc-300 dark:border-zinc-700 flex items-center justify-center font-bold text-xs text-[#8B5CF6] dark:text-[#C084FC] shrink-0 font-mono">
                    {item.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-[#FAFAFA] truncate flex items-center gap-1.5">
                      <span>{item.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                      {item.role}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 truncate">
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
          <div className="mt-8 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#18181B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />
              <span>
                Demonstrated high-ownership collaboration across hackathons, academic labs, and open-source teams.
              </span>
            </div>
            <a
              href="#contact"
              className="text-[#8B5CF6] dark:text-[#C084FC] hover:underline font-semibold shrink-0"
            >
              Request Peer References →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
