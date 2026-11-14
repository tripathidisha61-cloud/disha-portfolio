"use client";

import { useEffect, useState } from "react";
import { PERSONAL_INFO, RECRUITER_SUMMARY } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Zap,
  Download,
  Mail,
  Phone,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Trophy,
  Code2,
  Sparkles,
} from "lucide-react";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const briefText = `Candidate: Disha Tripathi
Role: Software Developer & AI/ML Enthusiast
Education: B.Tech CSE (3rd Year), RKGIT Ghaziabad (CGPA: 8.8/10)
Key Highlights:
- Smart India Hackathon (SIH 2026) Internal Level Cleared
- Google Summer of Code (GSoC 2027) Aspirant
- 311+ LeetCode Solved
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.socials.github.url}
LinkedIn: ${PERSONAL_INFO.socials.linkedin.url}`;

    navigator.clipboard.writeText(briefText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-2xl p-6 sm:p-7 z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Zap className="w-3.5 h-3.5 text-[#C084FC]" />
                  Recruiter 60-Second Fast Track
                </span>
                <span className="text-xs text-neutral-400 dark:text-zinc-400 font-mono">• Verified Profile</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-[#FAFAFA]">
                {RECRUITER_SUMMARY.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-zinc-400 mt-0.5">
                {RECRUITER_SUMMARY.education} • {RECRUITER_SUMMARY.institution}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-[#C084FC] hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close fast-track modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RECRUITER_SUMMARY.verifiedMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 rounded-xl border border-neutral-200 dark:border-zinc-800 bg-neutral-50/70 dark:bg-[#09090B]"
              >
                <div className="text-[11px] font-mono text-neutral-400 dark:text-zinc-400 uppercase truncate">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#C084FC] mt-0.5 truncate">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Core Strengths */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-zinc-400 mb-2.5">
              Core Engineering Competencies
            </h4>
            <div className="space-y-1.5">
              {RECRUITER_SUMMARY.coreStrengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg border border-neutral-200/60 dark:border-zinc-800 bg-neutral-50/40 dark:bg-[#09090B] flex items-start gap-2 text-xs text-neutral-700 dark:text-zinc-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-[#C084FC] shrink-0 mt-0.5" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Impact Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-zinc-400 mb-2.5">
              Flagship Production Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {RECRUITER_SUMMARY.topProjects.map((p) => (
                <div
                  key={p.name}
                  className="p-3 rounded-xl border border-neutral-200 dark:border-zinc-800 bg-neutral-50/50 dark:bg-[#09090B] flex flex-col justify-between"
                >
                  <div>
                    <div className="font-bold text-xs text-neutral-900 dark:text-[#FAFAFA]">
                      {p.name}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-zinc-400 mt-1 line-clamp-2">
                      {p.focus}
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-neutral-400 dark:text-[#C084FC] border-t border-neutral-100 dark:border-zinc-800/80 pt-1.5 truncate">
                    {p.stack}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-neutral-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-[#8B5CF6] dark:text-white hover:bg-neutral-800 dark:hover:bg-violet-600 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-zinc-800 hover:bg-neutral-100 dark:hover:bg-zinc-800 text-neutral-700 dark:text-zinc-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Disha</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-zinc-800 hover:bg-neutral-100 dark:hover:bg-zinc-800 text-neutral-700 dark:text-zinc-200 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Direct</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-[#C084FC] hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied Brief!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Brief</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
