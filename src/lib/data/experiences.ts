import type { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'connexai-senior-engineer',
    title: 'Full Stack Software Engineer',
    company: 'ConnexAI',
    companyLogo: '/connex_one_ltd_logo.jpeg',
    location: 'Manchester Area, United Kingdom',
    locationType: 'Hybrid',
    startDate: new Date('2023-02-01'),
    endDate: null,
    isCurrent: true,
    description:
      "Building enterprise integrations that connect ConnexAI's contact-center platform with customer workflows, identity systems, ticketing tools, collaboration platforms, and browser-based calling experiences.",
    achievements: [
      {
        title: 'Dedicated CTI Chrome Extension',
        description:
          'Designed and delivered a dedicated Chrome extension for browser-based calling workflows. Owned the work from customer problem discovery through architecture, implementation, and release, including extension messaging and side-panel architecture.',
      },
      {
        title: 'Azure Entra ID Integration',
        description:
          'Built user lifecycle automation for enterprise onboarding and administration, with a focus on data consistency, scalable integration design, and predictable operational behaviour.',
      },
      {
        title: 'Jira Integration',
        description:
          'Delivered side-by-side ticket management inside the primary platform so support teams could keep customer context and operational work in one flow.',
      },
      {
        title: 'Microsoft Teams Integration',
        description:
          'Designing and developing an end-to-end collaboration integration, translating internal communication workflows into product behaviour and technical implementation.',
      },
    ],
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'React', 'REST APIs', 'External APIs', 'Workflow Software', 'AWS Lambda', 'Docker'],
  },
  {
    id: 'timworks-software-engineer',
    title: 'Software Engineer',
    company: 'Timworks',
    companyLogo: '/hellotim_logo.jpeg',
    location: 'London, United Kingdom',
    locationType: 'Remote',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-01-01'),
    isCurrent: false,
    description:
      'Contributing as a frontend engineer to build a web and mobile chat app that connects accountants with their customers.',
    achievements: [
      { title: 'Production Experience', description: 'Gained production experience with React, TypeScript, and the React ecosystem' },
      { title: 'Feature Development', description: 'Building and proposing new functionalities focused on improving the user experience' },
      { title: 'Startup Environment', description: 'Experience in start-ups with agile development environments' },
      { title: 'Design Implementation', description: 'Comfortable turning design ideas into production-ready features' },
    ],
    skills: ['React', 'TypeScript', 'React Native', 'Sass', 'Node.js', 'Loopback', 'Firebase', 'MongoDB'],
  },
  {
    id: 'self-employed-business-consultant',
    title: 'Self-employed & Business Consultant',
    company: 'International Business',
    companyLogo: '/favicon.svg',
    location: 'Manchester Area, United Kingdom',
    locationType: 'Remote',
    startDate: new Date('2013-01-01'),
    endDate: new Date('2021-12-31'),
    isCurrent: false,
    description:
      'Founded and scaled a specialized consulting practice from scratch, serving 150+ international business professionals with market research and trade data solutions to support their global expansion strategies.',
    achievements: [
      { title: 'Business Infrastructure', description: 'Built entire business infrastructure independently—from service design and pricing strategy to client acquisition and delivery' },
      { title: 'Strategic Partnerships', description: 'Established strategic partnerships with Chambers of Commerce and business associations to create referral networks and enhance market credibility' },
      { title: 'Customer Discovery', description: 'Cultivated expertise in customer discovery, translating diverse business challenges into practical, data-driven solutions' },
    ],
    skills: ['Business Strategy', 'Market Research', 'International Trade', 'Client Relations', 'Partnership Development', 'Service Design', 'Data Analysis', 'Global Expansion'],
  },
  {
    id: 'grupo-banco-popular-credit-risk-analyst',
    title: 'Credit Risk Analyst',
    company: 'Grupo Banco Popular',
    companyLogo: '/bank-popular.jpeg',
    location: 'Madrid, Spain',
    locationType: 'On-site',
    startDate: new Date('2008-08-01'),
    endDate: new Date('2009-09-01'),
    isCurrent: false,
    description:
      'Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.',
    achievements: [
      { title: 'Analytical Skills & Data Extraction', description: 'Strong attention to detail and analytical skills, extracting key data' },
      { title: 'Risk Factor Identification', description: 'Identification of risk factors that affect the investment for the bank' },
      { title: 'Risk Policy Adaptation & Reporting', description: 'Reporting to the risk committee recommendations, findings, and adapting bank risk policy' },
    ],
    skills: ['Credit Risk Analysis', 'Financial Risk Management', 'Data Analysis', 'Reporting', 'Policy Development', 'Investment Analysis'],
  },
  {
    id: 'ge-money-bank-credit-risk-analyst',
    title: 'Credit Risk Analyst',
    company: 'GE Money Bank',
    companyLogo: '/ge-capital-bank.jpeg',
    location: 'Madrid, Spain',
    locationType: 'On-site',
    startDate: new Date('2006-01-01'),
    endDate: new Date('2008-08-31'),
    isCurrent: false,
    description:
      'Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.',
    achievements: [
      { title: 'Analytical Skills & Data Extraction', description: 'Strong attention to detail and analytical skills, extracting key data' },
      { title: 'Risk Factor Identification', description: 'Identification of risk factors that affect the investment for the bank' },
      { title: 'Risk Policy Adaptation & Reporting', description: 'Reporting to the risk committee recommendations, findings, and adapting bank risk policy' },
    ],
    skills: ['Credit Risk Analysis', 'Financial Risk Management', 'Data Analysis', 'Reporting', 'Policy Development', 'Investment Analysis'],
  },
];
