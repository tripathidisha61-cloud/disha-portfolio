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
  const [copiedAts, setCopiedAts] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "ats">("overview");

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

  const atsResumeText = `DISHA TRIPATHI
Ghaziabad, Uttar Pradesh, India | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.socials.github.url}
LinkedIn: ${PERSONAL_INFO.socials.linkedin.url}
LeetCode: ${PERSONAL_INFO.socials.leetcode.url}

EDUCATION
Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad, India
Bachelor of Technology in Computer Science and Engineering (3rd Year, Class of 2028)
Cumulative Grade Point Average (CGPA): 8.8 / 10.0

TECHNICAL SKILLS
- Programming Languages: Python, C++, C, Bash, JavaScript, TypeScript, SQL
- Frameworks & Web: React, Next.js, FastAPI, REST APIs, Tailwind CSS
- Databases & Storage: PostgreSQL, MySQL, Redis, ChromaDB Vector Store
- Cloud & Infrastructure: AWS (EC2, S3), Docker, Linux, Git/GitHub, GitHub Actions (CI/CD)
- Core Competencies: Data Structures & Algorithms (311+ LeetCode), RAG Architectures, Concurrency Control, WebSocket Telemetry

KEY ACHIEVEMENTS & MILESTONES
- Smart India Hackathon (SIH 2026): Cleared internal screening round at campus level
- Google Summer of Code (GSoC 2027) Aspirant: Telemetry architecture analysis with The Honeynet Project
- LeetCode Track Record: 311+ Problems Solved (171 Easy, 129 Medium, 11 Hard)
- Postman API Fundamentals Student Expert Certified

FLAGSHIP PROJECTS
1. RepoMedic AI (Python, FastAPI, Next.js, Docker, AST Parser, RAG)
   - Built an intelligent code health and diagnostic assistant that scans GitHub repos for vulnerabilities.
   - Designed sub-200ms AST chunking engine that slashed LLM prompt bloat by ~74% compared to raw file injection.
   - Generates automated pull requests with unified git diff patch formats.

2. Live Hackathon Leaderboard (Next.js, TypeScript, PostgreSQL, WebSockets)
   - Real-time competition scoring platform supporting 100+ concurrent teams with sub-100ms telemetry broadcasts.
   - Implemented PostgreSQL row-level locks (SELECT FOR UPDATE) preventing duplicate entries during simultaneous judge scoring.
   - Slashed network egress by 82% compared to standard HTTP polling.

3. SecureHealth Telehealth Platform (Python, FastAPI, React, PostgreSQL)
   - Formulated symptom-checker clinical triage decision trees and physician appointment collision detection.
   - Architected zero-leakage patient metadata segregation with schema-level tenant partitioning.

LEADERSHIP & MENTORSHIP
- GeeksforGeeks Student Chapter — RKGIT: Student Lead mentoring junior undergraduates in DSA & C++.
- National Service Scheme (NSS): Event Coordinator managing campus academic competitions for 100+ students.`;

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

  const handleCopyAts = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopiedAts(true);
    setTimeout(() => setCopiedAts(false), 2500);
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
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#112240] shadow-2xl p-6 sm:p-7 z-10 space-y-5"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-[#38BDF8]">
                  <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Recruiter 60-Second Fast Track
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-400 font-mono">• Verified Profile</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#0B192C] dark:text-[#F0F9FF]">
                {RECRUITER_SUMMARY.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {RECRUITER_SUMMARY.education} • {RECRUITER_SUMMARY.institution}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close fast-track modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Bar: Executive Overview vs ATS Resume */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-[#0B192C] border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 py-1.5 px-3 rounded-lg text-center font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-white dark:bg-[#112240] text-[#0284C7] dark:text-[#38BDF8] shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Executive Summary
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ats")}
              className={`flex-1 py-1.5 px-3 rounded-lg text-center font-semibold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === "ats"
                  ? "bg-white dark:bg-[#112240] text-[#0284C7] dark:text-[#38BDF8] shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <span>ATS-Formatted Text</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#0284C7]/20 text-[#0284C7] dark:text-[#38BDF8]">
                1-Click
              </span>
            </button>
          </div>

          {activeTab === "overview" ? (
            <>
              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {RECRUITER_SUMMARY.verifiedMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B192C]"
                  >
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 uppercase truncate">
                      {metric.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#0B192C] dark:text-[#38BDF8] mt-0.5 truncate">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Strengths */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Core Engineering Competencies
                </h4>
                <div className="space-y-1.5">
                  {RECRUITER_SUMMARY.coreStrengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-[#0B192C] flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Impact Projects */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Flagship Production Projects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {RECRUITER_SUMMARY.topProjects.map((p) => (
                    <div
                      key={p.name}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B192C] flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-bold text-xs text-[#0B192C] dark:text-[#F0F9FF]">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {p.focus}
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] font-mono text-[#0284C7] dark:text-[#38BDF8] border-t border-slate-100 dark:border-slate-800/80 pt-1.5 truncate">
                        {p.stack}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* ATS Clean Text View */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Ready for copy-pasting directly into Greenhouse, Lever, Workday:
                </span>
                <button
                  type="button"
                  onClick={handleCopyAts}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#0284C7] text-white hover:bg-[#0369A1] transition-colors shadow-xs"
                >
                  {copiedAts ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied Full Resume!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full ATS Resume</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B192C] max-h-[300px] overflow-y-auto font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
                {atsResumeText}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0284C7] text-white hover:bg-[#0369A1] transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Disha</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Direct</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-[#0284C7] dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
