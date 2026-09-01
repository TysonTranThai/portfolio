"use client";

import * as React from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SkillLevel } from "@/types";

export function TechStackSection() {
  const getLevelVariant = (level: SkillLevel) => {
    switch (level) {
      case "Experienced":
        return "success";
      case "Working Knowledge":
        return "cyan";
      case "Familiar":
        return "default";
      case "Exploring":
        return "violet";
    }
  };

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tools & Technologies"
          title="Technical Stack & Proficiencies"
          subtitle="An honest breakdown of the languages, frameworks, AI platforms, and cloud infrastructure I use to build production systems."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs">
          <span className="text-slate-500 font-medium">Proficiency Guide:</span>
          <Badge variant="success" size="sm">Experienced (Daily Production Driver)</Badge>
          <Badge variant="cyan" size="sm">Working Knowledge (Production Capable)</Badge>
          <Badge variant="default" size="sm">Familiar (Used in Builds/Labs)</Badge>
          <Badge variant="violet" size="sm">Exploring (Active R&amp;D)</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className="p-6 bg-white dark:bg-surface-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="border-b border-slate-100 dark:border-surface-200/60 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-surface-200/40 border border-slate-100 dark:border-surface-300/30 flex flex-col gap-1 text-left transition-colors hover:border-sky-500/30"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <Badge variant={getLevelVariant(skill.level)} size="sm">
                          {skill.level}
                        </Badge>
                      </div>
                      {skill.notes && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                          {skill.notes}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
