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
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function WhatIDoSection() {
  const pillars = [
    {
      id: "ai-dev",
      title: "AI Development & Agents",
      badge: "Intelligent Systems",
      icon: Bot,
      accent: "cyan",
      description:
        "Architecting autonomous AI agents, tool-calling pipelines, RAG knowledge retrieval systems, and customized LLM applications.",
      capabilities: [
        "Autonomous multi-step AI agents with custom tools",
        "LLM API integration (OpenAI, Claude, DeepSeek)",
        "Retrieval-Augmented Generation (RAG) & vector embeddings",
        "AI model routing gateways & fallback architectures",
        "AI-assisted developer tools and CLI assistants",
      ],
      link: "#services",
      linkText: "View AI Services",
    },
    {
      id: "software-dev",
      title: "Full-Stack Software Engineering",
      badge: "Modern Web",
      icon: Code2,
      accent: "violet",
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
      accent: "success",
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
      accent: "warning",
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
      accent: "cyan",
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
    <section id="what-i-do" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Capabilities"
          title="What I Do"
          subtitle="A comprehensive overview of my technical capabilities spanning AI engineering, full-stack development, cloud infrastructure, and builder education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLarge = idx === 0 || idx === 4;
            return (
              <Card
                key={pillar.id}
                className={`flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-surface-100 ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-surface-200 text-slate-800 dark:text-slate-100">
                      <Icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <Badge variant="subtle" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
