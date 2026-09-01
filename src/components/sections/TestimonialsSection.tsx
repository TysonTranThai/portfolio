"use client";

import * as React from "react";
import { Quote, CheckCircle2 } from "lucide-react";
import { testimonialsData, showTestimonialsSection } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function TestimonialsSection() {
  if (!showTestimonialsSection) return null;

  return (
    <section className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Social Proof"
          title="Client &amp; Student Feedback"
          subtitle="Direct feedback from founders, business partners, and mentorship students."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((t) => (
            <Card
              key={t.id}
              className="p-6 sm:p-8 bg-white dark:bg-surface-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
                    <Quote className="w-5 h-5" />
                  </div>
                  <Badge variant={t.type === "Client" ? "cyan" : "violet"} size="sm">
                    {t.type} Feedback
                  </Badge>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {t.outcome && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Outcome: {t.outcome}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-surface-200/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} · {t.organization}
                  </div>
                </div>

                {t.verified && (
                  <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
