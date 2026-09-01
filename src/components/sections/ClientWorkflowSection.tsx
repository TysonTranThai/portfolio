"use client";

import * as React from "react";
import { clientWorkflowSteps } from "@/data/workflows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export function ClientWorkflowSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engagement Process"
          title="How Working With Me Works"
          subtitle="A structured, transparent delivery pipeline ensuring zero surprises, high-speed iteration, and production-grade reliability from day one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clientWorkflowSteps.map((step, idx) => (
            <Card
              key={step.step}
              className="p-6 bg-white dark:bg-surface-100 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Phase 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-surface-200/60">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                  Phase Outputs
                </div>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {step.outputs.map((out, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="line-clamp-1">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
