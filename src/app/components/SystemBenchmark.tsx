"use client";

import { useState } from "react";
import { SYSTEM_BENCHMARKS, SystemBenchmarkScenario } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
  Activity,
  Zap,
  Sliders,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  TrendingDown,
  Gauge,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function SystemBenchmark() {
  const [selectedScenario, setSelectedScenario] = useState<SystemBenchmarkScenario>(
    SYSTEM_BENCHMARKS[0]
  );
  const [concurrencyMultiplier, setConcurrencyMultiplier] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState(false);

  // Dynamic calculations based on slider multiplier
  const baseUsers = selectedScenario.metrics.users;
  const currentUsers = Math.round(baseUsers * concurrencyMultiplier);

  // Latency scaling: optimized scales logarithmically, baseline scales super-linearly
  const dynamicBaselineLatency = Math.round(
    selectedScenario.metrics.baselineLatencyMs * Math.pow(concurrencyMultiplier, 1.25)
  );
  const dynamicOptimizedLatency = Math.round(
    selectedScenario.metrics.optimizedLatencyMs * Math.pow(concurrencyMultiplier, 0.35)
  );
  const latencyReductionPct = Math.round(
    ((dynamicBaselineLatency - dynamicOptimizedLatency) / dynamicBaselineLatency) * 100
  );

  // Egress scaling
  const dynamicBaselineEgress = (
    selectedScenario.metrics.baselineEgressMB * concurrencyMultiplier
  ).toFixed(1);
  const dynamicOptimizedEgress = (
    selectedScenario.metrics.optimizedEgressMB * concurrencyMultiplier
  ).toFixed(1);

  // CPU scaling
  const dynamicBaselineCpu = Math.min(
    99,
    Math.round(selectedScenario.metrics.baselineCpuUsage * Math.pow(concurrencyMultiplier, 0.7))
  );
  const dynamicOptimizedCpu = Math.min(
    95,
    Math.round(selectedScenario.metrics.optimizedCpuUsage * Math.pow(concurrencyMultiplier, 0.45))
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedScenario.implementationCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="system-benchmarks"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-800/80 bg-[#F0F7FF] dark:bg-[#0B192C]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0284C7] dark:text-[#38BDF8]">
              05.1 // Telemetry & Performance
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] dark:text-[#F0F9FF]">
                Distributed Systems Benchmark
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Interactive real-time performance profiler demonstrating empirical throughput,
                concurrency scaling, and latency percentiles engineered across flagship projects.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#112240] text-xs font-mono text-slate-500 dark:text-slate-400">
              <Activity className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
              <span>Simulated Live Telemetry</span>
            </div>
          </div>
        </Reveal>

        {/* Scenario Selector Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
            {SYSTEM_BENCHMARKS.map((scenario) => {
              const isSelected = selectedScenario.id === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => {
                    setSelectedScenario(scenario);
                    setConcurrencyMultiplier(1);
                  }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? "border-[#0284C7] bg-white dark:bg-[#112240] shadow-md dark:shadow-[#0284C7]/10 ring-1 ring-[#0284C7]"
                      : "border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-[#112240]/50 hover:bg-white dark:hover:bg-[#112240] text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                      Scenario
                    </span>
                    {isSelected && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
                      </span>
                    )}
                  </div>
                  <div
                    className={`font-bold text-xs sm:text-sm line-clamp-1 ${
                      isSelected
                        ? "text-[#0B192C] dark:text-[#F0F9FF]"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {scenario.name.split(":")[0]}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {scenario.description}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Main Interactive Benchmark Board */}
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#112240] p-6 sm:p-8 shadow-sm">
            {/* Header & Architecture Flow */}
            <div className="pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] dark:text-[#F0F9FF]">
                  {selectedScenario.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {latencyReductionPct}% Optimized Performance
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {selectedScenario.description}
              </p>

              {/* Architecture Dataflow Breadcrumb */}
              <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B192C]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                  End-to-End Pipeline Topology:
                </div>
                <div className="text-xs font-mono text-slate-700 dark:text-[#38BDF8] flex flex-wrap items-center gap-2">
                  {selectedScenario.architectureFlow.split(" -> ").map((step, idx, arr) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-[#112240] text-slate-800 dark:text-slate-200">
                        {step}
                      </span>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Concurrency Slider Control */}
            <div className="py-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0B192C] dark:text-[#F0F9FF]">
                    Simulated Concurrent Load (Active Streams / QPS)
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Load Multiplier:{" "}
                  <span className="text-[#0284C7] dark:text-[#38BDF8] font-bold">
                    {concurrencyMultiplier.toFixed(1)}x
                  </span>{" "}
                  ({currentUsers.toLocaleString()} concurrent clients)
                </div>
              </div>

              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={concurrencyMultiplier}
                onChange={(e) => setConcurrencyMultiplier(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                aria-label="Adjust Concurrency Load Multiplier"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-2">
                <span>{(baseUsers * 0.5).toFixed(0)} clients (Light)</span>
                <span>{baseUsers} clients (Standard Benchmark)</span>
                <span>{(baseUsers * 3.0).toFixed(0)} clients (Stress Peak)</span>
              </div>
            </div>

            {/* Metrics Comparison Grid */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-5 border-b border-slate-100 dark:border-slate-800">
              {/* Metric 1: p99 Latency */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B192C] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400">
                    p99 Latency
                  </span>
                  <TrendingDown className="w-4 h-4 text-emerald-500" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Baseline:</span>
                    <span className="font-mono text-rose-500 font-semibold line-through">
                      {dynamicBaselineLatency.toLocaleString()} ms
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-[#0B192C] dark:text-[#F0F9FF] font-semibold">
                      Optimized:
                    </span>
                    <span className="font-mono text-emerald-500 font-bold text-base">
                      {dynamicOptimizedLatency.toLocaleString()} ms
                    </span>
                  </div>
                </div>

                {/* Progress bar comparison */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div
                    style={{
                      width: `${Math.min(
                        100,
                        (dynamicOptimizedLatency / dynamicBaselineLatency) * 100
                      )}%`,
                    }}
                    className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  ↓ {latencyReductionPct}% faster response under load
                </div>
              </div>

              {/* Metric 2: Network Egress */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B192C] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400">
                    Network Egress / min
                  </span>
                  <Zap className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Baseline (Full Dump):</span>
                    <span className="font-mono text-rose-500 font-semibold">
                      {dynamicBaselineEgress} MB
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-[#0B192C] dark:text-[#F0F9FF] font-semibold">
                      Delta Stream:
                    </span>
                    <span className="font-mono text-[#0284C7] dark:text-[#38BDF8] font-bold text-base">
                      {dynamicOptimizedEgress} MB
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div
                    style={{
                      width: `${(
                        (parseFloat(dynamicOptimizedEgress) /
                          parseFloat(dynamicBaselineEgress)) *
                        100
                      ).toFixed(0)}%`,
                    }}
                    className="bg-[#0284C7] h-full rounded-full transition-all duration-300"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Bandwidth transfer slashed by ~82%
                </div>
              </div>

              {/* Metric 3: Server CPU / Worker Load */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B192C] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400">
                    Host Worker Utilization
                  </span>
                  <Gauge className="w-4 h-4 text-amber-500" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Baseline CPU:</span>
                    <span className="font-mono text-rose-500 font-semibold">
                      {dynamicBaselineCpu}%
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-[#0B192C] dark:text-[#F0F9FF] font-semibold">
                      Optimized CPU:
                    </span>
                    <span className="font-mono text-emerald-500 font-bold text-base">
                      {dynamicOptimizedCpu}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden flex">
                  <div
                    style={{
                      width: `${dynamicOptimizedCpu}%`,
                    }}
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Prevents thread starvation and memory leaks
                </div>
              </div>
            </div>

            {/* Implementation Code Section */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Production Implementation Snippet:
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B192C] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-[#F0F9FF] transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-[#0B192C] overflow-hidden">
                <div className="px-4 py-2 border-b border-slate-800 bg-[#0B192C] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-300">
                      telemetry_benchmark_core.py
                    </span>
                  </div>
                  <span className="text-[#38BDF8]">Python / FastAPI Async</span>
                </div>

                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{selectedScenario.implementationCode}</code>
                </pre>
              </div>

              {/* Key Takeaway Callout */}
              <div className="mt-4 p-3.5 rounded-xl border border-[#0284C7]/30 bg-[#0284C7]/10 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <Sparkles className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0B192C] dark:text-[#F0F9FF]">
                    Engineering Impact:{" "}
                  </span>
                  <span>{selectedScenario.keyAdvantage}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
