"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Terminal, Code, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />;
      case 1:
        return <Code className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />;
      case 3:
        return <Cloud className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] dark:text-[#C084FC]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
              02 // Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A comprehensive overview of programming languages, modern frameworks, machine learning toolkits, and DevOps environments I leverage daily.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.1}>
              <div className="h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-xs hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 hover:shadow-lg dark:hover:shadow-[#8B5CF6]/10 transition-all">
                <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-[#09090B] text-zinc-800 dark:text-[#C084FC]">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-[#FAFAFA] text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-[#C084FC] hover:bg-zinc-100 dark:hover:bg-[#18181B] transition-all cursor-default"
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
