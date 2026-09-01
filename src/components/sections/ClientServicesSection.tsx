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
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ClientService } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function ClientServicesSection() {
  const [selectedService, setSelectedService] = React.useState<ClientService | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "ai-agent-development":
        return Bot;
      case "ai-automation-workflows":
        return Zap;
      case "ai-customer-support":
        return MessageSquare;
      case "custom-software-saas":
        return Code2;
      case "ai-infrastructure-hosting":
        return Terminal;
      case "technical-consulting":
        return Compass;
      case "ai-product-mvp":
        return Rocket;
      case "developer-workflow-setup":
        return Wrench;
      default:
        return Bot;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Engineering"
          title="What I Do For Clients"
          subtitle="Hire me to architect customized AI agents, automate manual operations, deploy private model infrastructure, or build production-ready web software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between p-6 bg-white dark:bg-surface-100"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-200 text-sky-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="subtle" size="sm">
                      {service.category}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-surface-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <Button
                    variant="primary"
                    size="sm"
                    href={`#contact`}
                  >
                    Inquire
                  </Button>
                </div>
              </Card>
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
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50 text-xs text-sky-800 dark:text-sky-300 font-medium">
                {selectedService.tagline}
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">Overview</h4>
                <p className="leading-relaxed">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">What I Deliver</h4>
                <ul className="space-y-1.5 text-xs">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs mb-1.5">
                    <Users className="w-3.5 h-3.5 text-sky-500" />
                    <span>Who This Is For</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {selectedService.targetAudience.map((target, i) => (
                      <li key={i}>• {target}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Typical Timeline</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {selectedService.timelineGuide || "1–3 weeks depending on scope"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Example Use Cases</h4>
                <ul className="space-y-1 text-xs">
                  {selectedService.exampleUseCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-surface-200 flex items-center justify-between">
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
