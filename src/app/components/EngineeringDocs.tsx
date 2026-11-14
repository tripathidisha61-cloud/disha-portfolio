"use client";

import { useState } from "react";
import { ENGINEERING_DOCS, EngineeringDoc } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Clock,
  ArrowRight,
  X,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Code2,
  BookOpen,
} from "lucide-react";

export function EngineeringDocs() {
  const [selectedDoc, setSelectedDoc] = useState<EngineeringDoc | null>(null);

  return (
    <section
      id="design-docs"
      className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              05 // System Design & RFCs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Engineering Design Documents
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Inspired by Google and Amazon-style engineering design memos—documenting architectural trade-offs, concurrency challenges, and quantifiable production impact.
          </p>
        </Reveal>

        {/* Documents Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGINEERING_DOCS.map((doc, idx) => (
            <Reveal key={doc.id} delay={idx * 0.1}>
              <div className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <FileText className="w-3 h-3" />
                      {doc.type}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {doc.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {doc.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {doc.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {doc.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-500 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedDoc(doc)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    <span>Read Full Architecture RFC</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full Design Document Reader Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] shadow-2xl p-6 sm:p-8 z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <BookOpen className="w-3.5 h-3.5" />
                      {selectedDoc.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">• {selectedDoc.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                    {selectedDoc.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close design doc"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Problem Statement */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                  1. The Engineering Challenge & Problem Statement
                </h4>
                <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/50 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {selectedDoc.problemStatement}
                </div>
              </div>

              {/* Architecture Dataflow */}
              {selectedDoc.architectureDiagram && selectedDoc.architectureDiagram.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span>2. End-to-End System Dataflow</span>
                  </h4>
                  <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/60 flex flex-wrap items-center gap-2">
                    {selectedDoc.architectureDiagram.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-mono border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 shadow-2xs">
                          {step}
                        </span>
                        {idx < selectedDoc.architectureDiagram!.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trade-off Decisions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span>3. Design Decisions & Architectural Trade-offs</span>
                </h4>
                <div className="space-y-3">
                  {selectedDoc.designDecisions.map((dec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-xs text-emerald-600 dark:text-emerald-400 font-mono shrink-0">
                          [Decision]:
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                          {dec.choice}
                        </span>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-400 font-mono shrink-0">
                          [Alternative]:
                        </span>
                        <span>{dec.alternativeConsidered}</span>
                      </div>

                      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        <span className="font-semibold font-mono text-neutral-500">Why chosen: </span>
                        {dec.tradeoffReasoning}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Production Impact */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>4. Quantified Production Impact (Google XYZ)</span>
                </h4>
                <div className="space-y-1.5">
                  {selectedDoc.metricsImpact.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and Close */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedDoc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
