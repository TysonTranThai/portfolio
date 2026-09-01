import * as React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ClientServicesSection } from "@/components/sections/ClientServicesSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { HowIBuildSection } from "@/components/sections/HowIBuildSection";
import { ClientWorkflowSection } from "@/components/sections/ClientWorkflowSection";
import { StudentWorkflowSection } from "@/components/sections/StudentWorkflowSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BeyondTheCodeSection } from "@/components/sections/BeyondTheCodeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <ProjectsSection />
      <ClientServicesSection />
      <TeachingSection />
      <HowIBuildSection />
      <ClientWorkflowSection />
      <StudentWorkflowSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialsSection />
      <BeyondTheCodeSection />
      <ContactSection />
    </div>
  );
}
