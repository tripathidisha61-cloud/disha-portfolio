"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Terminal, Code, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />;
      case 1:
        return <Code className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />;
      case 3:
        return <Cloud className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#3B6FD8] dark:text-[#8DA4C4]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#3B6FD8] dark:text-[#8DA4C4]">
              02 // Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#050B14] dark:text-[#F1F5F9]">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of programming languages, modern frameworks, machine learning toolkits, and DevOps environments I leverage daily.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1B33] shadow-xs hover:border-[#3B6FD8]/40 hover:shadow-md dark:hover:shadow-[#3B6FD8]/10 transition-all">
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-[#050B14] text-[#3B6FD8] dark:text-[#8DA4C4]">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-[#050B14] dark:text-[#F1F5F9] text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#050B14] text-slate-800 dark:text-slate-200 hover:border-[#3B6FD8] dark:hover:border-[#8DA4C4] hover:bg-white dark:hover:bg-[#0E1B33] transition-all cursor-default"
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
