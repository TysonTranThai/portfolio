import * as React from "react";
import { Metadata } from "next";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { StudentWorkflowSection } from "@/components/sections/StudentWorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "AI Vibe Coding & Builder Mentorship | Tyson Tran",
  description:
    "Learn practical, project-based AI-assisted development and full-stack software building with Tyson Tran. Mentorship for beginners, students, and founders.",
};

export default function TeachingPage() {
  return (
    <div className="pt-8 pb-16">
      <TeachingSection />
      <StudentWorkflowSection />
      <ContactSection />
    </div>
  );
}
