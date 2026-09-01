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

export function WhatIDoSection() {
  const pillars = [
    {
      id: "ai-dev",
      number: "N° 01",
      title: "Autonomous Agents & Neural Systems",
      badge: "CORE INTELLIGENCE",
      icon: Bot,
      description:
        "Architecting multi-agent coordination frameworks, tool-calling pipelines, RAG retrieval graphs, and customized LLM applications.",
      capabilities: [
        "Multi-step autonomous agents with deterministic tool schemas",
        "LLM routing gateways & automated failover clusters",
        "Retrieval-Augmented Generation (RAG) & vector embeddings",
        "Self-correcting agent execution and verification loops",
      ],
      link: "#services",
      linkText: "EXPLORE AGENT CAPABILITIES",
    },
    {
      id: "software-dev",
      number: "N° 02",
      title: "Full-Stack Software Architecture",
      badge: "PRODUCTION WEB",
      icon: Code2,
      description:
        "Building fast, resilient, and responsive web applications, SaaS platforms, and enterprise dashboards with strict engineering hygiene.",
      capabilities: [
        "Next.js 15 App Router & React 19 architecture",
        "Strict TypeScript typing & modular component hierarchies",
        "High-performance REST / GraphQL & real-time WebSockets",
        "PostgreSQL schema design & transactional integrity",
      ],
      link: "#projects",
      linkText: "INSPECT SOFTWARE WORK",
    },
    {
      id: "ai-infra",
      number: "N° 03",
      title: "Private AI Infrastructure & Linux VPS",
      badge: "CLOUD & HOSTING",
      icon: Terminal,
      description:
        "Deploying and managing self-hosted LLM inference engines (vLLM, Ollama, Qwen) on dedicated Linux VPS servers with zero third-party dependency.",
      capabilities: [
        "Ubuntu VPS provisioning & GPU acceleration setup",
        "Self-hosted vLLM / Ollama private model hosting",
        "Nginx reverse proxies, SSL security & rate limiting",
        "Automated backup pipelines, systemd services & telemetry",
      ],
      link: "#services",
      linkText: "VIEW INFRA SERVICES",
    },
    {
      id: "automation",
      number: "N° 04",
      title: "AI Automation & Operations",
      badge: "EFFICIENCY & ROI",
      icon: Zap,
      description:
        "Automating complex multi-step workflows, customer support funnels, data ingestion pipelines, and CRM integrations to eliminate human drag.",
      capabilities: [
        "Omnichannel AI customer support & booking bots",
        "Automated lead enrichment & multi-source web scraping",
        "Webhook event processing & n8n / Make workflow meshes",
        "Automated report synthesis & scheduled intelligence alerts",
      ],
      link: "#services",
      linkText: "VIEW AUTOMATIONS",
    },
    {
      id: "education",
      number: "N° 05",
      title: "The Academy & Builder Mentorship",
      badge: "HUMAN POTENTIAL",
      icon: GraduationCap,
      description:
        "Empowering software developers, designers, and non-technical founders to master AI coding assistants and ship production software with 10x velocity.",
      capabilities: [
        "1-on-1 personalized project-based curriculum",
        "Vibe coding masterclass (Cursor, Claude Code, Windsurf)",
        "Prompt engineering for code generation & refactoring",
        "From raw idea to live production deployment in days",
      ],
      link: "#teaching",
      linkText: "APPLY FOR MENTORSHIP",
    },
  ];

  return (
    <section id="capabilities" className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// CAPABILITIES & DOMAINS OF MASTERY"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            What we architect. What we deliver.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            From autonomous agent intelligence to bare-metal Linux infrastructure, every system is engineered for resilience, speed, and tangible business upside.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="flex flex-col justify-between p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-2xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Number & Badge */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="text-2xl font-serif font-bold text-amber-400">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 text-amber-400 shrink-0" />
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <ul className="space-y-2 pt-2 text-xs font-sans text-slate-300">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-white/15 font-mono text-xs">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
