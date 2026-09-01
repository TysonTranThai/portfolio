"use client";

import * as React from "react";
import { clientWorkflowSteps } from "@/data/workflows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { CheckCircle2 } from "lucide-react";

export function ClientWorkflowSection() {
  return (
    <section className="py-24 md:py-32 bg-computational-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engagement Pipeline"
          title="How Working With Me Works"
          subtitle="A structured, transparent delivery pipeline ensuring zero surprises, high-speed iteration, and production-grade reliability from day one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clientWorkflowSteps.map((step, idx) => (
            <TiltCard
              key={step.step}
              glowColor="rgba(16, 185, 129, 0.2)"
              className="p-7 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-2xl font-black font-mono text-emerald-400">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">STAGE_0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-sans">
                  {step.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-emerald-400">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 font-mono">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  OUTPUT_CONTRACT
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {step.outputs.map((out, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1 font-sans">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
