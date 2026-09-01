"use client";

import * as React from "react";
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
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function ClientServicesSection() {
  const [selectedService, setSelectedService] = React.useState<ClientService | null>(null);

  const getServiceConfig = (id: string, index: number) => {
    switch (id) {
      case "ai-agent-development":
        return {
          icon: Bot,
          glow: "rgba(16, 185, 129, 0.25)",
          color: "text-emerald-400",
          number: `0${index + 1}`,
        };
      case "ai-automation-workflows":
        return {
          icon: Zap,
          glow: "rgba(204, 255, 0, 0.25)",
          color: "text-lime-400",
          number: `0${index + 1}`,
        };
      case "ai-customer-support":
        return {
          icon: MessageSquare,
          glow: "rgba(6, 182, 212, 0.25)",
          color: "text-cyan-400",
          number: `0${index + 1}`,
        };
      case "custom-software-saas":
        return {
          icon: Code2,
          glow: "rgba(139, 92, 246, 0.25)",
          color: "text-violet-400",
          number: `0${index + 1}`,
        };
      case "ai-infrastructure-hosting":
        return {
          icon: Terminal,
          glow: "rgba(16, 185, 129, 0.25)",
          color: "text-emerald-400",
          number: `0${index + 1}`,
        };
      case "technical-consulting":
        return {
          icon: Compass,
          glow: "rgba(6, 182, 212, 0.25)",
          color: "text-cyan-400",
          number: `0${index + 1}`,
        };
      case "ai-product-mvp":
        return {
          icon: Rocket,
          glow: "rgba(244, 63, 94, 0.25)",
          color: "text-rose-400",
          number: `0${index + 1}`,
        };
      case "developer-workflow-setup":
        return {
          icon: Wrench,
          glow: "rgba(204, 255, 0, 0.25)",
          color: "text-lime-400",
          number: `0${index + 1}`,
        };
      default:
        return {
          icon: Bot,
          glow: "rgba(16, 185, 129, 0.25)",
          color: "text-emerald-400",
          number: `0${index + 1}`,
        };
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#07080c] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            SERVICES // CLIENT ENGINEERING &amp; CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Tailored Engineering &amp; AI Systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Hire me to architect customized AI agents, automate manual operations, deploy private model infrastructure, or build production-ready web software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const config = getServiceConfig(service.id, idx);
            const Icon = config.icon;
            return (
              <TiltCard
                key={service.id}
                glowColor={config.glow}
                className="flex flex-col justify-between p-7 bg-slate-950/90 border border-white/10 rounded-3xl transition-all duration-300 hover:border-white/30"
              >
                <div className="space-y-4">
                  {/* Top Number & Tag */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-2xl font-black font-mono text-emerald-400">
                      {config.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${config.color}`} />
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors font-sans">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables
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

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between font-mono">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>SPECS →</span>
                  </button>

                  <Button
                    variant="primary"
                    size="sm"
                    href="#contact"
                    className="font-mono text-xs font-bold uppercase rounded-full bg-white text-black hover:bg-slate-200"
                  >
                    Inquire
                  </Button>
                </div>
              </TiltCard>
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
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{selectedService.tagline}</span>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1.5 font-mono text-xs uppercase text-slate-400">
                  {"// SCOPE_OVERVIEW"}
                </h4>
                <p className="leading-relaxed text-slate-200">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-mono text-xs uppercase text-slate-400">
                  {"// DELIVERABLES_CONTRACT"}
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
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-emerald-400 text-xs mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>WHO_THIS_IS_FOR</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedService.targetAudience.map((target, i) => (
                      <li key={i}>• {target}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
                  <div className="flex items-center gap-1.5 font-mono font-semibold text-emerald-400 text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>DELIVERY_TIMELINE</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedService.timelineGuide || "1–3 weeks depending on architecture scope"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2 font-mono text-xs uppercase text-slate-400">
                  {"// USE_CASE_APPLICATIONS"}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedService.exampleUseCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                <Button variant="secondary" size="sm" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                >
                  {selectedService.ctaText}
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
