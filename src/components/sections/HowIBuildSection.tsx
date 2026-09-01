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
import { TiltCard } from "@/components/ui/TiltCard";
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
    <section id="how-i-build" className="py-24 md:py-32 relative bg-surface-100/30 dark:bg-surface-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Philosophy"
          title="How I Build: AI Vibe Coding &amp; Architecture"
          subtitle="Modern software engineering has fundamentally evolved. AI coding agents execute at lightspeed, while I direct system architecture, enforce strict contracts, and verify correctness."
        />

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {howIBuildSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between select-none relative group",
                  isActive
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-xl scale-102"
                    : "bg-white/80 dark:bg-surface-100/80 text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-surface-300/40 hover:bg-slate-50 dark:hover:bg-surface-200"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold opacity-75">
                    {step.step}
                  </span>
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-transform group-hover:scale-110",
                      isActive ? "text-sky-400 dark:text-sky-600" : "text-slate-400"
                    )}
                  />
                </div>
                <div className="text-xs font-bold truncate">
                  {step.title.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed TiltCard */}
        <TiltCard
          glowColor="rgba(56, 189, 248, 0.2)"
          className="p-8 sm:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="cyan" size="md">
                  {activeStep.number}
                </Badge>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  Pipeline Phase {activeStepIndex + 1} of {howIBuildSteps.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400">
                {activeStep.subtitle}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-5 border-t border-slate-100 dark:border-surface-200/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>Concrete Phase Deliverables</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.outputs.map((out, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-surface-200 text-slate-800 dark:text-slate-200 rounded-xl border border-slate-200/60 dark:border-surface-300/40"
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
              <div className="rounded-3xl bg-slate-950 text-slate-100 p-6 font-mono text-xs shadow-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    AGENTIC_PIPELINE_EXECUTION
                  </span>
                  <span>PHASE_{activeStep.step}</span>
                </div>

                <div className="space-y-2.5 text-slate-300">
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

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  {"// Principle: The human engineer maintains absolute architectural clarity and verification boundaries, while AI agents accelerate raw implementation."}
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                  <span>STATUS: READY</span>
                  <span className="text-sky-400">CYCLE: ITERATIVE</span>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
