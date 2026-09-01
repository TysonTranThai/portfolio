"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

export function OptionC_Editorial() {
  return (
    <div className="space-y-12 rounded-3xl bg-[#0d0d0d] text-white p-6 sm:p-12 border border-neutral-800 shadow-2xl overflow-hidden font-sans">
      {/* Concept Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 text-xs font-medium text-lime-400 border border-lime-400/20 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            Option C · Visual Design System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Editorial / Creative Studio
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
            High-contrast magazine layouts, oversized typography, asymmetrical grid compositions, and striking monochrome with neon lime accents.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#0d0d0d] border border-neutral-700 shadow-sm" />
            <span className="text-[10px] text-neutral-500 font-mono">#0d0d0d</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00] shadow-sm" />
            <span className="text-[10px] text-neutral-500 font-mono">#ccff00</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#ffffff] shadow-sm" />
            <span className="text-[10px] text-neutral-500 font-mono">#ffffff</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#262626] shadow-sm" />
            <span className="text-[10px] text-neutral-500 font-mono">#262626</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-lime-400 font-bold">
          01. Magazine Editorial Hero Specimen
        </div>
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span>[VOL. 26]</span>
                <span>·</span>
                <span>TRAN THAI SON (TYSON)</span>
                <span>·</span>
                <span className="text-lime-400">AI SYSTEMS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                ENGINEERING <br />
                <span className="text-lime-400">INTELLIGENCE</span> <br />
                &amp; SYSTEMS.
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4 text-xs text-neutral-400 border-l border-neutral-800 pl-6">
              <p className="leading-relaxed">
                An independent builder orchestrating autonomous agents, full-stack platforms, and educating the next generation of engineers.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-none bg-lime-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-lime-300 transition-colors">
                  Work With Me →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Asymmetric Services Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-lime-400 font-bold">
          02. Asymmetrical Section Specimen
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <span className="text-5xl font-black text-lime-400 font-mono">01</span>
            <div className="space-y-2 mt-8">
              <h3 className="text-xl font-bold text-white uppercase">AI Agents &amp; RAG</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Autonomous multi-agent architectures with strict verification loops and production stability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <span className="text-5xl font-black text-neutral-700 font-mono">02</span>
            <div className="space-y-2 mt-8">
              <h3 className="text-xl font-bold text-white uppercase">Software &amp; SaaS</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Modern Next.js 15 platforms engineered for speed, clean UX, and seamless API integrations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <span className="text-5xl font-black text-neutral-700 font-mono">03</span>
            <div className="space-y-2 mt-8">
              <h3 className="text-xl font-bold text-white uppercase">Vibe Coding Mentorship</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                1-on-1 practical project-based learning for founders and beginners turning ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Live Project Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-lime-400 font-bold">
          03. Editorial Project Card
        </div>
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-lime-400 font-bold uppercase">
              CASE STUDY 001 // OPENROUTER HYBRID
            </span>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
              Not Limited Router
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Intelligent multi-model proxy routing queries between Claude, OpenAI, and self-hosted vLLM instances with zero user latency penalty.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-neutral-950 border border-neutral-800 font-mono text-xs text-lime-400">
              [UPTIME: 99.98%]
            </div>
            <button className="p-4 bg-lime-400 text-black font-bold hover:bg-lime-300 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
