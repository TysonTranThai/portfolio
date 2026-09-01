"use client";

import * as React from "react";
import { ArrowRight, BookOpen, Sparkles, Users, Award } from "lucide-react";

export function OptionE_SoftPremium() {
  return (
    <div className="space-y-12 rounded-3xl bg-[#fbf9f5] text-[#2c2c2c] p-6 sm:p-10 border border-[#e8e4dc] shadow-xl overflow-hidden font-sans">
      {/* Concept Header */}
      <div className="border-b border-[#e8e4dc] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee9df] text-xs font-semibold text-[#665e52] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f772d]" />
            Option E · Visual Design System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1917]">
            Soft Premium / Warm Humanist
          </h2>
          <p className="text-sm text-[#665e52] mt-1 max-w-2xl">
            Approachable warmth, cream backgrounds, organic charcoal typography, soft tactile shadows, and gentle sage-amber accents.
          </p>
        </div>

        {/* Palette Swatches */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#fbf9f5] border border-[#d8d2c4] shadow-sm" />
            <span className="text-[10px] text-[#78716c] font-mono">#fbf9f5</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#1c1917] shadow-sm" />
            <span className="text-[10px] text-[#78716c] font-mono">#1c1917</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#4f772d] shadow-sm" />
            <span className="text-[10px] text-[#78716c] font-mono">#4f772d</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] shadow-sm" />
            <span className="text-[10px] text-[#78716c] font-mono">#2563eb</span>
          </div>
        </div>
      </div>

      {/* 1. Live Hero Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#78716c] font-bold">
          01. Warm Humanist Hero Specimen
        </div>
        <div className="rounded-3xl bg-white border border-[#e5e0d8] p-8 sm:p-14 text-center shadow-sm">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe6] text-xs font-semibold text-[#57534e]">
              <Sparkles className="w-3.5 h-3.5 text-[#4f772d]" />
              <span>Building software with clarity and empathy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1c1917] leading-tight">
              Making complex AI intuitive, useful, and teachable.
            </h1>
            <p className="text-base text-[#57534e] max-w-lg mx-auto leading-relaxed">
              I partner with founders to build AI automation products and mentor students to create real applications with modern vibe coding.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button className="px-6 py-3 rounded-2xl bg-[#1c1917] text-white font-medium text-sm hover:bg-[#332f2b] transition-colors shadow-md">
                Start a Conversation
              </button>
              <button className="px-6 py-3 rounded-2xl bg-[#f4efe6] text-[#1c1917] font-medium text-sm hover:bg-[#eae3d5] transition-colors border border-[#e0d8c9]">
                View Mentorship Program
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Approach Cards */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#78716c] font-bold">
          02. Organic Value Pillars
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-[#e5e0d8] p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#eef5e6] text-[#4f772d] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1c1917]">Project-Based Learning</h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              No abstract syntax memorization. We build real, live applications together from step one.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-[#e5e0d8] p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1c1917]">Client Product MVP</h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Rapid turn-around on AI prototypes and business automation that solve real operational friction.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-[#e5e0d8] p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1c1917]">Honest Engineering</h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Transparent timeline estimations, clear architecture documentation, and clean codebases.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Live Project Specimen */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#78716c] font-bold">
          03. Showcase Card Specimen
        </div>
        <div className="rounded-3xl bg-white border border-[#e5e0d8] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-[#4f772d] uppercase">
              Case Study · Client Support Bot
            </span>
            <h3 className="text-2xl font-bold text-[#1c1917]">
              Omnichannel Customer Support System
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed max-w-lg">
              Integrated Telegram and Discord AI agent routing customer queries, resolving FAQs, and escalating high-priority tickets directly to staff.
            </p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-[#f4efe6] text-[#1c1917] font-semibold text-xs border border-[#e0d8c9] hover:bg-[#eae3d5] transition-colors flex items-center gap-2">
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
