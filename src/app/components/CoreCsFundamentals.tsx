"use client";

import { useState } from "react";
import { DSA_PATTERNS, CORE_CS_TOPICS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Binary,
  Cpu,
  Database,
  Network,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function CoreCsFundamentals() {
  const [activeTab, setActiveTab] = useState<"dsa" | "systems">("dsa");
  const [selectedPatternIndex, setSelectedPatternIndex] = useState(0);

  const getSystemIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "Network":
        return <Network className="w-5 h-5 text-[#0D9488]" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section
      id="cs-fundamentals"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0D9488] dark:text-[#2DD4BF]">
                04 // Engineering Rigor
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E2F] dark:text-[#F0FDFA]">
              Core CS & Algorithmic Patterns
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Engineered to meet Tier-1 MNC hiring standards—combining time/space complexity guarantees with deep foundations in operating systems, DBMS, and distributed protocols.
            </p>
          </Reveal>

          {/* Tab Selector */}
          <Reveal delay={0.1}>
            <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-[#102A43] text-xs font-medium self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("dsa")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "dsa"
                    ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F0FDFA]"
                }`}
              >
                <Binary className="w-3.5 h-3.5 text-amber-300" />
                <span>DSA Pattern Mastery (311+)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("systems")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "systems"
                    ? "bg-[#0D9488] text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F0FDFA]"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>Systems & Core CS Topics</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Tab 1: DSA Pattern Mastery */}
        {activeTab === "dsa" && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Pattern List (Sidebar on desktop) */}
            <div className="lg:col-span-5 space-y-2.5">
              {DSA_PATTERNS.map((pattern, idx) => {
                const isSelected = selectedPatternIndex === idx;
                return (
                  <button
                    key={pattern.name}
                    type="button"
                    onClick={() => setSelectedPatternIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? "border-[#0D9488] dark:border-[#0D9488] bg-blue-50/50 dark:bg-[#102A43] shadow-sm"
                        : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A1E2F]/60 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-sm text-[#0A1E2F] dark:text-[#F0FDFA]">
                        {pattern.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1E2F] text-slate-700 dark:text-slate-300">
                        {pattern.solvedCount}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-mono text-emerald-600 dark:text-[#2DD4BF] truncate">
                      {pattern.complexity}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pattern Detailed Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPatternIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#102A43] shadow-xs space-y-6"
                >
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          Algorithmic Pattern
                        </span>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-400">
                          Verified Solved: {DSA_PATTERNS[selectedPatternIndex].solvedCount}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A1E2F] dark:text-[#F0FDFA]">
                        {DSA_PATTERNS[selectedPatternIndex].name}
                      </h3>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl border border-[#0D9488]/30 bg-[#0D9488]/10 text-[#0D9488] dark:text-[#2DD4BF] font-mono text-xs font-semibold shrink-0">
                      {DSA_PATTERNS[selectedPatternIndex].complexity}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {DSA_PATTERNS[selectedPatternIndex].description}
                  </p>

                  {/* Canonical Problems */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                      Canonical Interview Problems Mastered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {DSA_PATTERNS[selectedPatternIndex].canonicalProblems.map((prob) => (
                        <div
                          key={prob}
                          className="p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0A1E2F] flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200"
                        >
                          <Code2 className="w-3.5 h-3.5 text-slate-400 dark:text-[#2DD4BF] shrink-0" />
                          <span className="truncate">{prob}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Implementation Strategies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                      Key Algorithmic Strategies & Invariants
                    </h4>
                    <div className="space-y-1.5">
                      {DSA_PATTERNS[selectedPatternIndex].keyStrategies.map((strat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{strat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Tab 2: Core CS Systems Topics */}
        {activeTab === "systems" && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_CS_TOPICS.map((sys, idx) => (
              <Reveal key={sys.subject} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#102A43] flex flex-col justify-between h-full shadow-xs hover:border-slate-300 dark:hover:border-[#0D9488]/50 transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0A1E2F]">
                        {getSystemIcon(sys.iconName)}
                      </div>
                      <h3 className="font-bold text-base text-[#0A1E2F] dark:text-[#F0FDFA] leading-snug">
                        {sys.subject}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {sys.topics.map((t) => (
                        <div
                          key={t.name}
                          className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#0A1E2F]"
                        >
                          <div className="font-semibold text-xs text-[#0A1E2F] dark:text-[#F0FDFA] mb-1">
                            {t.name}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                            {t.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {t.keyPrerequisites.map((req) => (
                              <span
                                key={req}
                                className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#102A43] text-slate-600 dark:text-slate-300"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-500">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Interview Ready
                    </span>
                    <span>Academic Verified</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
