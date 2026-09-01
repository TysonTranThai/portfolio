"use client";

import * as React from "react";
import { caseStudiesData } from "@/data/caseStudies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architectural Deep Dives"
          title="Case Studies &amp; System Architecture"
          subtitle="In-depth breakdowns of real systems, engineering trade-offs, architecture decisions, and measured results."
        />

        <div className="space-y-12">
          {caseStudiesData.map((study) => (
            <Card
              key={study.id}
              className="p-8 sm:p-10 bg-white dark:bg-surface-100 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-surface-200">
                <div>
                  <Badge variant="cyan" size="sm" className="mb-2">
                    {study.clientOrProject}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {study.title}
                  </h3>
                </div>

                {study.heroMetrics && (
                  <div className="flex items-center gap-3">
                    {study.heroMetrics.slice(0, 3).map((m, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200/60 dark:border-surface-300/40 text-center"
                      >
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      Problem Context
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      Engineering Approach
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {study.architecture.overview}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Key Engineering Solutions
                    </h4>
                    <div className="space-y-2">
                      {study.challengesAndSolutions.map((cs, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-surface-200/60 border border-slate-200/60 dark:border-surface-300/40 text-xs space-y-1"
                        >
                          <div className="font-semibold text-slate-900 dark:text-slate-100">
                            {cs.challenge}
                          </div>
                          <div className="text-slate-600 dark:text-slate-300">
                            → {cs.solution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Verified Results
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {study.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
