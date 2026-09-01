"use client";

import * as React from "react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const principles = [
    {
      num: "I.",
      title: "Shared Upside & Zero Retainers",
      desc: "We align incentives with results. No hourly billing, no bureaucratic bloat — we engineer software that moves metrics.",
    },
    {
      num: "II.",
      title: "Autonomous Agent Architectures",
      desc: "We do not build toy chatbots. We engineer self-healing multi-agent pipelines with deterministic tool contracts and memory graphs.",
    },
    {
      num: "III.",
      title: "Private Self-Hosted Infrastructure",
      desc: "Your data never leaves your control. We deploy dedicated Linux VPS clusters running vLLM, Ollama, and private model gateways.",
    },
    {
      num: "IV.",
      title: "Spec-Driven Vibe Coding",
      desc: "Speed without chaos. We write ironclad specifications, then accelerate 10x with AI-assisted software generation.",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-8 sm:left-16 w-[1px] bg-white/20" />
        <div className="absolute top-0 bottom-0 right-8 sm:right-16 w-[1px] bg-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
            <span>{"// THE MODEL & PHILOSOPHY"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            How we work. How we build. Why we win together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Most agencies trade hours for dollars. We trade engineering mastery for compounding outcomes.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Manifesto (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-12 rounded-sm bg-black/60 border border-white/20 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono">
                <span className="text-amber-400 uppercase tracking-widest font-bold">
                  {"MANIFESTO // OPERATIONAL_CONTRACT"}
                </span>
                <span className="text-slate-400">EST. 2024</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {profileData.bioParagraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-center">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="text-2xl font-serif font-bold text-amber-400">10x</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    BUILD SPEED
                  </div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="text-2xl font-serif font-bold text-cyan-400">&lt; 12ms</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    LATENCY
                  </div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="text-2xl font-serif font-bold text-emerald-400">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    PRIVATE INFRA
                  </div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="text-2xl font-serif font-bold text-rose-400">0%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    HOURLY FLUFF
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Classical Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4 font-sans">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-6 rounded-sm bg-black/40 border border-white/15 hover:border-amber-400/60 transition-all space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-serif font-bold text-amber-400 font-mono">
                    {p.num}
                  </span>
                  <h4 className="text-base font-serif font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
