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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-[#0D9488]/30 bg-[#0D9488]/10 text-[#0D9488] dark:text-[#2DD4BF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
            Prototype
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0D9488] dark:text-[#2DD4BF]">
                03 // Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E2F] dark:text-[#F0FDFA]">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Architected for real-world impact—featuring automated code diagnostics, competitive telemetry systems, and intelligent NLP services.
            </p>
          </Reveal>

          {/* Filter toggle */}
          <Reveal delay={0.1}>
            <div className="inline-flex p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-[#102A43] text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter("All")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "All"
                    ? "bg-white dark:bg-[#0D9488] text-[#0D9488] dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#FAFAFA]"
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("Featured")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "Featured"
                    ? "bg-white dark:bg-[#0D9488] text-[#0D9488] dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#FAFAFA]"
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
              <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#102A43] hover:border-[#0D9488]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#0D9488]/10 transition-all overflow-hidden">
                {/* Project Header / Placeholder Visual */}
                <div className="relative p-6 pb-0">
                  <div className="h-44 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0A1E2F] flex flex-col justify-between p-5 overflow-hidden group-hover:border-slate-300 dark:group-hover:border-[#0D9488]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#102A43] border border-slate-200 dark:border-slate-800 shadow-xs">
                        <FolderGit2 className="w-5 h-5 text-slate-700 dark:text-[#2DD4BF]" />
                      </div>
                      {getStatusBadge(project.devStatus)}
                    </div>

                    <div>
                      <div className="font-mono text-xs text-slate-400 dark:text-slate-500">
                        REPOSITORY IDENTIFIER
                      </div>
                      <div className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0A1E2F] dark:text-[#F0FDFA] group-hover:text-[#0D9488] dark:group-hover:text-[#2DD4BF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-[#0A1E2F] text-slate-700 dark:text-slate-300"
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0D9488] text-white hover:bg-[#0F766E] transition-colors shadow-xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 hover:border-[#0D9488] bg-slate-50 dark:bg-[#0A1E2F] text-slate-800 dark:text-[#2DD4BF] transition-all group-hover:bg-slate-100 dark:group-hover:bg-[#102A43]"
                      >
                        <Code2 className="w-3.5 h-3.5 text-slate-500 dark:text-[#2DD4BF]" />
                        <span>Architecture & Case Study</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 dark:text-[#2DD4BF] group-hover:translate-x-0.5 transition-transform" />
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
