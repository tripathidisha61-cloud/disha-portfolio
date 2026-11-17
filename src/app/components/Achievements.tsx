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
        return <Award className="w-5 h-5 text-[#5CC8B2]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#8BAE44] dark:text-[#D6F36A]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#203F40]/80 bg-[#F4F7F3] dark:bg-[#0B1718] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#5CC8B2]">
              06 // Recognition & Honors
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142522] dark:text-[#F4F7F3]">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#A6B8B2] max-w-2xl">
            National hackathon accomplishments, academic honors, and verified credentials across industry technologies.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const isAward = idx === 0;
            return (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] hover:border-[#5CC8B2]/40 shadow-xs hover:shadow-lg transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1718]">
                        {getBadgeIcon(idx)}
                      </div>
                      {item.badge && (
                        <span 
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border"
                          style={{
                            borderColor: isAward ? "rgba(251, 191, 36, 0.4)" : "rgba(96, 165, 250, 0.3)",
                            backgroundColor: isAward ? "rgba(251, 191, 36, 0.1)" : "rgba(96, 165, 250, 0.1)",
                            color: isAward ? "#FBBF24" : "#5CC8B2"
                          }}
                        >
                          <Sparkles className="w-3 h-3" />
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-[#142522] dark:text-[#F4F7F3] leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8] font-mono">
                      {item.issuer} • {item.date}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#A6B8B2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#203F40] flex items-center justify-between text-[11px] text-slate-400 font-mono">
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
                <h3 className="text-xl font-bold text-[#142522] dark:text-[#F4F7F3]">
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
                  className="p-4 rounded-xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] flex flex-col justify-between hover:border-[#5CC8B2]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0B1718] text-[#2563EB] dark:text-[#5CC8B2] font-semibold">
                        {cred.badgeType} Credential
                      </span>
                      {cred.credentialId && (
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          ID: {cred.credentialId}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-[#142522] dark:text-[#F4F7F3] leading-snug">
                      {cred.title}
                    </h4>

                    <div className="text-[11px] text-slate-500 dark:text-[#94A3B8] font-mono mt-1">
                      {cred.issuer} • {cred.issueDate}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {cred.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-50 dark:bg-[#0B1718] text-slate-600 dark:text-[#A6B8B2] border border-slate-200/60 dark:border-[#203F40]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#203F40] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                    {cred.verificationUrl && (
                      <a
                        href={cred.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-[#2563EB] dark:hover:text-[#5CC8B2] flex items-center gap-1 transition-colors"
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
