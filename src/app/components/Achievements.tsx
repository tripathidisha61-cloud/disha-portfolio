"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { GsocRoadmap } from "./GsocRoadmap";

export function Achievements() {
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-[#8B5CF6] dark:text-[#C084FC]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#8B5CF6] dark:text-[#C084FC]" />;
      default:
        return <Trophy className="w-5 h-5 text-[#8B5CF6] dark:text-[#C084FC]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
              07 // Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Honors, professional credentials, and open-source project initiatives.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#8B5CF6]/10 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-[#09090B]">
                      {getBadgeIcon(idx)}
                    </div>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#09090B] text-zinc-700 dark:text-[#C084FC]">
                        <Sparkles className="w-3 h-3 text-amber-500 dark:text-[#C084FC]" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-zinc-900 dark:text-[#FAFAFA] leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {item.issuer} • {item.date}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>VERIFIED RECORD</span>
                  <span className="text-emerald-500 font-semibold">Active</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* GSoC 2027 Interactive Milestone Roadmap */}
        <Reveal delay={0.3}>
          <GsocRoadmap />
        </Reveal>
      </div>
    </section>
  );
}
