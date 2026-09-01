"use client";

import * as React from "react";
import { Activity, Cpu, Rocket, BookOpen, Compass } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

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
        return Compass;
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Personal Side"
          title="Beyond the Code"
          subtitle="What drives my focus, discipline, and curiosity outside of full-stack engineering and client deliveries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.beyondCode.map((item) => {
            const Icon = getInterestIcon(item.icon);
            return (
              <Card
                key={item.interest}
                className="p-6 bg-white dark:bg-surface-100 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-200 text-sky-500 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.interest}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
