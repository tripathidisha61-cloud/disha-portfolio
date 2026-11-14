"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail, Code } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#09090B] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-mono text-sm font-bold text-zinc-900 dark:text-[#FAFAFA]">
              Disha Tripathi
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-sm">
              Computer Science & Engineering • Software Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Production Standards Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              TypeScript 100%
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
              Next.js 14 App Router
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              Black + Purple Theme
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg text-zinc-500 hover:text-[#8B5CF6] dark:hover:text-[#C084FC] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-[#18181B] text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6]" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} Disha Tripathi. Crafted with Next.js, TypeScript & Tailwind CSS.
          </div>
          <div className="font-mono text-[11px] text-[#C084FC]">
            Black & Purple Gradient Theme.
          </div>
        </div>
      </div>
    </footer>
  );
}
