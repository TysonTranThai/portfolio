"use client";

import * as React from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { SkillLevel } from "@/types";
import { Cpu, Code2, Layers, Terminal, Wrench } from "lucide-react";

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

  const getCategoryConfig = (category: string) => {
    if (category.includes("AI")) {
      return { icon: Cpu, glow: "rgba(6, 182, 212, 0.25)", color: "text-cyan-500" };
    }
    if (category.includes("Languages")) {
      return { icon: Code2, glow: "rgba(99, 102, 241, 0.25)", color: "text-indigo-500" };
    }
    if (category.includes("Frameworks")) {
      return { icon: Layers, glow: "rgba(139, 92, 246, 0.25)", color: "text-violet-500" };
    }
    if (category.includes("Infrastructure")) {
      return { icon: Terminal, glow: "rgba(16, 185, 129, 0.25)", color: "text-emerald-500" };
    }
    return { icon: Wrench, glow: "rgba(245, 158, 11, 0.25)", color: "text-amber-500" };
  };

  return (
    <section id="tech-stack" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tools & Architecture"
          title="Technical Stack & Ecosystem"
          subtitle="An honest breakdown of the languages, frameworks, AI platforms, and cloud infrastructure I use to build production systems."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-xs">
          <span className="text-slate-500 font-medium">Proficiency Guide:</span>
          <Badge variant="success" size="sm">Experienced (Production Driver)</Badge>
          <Badge variant="cyan" size="sm">Working Knowledge (Production Capable)</Badge>
          <Badge variant="default" size="sm">Familiar (Used in Labs/Builds)</Badge>
          <Badge variant="violet" size="sm">Exploring (Active R&amp;D)</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category) => {
            const config = getCategoryConfig(category.category);
            const Icon = config.icon;
            return (
              <TiltCard
                key={category.category}
                glowColor={config.glow}
                className="p-7 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="border-b border-slate-100 dark:border-surface-200/60 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-200 shrink-0">
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-2xl bg-slate-50/80 dark:bg-surface-200/40 border border-slate-100 dark:border-surface-300/30 flex flex-col gap-1 text-left transition-all duration-200 hover:border-sky-500/40 hover:bg-white dark:hover:bg-surface-200/70"
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
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
