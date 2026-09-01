"use client";

import * as React from "react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const journeyMilestones = [
    {
      phase: "01",
      title: "Foundations & Code",
      desc: "Started with core algorithms, databases, and full-stack web architecture.",
    },
    {
      phase: "02",
      title: "AI & Vibe Coding",
      desc: "Mastered modern AI-assisted engineering and spec-driven agentic pipelines.",
    },
    {
      phase: "03",
      title: "Client Automation",
      desc: "Shipped custom software, automations, and bots solving operational bottlenecks.",
    },
    {
      phase: "04",
      title: "Builder Mentorship",
      desc: "Started 1-on-1 coaching, guiding students and founders to build real products.",
    },
    {
      phase: "05",
      title: "Autonomous Agents",
      desc: "Engineered multi-agent coordination frameworks and local model routers.",
    },
    {
      phase: "06",
      title: "Self-Hosted Infra",
      desc: "Configured dedicated Linux VPS servers running vLLM, Ollama, and secure APIs.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#07090e] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Header (like Image 3) */}
        <div className="space-y-4 mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <span>ABOUT // ORIGIN &amp; PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Building intelligent software that solves real friction and scales effortlessly.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            I combine rigorous software engineering principles with high-velocity AI coding workflows to build autonomous agents, automation backends, and full-stack products.
          </p>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Manifesto (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                <span className="text-emerald-400 font-bold uppercase">
                  {"MANIFESTO // OPERATIONAL_DISCIPLINE"}
                </span>
                <span className="text-slate-500">v2.6</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {profileData.bioParagraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Core Pillars Stats */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-black text-emerald-400">10x</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">BUILD SPEED</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-black text-cyan-400">&lt; 12ms</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">LLM ROUTING</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-black text-rose-400">1-on-1</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">MENTORSHIP</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">VERIFIED CODE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Stage Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2 font-mono text-xs">
              <span className="text-slate-400 font-bold uppercase">
                {"BUILDER_EVOLUTION_STAGES"}
              </span>
              <span className="text-emerald-400">CHRONOLOGICAL</span>
            </div>

            <div className="space-y-3 font-mono">
              {journeyMilestones.map((m) => (
                <div
                  key={m.phase}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-emerald-500/50 transition-all flex items-start gap-4 backdrop-blur-xl group"
                >
                  <span className="text-2xl font-black text-emerald-400 font-mono shrink-0 mt-0.5">
                    {m.phase}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-sans">{m.title}</h4>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
