import * as React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ChiefOfAgentsSection } from "@/components/sections/ChiefOfAgentsSection";
import { NotLimitedSection } from "@/components/sections/NotLimitedSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ClientServicesSection } from "@/components/sections/ClientServicesSection";
import { ClientWorkflowSection } from "@/components/sections/ClientWorkflowSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { StudentWorkflowSection } from "@/components/sections/StudentWorkflowSection";
import { RecruiterSection } from "@/components/sections/RecruiterSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { BeyondTheCodeSection } from "@/components/sections/BeyondTheCodeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* 1. Masterwork Hero */}
      <HeroSection />

      {/* 2. Short Intro & Personal Story (Grade 3 to Present) + Why Work With Tyson */}
      <StorySection />

      {/* 3. Flagship Technical System: Chief of Agents */}
      <ChiefOfAgentsSection />

      {/* 4. The Mission: Not Limited & Code Journey */}
      <NotLimitedSection />

      {/* 5. What I Do: Capabilities & Visual Outcome Flows */}
      <WhatIDoSection />

      {/* 6. Selected Projects & Case Studies */}
      <ProjectsSection />

      {/* 7. For Businesses: Client Services */}
      <ClientServicesSection />

      {/* 8. Client Delivery Workflow */}
      <ClientWorkflowSection />

      {/* 9. Learn With Tyson: Builder Mentorship */}
      <TeachingSection />

      {/* 10. Student Learning Workflow */}
      <StudentWorkflowSection />

      {/* 11. For Recruiters: 30-Second Technical Snapshot */}
      <RecruiterSection />

      {/* 12. Chronological Record & Independent Experience */}
      <ExperienceSection />

      {/* 13. Technical Armory & Honest Skill Matrix */}
      <TechStackSection />

      {/* 14. Beyond the Code: Athletics, Entrepreneurship & Languages */}
      <BeyondTheCodeSection />

      {/* 15. Contact Transmission: 3 Clear Paths (Hiring, Build, Learn) */}
      <ContactSection />
    </div>
  );
}
