"use client";

import * as React from "react";
import { Activity, Cpu, Rocket, BookOpen, Trophy } from "lucide-react";
import { profileData } from "@/data/profile";

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
    <section className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// DISCIPLINE & HUMAN DRIVE"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            Beyond the code.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            What fuels our relentless stamina, athletic discipline, and intellectual curiosity outside of system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.beyondCode.map((item, idx) => {
            const Icon = getInterestIcon(item.icon);
            return (
              <div
                key={item.interest}
                className="p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl space-y-4 font-sans transition-all duration-300 group"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                    N° 0{idx + 1}
                  </span>
                  <div className="p-2 bg-white/5 text-amber-400 rounded-sm border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.interest}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
