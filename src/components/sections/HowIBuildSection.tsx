"use client";

import * as React from "react";
import {
  Sparkles,
  Lightbulb,
  Search,
  FileCode,
  Terminal,
  ShieldCheck,
  Rocket,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { howIBuildSteps } from "@/data/workflows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function HowIBuildSection() {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Lightbulb;
      case 1:
        return Search;
      case 2:
        return FileCode;
      case 3:
        return Terminal;
      case 4:
        return ShieldCheck;
      case 5:
        return Rocket;
      case 6:
        return RefreshCw;
      default:
        return Sparkles;
    }
  };

  const activeStep = howIBuildSteps[activeStepIndex];

  return (
    <section id="how-i-build" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Philosophy"
          title="How I Build: AI Vibe Coding &amp; Architecture"
          subtitle="Modern software engineering has fundamentally evolved. AI coding agents execute at lightspeed, while I direct system architecture, enforce strict contracts, and verify correctness."
        />

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {howIBuildSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between select-none",
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-lg scale-102"
                    : "bg-white dark:bg-surface-100 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-surface-300/40 hover:bg-slate-50 dark:hover:bg-surface-200"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold opacity-70">
                    {step.step}
                  </span>
                  <Icon className={cn("w-4 h-4", isActive ? "text-sky-400 dark:text-sky-600" : "text-slate-400")} />
                </div>
                <div className="text-xs font-bold truncate">
                  {step.title.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-3xl bg-white dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/50 p-6 sm:p-10 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="cyan" size="md">
                  {activeStep.number}
                </Badge>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  Pipeline Stage {activeStepIndex + 1} of {howIBuildSteps.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base font-medium text-sky-600 dark:text-sky-400">
                {activeStep.subtitle}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-surface-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Concrete Stage Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.outputs.map((out, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-surface-200 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200/60 dark:border-surface-300/40"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{out}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Terminal / Blueprint visual preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 text-slate-100 p-5 font-mono text-xs shadow-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    STAGE_PIPELINE_EXECUTION
                  </span>
                  <span>STEP_{activeStep.step}</span>
                </div>

                <div className="space-y-2 text-slate-300">
                  <div>
                    <span className="text-sky-400 font-bold">&gt; MODE: </span>
                    <span>Spec-Driven Agentic Engineering</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-bold">&gt; TARGET: </span>
                    <span className="text-amber-300">{activeStep.title}</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-bold">&gt; VERIFICATION: </span>
                    <span className="text-emerald-300">Strict Type Safety + Test Validation</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                  {"// Principle: The human engineer maintains absolute architectural clarity and verification boundaries, while AI agents accelerate raw implementation."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
