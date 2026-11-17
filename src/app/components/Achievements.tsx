"use client";

import { ACHIEVEMENTS, VERIFIED_CREDENTIALS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Award, ShieldCheck, Trophy, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";
import { GsocRoadmap } from "./GsocRoadmap";

export function Achievements() {
  const getBadgeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#FBBF24]" />; // Gold for SIH 2026 Award
      case 1:
        return <Award className="w-5 h-5 text-[#18A3B7]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#147F91] dark:text-[#27E6EC]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#29495D]/80 bg-[#F3F8FA] dark:bg-[#0D1B29] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#18A3B7] dark:text-[#18A3B7]">
              06 // Recognition & Honors
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142F40] dark:text-[#F3F8FA]">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#B5C8D5] max-w-2xl">
            National hackathon accomplishments, academic honors, and verified credentials across industry technologies.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const isAward = idx === 0;
            return (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] hover:border-[#6F71A1]/60 dark:hover:border-[#6F71A1]/60 shadow-xs hover:shadow-[0_8px_30px_rgba(111,113,161,0.15)] transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-[#E5F0F4] dark:bg-[#0D1B29]">
                        {getBadgeIcon(idx)}
                      </div>
                      {item.badge && (
                        <span 
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border"
                          style={{
                            borderColor: isAward ? "rgba(251, 191, 36, 0.4)" : "rgba(111, 113, 161, 0.4)",
                            backgroundColor: isAward ? "rgba(251, 191, 36, 0.1)" : "rgba(111, 113, 161, 0.1)",
                            color: isAward ? "#FBBF24" : "#6F71A1"
                          }}
                        >
                          <Sparkles className="w-3 h-3" />
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-[#142F40] dark:text-[#F3F8FA] leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
                      {item.issuer} • {item.date}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#B5C8D5] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#29495D] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>VERIFIED RECORD</span>
                    <span className="text-emerald-500 font-semibold">Active</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Verified Technical Badges & Certifications Grid */}
        <Reveal delay={0.2}>
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#142F40] dark:text-[#F3F8FA]">
                  Verified Technical Credentials & Badges
                </h3>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8] font-mono mt-0.5">
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
                  className="p-4 rounded-xl border border-slate-200 dark:border-[#29495D] bg-white dark:bg-[#1A334A] flex flex-col justify-between hover:border-[#18A3B7]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0D1B29] text-[#18A3B7] dark:text-[#18A3B7] font-semibold">
                        {cred.badgeType} Credential
                      </span>
                      {cred.credentialId && (
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          ID: {cred.credentialId}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-[#142F40] dark:text-[#F3F8FA] leading-snug">
                      {cred.title}
                    </h4>

                    <div className="text-[11px] text-slate-500 dark:text-[#94A3B8] font-mono mt-1">
                      {cred.issuer} • {cred.issueDate}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {cred.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-50 dark:bg-[#0D1B29] text-slate-600 dark:text-[#B5C8D5] border border-slate-200/60 dark:border-[#29495D]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#29495D] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                    {cred.verificationUrl && (
                      <a
                        href={cred.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#18A3B7] dark:hover:text-[#18A3B7] flex items-center gap-1 transition-colors"
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
