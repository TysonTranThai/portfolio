"use client";

import * as React from "react";
import {
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Terminal,
  Compass,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  const milestones = [
    {
      icon: Code2,
      title: "Foundations & Coding",
      description: "Began with a core passion for computer systems, full-stack programming, and software logic.",
    },
    {
      icon: Sparkles,
      title: "AI & Modern Vibe Coding",
      description: "Embraced agentic coding tools early, shifting from slow syntax typing to high-velocity architectural steering.",
    },
    {
      icon: Briefcase,
      title: "Real Client Solutions",
      description: "Started engineering custom AI support bots, event-driven webhooks, and automation pipelines for active businesses.",
    },
    {
      icon: GraduationCap,
      title: "Mentorship & Teaching",
      description: "Formulated a project-first curriculum to help students and non-technical founders build and launch real applications.",
    },
    {
      icon: Terminal,
      title: "Infrastructure & Model Gateways",
      description: "Scaled into private Linux VPS infrastructure, local LLM orchestration (vLLM/Ollama), and multi-provider routing (Not Limited Router).",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="The Journey of a Modern AI Builder"
          subtitle="How hands-on experimentation, client engineering, and modern AI coding agents shaped my approach to software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base sm:text-lg">
              {profileData.bioParagraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Operating Principles */}
            <div className="pt-6 border-t border-slate-200 dark:border-surface-300/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/40">
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Real Work Over Hype</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Focusing strictly on deployed software, tangible automation metrics, and honest capabilities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/40">
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  <Compass className="w-4 h-4 text-sky-500" />
                  <span>Speed With Rigor</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Combining high-velocity AI code generation with meticulous testing, type safety, and clean architecture.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="secondary"
                href="#what-i-do"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore What I Build &amp; Teach
              </Button>
            </div>
          </div>

          {/* Timeline & Quick Facts (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-white dark:bg-surface-100 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Evolution &amp; Milestones</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-surface-300">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                    <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-white dark:bg-surface-100 border-2 border-sky-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-sky-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Facts Card */}
            <div className="grid grid-cols-2 gap-3">
              {profileData.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/40 text-left"
                >
                  <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {fact.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {fact.detail}
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
