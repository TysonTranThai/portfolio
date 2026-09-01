"use client";

import * as React from "react";
import {
  Code2,
  Sparkles,
  Bot,
  Zap,
  Terminal,
  GraduationCap,
  Compass,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const journeyMilestones = [
    {
      icon: Code2,
      phase: "01",
      title: "Foundations & Code",
      desc: "Started with core programming, algorithms, and full-stack web architecture.",
    },
    {
      icon: Sparkles,
      phase: "02",
      title: "AI & Vibe Coding",
      desc: "Mastered modern AI-assisted engineering and spec-driven agentic development.",
    },
    {
      icon: Zap,
      phase: "03",
      title: "Client Automation",
      desc: "Shipped custom software, automations, and bots solving operational bottlenecks.",
    },
    {
      icon: GraduationCap,
      phase: "04",
      title: "Builder Mentorship",
      desc: "Started 1-on-1 teaching, guiding students and founders to build real products.",
    },
    {
      icon: Bot,
      phase: "05",
      title: "Autonomous Agents",
      desc: "Engineered multi-agent coordination frameworks and local model routers.",
    },
    {
      icon: Terminal,
      phase: "06",
      title: "Self-Hosted Infra",
      desc: "Configured dedicated Linux VPS servers running vLLM, Ollama, and secure APIs.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-computational-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Origin & Evolution"
          title="About Me & My Journey"
          subtitle="How I went from learning basic programming to engineering autonomous AI pipelines, deploying private model infrastructure, and mentoring builders."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Story & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 p-8 sm:p-10 shadow-xl space-y-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  {"MANIFESTO // OPERATIONAL_PHILOSOPHY"}
                </span>
                <span className="text-xs font-mono text-slate-500">v2.6</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {profileData.bioParagraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 font-semibold uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>OPERATIONAL_CORE_PILLARS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {profileData.quickFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="p-3 text-xs font-mono bg-white/5 text-slate-200 rounded-xl border border-white/10 space-y-1"
                    >
                      <div className="text-emerald-400 font-bold">{fact.label}</div>
                      <div className="text-slate-300">{fact.value}</div>
                      <div className="text-[10px] text-slate-400 font-sans">{fact.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Milestone Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                {"BUILDER_EVOLUTION_STAGES"}
              </span>
              <span className="text-xs font-mono text-emerald-400">CHRONOLOGICAL</span>
            </div>

            <div className="space-y-3 font-mono">
              {journeyMilestones.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.phase}
                    className="p-4 rounded-2xl bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 hover:border-emerald-500/50 transition-all flex items-start gap-4 backdrop-blur-xl group"
                  >
                    <span className="text-xl font-bold text-emerald-400 font-mono shrink-0 mt-0.5">
                      {m.phase}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                        <h4 className="text-sm font-bold text-white font-sans">{m.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
