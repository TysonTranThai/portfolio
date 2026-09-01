import { WorkflowStep } from "@/types";

export const howIBuildSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Phase 1",
    title: "Idea & Requirements Deconstruction",
    subtitle: "Define the core problem with absolute clarity before writing code",
    description:
      "Every great build starts with sharp requirements. I break down product ideas into user stories, operational constraints, core data models, and non-negotiables, eliminating ambiguity early.",
    outputs: ["Product brief", "User journey flows", "Feature scope boundary"],
  },
  {
    step: "02",
    number: "Phase 2",
    title: "Research & Tool Selection",
    subtitle: "Identify the most pragmatic stack and open-source foundations",
    description:
      "I evaluate available APIs, model capabilities, database schemas, and battle-tested libraries. The objective is never to reinvent the wheel, but to assemble high-leverage primitives.",
    outputs: ["Technology stack matrix", "API feasibility assessment", "Third-party dependency plan"],
  },
  {
    step: "03",
    number: "Phase 3",
    title: "Architectural Planning & Specs",
    subtitle: "Draft comprehensive system instructions and interface contracts",
    description:
      "Before orchestrating AI coding agents, I create structured markdown specifications (`.cursorrules`, API schemas, component trees). This gives AI agents exact guardrails and eliminates hallucinations.",
    outputs: ["Interface specifications", "Data schema diagrams", "Agent system prompts & rules"],
  },
  {
    step: "04",
    number: "Phase 4",
    title: "Agentic Build & Vibe Coding",
    subtitle: "High-velocity implementation with AI coding agents and human steering",
    description:
      "I leverage modern AI coding agents (Claude Code, Cursor, Antigravity) to write clean, modular code at 10x speed. As the pilot, I direct architecture, manage state, and ensure strict modularity.",
    outputs: ["Production-ready frontend & backend", "Clean modular codebase", "Centralized data structures"],
  },
  {
    step: "05",
    number: "Phase 5",
    title: "Rigorous Testing & Verification",
    subtitle: "Verify every boundary condition, error state, and edge case",
    description:
      "AI code requires ruthless verification. I test error handling, rate limits, responsive layouts across devices, and performance bottlenecks to ensure production reliability.",
    outputs: ["Zero TypeScript/lint errors", "Cross-browser responsive checks", "Resilient error boundaries"],
  },
  {
    step: "06",
    number: "Phase 6",
    title: "Cloud Deployment & Hardening",
    subtitle: "Ship to production with CI/CD, SSL, and monitoring",
    description:
      "I deploy applications to production platforms (Vercel, VPS, Supabase, Cloudflare) with automated continuous integration, custom domains, HTTPS certificates, and security headers.",
    outputs: ["Live production URL", "Automated CI/CD pipelines", "Uptime & performance monitoring"],
  },
  {
    step: "07",
    number: "Phase 7",
    title: "Telemetry & Rapid Iteration",
    subtitle: "Refine based on real telemetry, user metrics, and feedback loops",
    description:
      "Deployment is just the starting line. I monitor real-world performance, user drop-offs, and operational bottlenecks, rolling out rapid enhancements and optimizations.",
    outputs: ["User feedback triage", "Performance optimizations", "Iterative feature upgrades"],
  },
];

