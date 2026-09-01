import * as React from "react";
import { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Tyson Tran — AI Systems Builder",
  description:
    "Explore AI agents, multi-model routing gateways, self-hosted LLM infrastructure, and full-stack software built by Tyson Tran.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-8 pb-16">
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
