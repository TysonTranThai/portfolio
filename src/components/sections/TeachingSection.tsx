"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { teachingData } from "@/data/teaching";

export function TeachingSection() {
  return (
    <section id="teaching" className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// THE ACADEMY & BUILDER MENTORSHIP"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            Learn the art of AI-assisted engineering.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Stop getting trapped in syntax tutorials. Master spec-driven vibe coding, multi-agent orchestration, and ship real production software in days.
          </p>
        </div>

        {/* Philosophy Highlight Banner */}
        <div className="mb-14 p-8 sm:p-12 rounded-sm bg-black/60 border border-white/20 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>{"THE CORE TEACHING PHILOSOPHY"}</span>
          </div>
          <blockquote className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
            &ldquo;{teachingData.corePhilosophy}&rdquo;
          </blockquote>
        </div>

        {/* Curriculum Pillars Grid */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
            <span className="text-amber-400 font-bold uppercase tracking-widest">
              6 CORE CURRICULUM MODULES
            </span>
            <span className="text-slate-400">1-ON-1 PROJECT DRIVEN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingData.curriculumTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-xl font-serif font-bold text-amber-400 font-mono">
                      MOD 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-white/5 text-slate-400 uppercase">
                      PRACTICAL
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {topic.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1.5">
                      Key Competencies:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {topic.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship Formats & Application */}
        <div className="p-8 sm:p-12 rounded-sm bg-black/80 border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
              LIMITED CAPACITY // DIRECT 1-ON-1 COACHING
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to accelerate your software engineering 10x?
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Accepting motivated founders, software engineers, and creative builders for the upcoming cohort.
            </p>
          </div>

          <Link
            href="#contact"
            className="px-8 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl rounded-sm shrink-0 flex items-center gap-2"
          >
            <span>Apply For Mentorship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
