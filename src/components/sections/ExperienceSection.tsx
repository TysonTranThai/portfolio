"use client";

import * as React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-computational-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career & Engineering Log"
          title="Experience & Milestones"
          subtitle="A transparent breakdown of my real-world engineering engagements, client deployments, open-source systems, and mentorship programs."
        />

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative pl-10 sm:pl-20 group">
              {/* Timeline node */}
              <div className="absolute left-1.5 sm:left-5.5 top-5 w-5 h-5 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <TiltCard
                glowColor="rgba(16, 185, 129, 0.2)"
                className="p-8 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 space-y-4 font-sans"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      LOG_0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                      {item.organizationOrProject}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono">
                    <Badge variant="subtle" size="sm" className="text-[11px]">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.period}
                    </Badge>
                    <Badge variant="cyan" size="sm" className="text-[11px]">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {"// EXECUTION_SCOPE"}
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results / Impact */}
                {item.results && item.results.length > 0 && (
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs space-y-1 font-mono">
                    <div className="font-bold text-emerald-300 uppercase">
                      VERIFIED_OUTCOMES:
                    </div>
                    {item.results.map((res, i) => (
                      <div key={i} className="text-emerald-400">
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
                      className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-slate-300 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
