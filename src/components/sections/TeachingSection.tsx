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
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function TeachingSection() {
  return (
    <section id="teaching" className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Education & Mentorship"
          title="What I Teach: Modern AI-Assisted Building"
          subtitle="Stop getting stuck in endless syntax tutorials. Learn how to use AI coding agents to turn ideas into working, deployed software."
        />

        {/* Philosophy Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 border border-sky-500/20 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500 text-white shrink-0 hidden sm:block">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  The Core Philosophy
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
                &ldquo;{teachingData.corePhilosophy}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Pillars Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-500" />
            <span>Core Curriculum Pillars</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingData.curriculumTopics.map((topic, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white dark:bg-surface-100 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                      Module 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-600 dark:text-slate-300">
                    {topic.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Audience & Format Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Who this is for (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="p-6 sm:p-8 bg-white dark:bg-surface-100">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-200 text-sky-500">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Who This Is For
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {teachingData.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Mentorship Formats (Right 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Mentorship Formats &amp; Engagement
            </h3>

            <div className="space-y-4">
              {teachingData.formats.map((fmt, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-surface-100 border border-slate-200/80 dark:border-surface-300/40 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {fmt.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 dark:text-sky-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {fmt.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {fmt.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-300">
                    {fmt.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
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
