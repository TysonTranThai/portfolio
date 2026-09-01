import * as React from "react";
import { Metadata } from "next";
import { ClientServicesSection } from "@/components/sections/ClientServicesSection";
import { ClientWorkflowSection } from "@/components/sections/ClientWorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Client Engineering & Consulting Services | Tyson Tran",
  description:
    "Hire Tyson Tran for AI agent development, business automation workflows, private model infrastructure, custom web applications, and technical consulting.",
};

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-16">
      <ClientServicesSection />
      <ClientWorkflowSection />
      <ContactSection />
    </div>
  );
}
