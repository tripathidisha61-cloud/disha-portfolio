"use client";

import { useState } from "react";
import { SAMPLE_VULNERABILITY_SNIPPETS, CodeVulnerabilitySnippet } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Play,
  Check,
  Copy,
  AlertTriangle,
  FileCode,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
  Zap,
} from "lucide-react";

export function RepoMedicSandbox() {
  const [selectedSnippet, setSelectedSnippet] = useState<CodeVulnerabilitySnippet>(
    SAMPLE_VULNERABILITY_SNIPPETS[0]
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState<number>(0);
  const [hasScanned, setHasScanned] = useState(false);
  const [copiedDiff, setCopiedDiff] = useState(false);

  const handleSelectSnippet = (snippet: CodeVulnerabilitySnippet) => {
    setSelectedSnippet(snippet);
    setIsScanning(false);
    setScanStep(0);
    setHasScanned(false);
    setCopiedDiff(false);
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setScanStep(1);
    setHasScanned(false);

    setTimeout(() => {
      setScanStep(2);
    }, 500);

    setTimeout(() => {
      setScanStep(3);
    }, 1000);

    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 1400);
  };

  const handleCopyDiff = () => {
    navigator.clipboard.writeText(selectedSnippet.diffPatch);
    setCopiedDiff(true);
    setTimeout(() => setCopiedDiff(false), 2500);
  };

  const getSeverityBadge = (severity: CodeVulnerabilitySnippet["severity"]) => {
    switch (severity) {
      case "CRITICAL":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400">
            <ShieldAlert className="w-3 h-3" />
            CRITICAL SEVERITY
          </span>
        );
      case "HIGH":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-3 h-3" />
            HIGH SEVERITY
          </span>
        );
      case "MEDIUM":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <AlertTriangle className="w-3 h-3" />
            MEDIUM SEVERITY
          </span>
        );
    }
  };

  return (
    <section
      id="ai-sandbox"
      className="py-20 md:py-28 border-t border-neutral-200/60 dark:border-neutral-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              03.5 // Interactive Prototype
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            RepoMedic AI — Live Diagnostic Simulator
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Test the automated code triage engine live in your browser. Select a vulnerability pattern to execute real-time AST tokenization, risk scoring, and unified git diff patch generation.
          </p>
        </Reveal>

        {/* Snippet Selector Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {SAMPLE_VULNERABILITY_SNIPPETS.map((snippet) => {
            const isSelected = snippet.id === selectedSnippet.id;
            return (
              <button
                key={snippet.id}
                type="button"
                onClick={() => handleSelectSnippet(snippet)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs font-semibold"
                    : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{snippet.title}</span>
                <span className="text-[10px] font-mono opacity-70">[{snippet.language}]</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Studio Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Code Input / Viewer */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] shadow-xs overflow-hidden">
            {/* Editor Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/70 dark:bg-[#141418] border-b border-neutral-200/80 dark:border-neutral-800 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-neutral-600 dark:text-neutral-300">
                  {selectedSnippet.language === "C++" ? "sensor_pipeline.cpp" : "service_handler.py"}
                </span>
              </div>
              {getSeverityBadge(selectedSnippet.severity)}
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 flex-1 font-mono text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed overflow-x-auto bg-[#fafafa] dark:bg-[#08080a]">
              <pre className="whitespace-pre font-mono">
                {selectedSnippet.code}
              </pre>
            </div>

            {/* Editor Action Footer */}
            <div className="p-4 bg-white dark:bg-[#0c0c0e] border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-neutral-400">
                {selectedSnippet.cwe}
              </div>

              <button
                type="button"
                onClick={handleRunScan}
                disabled={isScanning}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs active:scale-[0.98] disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-neutral-400 border-t-transparent animate-spin" />
                    <span>Analyzing AST...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run AST Diagnostic Scan</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Diagnostic & Remediation Output */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] shadow-xs overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/70 dark:bg-[#141418] border-b border-neutral-200/80 dark:border-neutral-800 select-none">
              <span className="font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                AST Triage Pipeline & Patch Generator
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                LangChain + AST Parser
              </span>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-center space-y-4">
              {/* Idle State */}
              {!isScanning && !hasScanned && (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900 mx-auto flex items-center justify-center text-neutral-400">
                    <Sparkles className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                      Diagnostic Engine Standby
                    </h4>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
                      Click <span className="font-semibold text-neutral-800 dark:text-neutral-200">&quot;Run AST Diagnostic Scan&quot;</span> on the left to trigger the real-time syntactic analysis and patch generator.
                    </p>
                  </div>
                </div>
              )}

              {/* Scanning Active State */}
              {isScanning && (
                <div className="py-8 space-y-4">
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      {scanStep >= 1 ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-neutral-400 animate-spin" />
                      )}
                      <span className={scanStep >= 1 ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-400"}>
                        [Phase 1] AST Tokenization & Syntactic Tree Pruning...
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {scanStep >= 2 ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-neutral-400 animate-pulse" />
                      )}
                      <span className={scanStep >= 2 ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-400"}>
                        [Phase 2] Semantic Rule Evaluation & CWE Mapping ({selectedSnippet.cwe})...
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {scanStep >= 3 ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border border-neutral-400 animate-pulse" />
                      )}
                      <span className={scanStep >= 3 ? "text-neutral-900 dark:text-white font-semibold" : "text-neutral-400"}>
                        [Phase 3] Generating Unified Git Diff Remediation Patch...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Scan Completed State */}
              {hasScanned && !isScanning && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Vulnerability Summary Box */}
                  <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 dark:bg-red-500/[0.04]">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4" />
                        Vulnerability Hotspot Detected
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        AST Latency: 142ms
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {selectedSnippet.vulnerabilityDescription}
                    </p>
                  </div>

                  {/* Unified Git Diff Patch */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-emerald-500" />
                        Automated Git Diff Remediation
                      </span>

                      <button
                        type="button"
                        onClick={handleCopyDiff}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {copiedDiff ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied Diff!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Diff</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#08080a] font-mono text-xs overflow-x-auto leading-relaxed">
                      <pre className="whitespace-pre">
                        {selectedSnippet.diffPatch.split("\n").map((line, idx) => {
                          const isAdd = line.startsWith("+");
                          const isDel = line.startsWith("-");
                          const isHeader = line.startsWith("@@");
                          return (
                            <div
                              key={idx}
                              className={
                                isAdd
                                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 -mx-3.5 px-3.5"
                                  : isDel
                                  ? "text-red-600 dark:text-red-400 bg-red-500/10 -mx-3.5 px-3.5"
                                  : isHeader
                                  ? "text-neutral-400"
                                  : "text-neutral-700 dark:text-neutral-300"
                              }
                            >
                              {line}
                            </div>
                          );
                        })}
                      </pre>
                    </div>
                  </div>

                  {/* Technical Analysis */}
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/40 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/80">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      Engineering Rationale:{" "}
                    </span>
                    {selectedSnippet.explanation}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Metric Footer */}
            <div className="px-4 py-2.5 bg-neutral-50/70 dark:bg-[#121216] border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-1.5 text-emerald-500">
                <ShieldCheck className="w-3.5 h-3.5" />
                Deterministic Verification Gate Passed
              </span>
              <span>Tokens Saved: ~65%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
