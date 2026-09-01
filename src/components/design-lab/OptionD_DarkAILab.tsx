"use client";

import * as React from "react";
import { Terminal, Cpu, Database, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function OptionD_DarkAILab() {
  return (
    <div className="space-y-12 rounded-3xl bg-[#040608] text-white p-6 sm:p-10 border border-emerald-500/20 shadow-2xl overflow-hidden font-mono">
      {/* Concept Header */}
      <div className="border-b border-emerald-500/20 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-medium text-emerald-400 border border-emerald-500/20 mb-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Option D · Visual Design System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
            Dark AI Lab / Computational OS
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Technical research environment, computational HUD panels, telemetry matrices, monospace data flows, and neon emerald/cyan circuit styling.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#040608] border border-emerald-500/40 shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#040608</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#10b981] shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#10b981</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#06b6d4] shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#06b6d4</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#0f172a] shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#0f172a</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
          01. AI Lab Terminal Hero Specimen
        </div>
        <div className="rounded-3xl bg-[#080d11] border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-5 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span>ROOT@TYSON-LAB:~$ init_cluster</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                AUTONOMOUS AI SYSTEMS &amp; HIGH-THROUGHPUT COMPUTE.
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Building verifiable agentic workflows, self-hosted LLM infrastructure, and modern software architectures with strict telemetry.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button className="px-5 py-2.5 rounded-lg bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center gap-2">
                  <span>EXECUTE CONTRACT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button className="px-5 py-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs hover:bg-slate-800 transition-colors">
                  $ cat /cv.pdf
                </button>
              </div>
            </div>

            {/* Telemetry Matrix Box */}
            <div className="w-full lg:w-80 rounded-2xl bg-black/80 border border-emerald-500/30 p-5 space-y-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="text-xs text-emerald-400 border-b border-emerald-500/20 pb-2 flex items-center justify-between">
                <span>SYSTEM_TELEMETRY</span>
                <span className="text-emerald-300">LIVE</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>AI_SYSTEMS</span>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>AUTOMATION</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>INFRASTRUCTURE</span>
                  <span className="text-emerald-400">RUNNING (vLLM)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>PROJECTS_BUILT</span>
                  <span className="text-cyan-400">12+ VERIFIED</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>STUDENT_MENTORSHIP</span>
                  <span className="text-amber-400">ACCEPTING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Capability Grid */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
          02. Lab Module Nodes
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#090e13] border border-emerald-500/20 p-6 space-y-3 hover:border-emerald-400/50 transition-all">
            <div className="flex items-center justify-between text-emerald-400 text-xs">
              <Cpu className="w-5 h-5" />
              <span>NODE_01</span>
            </div>
            <h3 className="text-base font-bold text-white font-sans">Autonomous AI Agents</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Multi-agent coordination loops with custom tool execution and strict fallback redundancy.
            </p>
          </div>
          <div className="rounded-2xl bg-[#090e13] border border-cyan-500/20 p-6 space-y-3 hover:border-cyan-400/50 transition-all">
            <div className="flex items-center justify-between text-cyan-400 text-xs">
              <Database className="w-5 h-5" />
              <span>NODE_02</span>
            </div>
            <h3 className="text-base font-bold text-white font-sans">Self-Hosted VPS Compute</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Private model serving using vLLM, Ollama, Docker, and hardened Linux environments.
            </p>
          </div>
          <div className="rounded-2xl bg-[#090e13] border border-emerald-500/20 p-6 space-y-3 hover:border-emerald-400/50 transition-all">
            <div className="flex items-center justify-between text-emerald-400 text-xs">
              <Activity className="w-5 h-5" />
              <span>NODE_03</span>
            </div>
            <h3 className="text-base font-bold text-white font-sans">Vibe Coding Curriculum</h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              1-on-1 practical training on turning ideas into live deployed software via modern AI tools.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Live Project Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
          03. Telemetry Project Specimen
        </div>
        <div className="rounded-3xl bg-[#090e13] border border-emerald-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs text-emerald-400 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>PROD_CLUSTER // NOT LIMITED ROUTER</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">
              Not Limited Router · Model Gateway
            </h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-lg">
              Dynamic model proxy with zero-downtime provider failover, intelligent token throttling, and live endpoint health probes.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-black border border-emerald-500/30 text-xs text-emerald-400 font-mono">
            <div>STATUS: HEALTHY</div>
            <div>LATENCY: 8.4ms</div>
            <div>FALLBACKS: 0 ERR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
