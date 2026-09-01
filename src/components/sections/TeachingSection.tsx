"use client";

import * as React from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Clock,
} from "lucide-react";
import { teachingData } from "@/data/teaching";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24 md:py-32 relative bg-computational-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Builder Mentorship"
          title="What I Teach: Modern Vibe Coding"
          subtitle="Stop getting stuck in endless syntax tutorials. Learn how to use AI coding agents to turn ideas into working, deployed software."
        />

        {/* Philosophy Highlight Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/30 backdrop-blur-xl shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0 hidden sm:block border border-emerald-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {"// THE_CORE_PHILOSOPHY"}
                </span>
              </div>
              <p className="text-base sm:text-xl font-medium text-white leading-relaxed font-sans">
                &ldquo;{teachingData.corePhilosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Pillars Grid */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
            <span className="text-emerald-400 font-bold uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>CURRICULUM_PILLARS</span>
            </span>
            <span className="text-slate-500">6 MODULES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingData.curriculumTopics.map((topic, idx) => (
              <TiltCard
                key={idx}
                glowColor="rgba(16, 185, 129, 0.25)"
                className="p-7 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-2xl font-black font-mono text-emerald-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      MODULE_0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {topic.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-300 font-sans">
                    {topic.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Target Audience & Format Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Who this is for (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-mono uppercase">
                  WHO_THIS_IS_FOR
                </h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300 font-sans">
                {teachingData.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="leading-relaxed">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mentorship Formats (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-4 font-sans">
            <h3 className="text-base font-bold text-white font-mono uppercase mb-4">
              {"// MENTORSHIP_FORMATS"}
            </h3>

            <div className="space-y-4">
              {teachingData.formats.map((fmt, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 space-y-3 shadow-xl backdrop-blur-xl hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <h4 className="text-base font-bold text-white">
                      {fmt.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {fmt.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {fmt.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                    {fmt.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-mono text-xs font-bold uppercase shadow-xl"
              >
                Apply for Mentorship
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
