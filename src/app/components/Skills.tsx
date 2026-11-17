"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Terminal, Code2, Server, Brain, Cloud, Database, Wrench, Sparkles } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (title: string, accent: string) => {
    switch (title) {
      case "Programming":
        return <Terminal className="w-4 h-4" style={{ color: accent }} />;
      case "Frontend":
        return <Code2 className="w-4 h-4" style={{ color: accent }} />;
      case "Backend":
        return <Server className="w-4 h-4" style={{ color: accent }} />;
      case "AI/ML":
        return <Brain className="w-4 h-4" style={{ color: accent }} />;
      case "Cloud & DevOps":
        return <Cloud className="w-4 h-4" style={{ color: accent }} />;
      case "Database":
        return <Database className="w-4 h-4" style={{ color: accent }} />;
      case "Tools":
        return <Wrench className="w-4 h-4" style={{ color: accent }} />;
      default:
        return <Sparkles className="w-4 h-4" style={{ color: accent }} />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-[#203F40]/80 bg-[#F4F7F3] dark:bg-[#0B1718] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#5CC8B2]">
              02 // Technical Skills
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142522] dark:text-[#F4F7F3]">
            Engineering & Technology Stack
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#A6B8B2] max-w-2xl">
            A purpose-driven architecture of programming languages, frameworks, machine learning toolkits, and cloud infrastructure with substantiated production competencies.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const accent = category.accent || "#5CC8B2";
            return (
              <Reveal key={category.title} delay={idx * 0.08}>
                <div 
                  className="h-full p-6 rounded-2xl border border-slate-200 dark:border-[#203F40] bg-white dark:bg-[#193334] shadow-xs hover:shadow-lg transition-all duration-200 group"
                  style={{
                    borderColor: undefined,
                  }}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#203F40]">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="p-2 rounded-lg bg-slate-100 dark:bg-[#0B1718] transition-transform group-hover:scale-105"
                      >
                        {getCategoryIcon(category.title, accent)}
                      </div>
                      <h3 className="font-semibold text-[#142522] dark:text-[#F4F7F3] text-base">
                        {category.title}
                      </h3>
                    </div>
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-current font-medium"
                      style={{ color: accent }}
                    >
                      {category.skills.length} tools
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-[#203F40] bg-slate-50 dark:bg-[#122526] text-slate-800 dark:text-[#A6B8B2] hover:text-[#142522] dark:hover:text-[#F4F7F3] transition-all cursor-default"
                        style={{
                          // subtle hover interaction
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
