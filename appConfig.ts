import { Experience } from "./types/experience";
import { Project } from "./types/project";

export const experiences: Experience[] = [
  {
    id: "connexai-senior-engineer",
    title: "Full Stack Software Engineer",
    company: "ConnexAI",
    companyLogo: "/connex_one_ltd_logo.jpeg",
    employmentType: "Full-time",
    location: "Manchester Area, United Kingdom",
    locationType: "Hybrid",
    startDate: new Date("2023-02-01"),
    endDate: null,
    isCurrent: true,
    description:
      "Specialised in building critical third-party integrations that enhance platform functionality and user experience. Key achievements include:",
    achievements: [
      {
        title: "HubSpot Calling Widget Integration",
        description:
          "Streamlined user workflows and improved communication efficiency across the platform",
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
      "HTML",
      "Git",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GraphQL",
    ],
  },
  {
    id: "timworks-software-engineer",
    title: "Software Engineer",
    company: "Timworks",
    companyLogo: "/hellotim_logo.jpeg",
    employmentType: "Full-time",
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
    employmentType: "Self-employed",
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
    employmentType: "Full-time",
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
    employmentType: "Full-time",
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
    id: "planitly",
    title: "Planitly",
    description:
      "Production-grade AI-powered travel planning SaaS built with Next.js 14, featuring event-driven architecture, structured OpenAI integration, and complex relational database design. Generates personalized multi-day vacation itineraries through a sophisticated two-phase AI workflow with TripAdvisor validation.",
    projectLogo: "/planitly-logo.png",
    status: "LIVE IN PRODUCTION",
    keyFeatures: [
      "Two-phase AI generation: OpenAI GPT-4o with Zod-validated structured outputs creates itineraries, then resolves locations via TripAdvisor API with parallel processing",
      "Event-driven architecture with Inngest: 11-step async background job workflow handles travel plan generation with automatic retries and database transactions",
      "Scalable database design: 16 Sequelize models with complex many-to-many relationships, JSONB metadata columns, and 74 SQL migrations",
      "RESTful API architecture: 34 serverless endpoints with nested resource management, webhook integration (Stripe, Mailgun), and role-based access control",
      "Provider-agnostic location service: Interface-based design supporting multiple external APIs (TripAdvisor, Unsplash, GeoNames) with adapter pattern",
      "Custom NextAuth.js Sequelize adapter with JWT sessions, multi-provider authentication (Google OAuth, Magic Link), and automatic email list integration",
      "Rich interactive UI: Multi-step form wizard with React Hook Form + Zod validation, drag-and-drop itinerary editor, WYSIWYG rich text editing",
      "Complete payment integration: Stripe checkout with webhook-driven user upgrades, customer portal, and environment-specific pricing",
      "Public sharing system with privacy controls, featured travel plans discovery, and SEO-optimized MDX travel guides",
    ],
    techStack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Material-UI (MUI) v6",
      "React Query (TanStack Query)",
      "React Hook Form",
      "Zod",
      "Next.js API Routes",
      "Sequelize ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Inngest",
      "OpenAI GPT-4o",
      "TripAdvisor API",
      "Unsplash API",
      "GeoNames API",
      "Vercel",
      "Docker",
      "Stripe",
      "Mailgun",
      "ConvertKit",
    ],
    links: {
      liveUrl: "https://planitly.com",
      githubUrl: null,
    },
  },
  {
    id: "duebase",
    title: "Duebase AI",
    description:
      "Production-grade AI-powered financial due diligence SaaS that transforms UK Companies House filings into actionable risk assessments and financial health scores in 30 seconds. Built with Next.js 14 and Google Gemini 2.5 Flash, featuring event-driven document processing, structured AI outputs with Zod validation, and sophisticated payment reconciliation workflows.",
    projectLogo: "/duebase-logo.png",
    status: "LIVE IN PRODUCTION",
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
