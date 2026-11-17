"use client";

import { useEffect, useState } from "react";
import { GitHubRepo, GitHubProfile } from "@/lib/github";
import { Reveal } from "./Reveal";
import {
  Github,
  Star,
  GitFork,
  BookOpen,
  ArrowUpRight,
  RefreshCw,
  AlertCircle,
  Code2,
} from "lucide-react";

export function GitHubStats() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/github");
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to load GitHub activity");
      }
      setRepos(data.repos || []);
      setProfile(data.profile || null);
    } catch (err: any) {
      setError(err.message || "Failed to load live GitHub repositories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const getLanguageColor = (lang: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-400",
      Python: "bg-emerald-500",
      "C++": "bg-rose-500",
      C: "bg-indigo-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      Jupyter: "bg-amber-500",
    };
    return colors[lang || ""] || "bg-zinc-400";
  };

  return (
    <section id="github" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#29495D]/80 bg-[#E5F0F4]/70 dark:bg-[#122638] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#18A3B7] dark:text-[#18A3B7]">
                07 // Coding Profiles · GitHub
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142F40] dark:text-[#F2FAFC]">
              GitHub Repositories & Open Source
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-[#B5C8D5] max-w-2xl">
              Live repositories and commits fetched directly from GitHub for{" "}
              <code className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-[#1A334A] font-mono text-slate-800 dark:text-[#F2FAFC] border border-slate-300 dark:border-[#29495D]">
                tripathidisha61-cloud
              </code>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={fetchRepos}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-[#D9E6EC] dark:border-[#29495D] hover:bg-[#E5F0F4] dark:hover:bg-[#1E536E] text-[#142F40] dark:text-[#F2FAFC] transition-colors disabled:opacity-50"
                aria-label="Refresh repositories"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>

              <a
                href="https://github.com/tripathidisha61-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#147F91] hover:bg-[#106675] dark:bg-[#18A3B7] dark:hover:bg-[#27E6EC] text-white dark:text-[#0D1B29] transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Profile metadata strip if loaded */}
        {profile && (
          <Reveal delay={0.15}>
            <div className="mt-8 p-4 rounded-xl border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#D9E6EC] dark:border-[#29495D] bg-[#E5F0F4] dark:bg-[#0D1B29] flex items-center justify-center font-bold text-sm text-[#147F91] dark:text-[#27E6EC]">
                  DT
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#142F40] dark:text-[#F2FAFC]">
                    {profile.name || "Disha Tripathi"}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-[#B5C8D5] font-mono">@{profile.login}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-[#B5C8D5] font-mono">
                <div>
                  <span className="font-semibold text-[#147F91] dark:text-[#27E6EC]">
                    {profile.public_repos}
                  </span>{" "}
                  Repos
                </div>
                <div>
                  <span className="font-semibold text-[#18A3B7] dark:text-[#18A3B7]">
                    {profile.followers}
                  </span>{" "}
                  Followers
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Loading state skeleton */}
        {loading && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-44 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A334A] animate-pulse flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                  <div className="h-3 bg-slate-100 dark:bg-slate-800/60 rounded w-full" />
                  <div className="h-3 bg-slate-100 dark:bg-slate-800/60 rounded w-2/3" />
                </div>
                <div className="h-4 bg-slate-100 dark:bg-slate-800/80 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="mt-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A334A] text-center">
            <AlertCircle className="w-8 h-8 text-slate-400 dark:text-[#18A3B7] mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-[#0D1B29] dark:text-[#F3F8FA]">
              Unable to sync live GitHub repositories
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {error}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={fetchRepos}
                className="px-4 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200"
              >
                Retry Request
              </button>
              <a
                href="https://github.com/tripathidisha61-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#18A3B7] text-white hover:bg-[#106675]"
              >
                Open GitHub Profile
              </a>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && repos.length === 0 && (
          <div className="mt-8 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
            <BookOpen className="w-8 h-8 text-slate-400 dark:text-[#18A3B7] mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              No public repositories found.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              New projects will appear here as soon as they are made public on GitHub.
            </p>
          </div>
        )}

        {/* Loaded Repositories Grid */}
        {!loading && !error && repos.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <Reveal key={repo.id} delay={idx * 0.05}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-48 p-6 rounded-2xl border border-[#D9E6EC] dark:border-[#29495D] bg-white dark:bg-[#1A334A] hover:border-[#147F91] dark:hover:border-[#27E6EC] shadow-xs hover:shadow-[0_8px_30px_rgba(24,163,183,0.15)] transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#147F91] dark:text-[#27E6EC] flex-shrink-0" />
                        <h3 className="font-semibold text-sm text-[#142F40] dark:text-[#F2FAFC] group-hover:text-[#147F91] dark:group-hover:text-[#27E6EC] transition-colors truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#18A3B7] dark:group-hover:text-[#18A3B7] transition-colors flex-shrink-0" />
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800 font-mono">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}
                          />
                          <span className="text-zinc-700 dark:text-zinc-300">{repo.language}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-zinc-400 dark:text-amber-400" />
                        <span className="text-zinc-700 dark:text-zinc-300">{repo.stargazers_count}</span>
                      </span>
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                          <span className="text-zinc-700 dark:text-zinc-300">{repo.forks_count}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
