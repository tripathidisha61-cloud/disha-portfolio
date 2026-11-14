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
      className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
              07 // Candidate Screening
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
            Recruiter Interview Q&A Simulator (STAR Method)
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
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
                    ? "bg-zinc-900 text-white dark:bg-[#8B5CF6] dark:text-white shadow-xs font-semibold"
                    : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-[#FAFAFA] hover:bg-zinc-50 dark:hover:bg-[#27272A]"
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
                      ? "border-zinc-900 dark:border-[#8B5CF6]/60 bg-white dark:bg-[#18181B] shadow-md dark:shadow-[#8B5CF6]/10"
                      : "border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18181B]/60 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {/* Question Accordion Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? "" : q.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="p-2 rounded-xl bg-zinc-100 dark:bg-[#09090B] text-zinc-700 dark:text-[#C084FC] shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-600 dark:text-zinc-300">
                            {q.category}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {q.timeEstimate}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-[#FAFAFA] leading-snug">
                          {q.question}
                        </h3>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-[#C084FC] shrink-0">
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
                        className="overflow-hidden border-t border-zinc-100 dark:border-zinc-800 px-5 sm:px-6 pb-6 pt-5 space-y-4"
                      >
                        {/* 4 STAR Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {/* Situation */}
                          <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-[#09090B] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                              [Situation]
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              {q.star.situation}
                            </p>
                          </div>

                          {/* Task */}
                          <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-[#09090B] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-[#C084FC] uppercase tracking-wider">
                              [Task]
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              {q.star.task}
                            </p>
                          </div>

                          {/* Action */}
                          <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-[#09090B] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                              [Action]
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              {q.star.action}
                            </p>
                          </div>

                          {/* Result */}
                          <div className="p-4 rounded-xl border border-[#C084FC]/30 bg-[#C084FC]/5 dark:bg-[#C084FC]/[0.05] space-y-1">
                            <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-[#C084FC] uppercase tracking-wider flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC]" />
                              [Result]
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              {q.star.result}
                            </p>
                          </div>
                        </div>

                        {/* Interviewer Takeaway Box & Copy Action */}
                        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-[#09090B]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="flex items-start sm:items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5 sm:mt-0" />
                            <span className="text-zinc-600 dark:text-zinc-300">
                              <span className="font-semibold text-zinc-900 dark:text-[#C084FC]">
                                Evaluator Takeaway:{" "}
                              </span>
                              {q.keyTakeaway}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyAnswer(q)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#18181B] text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-[#FAFAFA] transition-colors shrink-0 self-end sm:self-auto"
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