export const clientWorkflowSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Step 01",
    title: "Discovery & Alignment",
    subtitle: "Understanding your bottleneck and desired outcome",
    description:
      "We jump on a focused discovery call to unpack your existing workflow, business goals, and technical bottlenecks. I determine feasibility and propose high-leverage solutions.",
    outputs: ["Clear scope document", "Defined milestones & deliverables", "Fixed timeline and cost estimate"],
  },
  {
    step: "02",
    number: "Step 02",
    title: "Technical Planning",
    subtitle: "Designing the system architecture and data flow",
    description:
      "I map out the entire technical strategy: chosen AI models, database structures, webhook triggers, security boundaries, and integration touchpoints.",
    outputs: ["System architecture blueprint", "Data flow diagram", "API contract agreements"],
  },
  {
    step: "03",
    number: "Step 03",
    title: "Interactive Prototype",
    subtitle: "Rapid proof-of-concept to validate mechanics",
    description:
      "Within days, I build a functional, interactive prototype or sandbox test of the core AI agent / automation logic. This lets you see the solution in action before full buildout.",
    outputs: ["Working POC demo", "Early stakeholder feedback loop", "Scope fine-tuning"],
  },
  {
    step: "04",
    number: "Step 04",
    title: "Production Engineering",
    subtitle: "Implementing the complete robust solution",
    description:
      "I engineer the full application, agent workflows, backend integrations, and user interfaces with strict adherence to clean code, security standards, and high performance.",
    outputs: ["Full-featured web application or pipeline", "Integrations with your tools (CRM/Email/DB)", "Administrative controls"],
  },
  {
    step: "05",
    number: "Step 05",
    title: "Stress Testing & Verification",
    subtitle: "Testing edge cases and eliminating failure modes",
    description:
      "We run rigorous tests across failure scenarios, rate limits, invalid user inputs, and stress conditions to ensure the system is completely resilient.",
    outputs: ["Comprehensive test passes", "Error fallback verification", "User acceptance validation"],
  },
  {
    step: "06",
    number: "Step 06",
    title: "Deployment & Team Handover",
    subtitle: "Launching to live environments and training your team",
    description:
      "I deploy the solution to your production infrastructure, configure custom domains, set up automated monitoring, and walk your team through operating the system.",
    outputs: ["Live production deployment", "Video walkthrough / documentation", "Full repository ownership"],
  },
  {
    step: "07",
    number: "Step 07",
    title: "Continuous Iteration & Support",
    subtitle: "Post-launch tuning and proactive maintenance",
    description:
      "I stay close post-launch to monitor error rates, review performance logs, and push iterative improvements as your business scales.",
    outputs: ["Post-launch warranty support", "Performance log reviews", "Ongoing advisory retainers if needed"],
  },
];

export const studentWorkflowSteps: WorkflowStep[] = [
  {
    step: "01",
    number: "Step 01",
    title: "Understand Your Vision",
    subtitle: "Identify what you actually want to build",
    description:
      "Instead of starting with generic exercises, we identify a real project, portfolio app, or startup idea that excites you. We break it into achievable milestones.",
    outputs: ["Personalized learning goal", "Project scope blueprint", "Milestone timeline"],
  },
  {
    step: "02",
    number: "Step 02",
    title: "Targeted Concept Learning",
    subtitle: "Learn only the concepts you need, right when you need them",
    description:
      "No boring 50-hour syntax courses. We teach you the fundamental mental models of web architecture, APIs, and AI prompt engineering on a just-in-time basis.",
    outputs: ["Core mental models", "Key terminology demystified", "Tooling environment configured"],
  },
  {
    step: "03",
    number: "Step 03",
    title: "Build Together Live",
    subtitle: "Pair programming and AI agent orchestration",
    description:
      "We screen-share and build the application together. You learn how to prompt AI coding agents effectively, structure components, and connect databases with hands-on practice.",
    outputs: ["Working codebase from Day 1", "Hands-on experience with AI coding tools", "Git commits on your GitHub"],
  },
  {
    step: "04",
    number: "Step 04",
    title: "Systematic Debugging",
    subtitle: "Master the art of troubleshooting and fixing errors",
    description:
      "Errors happen to every developer. I teach you how to read terminal stack traces, isolate root causes, and guide AI agents to fix bugs without getting stuck.",
    outputs: ["Debugging problem-solving toolkit", "Log analysis skills", "Self-reliance when encountering errors"],
  },
  {
    step: "05",
    number: "Step 05",
    title: "Deploy to the World",
    subtitle: "Putting your live project on the internet",
    description:
      "We deploy your application to production (Vercel/Supabase) with a custom domain and shareable link. You now have a real product to show users, employers, or clients.",
    outputs: ["Live public URL", "Polished GitHub repository", "Portfolio case study writeup"],
  },
  {
    step: "06",
    number: "Step 06",
    title: "Independent Mastery",
    subtitle: "Building the capability to create without me",
    description:
      "The ultimate goal is your independence. You finish the program with the confidence, tools, and mental frameworks to plan and build any project on your own.",
    outputs: ["Lifelong builder mindset", "Reusable starter templates", "Self-sufficient development capability"],
  },
];
