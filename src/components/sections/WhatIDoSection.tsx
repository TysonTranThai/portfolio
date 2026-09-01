"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Code2,
  Terminal,
  Zap,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";

export function WhatIDoSection() {
  const pillars = [
    {
      id: "ai-dev",
      title: "AI Development & Agents",
      badge: "Intelligent Systems",
      icon: Bot,
      glowColor: "rgba(6, 182, 212, 0.25)",
      accentBorder: "group-hover:border-cyan-500/50",
      iconBg: "bg-cyan-500/10 text-cyan-500",
      description:
        "Architecting autonomous AI agents, tool-calling pipelines, RAG knowledge retrieval systems, and customized LLM applications.",
      capabilities: [
        "Autonomous multi-step AI agents with custom tool contracts",
        "LLM API integrations (OpenAI, Claude, DeepSeek, OpenRouter)",
        "Retrieval-Augmented Generation (RAG) & vector embeddings",
        "AI model routing gateways & automated fallback systems",
        "AI-assisted developer tools and CLI automation agents",
      ],
      link: "#services",
      linkText: "View AI Services",
    },
    {
      id: "software-dev",
      title: "Full-Stack Software Engineering",
      badge: "Modern Web",
      icon: Code2,
      glowColor: "rgba(139, 92, 246, 0.25)",
      accentBorder: "group-hover:border-violet-500/50",
      iconBg: "bg-violet-500/10 text-violet-500",
      description:
        "Building fast, resilient, and responsive web applications, SaaS platforms, and internal dashboards using modern frameworks.",
      capabilities: [
        "Next.js 15 App Router & React 19 architecture",
        "Strict TypeScript typing & modular component systems",
        "REST APIs, server actions & webhook backends",
        "PostgreSQL, Supabase & relational schema design",
        "Authentication (OAuth/magic links) & RBAC permissions",
      ],
      link: "#projects",
      linkText: "Browse Web Projects",
    },
    {
      id: "ai-infra",
      title: "AI Infrastructure & Self-Hosting",
      badge: "Cloud & Compute",
      icon: Terminal,
      glowColor: "rgba(16, 185, 129, 0.25)",
      accentBorder: "group-hover:border-emerald-500/50",
      iconBg: "bg-emerald-500/10 text-emerald-500",
      description:
        "Deploying and managing cost-effective, private model serving infrastructure on dedicated Linux VPS servers.",
      capabilities: [
        "Linux (Ubuntu) VPS provisioning, hardening & UFW firewall",
        "Docker containerization & multi-container orchestration",
        "Local LLM serving via vLLM, Ollama, and quant models",
        "Nginx reverse proxies, SSL automation & rate limiting",
        "Private networking (WireGuard/Tailscale) & health probes",
      ],
      link: "#projects",
      linkText: "Inspect Infrastructure Stack",
    },
    {
      id: "automation",
      title: "Workflow & Business Automation",
      badge: "Operational Leverage",
      icon: Zap,
      glowColor: "rgba(245, 158, 11, 0.25)",
      accentBorder: "group-hover:border-amber-500/50",
      iconBg: "bg-amber-500/10 text-amber-500",
      description:
        "Eliminating manual data entry and operational bottlenecks through robust, event-driven integrations and AI bots.",
      capabilities: [
        "24/7 intelligent customer support chatbots & lead scoring",
        "Omnichannel messaging bots (Telegram, Discord, Web)",
        "Multi-channel inventory and order synchronization",
        "Automated document processing & structured data extraction",
        "Self-healing workflows with automatic retry mechanisms",
      ],
      link: "#services",
      linkText: "Explore Automation Pipelines",
    },
    {
      id: "education",
      title: "Builder Mentorship & Education",
      badge: "Vibe Coding",
      icon: GraduationCap,
      glowColor: "rgba(56, 189, 248, 0.25)",
      accentBorder: "group-hover:border-sky-500/50",
      iconBg: "bg-sky-500/10 text-sky-500",
      description:
        "Teaching beginners, students, and founders how to build and deploy real software using modern AI-assisted engineering.",
      capabilities: [
        "1-on-1 personalized project-based mentorship",
        "Mastering AI coding agents (Cursor, Claude Code, Antigravity)",
        "Mental models for web architecture, Git, and deployment",
        "Spec-driven development & effective prompt engineering",
        "Systematic debugging and independent problem solving",
      ],
      link: "#teaching",
      linkText: "Learn About Mentorship",
    },
  ];

  return (
    <section id="what-i-do" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Capabilities"
          title="What I Do"
          subtitle="A comprehensive overview of my technical capabilities spanning AI engineering, full-stack development, cloud infrastructure, and builder education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isWide = idx === 0 || idx === 4;
            return (
              <TiltCard
                key={pillar.id}
                glowColor={pillar.glowColor}
                className={`flex flex-col justify-between p-7 sm:p-8 ${pillar.accentBorder} ${
                  isWide ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${pillar.iconBg} shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="subtle" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-sky-500" />
                      <span>Key Deliverables</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {pillar.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-surface-200/60">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/link"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
