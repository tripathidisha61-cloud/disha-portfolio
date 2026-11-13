"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Github, ExternalLink, Code2, FolderGit2 } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState<"All" | "Featured">("All");

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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Prototype
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                03 // Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Architected for real-world impact—featuring automated code diagnostics, competitive telemetry systems, and intelligent NLP services.
            </p>
          </Reveal>

          {/* Filter toggle */}
          <Reveal delay={0.1}>
            <div className="inline-flex p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 text-xs font-medium">
              <button
                type="button"
                onClick={() => setFilter("All")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "All"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("Featured")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === "Featured"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
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
              <div className="group flex flex-col justify-between h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs hover:shadow-md transition-all overflow-hidden">
                {/* Project Header / Placeholder Visual */}
                <div className="relative p-6 pb-0">
                  <div className="h-44 rounded-xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 flex flex-col justify-between p-5 overflow-hidden group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                        <FolderGit2 className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      {getStatusBadge(project.devStatus)}
                    </div>

                    <div>
                      <div className="font-mono text-xs text-neutral-400">
                        REPOSITORY IDENTIFIER
                      </div>
                      <div className="font-mono text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
