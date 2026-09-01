"use client";

import * as React from "react";
import { Activity, Cpu, Rocket, BookOpen, Trophy } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function BeyondTheCodeSection() {
  const getInterestIcon = (name: string) => {
    switch (name) {
      case "Activity":
        return Activity;
      case "Cpu":
        return Cpu;
      case "Rocket":
        return Rocket;
      case "BookOpen":
        return BookOpen;
      default:
        return Trophy;
    }
  };

  return (
    <section className="py-24 md:py-32 relative bg-computational-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Human Side & Grit"
          title="Beyond the Code"
          subtitle="What drives my focus, athletic discipline, and curiosity outside of full-stack engineering and client deliveries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.beyondCode.map((item, idx) => {
            const Icon = getInterestIcon(item.icon);
            return (
              <TiltCard
                key={item.interest}
                glowColor="rgba(16, 185, 129, 0.2)"
                className="p-7 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white font-sans">
                    {item.interest}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
