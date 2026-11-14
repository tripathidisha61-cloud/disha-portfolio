"use client";

import { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO, PROJECTS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send } from "lucide-react";

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: "init",
      command: "",
      output: (
        <div className="text-neutral-400 font-mono text-xs space-y-1 mb-2">
          <p className="text-emerald-400 font-bold">
            Disha Tripathi — Developer Shell v2.4.0 (x86_64-pc-linux-gnu)
          </p>
          <p>
            Connected to <span className="text-neutral-200">disha-portfolio</span>. Type{" "}
            <span className="text-amber-400 font-semibold">&apos;help&apos;</span> to inspect commands or{" "}
            <span className="text-emerald-400 font-semibold">&apos;sudo hire&apos;</span> for priority outreach.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();
    let output: React.ReactNode = null;

    if (lower === "help") {
      output = (
        <div className="space-y-1 text-neutral-300 text-xs font-mono">
          <p className="text-neutral-400 font-semibold mb-1">Available Shell Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <div><span className="text-amber-400 font-bold">about</span> - Background & education</div>
            <div><span className="text-amber-400 font-bold">skills</span> - Technical skill matrix</div>
            <div><span className="text-amber-400 font-bold">projects</span> - Flagship engineering projects</div>
            <div><span className="text-amber-400 font-bold">dsa</span> - Algorithmic patterns & complexity</div>
            <div><span className="text-amber-400 font-bold">docs</span> - System design RFCs & memos</div>
            <div><span className="text-amber-400 font-bold">mnc</span> - Top MNC role alignment fit</div>
            <div><span className="text-amber-400 font-bold">sandbox</span> - Live AST code triage sandbox</div>
            <div><span className="text-amber-400 font-bold">star</span> - Interview screening Q&A (STAR)</div>
            <div><span className="text-amber-400 font-bold">sih</span> - SIH 2026 qualification</div>
            <div><span className="text-amber-400 font-bold">gsoc</span> - GSoC 2027 preparation plan</div>
            <div><span className="text-amber-400 font-bold">leetcode</span> - Algorithmic stats (311+ solved)</div>
            <div><span className="text-amber-400 font-bold">contact</span> - Phone, email, and socials</div>
            <div><span className="text-amber-400 font-bold">resume</span> - Download official resume PDF</div>
            <div><span className="text-amber-400 font-bold">clear</span> - Clear terminal buffer</div>
            <div><span className="text-emerald-400 font-bold">sudo hire</span> - Accelerated interview invite</div>
            <div><span className="text-neutral-400 font-bold">exit</span> - Close terminal</div>
          </div>
        </div>
      );
    } else if (lower === "about") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p><span className="text-neutral-400">Name:</span> Disha Tripathi</p>
          <p><span className="text-neutral-400">Degree:</span> B.Tech Computer Science and Engineering (3rd Year, Class of 2028)</p>
          <p><span className="text-neutral-400">College:</span> Raj Kumar Goel Institute of Technology, Ghaziabad</p>
          <p><span className="text-neutral-400">Academic CGPA:</span> <span className="text-emerald-400 font-bold">8.8 / 10</span></p>
          <p><span className="text-neutral-400">Focus Areas:</span> Backend Architectures, Applied AI/ML (RAG), Distributed Telemetry, Algorithmic Problem Solving</p>
        </div>
      );
    } else if (lower === "skills") {
      output = (
        <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
          <p><span className="text-amber-400">Languages:</span> Python, C++, C, Bash, JavaScript, TypeScript, SQL</p>
          <p><span className="text-amber-400">Web/Backend:</span> React, Next.js, FastAPI, REST APIs, PostgreSQL, MySQL, Tailwind CSS</p>
          <p><span className="text-amber-400">AI/Data:</span> Machine Learning, RAG, ChromaDB, LangChain, Data Analytics</p>
          <p><span className="text-amber-400">Cloud/DevOps:</span> AWS (EC2, S3), Docker, Linux, Git/GitHub, GitHub Actions</p>
        </div>
      );
    } else if (lower === "projects") {
      output = (
        <div className="space-y-2 text-xs text-neutral-300 font-mono">
          {PROJECTS.map((p) => (
            <div key={p.id} className="border-l-2 border-neutral-700 pl-2">
              <p className="font-bold text-white">{p.title} <span className="text-[11px] text-amber-400">[{p.devStatus}]</span></p>
              <p className="text-neutral-400 text-[11px]">{p.description}</p>
              <p className="text-neutral-500 text-[10px]">Stack: {p.technologies.join(", ")}</p>
            </div>
          ))}
        </div>
      );
    } else if (lower === "sih") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p className="text-amber-400 font-bold">Smart India Hackathon (SIH 2026) — Internal Level Cleared</p>
          <p>Qualified through the rigorous campus screening round at RKGIT with an innovative technology solution targeting real-world institutional impact.</p>
        </div>
      );
    } else if (lower === "gsoc") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p className="text-blue-400 font-bold">Google Summer of Code (GSoC 2027) Aspirant</p>
          <p>Target Organization: <span className="text-white font-semibold">The Honeynet Project</span></p>
          <p>Research Focus: Distributed honeypot telemetry, sensor data clustering, and automated threat intelligence pipelines.</p>
        </div>
      );
    } else if (lower === "leetcode") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p className="text-amber-400 font-bold">LeetCode Profile: @Disha_tripathi2006</p>
          <p>Total Solved: <span className="text-emerald-400 font-bold">311+ Problems</span></p>
          <p>Breakdown: 171 Easy | 129 Medium | 11 Hard</p>
          <p>Global Rank: Top 500k worldwide</p>
        </div>
      );
    } else if (lower === "dsa") {
      output = (
        <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
          <p className="text-amber-400 font-bold">DSA Pattern Breakdown (311+ LeetCode Solved):</p>
          <p>• Dynamic Programming (48+ Solved) - Knapsack, LCS, Coin Change [O(N)/O(N·W)]</p>
          <p>• Graph Algorithms (42+ Solved) - Dijkstra, Kahn&apos;s Topo Sort, DSU [O(V+E)]</p>
          <p>• Trees & BST (65+ Solved) - LCA, Level Order, Diameter, Invariants [O(N)]</p>
          <p>• Two Pointers & Monotonic Deque (54+ Solved) - 3Sum, Sliding Window Max [O(N)]</p>
          <p>• Binary Search Space Reduction (38+ Solved) - Search on Answer [O(log N)]</p>
        </div>
      );
    } else if (lower === "docs") {
      output = (
        <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
          <p className="text-blue-400 font-bold">Engineering Design Documents & RFCs:</p>
          <p>1. High-Throughput Scoring: WebSocket Telemetry & PostgreSQL Row Locks</p>
          <p>2. Reducing LLM Hallucinations: AST Tree Pruning in Code Triage</p>
          <p>3. Zero-Leakage Telehealth Architecture: Schema-Partitioned RBAC</p>
        </div>
      );
    } else if (lower === "mnc") {
      output = (
        <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
          <p className="text-emerald-400 font-bold">Top MNC Role Alignment:</p>
          <p>• SDE Intern - Backend (96% Match) -&gt; Target: Google, Amazon, Microsoft, Uber</p>
          <p>• Full-Stack SDE Intern (94% Match) -&gt; Target: Atlassian, Adobe, Cisco</p>
          <p>• Applied AI / ML Intern (92% Match) -&gt; Target: Google, Microsoft, AI Labs</p>
        </div>
      );
    } else if (lower === "sandbox") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p className="text-emerald-400 font-bold">RepoMedic AI — Live Diagnostic Sandbox</p>
          <p>Test real-time code scanning in section &apos;#ai-sandbox&apos;.</p>
          <p>Includes live vulnerability triage for SQL Injection, C++ buffer overflows, and async socket leaks with auto-generated diff patches.</p>
        </div>
      );
    } else if (lower === "star") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p className="text-amber-400 font-bold">Recruiter Screening Q&amp;A Simulator (STAR Method):</p>
          <p>1. 60-Second Elevator Pitch &amp; Academics (CGPA 8.8, 311+ LeetCode)</p>
          <p>2. SIH 2026 Concurrency Challenge &amp; PostgreSQL ACID Locking</p>
          <p>3. FastAPI &amp; WebSockets vs Polling Trade-offs (82% egress reduction)</p>
          <p>4. Deliberate practice framework for solving 300+ LeetCode problems</p>
          <p>5. Blameless code reviews and &apos;Disagree &amp; Commit&apos; collaboration</p>
        </div>
      );
    } else if (lower === "contact") {
      output = (
        <div className="space-y-1 text-xs text-neutral-300 font-mono">
          <p><span className="text-neutral-400">Email:</span> <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 hover:underline">{PERSONAL_INFO.email}</a></p>
          <p><span className="text-neutral-400">Phone:</span> <a href={`tel:${PERSONAL_INFO.phone}`} className="text-emerald-400 hover:underline">{PERSONAL_INFO.phone}</a></p>
          <p><span className="text-neutral-400">GitHub:</span> <a href={PERSONAL_INFO.socials.github.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{PERSONAL_INFO.socials.github.url}</a></p>
          <p><span className="text-neutral-400">LinkedIn:</span> <a href={PERSONAL_INFO.socials.linkedin.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{PERSONAL_INFO.socials.linkedin.url}</a></p>
        </div>
      );
    } else if (lower === "resume") {
      output = (
        <div className="text-xs text-emerald-400 font-mono">
          Downloading official resume PDF from &apos;/resume.pdf&apos;...
        </div>
      );
      if (typeof window !== "undefined") {
        window.open(PERSONAL_INFO.resumeUrl, "_blank");
      }
    } else if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "exit") {
      setIsOpen(false);
      setInputVal("");
      return;
    } else if (lower.startsWith("sudo hire")) {
      output = (
        <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono space-y-1.5 text-emerald-300">
          <p className="font-bold flex items-center gap-1.5 text-emerald-400">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            [SUCCESS] Access Granted! Elevating permissions to Senior Recruiter...
          </p>
          <p>Thank you for your interest in hiring Disha! Launching email client to start the conversation.</p>
          <p className="text-white">Email: {PERSONAL_INFO.email} | Phone: {PERSONAL_INFO.phone}</p>
        </div>
      );
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Opportunity%20for%20Disha%20Tripathi`;
        }, 1200);
      }
    } else {
      output = (
        <p className="text-xs font-mono text-red-400">
          bash: {trimmed}: command not found. Type <span className="text-white font-bold">&apos;help&apos;</span> to see available commands.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx =
        historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  return (
    <>
      {/* Floating CLI Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0B1120] text-[#F8FAFC] border border-[#3B82F6]/50 shadow-lg hover:shadow-[#3B82F6]/20 hover:scale-105 active:scale-95 transition-all text-xs font-mono"
          aria-label="Open Interactive CLI Terminal"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
          </span>
          <TerminalIcon className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span className="font-semibold tracking-wide">disha-cli</span>
          <span className="hidden sm:inline-block text-[10px] text-slate-400">(`help`)</span>
        </button>
      </div>

      {/* Terminal Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#070B14]/80 backdrop-blur-xs pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full ${
                isMaximized ? "max-w-5xl h-[85vh]" : "max-w-2xl h-[520px]"
              } rounded-2xl border border-slate-800 bg-[#0B1120] shadow-2xl flex flex-col overflow-hidden pointer-events-auto z-10`}
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#151F32] border-b border-slate-800 select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                      aria-label="Close terminal"
                    />
                    <button
                      type="button"
                      onClick={() => setIsMaximized(!isMaximized)}
                      className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
                      aria-label="Toggle maximize"
                    />
                    <div className="w-3 h-3 rounded-full bg-[#22D3EE]/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    disha@portfolio: ~ (bash)
                  </span>
                </div>

                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    type="button"
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="p-1 hover:text-[#22D3EE] transition-colors"
                  >
                    {isMaximized ? (
                      <Minimize2 className="w-3.5 h-3.5" />
                    ) : (
                      <Maximize2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:text-[#22D3EE] transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item) => (
                  <div key={item.id} className="space-y-1">
                    {item.command && (
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className="text-[#22D3EE] font-semibold">disha@portfolio:~$</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    {item.output}
                  </div>
                ))}

                {/* Active prompt */}
                <div className="flex items-center gap-2 text-slate-200 pt-1">
                  <span className="text-[#22D3EE] font-semibold shrink-0">
                    disha@portfolio:~$
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-[#F8FAFC] focus:outline-none font-mono text-xs caret-[#22D3EE]"
                    placeholder="Type 'help' or 'sudo hire'..."
                    autoFocus
                  />
                </div>
                <div ref={bottomRef} />
              </div>

              {/* Terminal Quick Hint Bar */}
              <div className="px-4 py-2 bg-[#151F32]/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span>Quick commands:</span>
                  <button
                    type="button"
                    onClick={() => handleCommand("help")}
                    className="text-slate-400 hover:text-[#22D3EE] hover:underline"
                  >
                    help
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => handleCommand("skills")}
                    className="text-slate-400 hover:text-[#22D3EE] hover:underline"
                  >
                    skills
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => handleCommand("sudo hire")}
                    className="text-[#22D3EE] hover:underline font-semibold"
                  >
                    sudo hire
                  </button>
                </div>
                <span className="hidden sm:inline">Press ESC to exit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
