"use client";

import { ACHIEVEMENTS, VERIFIED_CREDENTIALS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Award, ShieldCheck, Trophy, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";
import { GsocRoadmap } from "./GsocRoadmap";

export function Achievements() {
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />;
      default:
        return <Trophy className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#059669] dark:text-[#34D399]">
              07 // Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#062018] dark:text-[#F0FDF4]">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Honors, professional credentials, and open-source project initiatives.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F2E23] hover:border-slate-300 dark:hover:border-[#059669]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#059669]/10 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#062018]">
                      {getBadgeIcon(idx)}
                    </div>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#062018] text-slate-700 dark:text-[#34D399]">
                        <Sparkles className="w-3 h-3 text-[#34D399]" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-[#062018] dark:text-[#F0FDF4] leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {item.issuer} • {item.date}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>VERIFIED RECORD</span>
                  <span className="text-emerald-500 font-semibold">Active</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Verified Technical Badges & Certifications Grid */}
        <Reveal delay={0.2}>
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#062018] dark:text-[#F0FDF4]">
                  Verified Technical Credentials & Badges
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Industry skill credentials with official IDs and verified domains
                </p>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                100% Authenticated
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VERIFIED_CREDENTIALS.map((cred) => (
                <div
                  key={cred.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F2E23] flex flex-col justify-between hover:border-slate-300 dark:hover:border-[#059669]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-[#062018] text-[#059669] dark:text-[#34D399] font-semibold">
                        {cred.badgeType} Credential
                      </span>
                      {cred.credentialId && (
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          ID: {cred.credentialId}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-[#062018] dark:text-[#F0FDF4] leading-snug">
                      {cred.title}
                    </h4>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                      {cred.issuer} • {cred.issueDate}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {cred.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-50 dark:bg-[#062018] text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                    {cred.verificationUrl && (
                      <a
                        href={cred.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#059669] dark:hover:text-[#34D399] flex items-center gap-1 transition-colors"
                      >
                        <span>Inspect</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* GSoC 2027 Interactive Milestone Roadmap */}
        <Reveal delay={0.3}>
          <GsocRoadmap />
        </Reveal>
      </div>
    </section>
  );
}
