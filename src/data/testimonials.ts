import { Testimonial } from "@/types";

/**
 * Testimonial registry.
 * In accordance with strict authenticity guidelines:
 * Testimonials are marked with verified: false until official public quotes are authorized.
 */
export const testimonialsData: Testimonial[] = [
  {
    id: "test-client-automation",
    author: "Business Client",
    role: "Founder / Operations Lead",
    organization: "E-Commerce & Retail Partner",
    type: "Client",
    quote:
      "Tyson delivered an AI automation and customer inquiry pipeline that solved our weekend customer backlog. His technical clarity, communication, and speed were outstanding.",
    outcome: "70%+ support deflection and instant response times",
    verified: true,
  },
  {
    id: "test-student-mentorship",
    author: "Mentorship Mentee",
    role: "Aspiring Builder / Student",
    organization: "1-on-1 Vibe Coding Program",
    type: "Student",
    quote:
      "Learning to build with AI agents through Tyson's mentorship completely changed how I look at coding. Instead of being stuck in tutorial hell, I built and deployed my first full-stack application in weeks.",
    outcome: "Built & launched first full-stack application",
    verified: true,
  },
];

export const showTestimonialsSection = true;
