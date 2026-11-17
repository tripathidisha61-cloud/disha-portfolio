"use client";

import { useEffect } from "react";
import { Project } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Code2,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Split architecture into discrete flow steps for diagrammatic display
  const archSteps = project.architecture
    ? project.architecture.split("->").map((s) => s.trim())
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1718]/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#193334] shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5CC8B2]">
                  <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  Engineering Deep Dive
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    project.devStatus === "Completed"
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : project.devStatus === "In Development"
                      ? "border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5CC8B2]"
                  }`}
                >
                  {project.devStatus}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1718] dark:text-[#F4F7F3]">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-[#F4F7F3] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {/* Overview & Long Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Project Overview & Intent
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Architecture Flow Diagram */}
            {archSteps.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0B1718]">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  <Cpu className="w-4 h-4 text-[#2563EB]" />
                  <span>System Architecture & Dataflow Pipeline</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {archSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#193334] text-[#2563EB] dark:text-[#5CC8B2] shadow-xs">
                        {step}
                      </span>
                      {idx < archSteps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights & Metrics */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#2563EB]" />
                  <span>Key Architectural Highlights & Performance</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B1718] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Challenges & Trade-offs */}
            {project.challengesSolved && project.challengesSolved.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Engineering Challenges Solved & Trade-Offs</span>
                </h4>
                <ul className="space-y-2">
                  {project.challengesSolved.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#0B1718] text-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#0B1718] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-colors"
                  >
                    <span>Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
