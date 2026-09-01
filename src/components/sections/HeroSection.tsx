"use client";

import * as React from "react";
import {
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden ambient-mesh">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability Beacon Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-50/80 dark:bg-surface-100/80 border border-slate-200 dark:border-surface-300 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              {profileData.availability.label}
            </span>
          </div>

          {/* Main Hero Title & Positioning */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              <span className="block">{profileData.positioning}</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              {profileData.heroLead}
            </p>
          </div>

          {/* Discipline Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            <Badge variant="cyan" size="md">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Agents &amp; Workflows</span>
            </Badge>
            <Badge variant="violet" size="md">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Architecture</span>
            </Badge>
            <Badge variant="success" size="md">
              <Terminal className="w-3.5 h-3.5" />
              <span>VPS &amp; Model Infrastructure</span>
            </Badge>
            <Badge variant="default" size="md">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>AI Vibe Coding Educator</span>
            </Badge>
          </div>

          {/* Primary CTA Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Work With Me
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#projects"
              leftIcon={<Briefcase className="w-4 h-4" />}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/cv"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Download CV (PDF)
            </Button>
          </div>

          {/* Hero Command Bar / Terminal Teaser Card */}
          <div className="pt-8 max-w-2xl mx-auto text-left">
            <div className="rounded-2xl bg-surface-50/90 dark:bg-surface-100/90 border border-slate-200/90 dark:border-surface-300/60 shadow-xl backdrop-blur-xl p-4 sm:p-5 overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60 dark:border-surface-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2">
                    tyson@builder-matrix:~
                  </span>
                </div>
                <span className="text-[11px] font-mono text-sky-500 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                  v2.0.26
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-slate-900 dark:text-slate-100">whoami</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 pl-4">
                  &gt; Tran Thai Son (Tyson) — AI Systems Builder &amp; Educator
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 pt-1">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-slate-900 dark:text-slate-100">tyson status --capabilities</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-500 dark:text-slate-400 pl-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Autonomous AI Agents &amp; RAG</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Next.js 15 &amp; Full-Stack Web</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Self-Hosted LLMs (vLLM/Ollama)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>1-on-1 Vibe Coding Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
