"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export function Achievements() {
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
      default:
        return <Trophy className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              07 // Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Honors, professional credentials, and open-source project initiatives.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                      {getBadgeIcon(idx)}
                    </div>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-xs text-neutral-500 font-mono">
                    {item.issuer} • {item.date}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>VERIFIED RECORD</span>
                  <span className="text-emerald-500">Active</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
