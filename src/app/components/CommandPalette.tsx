"use client";

import { useState, useEffect, useRef } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileText,
  Mail,
  Phone,
  Moon,
  Sun,
  Github,
  Linkedin,
  Terminal,
  Zap,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
} from "lucide-react";

interface PaletteItem {
  id: string;
  category: "Navigation" | "Recruiter Actions" | "Developer Tools" | "Social & Profiles";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenRecruiter: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenRecruiter,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const items: PaletteItem[] = [
    // Recruiter Actions
    {
      id: "action-recruiter",
      category: "Recruiter Actions",
      title: "Open 60-Second Recruiter Fast-Track",
      subtitle: "Executive summary, key metrics, and direct contact",
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      onSelect: () => {
        onClose();
        onOpenRecruiter();
      },
    },
    {
      id: "action-resume",
      category: "Recruiter Actions",
      title: "Download Official Resume PDF",
      subtitle: "71.6 KB official document",
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      onSelect: () => {
        onClose();
        window.open(PERSONAL_INFO.resumeUrl, "_blank");
      },
    },
    {
      id: "action-email",
      category: "Recruiter Actions",
      title: `Copy Email: ${PERSONAL_INFO.email}`,
      subtitle: "Click to copy email address to clipboard",
      icon: <Mail className="w-4 h-4 text-emerald-500" />,
      onSelect: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onClose();
      },
    },
    {
      id: "action-phone",
      category: "Recruiter Actions",
      title: `Copy Phone: ${PERSONAL_INFO.phone}`,
      subtitle: "Click to copy direct phone number",
      icon: <Phone className="w-4 h-4 text-emerald-500" />,
      onSelect: () => {
        if (PERSONAL_INFO.phone) {
          navigator.clipboard.writeText(PERSONAL_INFO.phone);
        }
        onClose();
      },
    },

