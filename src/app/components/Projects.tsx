"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Github, ExternalLink, Code2, FolderGit2, Sparkles, ArrowRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [filter, setFilter] = useState<"All" | "Featured">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects =
    filter === "Featured" ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  const getStatusBadge = (status: Project["devStatus"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Completed
          </span>
        );
      case "In Development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            In Active Development
          </span>
        );
      case "Prototype":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-[#18A3B7]/30 bg-[#18A3B7]/10 text-[#18A3B7] dark:text-[#18A3B7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18A3B7]" />
            Prototype
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#29495D]/80 bg-[#F3F8FA] dark:bg-[#0D1B29] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#18A3B7] dark:text-[#18A3B7]">
                04 // Selected Projects (Recruiter Priority)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142F40] dark:text-[#F2FAFC]">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-[#B5C8D5] max-w-2xl">
              Production-ready engineering systems spanning automated AST vulnerability triage, real-time telemetry scoreboards, and clinical symptom decision engines.
            </p>
          </Reveal>

          {/* Filter toggle */}
          <Reveal delay={0.1}>
            <div className="inline-flex p-1 rounded-xl border border-[#D9E6EC] dark:border-[#29495D] bg-[#E5F0F4] dark:bg-[#1A334A] text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter("All")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "All"
                    ? "bg-white dark:bg-[#18A3B7] text-[#147F91] dark:text-[#0D1B29] shadow-xs font-bold"
                    : "text-slate-600 dark:text-[#B5C8D5] hover:text-[#142F40] dark:hover:text-[#F2FAFC]"
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("Featured")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "Featured"
                    ? "bg-white dark:bg-[#18A3B7] text-[#147F91] dark:text-[#0D1B29] shadow-xs font-bold"
                    : "text-slate-600 dark:text-[#B5C8D5] hover:text-[#142F40] dark:hover:text-[#F2FAFC]"
                }`}
              >
                Featured
              </button>
            </div>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <div className="group flex flex-col justify-between h-full rounded-2xl border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] hover:border-[#147F91] dark:hover:border-[#27E6EC] shadow-xs hover:shadow-[0_8px_30px_rgba(24,163,183,0.15)] transition-all overflow-hidden">
                {/* Project Header / Placeholder Visual */}
                <div className="relative p-6 pb-0">
                  <div className="h-44 rounded-xl border border-[#D9E6EC] dark:border-[#29495D] bg-[#F3F8FA] dark:bg-[#0D1B29] flex flex-col justify-between p-5 overflow-hidden group-hover:border-[#147F91]/40 dark:group-hover:border-[#27E6EC]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#1A334A] border border-[#D9E6EC] dark:border-[#29495D] shadow-xs">
                        <FolderGit2 className="w-5 h-5 text-[#147F91] dark:text-[#27E6EC]" />
                      </div>
                      {getStatusBadge(project.devStatus)}
                    </div>

                    <div>
                      <div className="font-mono text-xs text-slate-400 dark:text-[#5AA5CD]">
                        REPOSITORY IDENTIFIER
                      </div>
                      <div className="font-mono text-sm font-semibold text-[#142F40] dark:text-[#F2FAFC] mt-0.5">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#142F40] dark:text-[#F2FAFC] group-hover:text-[#147F91] dark:group-hover:text-[#27E6EC] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 dark:text-[#B5C8D5] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#D9E6EC] dark:border-[#29495D]">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-[#D9E6EC] dark:border-[#29495D] bg-[#E5F0F4] dark:bg-[#0D1B29] text-[#142F40] dark:text-[#F2FAFC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D9E6EC] dark:border-[#29495D] hover:bg-[#E5F0F4] dark:hover:bg-[#1E536E] text-[#142F40] dark:text-[#F2FAFC] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-[#147F91] dark:text-[#5AA5CD]" />
                          <span>Code</span>
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#147F91] hover:bg-[#106675] dark:bg-[#18A3B7] dark:hover:bg-[#27E6EC] text-white dark:text-[#0D1B29] transition-colors shadow-xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D9E6EC] dark:border-[#29495D] hover:border-[#147F91] dark:hover:border-[#27E6EC] bg-[#F3F8FA] dark:bg-[#0D1B29] text-[#142F40] dark:text-[#F2FAFC] transition-all hover:bg-[#E5F0F4] dark:hover:bg-[#1E536E]"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#147F91] dark:text-[#27E6EC]" />
                        <span>Architecture & Case Study</span>
                        <ArrowRight className="w-3 h-3 text-[#147F91] dark:text-[#27E6EC] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
