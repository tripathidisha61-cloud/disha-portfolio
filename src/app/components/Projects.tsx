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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-purple-600 dark:text-[#C084FC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            Prototype
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
                03 // Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Architected for real-world impact—featuring automated code diagnostics, competitive telemetry systems, and intelligent NLP services.
            </p>
          </Reveal>

          {/* Filter toggle */}
          <Reveal delay={0.1}>
            <div className="inline-flex p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-[#18181B] text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter("All")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "All"
                    ? "bg-white dark:bg-[#8B5CF6] text-zinc-900 dark:text-white shadow-xs font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#FAFAFA]"
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("Featured")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "Featured"
                    ? "bg-white dark:bg-[#8B5CF6] text-zinc-900 dark:text-white shadow-xs font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#FAFAFA]"
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
              <div className="group flex flex-col justify-between h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 shadow-xs hover:shadow-lg dark:hover:shadow-[#8B5CF6]/10 transition-all overflow-hidden">
                {/* Project Header / Placeholder Visual */}
                <div className="relative p-6 pb-0">
                  <div className="h-44 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#09090B] flex flex-col justify-between p-5 overflow-hidden group-hover:border-zinc-300 dark:group-hover:border-[#8B5CF6]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shadow-xs">
                        <FolderGit2 className="w-5 h-5 text-zinc-700 dark:text-[#C084FC]" />
                      </div>
                      {getStatusBadge(project.devStatus)}
                    </div>

                    <div>
                      <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                        REPOSITORY IDENTIFIER
                      </div>
                      <div className="font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA] group-hover:text-purple-600 dark:group-hover:text-[#C084FC] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-600 dark:text-zinc-300"
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-[#8B5CF6] dark:text-white hover:bg-zinc-800 dark:hover:bg-[#7C3AED] transition-colors shadow-xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-[#8B5CF6] bg-zinc-50 dark:bg-[#09090B] text-zinc-800 dark:text-[#C084FC] transition-all group-hover:bg-zinc-100 dark:group-hover:bg-[#18181B]"
                      >
                        <Code2 className="w-3.5 h-3.5 text-zinc-500 dark:text-[#C084FC]" />
                        <span>Architecture & Case Study</span>
                        <ArrowRight className="w-3 h-3 text-zinc-400 dark:text-[#C084FC] group-hover:translate-x-0.5 transition-transform" />
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
