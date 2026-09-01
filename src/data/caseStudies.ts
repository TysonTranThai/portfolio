import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-study-not-limited-router",
    slug: "not-limited-router",
    title: "Architecting a Resilient Multi-Provider AI Model Gateway",
    clientOrProject: "Not Limited Router",
    summary:
      "A high-availability proxy layer routing dynamic LLM requests across OpenAI, Anthropic, and local open-weight models with sub-10ms overhead and zero-downtime failovers.",
    heroMetrics: [
      { label: "Availability", value: "99.9%" },
      { label: "Proxy Overhead", value: "<10ms" },
      { label: "Supported Providers", value: "10+" },
      { label: "Cost Reduction", value: "~35%" },
    ],
    problem:
      "Modern AI applications relying solely on a single proprietary cloud API suffer from periodic rate limits, regional outages, and sudden pricing escalations. Furthermore, sending simple classification tasks to costly frontier models wastefully burns operating budgets.",
    context:
      "As client and internal AI agent workloads grew, managing separate API keys, error retries, and latency budgets across disparate endpoints became a major point of friction.",
    goal:
      "Build a lightweight, OpenAI-compatible proxy gateway capable of intelligent intent classification, dynamic cost/latency routing, token caching, and automated fallback without changing client application code.",
    architecture: {
      overview:
        "An asynchronous reverse proxy written in TypeScript/Node.js, containerized via Docker and deployed behind an Nginx SSL reverse proxy. Redis is used for semantic prompt caching and rate limit token buckets.",
      components: [
        "Inbound OpenAI API Spec Parser & Request Normalizer",
        "Dynamic Routing Engine (Complexity / Latency / Cost rules)",
        "Redis Semantic Prompt & Response Cache",
        "Active Provider Health Checker with Circuit Breakers",
        "Telemetry & Billing Aggregator",
      ],
      diagramSummary:
        "Client App → Nginx (SSL/Auth) → Not Limited Router Core → [Redis Cache Check] → [Routing Rules Engine] → Upstream Providers (OpenAI / Claude / vLLM / Ollama) → Stream Back Response",
    },
    technologies: ["TypeScript", "Node.js", "Docker", "Nginx", "Redis", "FastAPI / Python", "Linux"],
    implementationSteps: [
      "Designed an OpenAI-compatible streaming response protocol supporting Server-Sent Events (SSE).",
      "Constructed a circuit breaker algorithm that automatically detects upstream provider degradations within 2 consecutive failed requests.",
      "Integrated Redis caching to serve exact and near-exact cached prompt completions instantly.",
      "Packaged the entire gateway into multi-stage Docker containers with healthcheck probes.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Maintaining seamless token streaming when upstream models have varying chunk formats.",
        solution:
          "Created a streaming chunk transformer pipeline that normalizes diverse upstream SSE events into standard OpenAI chunk formats in real-time.",
      },
      {
        challenge: "Preventing cache stampedes during burst traffic spikes.",
        solution:
          "Implemented probabilistic early expiration (XFetch algorithm) and mutex locks on in-flight cache misses in Redis.",
      },
    ],
    results: [
      "Zero application downtime across multiple third-party API outage incidents.",
      "Reduced development inference costs by routing low-complexity tasks to local quant models.",
      "Unified audit trail of token consumption across all connected projects.",
    ],
    lessonsLearned: [
      "Never tie production systems directly to a single upstream AI vendor.",
      "Streaming SSE transformations require precise backpressure handling in Node.js streams.",
    ],
  },
  {
    id: "case-study-customer-support",
    slug: "customer-support-automation",
    title: "Autonomous 24/7 AI Customer Support & Lead Routing System",
    clientOrProject: "Client Automation Deployment",
    summary:
      "An omnichannel customer support assistant integrated with company knowledge bases, instant lead scoring, and automated human handoff protocols.",
    heroMetrics: [
      { label: "Support Deflection", value: "72%" },
      { label: "Response Time", value: "<2 sec" },
      { label: "Lead Capture Lift", value: "+40%" },
      { label: "Human Escalation", value: "Smooth" },
    ],
    problem:
      "The client was experiencing significant customer drop-offs during evenings and weekends due to delayed response times on Telegram and website chat channels, while staff spent hours answering repetitive pricing and inventory questions.",
    context:
      "The business needed an automated solution that spoke with a friendly, professional brand voice, strictly adhered to accurate product information, and never fabricated discounts or policies.",
    goal:
      "Deploy an omnichannel AI assistant connected directly to verified product docs and FAQs that handles routine inquiries 24/7 and escalates high-value leads with full context to team members.",
    architecture: {
      overview:
        "Event-driven webhook architecture connecting Telegram and web chat widgets to a Next.js serverless backend, utilizing vector embeddings in Supabase (pgvector) for document grounding.",
      components: [
        "Multi-channel webhook receiver (Telegram Bot API + Web Chat Widget)",
        "Supabase pgvector Knowledge Base with cosine similarity search",
        "Anti-hallucination prompt orchestrator with structured JSON outputs",
        "Automated lead scoring and Telegram notification webhook for staff",
        "Admin conversation review dashboard",
      ],
      diagramSummary:
        "User Message → Webhook → Vector Similarity Search (Top 3 Chunks) → Claude/OpenAI Prompt with Grounding Guardrails → Instant Response to User + Lead Extraction to CRM",
    },
    technologies: ["Next.js", "TypeScript", "OpenAI / Claude", "Supabase (pgvector)", "Telegram Bot API", "Tailwind CSS"],
    implementationSteps: [
      "Vectorized existing client product catalogs, return policies, and FAQ databases.",
      "Engineered rigorous system prompts with strict negative constraints ('If info is not in the context, politely clarify and offer human help').",
      "Built instant lead capture heuristics that identify purchasing intent and request contact details.",
      "Created an automated alert pipeline notifying sales agents on Telegram with a concise summary when a warm lead arrives.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling ambiguous or multi-part customer questions in informal Vietnamese / English.",
        solution:
          "Added a query rewriting step before vector retrieval to expand colloquial terms into standard technical catalog terms.",
      },
      {
        challenge: "Ensuring zero hallucination of prices or promotional discounts.",
        solution:
          "Enforced strict citation requirements and schema validation on generated responses before sending to the customer.",
      },
    ],
    results: [
      "Over 70% of common customer questions resolved immediately with zero human intervention.",
      "Customer inquiry response latency dropped from 4+ hours during off-peak times to under 2 seconds.",
      "Staff could focus entirely on closing high-intent qualified leads.",
    ],
    lessonsLearned: [
      "Domain grounding and concise context injection beat fine-tuning for rapidly evolving business knowledge.",
      "Providing a fast, human-readable summary during escalation is critical for sales team adoption.",
    ],
  },
];
