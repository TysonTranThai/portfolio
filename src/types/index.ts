export type SkillLevel = "Experienced" | "Working Knowledge" | "Familiar" | "Exploring";

export type ProjectCategory = 
  | "All"
  | "AI"
  | "Software"
  | "Automation"
  | "Infrastructure"
  | "Business"
  | "Education";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  category: ProjectCategory[];
  technologies: string[];
  featured: boolean;
  status: "Completed" | "Active" | "In Development" | "Prototype" | "Maintained";
  problem?: string;
  solution?: string;
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyId?: string;
  highlights: string[];
  year: string;
}

export interface ClientService {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  targetAudience: string[];
  exampleUseCases: string[];
  technologies: string[];
  timelineGuide?: string;
  ctaText: string;
}

export interface TeachingProgram {
  id: string;
  title: string;
  badge: string;
  description: string;
  corePhilosophy: string;
  curriculumTopics: {
    title: string;
    description: string;
    items: string[];
  }[];
  targetAudience: string[];
  formats: {
    title: string;
    duration: string;
    description: string;
    features: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organizationOrProject: string;
  category: "Client Work" | "AI Systems" | "Product & Startup" | "Teaching & Mentorship" | "Infrastructure";
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  results?: string[];
  links?: { label: string; url: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: SkillLevel;
    icon?: string;
    notes?: string;
  }[];
}

export interface WorkflowStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientOrProject: string;
  summary: string;
  heroMetrics?: { label: string; value: string }[];
  problem: string;
  context: string;
  goal: string;
  architecture: {
    overview: string;
    components: string[];
    diagramSummary?: string;
  };
  technologies: string[];
  implementationSteps: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  results: string[];
  lessonsLearned: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization?: string;
  type: "Client" | "Student" | "Collaborator";
  quote: string;
  outcome?: string;
  avatarPlaceholder?: string;
  verified: boolean;
}

export interface ProfileData {
  fullName: string;
  preferredName: string;
  vietnameseName: string;
  title: string;
  positioning: string;
  heroLead: string;
  bioParagraphs: string[];
  location: string;
  availability: {
    status: "Available" | "Limited Availability" | "Booked";
    label: string;
    acceptingClients: boolean;
    acceptingStudents: boolean;
  };
  quickFacts: { label: string; value: string; detail: string }[];
  beyondCode: {
    interest: string;
    icon: string;
    description: string;
  }[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username: string;
  icon: string;
  primary?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isCta?: boolean;
}
