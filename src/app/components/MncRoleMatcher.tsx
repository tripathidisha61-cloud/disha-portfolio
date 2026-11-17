"use client";

import { useState } from "react";
import { MNC_ROLES, RoleAlignment } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export function MncRoleMatcher() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("sde-backend");

  const currentRole =
    MNC_ROLES.find((r) => r.roleId === selectedRoleId) || MNC_ROLES[0];

  return (
    <section
      id="mnc-alignment"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0D9488] dark:text-[#2DD4BF]">
              06 // Candidate Fit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E2F] dark:text-[#F0FDFA]">
            Top MNC Role Alignment Matrix
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A transparent mapping of verified technical competencies, production evidence, and algorithmic readiness to primary Tier-1 engineering internship tracks.
          </p>
        </Reveal>

        {/* Role Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {MNC_ROLES.map((role) => {
            const isSelected = role.roleId === selectedRoleId;
            return (
              <button
                key={role.roleId}
                type="button"
                onClick={() => setSelectedRoleId(role.roleId)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#102A43] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-[#F0FDFA] hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span className="truncate">{role.roleTitle.split("—")[0].trim()}</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                    isSelected
                      ? "bg-blue-700 text-white"
                      : "bg-blue-50 text-[#0D9488] dark:bg-[#0A1E2F] dark:text-[#2DD4BF] border border-blue-200 dark:border-[#2DD4BF]/30"
                  }`}
                >
                  {role.matchRate}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.roleId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mt-6 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#102A43] shadow-xs space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#0D9488]/30 bg-[#0D9488]/10 text-blue-600 dark:text-[#2DD4BF]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {currentRole.matchRate} Match
                  </span>
                  <span className="text-xs text-slate-400 font-mono">• Internship 2025/2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A1E2F] dark:text-[#F0FDFA]">
                  {currentRole.roleTitle}
                </h3>
              </div>

              {/* Target MNC tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#0D9488]" />
                  Target Cohorts:
                </span>
                {currentRole.targetMNCs.map((mnc) => (
                  <span
                    key={mnc}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A1E2F] text-slate-800 dark:text-slate-200"
                  >
                    {mnc}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-[#2DD4BF]" />
                <span>Primary Technical Competencies</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {currentRole.coreCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0A1E2F] flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantified Project Evidence (Google XYZ style) */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#0D9488]" />
                <span>Production Project Evidence & Quantified Impact</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentRole.relevantProjects.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A1E2F] flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0A1E2F] dark:text-[#F0FDFA]">
                        {p.name}
                      </div>
                      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {p.contribution}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-[#0D9488] dark:text-[#2DD4BF]">
                      Impact: {p.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interview Readiness Checklist */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-[#2DD4BF]" />
                <span>Interview Round Readiness</span>
              </h4>
              <ul className="space-y-1.5">
                {currentRole.interviewReadiness.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] dark:bg-[#2DD4BF] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Hiring Manager Action CTA */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Looking to interview Disha for this specific track?
              </span>

              <a
                href={`mailto:tripathidisha61@gmail.com?subject=Interview%20Invitation%20for%20Disha%20Tripathi%20-%20${encodeURIComponent(
                  currentRole.roleTitle
                )}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0D9488] text-white hover:bg-[#0F766E] transition-colors shadow-xs active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Connect Regarding This Role</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
