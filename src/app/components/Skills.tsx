"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Terminal, Code, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-neutral-500" />;
      case 1:
        return <Code className="w-4 h-4 text-neutral-500" />;
      case 2:
        return <Cpu className="w-4 h-4 text-neutral-500" />;
      case 3:
        return <Cloud className="w-4 h-4 text-neutral-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-neutral-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              02 // Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A comprehensive overview of programming languages, modern frameworks, machine learning toolkits, and DevOps environments I leverage daily.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/70 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
