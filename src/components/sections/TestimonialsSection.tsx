"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { testimonialsData, showTestimonialsSection } from "@/data/testimonials";

export function TestimonialsSection() {
  if (!showTestimonialsSection) return null;

  return (
    <section className="py-28 md:py-36 bg-[#060910] text-white border-t border-white/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// TESTIMONIALS & ENDORSEMENTS"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            Words from our partners.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Direct feedback from founders, business leaders, and engineers who have partnered with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((t, idx) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl flex flex-col justify-between space-y-6 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                    TESTIMONY N° 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 uppercase">
                    {t.type} PARTNER
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-200 font-serif italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {t.outcome && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>OUTCOME: {t.outcome}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between font-mono">
                <div>
                  <div className="text-sm font-bold text-white font-serif">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.organization}
                  </div>
                </div>

                {t.verified && (
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 border border-emerald-500/30 px-2 py-0.5 rounded-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
