"use client";

import * as React from "react";
import { Sparkles, Layers, ShieldCheck, Zap, Globe } from "lucide-react";

export function OptionB_LiquidGlass() {
  return (
    <div className="space-y-12 rounded-3xl bg-[#070913] text-white p-6 sm:p-10 border border-cyan-500/20 shadow-2xl overflow-hidden font-sans relative">
      {/* Spatial Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-violet-600/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Concept Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-xs font-medium text-cyan-300 border border-cyan-500/20 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Option B · Visual Design System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Liquid Glass / Spatial Future
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Translucent frosted surfaces, spatial computing visual depth, soft holographic blurs, and electric cyan-violet ambient radiance.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#070913] border border-cyan-500/40 shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">#070913</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff] shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">#00f0ff</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6] shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">#8b5cf6</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30" />
            <span className="text-[10px] text-slate-400 font-mono">Glass</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          01. Spatial Glass Hero Specimen
        </div>
        <div className="rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 p-8 sm:p-14 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Generation AI Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 leading-tight">
              Spatial clarity for autonomous AI systems.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
              Bridging the boundary between complex machine intelligence and elegant, high-velocity user experiences.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all">
                Initiate Project
              </button>
              <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/20">
                Explore Spatial UI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Spatial Service Cards */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          02. Glass Capability Cards
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 space-y-3 shadow-lg hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Autonomous Agent Mesh</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Multi-agent coordination protocols with real-time state synchronization and verified output contracts.
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 space-y-3 shadow-lg hover:border-violet-400/40 hover:bg-white/[0.06] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-violet-500/20 text-violet-300 flex items-center justify-center border border-violet-400/30">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Refractive Full-Stack UI</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tailwind CSS + Next.js 15 interfaces crafted with high-precision micro-interactions and silky Framer transitions.
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 space-y-3 shadow-lg hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Private VPS Enclaves</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Zero-leak local inference pipelines powered by vLLM, Docker networks, and encrypted Nginx gateways.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Live Project Specimen */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
          03. Floating Project Specimen
        </div>
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-violet-950/30 to-slate-900/50 backdrop-blur-2xl border border-cyan-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="space-y-4 max-w-md">
            <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>SPATIAL SAAS ENGINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not Limited Team
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Automated multi-agent workforce orchestration platform. Directing parallel agent nodes for code refactoring, docs generation, and regression auditing.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js 15", "WebSockets", "Supabase Vector", "Tailwind", "Three.js"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-mono border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-72 p-5 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl space-y-3">
            <div className="text-xs font-bold text-white flex items-center justify-between">
              <span>AGENTS POOL</span>
              <span className="text-cyan-400 font-mono">4 ACTIVE</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Code Refactor Agent</span>
                <span className="text-emerald-400">99% Complete</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>UAT Validation Agent</span>
                <span className="text-sky-400">Executing...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
