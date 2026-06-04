import type { Experience } from "./types/experience";
import type { Project } from "./types/project";

export const experiences: Experience[] = [
  {
    id: "connexai-senior-engineer",
    title: "Full Stack Software Engineer",
    company: "ConnexAI",
    companyLogo: "/connex_one_ltd_logo.jpeg",
    location: "Manchester Area, United Kingdom",
    locationType: "Hybrid",
    startDate: new Date("2023-02-01"),
    endDate: null,
    isCurrent: true,
    description:
      "Building enterprise integrations that connect ConnexAI's contact-center platform with the systems teams rely on every day.",
    achievements: [
      {
        title: "Dedicated CTI Chrome Extension",
        description:
          "Designed and delivered a dedicated Chrome extension that integrated our platform with third-party systems for seamless two-way calling. Owned the build end to end, from identifying the client problem to architecture, implementation, and release, while deepening my understanding of Chrome extension messaging and side panel architecture.",
      },
      {
        title: "Azure (Entra ID) Integration",
        description:
          "Automated user lifecycle management with robust architecture supporting enterprise-level scalability and data consistency",
      },
      {
        title: "Jira Integration",
        description:
          "Delivered comprehensive side-by-side ticket management, boosting team productivity by enabling direct access from the primary platform",
      },
      {
        title: "Microsoft Teams Integration",
        description:
          "Currently designing and developing end-to-end integration to enhance internal collaboration workflows",
      },
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "React",
      "AWS Lambda",
      "Docker",
      "REST APIs",
    ],
  },
  {
    id: "timworks-software-engineer",
    title: "Software Engineer",
    company: "Timworks",
    companyLogo: "/hellotim_logo.jpeg",
    location: "London, United Kingdom",
    locationType: "Remote",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-01-01"),
    isCurrent: false,
    description:
      "Contributing as a frontend engineer to build a web and mobile chat app that connects accountants with their customers.",
    achievements: [
      {
        title: "Production Experience",
        description:
          "Gained production experience with React, TypeScript, and the React ecosystem",
      },
      {
        title: "Feature Development",
        description:
          "Building and proposing new functionalities focused on improving the user experience",
      },
      {
        title: "Startup Environment",
        description:
          "Experience in start-ups with agile development environments",
      },
      {
        title: "Design Implementation",
        description:
          "Comfortable turning design ideas into production-ready features",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "React Native",
      "Sass",
      "Node.js",
      "Loopback",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    id: "self-employed-business-consultant",
    title: "Founder & Business Consultant",
    company: "International Business",
    companyLogo: "/self-employed.png",
    location: "Manchester Area, United Kingdom",
    locationType: "Remote",
    startDate: new Date("2013-01-01"),
    endDate: new Date("2021-12-31"),
    isCurrent: false,
    description:
      "Founded and scaled a specialized consulting practice from scratch, serving 150+ international business professionals with market research and trade data solutions to support their global expansion strategies.",
    achievements: [
      {
        title: "Business Infrastructure",
        description:
          "Built entire business infrastructure independently—from service design and pricing strategy to client acquisition and delivery",
      },
      {
        title: "Strategic Partnerships",
        description:
          "Established strategic partnerships with Chambers of Commerce and business associations to create referral networks and enhance market credibility",
      },
      {
        title: "Customer Discovery",
        description:
          "Cultivated expertise in customer discovery, translating diverse business challenges into practical, data-driven solutions",
      },
    ],
    skills: [
      "Business Strategy",
      "Market Research",
      "International Trade",
      "Client Relations",
      "Partnership Development",
      "Service Design",
      "Data Analysis",
      "Global Expansion",
    ],
  },
  {
    id: "grupo-banco-popular-credit-risk-analyst",
    title: "Credit Risk Analyst",
    company: "Grupo Banco Popular",
    companyLogo: "/bank-popular.jpeg",
    location: "Madrid, Spain",
    locationType: "On-site",
    startDate: new Date("2008-08-01"),
    endDate: new Date("2009-09-01"),
    isCurrent: false,
    description:
      "Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.",
    achievements: [
      {
        title: "Analytical Skills & Data Extraction",
        description:
          "Strong attention to detail and analytical skills, extracting key data",
      },
      {
        title: "Risk Factor Identification",
        description:
          "Identification of risk factors that affect the investment for the bank",
      },
      {
        title: "Risk Policy Adaptation & Reporting",
        description:
          "Reporting to the risk committee recommendations, findings, and adapting bank risk policy",
      },
    ],
    skills: [
      "Credit Risk Analysis",
      "Financial Risk Management",
      "Data Analysis",
      "Reporting",
      "Policy Development",
      "Investment Analysis",
    ],
  },
  {
    id: "ge-money-bank-credit-risk-analyst",
    title: "Credit Risk Analyst",
    company: "GE Money Bank",
    companyLogo: "/ge-capital-bank.jpeg",
    location: "Madrid, Spain",
    locationType: "On-site",
    startDate: new Date("2006-01-01"),
    endDate: new Date("2008-08-31"),
    isCurrent: false,
    description:
      "Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.",
    achievements: [
      {
        title: "Analytical Skills & Data Extraction",
        description:
          "Strong attention to detail and analytical skills, extracting key data",
      },
      {
        title: "Risk Factor Identification",
        description:
          "Identification of risk factors that affect the investment for the bank",
      },
      {
        title: "Risk Policy Adaptation & Reporting",
        description:
          "Reporting to the risk committee recommendations, findings, and adapting bank risk policy",
      },
    ],
    skills: [
      "Credit Risk Analysis",
      "Financial Risk Management",
      "Data Analysis",
      "Reporting",
      "Policy Development",
      "Investment Analysis",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "plaudera",
    title: "Plaudera",
    description:
      "AI-powered customer feedback platform for collecting product ideas, detecting duplicates, scoring demand confidence, running polls, and managing public roadmaps.",
    status: "LIVE IN PRODUCTION",
    category: "SaaS",
    learned: [
      "Feedback quality matters more than vote count. Confidence scoring needs diversity, impact, frequency, and concentration checks to avoid building for a loud minority.",
      "AI duplicate detection is only useful when paired with a review workflow. Embeddings find candidates, but merge/dismiss flows and audit trails make it trustworthy.",
      "Public widgets are deceptively complex. CORS, CSRF, contributor sessions, rate limits, page rules, and bot protection become core product infrastructure very quickly.",
    ],
    keyFeatures: [
      "Problem-first feedback system: public boards, embeddable widgets, contributor auth, voting, polls, strategic tags, and transparent roadmap decisions.",
      "AI-powered prioritization: Google Gemini + embeddings detect duplicate ideas, generate similarity scores, and support confidence scoring based on votes, contributor diversity, frequency, and impact.",
      "Production SaaS architecture: Next.js 16 App Router, Drizzle/PostgreSQL with pgvector, Better Auth, Polar subscriptions, Inngest background jobs, rate limits, CORS/CSRF protections, and email automation.",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Drizzle ORM",
      "PostgreSQL",
      "pgvector",
      "Better Auth",
      "Polar.sh",
      "Google Gemini",
      "Vercel AI SDK",
      "Google Embeddings",
      "Inngest",
      "Resend",
      "Cloudflare Turnstile",
      "OpenPanel",
      "Vitest",
      "React Testing Library",
      "Zod",
    ],
    links: {
      liveUrl: "https://plaudera.com",
      githubUrl: null,
    },
  },
  {
    id: "duebase",
    title: "Duebase",
    summary:
      "AI-powered financial due diligence SaaS that transforms UK Companies House filings into actionable risk assessments and financial health scores in 30 seconds.",
    description:
      "Production-grade AI-powered financial due diligence SaaS that transforms UK Companies House filings into actionable risk assessments and financial health scores in 30 seconds. Built with Next.js 14 and Google Gemini 2.5 Flash, featuring event-driven document processing, structured AI outputs with Zod validation, and sophisticated payment reconciliation workflows.",
    status: "LIVE IN PRODUCTION",
    category: "SaaS",
    learned: [
      "Gemini 2.5 Flash with structured outputs is shockingly good at financial document parsing — and an order of magnitude cheaper than GPT-4o for this workload.",
      "Payment reconciliation is its own product. Two providers, three race conditions, one cron job. Worth getting right before you have paying users, not after.",
      "Trial systems live or die by lifecycle logic. The 14-day reset cost me a week of bugs that only production traffic could've surfaced.",
    ],
    keyFeatures: [
      "AI-powered document analysis: Google Gemini 2.5 Flash with structured JSON schema outputs processes PDF financial statements, extracting 40+ financial metrics with comprehensive risk scoring (financial health 1-5, liquidity/solvency risk levels, profitability trends)",
      "Event-driven architecture with Inngest: Multi-step async background jobs handle document processing with automatic retries, real-time status updates via pub/sub channels, and granular token usage tracking for cost optimization",
      "Companies House API integration: Real-time search across 15M+ UK businesses, automated data synchronization with complex mapper pattern, filing history access, and officer/PSC data enrichment with parallel processing",
      "Advanced payment reconciliation system: Daily cron jobs with batch processing verify payment status across Stripe/LemonSqueezy, automatically grant access for valid subscriptions, flag discrepancies for review, and recover broken customer links",
      "Sophisticated database architecture: 22 Sequelize models with 24 SQL migrations, complex many-to-many relationships, JSONB metadata columns for flexible data storage, and auto-generated type-safe models",
      "RESTful API with 40+ serverless endpoints: Nested resource management (companies/documents/reports), role-based access control (admin/user), pagination utilities, and comprehensive error handling with custom error types",
      "Dual payment provider support: Provider-agnostic architecture with Stripe and LemonSqueezy integrations, webhook-driven subscriptions with idempotency, customer portal access, and environment-specific pricing",
      "AI usage tracking and quota management: Daily limits based on subscription tier (trial: 15/day, paid: 50/day), token count tracking (input/output/thoughts), cost estimation per job, and middleware-based verification",
      "Trial system with automated lifecycle: 14-day trials with email verification, automatic daily limit reset at midnight UTC, middleware-enforced trial period checks, and seamless upgrade flow",
      "Rich interactive dashboard: Material-UI v7 components with custom theming, TanStack Query for server state management, company portfolio management, search history with local storage, and real-time document processing status",
      "Security-first design: NextAuth.js with JWT sessions and custom Sequelize adapter, Google OAuth + magic link authentication, middleware-based route protection, webhook signature verification, and security audit logging",
    ],
    techStack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Material-UI (MUI) v7",
      "React Query (TanStack Query v5)",
      "React Hook Form",
      "Zod",
      "Next.js API Routes",
      "Sequelize ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Inngest",
      "Google Gemini 2.5 Flash",
      "Companies House API",
      "Vercel",
      "Docker",
      "Stripe",
      "LemonSqueezy",
      "Resend",
      "Mailgun",
      "Jest (with ts-jest)",
    ],
    links: {
      liveUrl: "https://duebase.com",
      githubUrl: null,
    },
  },
];
