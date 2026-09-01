"use client";

import * as React from "react";
import { studentWorkflowSteps } from "@/data/workflows";
import { CheckCircle2 } from "lucide-react";

export function StudentWorkflowSection() {
  return (
    <section className="py-28 md:py-36 bg-[#070b14] text-white border-t border-white/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// THE STUDENT LEARNING ROADMAP"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            How learning with us works.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Don’t just memorize syntax. Learn how to architect, build, debug, and deploy real software independently using modern AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentWorkflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl flex flex-col justify-between space-y-6 transition-all group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-2xl font-serif font-bold text-amber-400 font-mono">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-amber-400 font-semibold">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 font-mono">
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                  MILESTONE CONTRACT:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                  {step.outputs.map((out, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