    // Developer Tools
    {
      id: "tool-terminal",
      category: "Developer Tools",
      title: "Launch Interactive Terminal (disha-cli)",
      subtitle: "Explore background and projects in a Linux-style shell",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      onSelect: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: "tool-theme",
      category: "Developer Tools",
      title: `Toggle Theme (Currently ${theme === "dark" ? "Dark" : "Light"})`,
      subtitle: "Switch between clean minimal light and dark modes",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />,
      onSelect: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        onClose();
      },
    },

    // Navigation
    {
      id: "nav-about",
      category: "Navigation",
      title: "About Disha Tripathi",
      subtitle: "Academic background, 8.8 CGPA, and engineering philosophy",
      icon: <Code2 className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("about"),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Technical Skills Matrix",
      subtitle: "Python, C++, Next.js, FastAPI, SQL, Docker, AWS",
      icon: <Code2 className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("skills"),
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Featured Projects & Case Studies",
      subtitle: "RepoMedic AI, Live Hackathon Leaderboard, SecureHealth",
      icon: <Code2 className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("projects"),
    },
    {
      id: "nav-sandbox",
      category: "Developer Tools",
      title: "RepoMedic AI Live Diagnostic Sandbox",
      subtitle: "Test real-time AST triage and automated git diff patch generator",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      onSelect: () => scrollToSection("ai-sandbox"),
    },
    {
      id: "nav-cs",
      category: "Navigation",
      title: "Core CS & Algorithmic Rigor (311+ Solved)",
      subtitle: "DSA Pattern Mastery, OS Concurrency, DBMS, Networks",
      icon: <Code2 className="w-4 h-4 text-amber-500" />,
      onSelect: () => scrollToSection("cs-fundamentals"),
    },
    {
      id: "nav-docs",
      category: "Navigation",
      title: "Engineering Design Documents (RFCs)",
      subtitle: "Google/Amazon-style memos on concurrency & AST pruning",
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      onSelect: () => scrollToSection("design-docs"),
    },
    {
      id: "nav-benchmarks",
      category: "Developer Tools",
      title: "Distributed Systems Benchmark & Latency Profiler",
      subtitle: "Interactive telemetry: WebSockets vs Polling & DB row locks",
      icon: <Zap className="w-4 h-4 text-[#C084FC]" />,
      onSelect: () => scrollToSection("system-benchmarks"),
    },
    {
      id: "nav-mnc",
      category: "Navigation",
      title: "Top MNC Role Alignment Matrix",
      subtitle: "Direct fit for SDE Backend, Full-Stack, & Applied AI tracks",
      icon: <Zap className="w-4 h-4 text-emerald-500" />,
      onSelect: () => scrollToSection("mnc-alignment"),
    },
    {
      id: "nav-interview",
      category: "Recruiter Actions",
      title: "Recruiter Interview Q&A Simulator (STAR Method)",
      subtitle: "Articulate answers to top behavioral & technical screening questions",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      onSelect: () => scrollToSection("interview-prep"),
    },
    {
      id: "nav-github",
      category: "Navigation",
      title: "Live GitHub Repositories",
      subtitle: "Real-time stats from @tripathidisha61-cloud",
      icon: <Github className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("github"),
    },
    {
      id: "nav-leetcode",
      category: "Navigation",
      title: "LeetCode Problem Solving",
      subtitle: "311+ problems solved breakdown",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      onSelect: () => scrollToSection("leetcode"),
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Experience & Leadership",
      subtitle: "GeeksforGeeks Chapter & NSS Event Coordinator",
      icon: <Code2 className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("experience"),
    },
    {
      id: "nav-achievements",
      category: "Navigation",
      title: "Achievements & GSoC 2027 Roadmap",
      subtitle: "SIH 2026 Cleared, GSoC preparation timeline, verified badges",
      icon: <Code2 className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("achievements"),
    },
    {
      id: "nav-endorsements",
      category: "Recruiter Actions",
      title: "Peer & Faculty Endorsements",
      subtitle: "Testimonials from RKGIT professors & hackathon co-developers",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      onSelect: () => scrollToSection("endorsements"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Get In Touch",
      subtitle: "Send a message or reach out directly",
      icon: <Mail className="w-4 h-4 text-neutral-400" />,
      onSelect: () => scrollToSection("contact"),
    },

    // Social Profiles
    {
      id: "social-leetcode",
      category: "Social & Profiles",
      title: "Visit LeetCode Profile",
      subtitle: "https://leetcode.com/u/Disha_tripathi2006/",
      icon: <ExternalLink className="w-4 h-4 text-amber-500" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.socials.leetcode.url, "_blank");
        onClose();
      },
    },
    {
      id: "social-github",
      category: "Social & Profiles",
      title: "Visit GitHub Profile",
      subtitle: "https://github.com/tripathidisha61-cloud",
      icon: <Github className="w-4 h-4 text-neutral-400" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.socials.github.url, "_blank");
        onClose();
      },
    },
    {
      id: "social-linkedin",
      category: "Social & Profiles",
      title: "Visit LinkedIn Profile",
      subtitle: "https://www.linkedin.com/in/disha-tripathi-20a353328",
      icon: <Linkedin className="w-4 h-4 text-blue-500" />,
      onSelect: () => {
        window.open(PERSONAL_INFO.socials.linkedin.url, "_blank");
        onClose();
      },
    },
  ];

  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].onSelect();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Command Palette Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl rounded-2xl border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-100 dark:border-zinc-800">
            <Search className="w-4 h-4 text-neutral-400 dark:text-[#C084FC] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search sections, actions, skills, projects (or press ESC)..."
              className="w-full bg-transparent text-sm text-neutral-900 dark:text-[#FAFAFA] placeholder:text-neutral-400 dark:placeholder:text-zinc-500 focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-neutral-400 dark:text-zinc-400 border border-neutral-200 dark:border-zinc-700 rounded bg-neutral-50 dark:bg-[#09090B]">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-xs text-neutral-400 dark:text-zinc-400 font-mono">
                No matching results found for &quot;{query}&quot;
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.onSelect}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? "bg-neutral-100 dark:bg-[#8B5CF6]/20 dark:border dark:border-[#8B5CF6]/40 text-neutral-900 dark:text-[#FAFAFA]"
                        : "text-neutral-700 dark:text-zinc-300 hover:bg-neutral-50 dark:hover:bg-[#09090B]/60"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-[#09090B] shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0 truncate">
                        <div className="text-xs sm:text-sm font-semibold truncate">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-[11px] text-neutral-500 dark:text-zinc-400 truncate">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="hidden sm:inline-block text-[10px] font-mono text-neutral-400 dark:text-[#C084FC] uppercase">
                        {item.category}
                      </span>
                      {isSelected && (
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-[#C084FC]" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 bg-neutral-50 dark:bg-[#09090B] border-t border-neutral-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to execute</span>
            </div>
            <span className="text-[#C084FC]">Disha Tripathi Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
