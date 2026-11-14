"use client";

import { useState } from "react";
import { GSOC_ROADMAP, RoadmapMilestone } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  CircleDashed,
  ChevronDown,
  GitBranch,
  ShieldAlert,
  Terminal,
  ExternalLink,
} from "lucide-react";

export function GsocRoadmap() {
  const [expandedPhase, setExpandedPhase] = useState<string>("Phase 2");

  const getStatusBadge = (status: RoadmapMilestone["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            In Active Progress
          </span>
        );
      case "Upcoming":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-neutral-200 dark:border-neutral-700 bg-neutral-100/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            <CircleDashed className="w-3 h-3" />
            Upcoming Roadmap
          </span>
        );
    }
  };

  return (
    <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <GitBranch className="w-3.5 h-3.5" />
              Open Source Initiative
            </span>
            <span className="font-mono text-xs text-neutral-400">• The Honeynet Project</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Google Summer of Code (GSoC 2027) Roadmap
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Structured 4-stage preparation trajectory focusing on distributed honeypot telemetry, sensor data clustering, and open-source threat intelligence.
          </p>
        </div>

        <a
          href="https://github.com/tripathidisha61-cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 transition-colors shrink-0 self-start sm:self-auto"
        >
          <span>Track Activity</span>
          <ExternalLink className="w-3 h-3 text-neutral-400" />
        </a>
      </div>

      {/* Timeline Steps */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {GSOC_ROADMAP.map((item) => {
          const isExpanded = expandedPhase === item.phase;
          const isActive = item.status === "In Progress";

          return (
            <div
              key={item.phase}
              className={`p-5 rounded-xl border transition-all ${
                isActive
                  ? "border-blue-500/40 bg-blue-500/[0.03] dark:bg-blue-500/[0.05] shadow-xs"
                  : "border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40 hover:border-neutral-300 dark:hover:border-neutral-700"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs font-semibold text-neutral-900 dark:text-white">
                      {item.phase}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      // {item.period}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
                {getStatusBadge(item.status)}
              </div>

              <p className="mt-2.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>

              {/* Expandable Deliverables */}
              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedPhase(isExpanded ? "" : item.phase)
                  }
                  className="flex items-center justify-between w-full text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  <span>
                    {isExpanded ? "Hide Specific Objectives" : "View Specific Objectives"}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 space-y-1.5 overflow-hidden"
                    >
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
