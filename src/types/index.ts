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
  titleVi?: string;
  tagline: string;
  taglineVi?: string;
  description: string;
  descriptionVi?: string;
  role: string;
  roleVi?: string;
  category: ProjectCategory[];
  technologies: string[];
  featured: boolean;
  status: "Completed" | "Active" | "In Development" | "Prototype" | "Maintained";
  statusVi?: string;
  problem?: string;
  problemVi?: string;
  solution?: string;
  solutionVi?: string;
  results?: string[];
  resultsVi?: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyId?: string;
  highlights: string[];
  highlightsVi?: string[];
  year: string;
}

export interface ClientService {
  id: string;
  slug: string;
  title: string;
  titleVi?: string;
  category: string;
  categoryVi?: string;
  tagline: string;
  taglineVi?: string;
  description: string;
  descriptionVi?: string;
  deliverables: string[];
  deliverablesVi?: string[];
  targetAudience: string[];
  targetAudienceVi?: string[];
  exampleUseCases: string[];
  exampleUseCasesVi?: string[];
  technologies: string[];
  timelineGuide?: string;
  timelineGuideVi?: string;
  ctaText: string;
  ctaTextVi?: string;
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
  roleVi?: string;
  organizationOrProject: string;
  organizationOrProjectVi?: string;
  category: "Client Work" | "AI Systems" | "Product & Startup" | "Teaching & Mentorship" | "Infrastructure";
  categoryVi?: string;
  period: string;
  periodVi?: string;
  summary: string;
  summaryVi?: string;
  responsibilities: string[];
  responsibilitiesVi?: string[];
  technologies: string[];
  results?: string[];
  resultsVi?: string[];
  links?: { label: string; url: string }[];
}

export interface SkillCategory {
  category: string;
  categoryVi?: string;
  description: string;
  descriptionVi?: string;
  skills: {
    name: string;
    level: SkillLevel;
    icon?: string;
    notes?: string;
    notesVi?: string;
  }[];
}

export interface WorkflowStep {
  step: string;
  number: string;
  numberVi?: string;
  title: string;
  titleVi?: string;
  subtitle: string;
  subtitleVi?: string;
  description: string;
  descriptionVi?: string;
  outputs: string[];
  outputsVi?: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleVi?: string;
  clientOrProject: string;
  clientOrProjectVi?: string;
  summary: string;
  summaryVi?: string;
  heroMetrics?: { label: string; value: string }[];
  problem: string;
  problemVi?: string;
  context: string;
  contextVi?: string;
  goal: string;
  goalVi?: string;
  architecture: {
    overview: string;
    overviewVi?: string;
    components: string[];
    componentsVi?: string[];
    diagramSummary?: string;
  };
  technologies: string[];
  implementationSteps: string[];
  implementationStepsVi?: string[];
  challengesAndSolutions: {
    challenge: string;
    challengeVi?: string;
    solution: string;
    solutionVi?: string;
  }[];
  results: string[];
  resultsVi?: string[];
  learnings?: string[];
  learningsVi?: string[];
  lessonsLearned?: string[];
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
  titleVi?: string;
  positioning: string;
  positioningVi?: string;
  heroLead: string;
  heroLeadVi?: string;
  introLead?: string;
  introLeadVi?: string;
  bioParagraphs: string[];
  bioParagraphsVi?: string[];
  education: {
    school: string;
    degree: string;
    degreeVi?: string;
    notes?: string;
    notesVi?: string;
  };
  languages: {
    name: string;
    nameVi?: string;
    level: string;
    levelVi?: string;
    code: string;
  }[];
  location: string;
  locationVi?: string;
  availability: {
    status: "Available" | "Limited Availability" | "Booked";
    label: string;
    labelVi?: string;
    acceptingClients: boolean;
    acceptingStudents: boolean;
  };
  coreMantras: string[];
  coreMantrasVi?: string[];
  personalPhilosophy?: string;
  personalPhilosophyVi?: string;
  quickFacts: {
    label: string;
    labelVi?: string;
    value: string;
    valueVi?: string;
    detail: string;
    detailVi?: string;
  }[];
  beyondCode: {
    interest: string;
    interestVi?: string;
    icon: string;
    description: string;
    descriptionVi?: string;
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
