"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Zap,
  MessageSquare,
  Code2,
  Terminal,
  Compass,
  Rocket,
  Wrench,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ClientService } from "@/types";
import { Modal } from "@/components/ui/Modal";

export function ClientServicesSection() {
  const [selectedService, setSelectedService] = React.useState<ClientService | null>(null);

  const getServiceConfig = (id: string, index: number) => {
    switch (id) {
      case "ai-agent-development":
        return {
          icon: Bot,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-automation-workflows":
        return {
          icon: Zap,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-customer-support":
        return {
          icon: MessageSquare,
          color: "text-cyan-400",
          number: `N° 0${index + 1}`,
        };
      case "custom-software-saas":
        return {
          icon: Code2,
          color: "text-emerald-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-infrastructure-hosting":
        return {
          icon: Terminal,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "technical-consulting":
        return {
          icon: Compass,
          color: "text-cyan-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-product-mvp":
        return {
          icon: Rocket,
          color: "text-rose-400",
          number: `N° 0${index + 1}`,
        };
      case "developer-workflow-setup":
        return {
          icon: Wrench,
          color: "text-emerald-400",
          number: `N° 0${index + 1}`,
        };
      default:
        return {
          icon: Bot,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 relative bg-[#060910] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// THE SERVICES & TERMS"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            Architectural capabilities &amp; shared upside.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Partner with us to engineer custom autonomous AI agents, automate enterprise workflows, deploy private inference infrastructure, or ship production software.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const config = getServiceConfig(service.id, idx);
            const Icon = config.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Top Number & Tag */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-2xl font-serif font-bold text-amber-400 font-mono">
                      {config.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${config.color}`} />
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 font-mono">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      KEY DELIVERABLES:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/15 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider underline underline-offset-4"
                  >
                    SPECS →
                  </button>

                  <Link
                    href="#contact"
                    className="px-3.5 py-1.5 bg-white text-black font-bold uppercase tracking-wider text-[11px] rounded-sm hover:bg-slate-200 transition-colors shadow-md"
                  >
                    INQUIRE
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Modal */}
        {selectedService && (
          <Modal
            isOpen={Boolean(selectedService)}
            onClose={() => setSelectedService(null)}
            title={selectedService.title}
            maxWidth="2xl"
          >
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedService.tagline}</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  Scope Overview
                </h4>
                <p className="leading-relaxed text-slate-200">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  Deliverables Contract
                </h4>
                <ul className="space-y-2 text-xs">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-black border border-white/15">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400 text-xs mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>WHO THIS IS FOR</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedService.targetAudience.map((target, i) => (
                      <li key={i}>• {target}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-black border border-white/15">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400 text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>DELIVERY TIMELINE</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedService.timelineGuide || "1–3 weeks depending on architecture scope"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  Example Use Cases
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedService.exampleUseCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between font-mono">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 bg-white/10 text-white text-xs uppercase"
                >
                  Close
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 bg-white text-black font-bold text-xs uppercase"
                >
                  {selectedService.ctaText}
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
