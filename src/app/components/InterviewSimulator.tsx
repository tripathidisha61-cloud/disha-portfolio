"use client";

import { useState } from "react";
import { INTERVIEW_QUESTIONS, InterviewQuestion } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Clock,
  ChevronDown,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export function InterviewSimulator() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string>("q-intro");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    "All",
    "Behavioral",
    "Technical & System Design",
    "Academic & Hackathons",
    "Leadership & Culture",
  ];

  const filteredQuestions =
    selectedCategory === "All"
      ? INTERVIEW_QUESTIONS
      : INTERVIEW_QUESTIONS.filter((q) => q.category === selectedCategory);

  const handleCopyAnswer = (q: InterviewQuestion) => {
    const formatted = `Q: ${q.question}
[Situation]: ${q.star.situation}
[Task]: ${q.star.task}
[Action]: ${q.star.action}
[Result]: ${q.star.result}
[Takeaway]: ${q.keyTakeaway}`;

    navigator.clipboard.writeText(formatted);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="interview-prep"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#059669] dark:text-[#34D399]">
              07 // Candidate Screening
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#062018] dark:text-[#F0FDF4]">
            Recruiter Interview Q&A Simulator (STAR Method)
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Structured, articulate responses to Tier-1 MNC screening questions—structured using the Situation, Task, Action, and Result (STAR) framework for rapid evaluation.
          </p>
        </Reveal>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#059669] text-white shadow-xs font-semibold"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F2E23] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-[#F0FDF4] hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Question Cards Accordion List */}
        <div className="mt-8 space-y-4">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedId === q.id;
            return (
              <Reveal key={q.id} delay={idx * 0.05}>
                <div
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? "border-[#059669]/60 bg-white dark:bg-[#0F2E23] shadow-md dark:shadow-[#059669]/10"
                      : "border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0F2E23]/60 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {/* Question Accordion Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? "" : q.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#062018] text-[#059669] dark:text-[#34D399] shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#062018] text-slate-600 dark:text-slate-300">
                            {q.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {q.timeEstimate}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#062018] dark:text-[#F0FDF4] leading-snug">
                          {q.question}
                        </h3>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-[#34D399] shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded STAR Framework Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-slate-100 dark:border-slate-800 px-5 sm:px-6 pb-6 pt-5 space-y-4"
                      >
                        {/* 4 STAR Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {/* Situation */}
                          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#062018] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                              [Situation]
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {q.star.situation}
                            </p>
                          </div>

                          {/* Task */}
                          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#062018] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-[#059669] dark:text-[#34D399] uppercase tracking-wider">
                              [Task]
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {q.star.task}
                            </p>
                          </div>

                          {/* Action */}
                          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#062018] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-[#059669] dark:text-[#34D399] uppercase tracking-wider">
                              [Action]
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {q.star.action}
                            </p>
                          </div>

                          {/* Result */}
                          <div className="p-4 rounded-xl border border-[#059669]/30 bg-blue-50/50 dark:bg-[#059669]/[0.05] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-[#059669] dark:text-[#34D399] uppercase tracking-wider flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                              [Result]
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {q.star.result}
                            </p>
                          </div>
                        </div>

                        {/* Interviewer Takeaway Box & Copy Action */}
                        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#062018]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="flex items-start sm:items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5 sm:mt-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              <span className="font-semibold text-[#059669] dark:text-[#34D399]">
                                Evaluator Takeaway:{" "}
                              </span>
                              {q.keyTakeaway}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyAnswer(q)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F2E23] text-slate-700 dark:text-slate-200 hover:text-[#059669] dark:hover:text-[#F0FDF4] transition-colors shrink-0 self-end sm:self-auto"
                          >
                            {copiedId === q.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="text-emerald-500 font-semibold">
                                  Copied to Clipboard!
                                </span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Answer</span>
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
