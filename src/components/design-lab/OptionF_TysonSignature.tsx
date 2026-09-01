"use client";

import * as React from "react";
import { Flame, Cpu, ArrowRight, Dna, Trophy } from "lucide-react";

export function OptionF_TysonSignature() {
  return (
    <div className="space-y-12 rounded-3xl bg-[#090b10] text-white p-6 sm:p-10 border border-sky-500/30 shadow-2xl overflow-hidden font-sans relative">
      {/* Background Energy Rays */}
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-sky-500/20 via-rose-500/10 to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Concept Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-rose-500/20 text-xs font-semibold text-sky-300 border border-sky-500/30 mb-2">
            <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            Option F · Custom Signature System
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Tyson Signature / Builder Matrix
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Bespoke builder identity merging AI engineering intensity, basketball discipline grit, rapid vibe-coding execution, and architectural precision.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#090b10] border border-sky-500/40 shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">Carbon</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#0ea5e9] shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">Electric</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#f43f5e] shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">Ignition</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#10b981] shadow-sm" />
            <span className="text-[10px] text-slate-400 font-mono">Emerald</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-sky-400 font-bold">
          01. Builder Matrix Hero Specimen
        </div>
        <div className="rounded-3xl bg-[#0e121a] border border-white/10 p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-xs font-bold border border-sky-500/30">
                  TRAN THAI SON // TYSON
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  STATUS: HIGH_VELOCITY
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05]">
                TURNING RAW IDEAS INTO{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-rose-400">
                  PRODUCTION AI REALITY.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                AI Builder · Software Engineer · Entrepreneur · Educator. Operating at the frontier of agentic orchestration, vibe coding, and self-hosted infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:scale-102 transition-all">
                  Hire / Partner With Me
                </button>
                <button className="px-6 py-3 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/15">
                  Download CV (PDF)
                </button>
              </div>
            </div>

            {/* Signature HUD Box */}
            <div className="lg:col-span-4 rounded-2xl bg-[#141923] border border-white/10 p-5 space-y-3 font-mono text-xs shadow-xl">
              <div className="text-xs text-sky-400 font-bold border-b border-white/10 pb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Dna className="w-3.5 h-3.5 text-rose-400" />
                  BUILDER_DNA
                </span>
                <span className="text-slate-500">v2.0</span>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center justify-between">
                  <span>DISCIPLINE:</span>
                  <span className="text-emerald-400">ATHLETE_MINDSET</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SPECIALTY:</span>
                  <span className="text-sky-300">MULTI_AGENT_RAG</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SPEED:</span>
                  <span className="text-amber-300">VIBE_CODING_10X</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>TEACHING:</span>
                  <span className="text-rose-300">1_ON_1_MENTOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Signature Pillars */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-sky-400 font-bold">
          02. Signature Matrix Pillars
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#0f141d] border border-sky-500/20 p-6 space-y-3 hover:border-sky-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Autonomous AI Systems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineering multi-agent pipelines with deterministic tool interfaces and fail-safe model routers.
            </p>
          </div>
          <div className="rounded-2xl bg-[#0f141d] border border-rose-500/20 p-6 space-y-3 hover:border-rose-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">High-Velocity Vibe Coding</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Spec-driven development turning concepts into fully-deployed SaaS apps in record time.
            </p>
          </div>
          <div className="rounded-2xl bg-[#0f141d] border border-emerald-500/20 p-6 space-y-3 hover:border-emerald-400/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Builder Mentorship</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hands-on 1-on-1 coaching taking beginners to confident independent builders.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Live Project Specimen */}
      <div className="space-y-4 relative z-10">
        <div className="text-xs uppercase tracking-widest text-sky-400 font-bold">
          03. Flagship Showcase
        </div>
        <div className="rounded-3xl bg-[#111622] border border-sky-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-sky-400 font-bold">
              [SYSTEM 01] · MODEL ROUTING INFRASTRUCTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Not Limited Router
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              Self-hosted model routing mesh with dynamic latency balancing and automatic fallback across Claude, OpenAI, and local vLLM instances.
            </p>
          </div>
          <button className="px-6 py-3 rounded-xl bg-sky-500 text-black font-bold text-xs hover:bg-sky-400 transition-colors flex items-center gap-2 shrink-0">
            <span>Explore Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
