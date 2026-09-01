"use client";

import * as React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career & Builds"
          title="Experience & Milestones"
          subtitle="A transparent breakdown of my real-world engineering engagements, client deployments, open-source systems, and mentorship programs."
        />

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200 dark:before:bg-surface-300">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-10 sm:pl-20 group">
              {/* Timeline node */}
              <div className="absolute left-1.5 sm:left-5.5 top-5 w-5 h-5 rounded-full bg-white dark:bg-surface-100 border-2 border-sky-500 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              </div>

              <Card className="p-6 sm:p-8 bg-white dark:bg-surface-100 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                      {item.organizationOrProject}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="subtle" size="sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.period}
                    </Badge>
                    <Badge variant="cyan" size="sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Execution &amp; Responsibilities
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results / Impact */}
                {item.results && item.results.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs space-y-1">
                    <div className="font-semibold text-emerald-800 dark:text-emerald-300">
                      Measurable Outcomes:
                    </div>
                    {item.results.map((res, i) => (
                      <div key={i} className="text-emerald-700 dark:text-emerald-400">
                        • {res}
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-surface-200 text-slate-700 dark:text-slate-300 rounded border border-slate-200/60 dark:border-surface-300/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
