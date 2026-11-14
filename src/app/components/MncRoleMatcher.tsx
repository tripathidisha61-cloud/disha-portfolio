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
      className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              06 // Candidate Fit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Top MNC Role Alignment Matrix
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
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
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs font-semibold"
                    : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span className="truncate">{role.roleTitle.split("—")[0].trim()}</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                    isSelected
                      ? "bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-900"
                      : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
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
            className="mt-6 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 shadow-xs space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {currentRole.matchRate} Match
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">• Internship 2025/2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {currentRole.roleTitle}
                </h3>
              </div>

              {/* Target MNC tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-neutral-400 mr-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  Target Cohorts:
                </span>
                {currentRole.targetMNCs.map((mnc) => (
                  <span
                    key={mnc}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
                  >
                    {mnc}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Primary Technical Competencies</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {currentRole.coreCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantified Project Evidence (Google XYZ style) */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>Production Project Evidence & Quantified Impact</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentRole.relevantProjects.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-neutral-900 dark:text-white">
                        {p.name}
                      </div>
                      <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {p.contribution}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      Impact: {p.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interview Readiness Checklist */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Interview Round Readiness</span>
              </h4>
              <ul className="space-y-1.5">
                {currentRole.interviewReadiness.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2 font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Hiring Manager Action CTA */}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-neutral-500 font-mono">
                Looking to interview Disha for this specific track?
              </span>

              <a
                href={`mailto:tripathidisha61@gmail.com?subject=Interview%20Invitation%20for%20Disha%20Tripathi%20-%20${encodeURIComponent(
                  currentRole.roleTitle
                )}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs active:scale-[0.98]"
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
