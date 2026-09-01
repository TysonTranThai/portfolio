"use client";

import * as React from "react";
import { ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";

export function OptionA_AppleProduct() {
  return (
    <div className="space-y-12 rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden font-sans">
      {/* Concept Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Option A · Visual Design System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Apple / Product Engineering
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Extreme restraint, massive clean typography, deep obsidian surfaces with graphite contrast, and hardware-grade product presentation.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#000000] border border-slate-700 shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#000</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#161618] border border-slate-700 shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#161618</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#2997ff] shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#2997ff</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] shadow-sm" />
            <span className="text-[10px] text-slate-500 font-mono">#f5f5f7</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
          01. Hero Specimen
        </div>
        <div className="relative rounded-3xl bg-gradient-to-b from-[#121215] to-[#0a0a0c] border border-white/10 p-8 sm:p-14 text-center overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">
              Tyson Tran · Builder &amp; Educator
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Software crafted with the precision of hardware.
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
              Architecting intelligent autonomous agents, scalable web applications, and high-performance AI infrastructure.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg hover:scale-102">
                Work With Me
              </button>
              <button className="px-6 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/15">
                View Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Capability Section Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
          02. Capability Grid Specimen
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#16161a] border border-white/10 p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">AI Agent Pipelines</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deterministic tool execution, structured function schemas, and self-correcting prompt chains.
            </p>
          </div>
          <div className="rounded-2xl bg-[#16161a] border border-white/10 p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Full-Stack Platforms</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-throughput Next.js 15 apps with server actions, real-time sync, and rock-solid relational data layers.
            </p>
          </div>
          <div className="rounded-2xl bg-[#16161a] border border-white/10 p-6 space-y-3 hover:border-sky-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">1-on-1 AI Mentorship</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering beginners and founders to build real, deployed software using modern vibe coding workflows.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Live Project Showcase Card Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
          03. Product Showcase Card Specimen
        </div>
        <div className="rounded-3xl bg-[#121216] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 font-mono text-xs font-semibold">
              FLAGSHIP INFRASTRUCTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not Limited Router
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              High-availability AI model routing proxy. Automated token budgeting, rate-limit fallback cascades, and latency optimization across 6 LLM providers.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["TypeScript", "Fastify", "Docker", "Redis", "Prometheus"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-80 h-52 rounded-2xl bg-gradient-to-tr from-[#1c1c24] to-[#252532] border border-white/15 p-5 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>LATENCY: 12ms</span>
              <span className="text-emerald-400">UPTIME: 99.98%</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-slate-300">
              <div className="text-sky-400">$ route --target claude-3-5-sonnet</div>
              <div className="text-emerald-400">✓ Healthy · 142 tokens/sec</div>
              <div className="text-slate-500">Fallback: deepseek-v3 (standby)</div>
            </div>
            <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300">
              <span>Inspect Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
