import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-not-limited-router",
    role: "Lead Architect & Systems Builder",
    organizationOrProject: "Not Limited Router (AI Gateway)",
    category: "AI Systems",
    period: "2025 – Present",
    summary:
      "Architected and developed an intelligent multi-model LLM routing layer designed for high-availability AI applications with automatic provider failover and latency tracking.",
    responsibilities: [
      "Engineered an API proxy compatible with OpenAI specs supporting upstream providers (Anthropic, OpenAI, local models)",
      "Implemented latency-based load balancing and cost-aware request dispatching algorithms",
      "Containerized service using Docker and deployed on high-performance Linux VPS behind Nginx",
      "Built telemetry pipelines for real-time token tracking, error rates, and request latency",
    ],
    technologies: ["TypeScript", "Node.js", "Docker", "Nginx", "Redis", "FastAPI / Python", "Linux"],
    results: [
      "Achieved sub-10ms proxy overhead with automated zero-downtime failover",
      "Unified access across 10+ commercial and self-hosted model endpoints",
    ],
  },
  {
    id: "exp-ai-consultant-client-work",
    role: "AI Consultant & Full-Stack Engineer",
    organizationOrProject: "Client Consulting & AI Automation",
    category: "Client Work",
    period: "2024 – Present",
    summary:
      "Working directly with business clients to design, build, and deploy custom AI agents, automated workflow pipelines, and web applications that solve manual operational bottlenecks.",
    responsibilities: [
      "Conducted technical discovery sessions to analyze client workflows and identify high-leverage automation opportunities",
      "Built production AI customer support bots with vector knowledge retrieval and CRM integrations",
      "Engineered event-driven webhook pipelines for multi-channel inventory and order synchronization",
      "Provided ongoing technical advisory on AI tool selection, architecture, and cost optimization",
    ],
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Claude API", "Supabase", "Webhooks", "PostgreSQL"],
    results: [
      "Automated over 70% of routine client inquiry processing for business partners",
      "Eliminated dozens of hours of weekly manual data entry across active client implementations",
    ],
  },
  {
    id: "exp-ai-builder-mentorship",
    role: "AI Educator & Technical Mentor",
    organizationOrProject: "AI & Vibe Coding Mentorship",
    category: "Teaching & Mentorship",
    period: "2024 – Present",
    summary:
      "Mentoring aspiring builders, students, and non-technical entrepreneurs in practical AI-assisted development, modern web architecture, and rapid MVP deployment.",
    responsibilities: [
      "Developed a project-first curriculum focused on mental models, prompt architecture, and agentic workflows",
      "Conducted 1-on-1 hands-on pair programming sessions using modern AI coding agents (Cursor, Claude Code)",
      "Guided learners through full-stack development, Git version control, database design, and cloud deployments",
      "Taught systematic debugging techniques to help learners build and troubleshoot independently",
    ],
    technologies: ["AI Coding Agents", "Cursor", "Next.js", "Git / GitHub", "Supabase", "Vercel"],
    results: [
      "Helped students transition from zero coding background to deploying functional full-stack web applications",
      "100% project-based completion rate for active mentorship sprints",
    ],
  },
  {
    id: "exp-self-hosted-infra",
    role: "DevOps & Infrastructure Engineer",
    organizationOrProject: "Self-Hosted AI Infrastructure & VPS Labs",
    category: "Infrastructure",
    period: "2024 – 2025",
    summary:
      "Deployed and maintained dedicated Linux VPS servers running containerized open-weight language models and private developer services.",
    responsibilities: [
      "Provisioned and hardened Ubuntu cloud servers with UFW firewall, SSH keys, and fail2ban",
      "Deployed local LLM runtimes (vLLM, Ollama, Qwen, DeepSeek) optimized for memory and token throughput",
      "Configured Nginx reverse proxies with automatic SSL certificate renewal and bearer token authorization",
      "Established encrypted WireGuard / Tailscale VPN mesh networks for secure remote development",
    ],
    technologies: ["Ubuntu Linux", "Docker", "vLLM", "Ollama", "Nginx", "WireGuard", "Bash / Shell"],
    results: [
      "Created a robust private model inference server for experimental batch workloads",
      "Reduced cloud API testing expenditures significantly",
    ],
  },
  {
    id: "exp-not-limited-team",
    role: "Creator & Systems Developer",
    organizationOrProject: "Not Limited Team (Agentic Platform Concept)",
    category: "Product & Startup",
    period: "2025",
    summary:
      "Researched, designed, and prototyped a multi-agent orchestration system for autonomous software planning, coding, and review workflows.",
    responsibilities: [
      "Designed hierarchical agent coordination protocol with clear role separation (Planner, Coder, Reviewer)",
      "Implemented context-saving memory layers to preserve state across multi-turn autonomous runs",
      "Built interactive web dashboard for real-time step inspection and human-in-the-loop approvals",
    ],
    technologies: ["TypeScript", "Next.js", "Python", "LangChain / Agents", "WebSockets", "Tailwind CSS"],
    results: [
      "Demonstrated autonomous multi-step feature implementation with automated verification",
      "Formulated foundational agentic design patterns reused across client solutions",
    ],
  },
];
