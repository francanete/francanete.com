import { Experience } from './types/experience';
import { Project } from './types/project';

export const experiences: Experience[] = [
  {
    id: 'connexai-senior-engineer',
    title: 'Full Stack Software Engineer',
    company: 'ConnexAI',
    companyLogo: '/connex_one_ltd_logo.jpeg',
    employmentType: 'Full-time',
    location: 'Manchester Area, United Kingdom',
    locationType: 'Hybrid',
    startDate: new Date('2023-02-01'),
    endDate: null,
    isCurrent: true,
    description: 'Specialised in building critical third-party integrations that enhance platform functionality and user experience. Key achievements include:',
    achievements: [
      {
        title: 'HubSpot Calling Widget Integration',
        description: 'Streamlined user workflows and improved communication efficiency across the platform'
      },
      {
        title: 'Azure (Entra ID) Integration',
        description: 'Automated user lifecycle management with robust architecture supporting enterprise-level scalability and data consistency'
      },
      {
        title: 'Jira Integration',
        description: 'Delivered comprehensive side-by-side ticket management, boosting team productivity by enabling direct access from the primary platform'
      },
      {
        title: 'Microsoft Teams Integration',
        description: 'Currently designing and developing end-to-end integration to enhance internal collaboration workflows'
      }
    ],
    skills: [
      'HTML',
      'Git',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Docker',
      'GraphQL'
    ]
  },
  {
    id: 'timworks-software-engineer',
    title: 'Software Engineer',
    company: 'Timworks',
    companyLogo: '/hellotim_logo.jpeg',
    employmentType: 'Full-time',
    location: 'London, United Kingdom',
    locationType: 'Remote',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-01-01'),
    isCurrent: false,
    description: 'Contributing as a frontend engineer to build a web and mobile chat app that connects accountants with their customers.',
    achievements: [
      {
        title: 'Production Experience',
        description: 'Gained production experience with React, TypeScript, and the React ecosystem'
      },
      {
        title: 'Feature Development',
        description: 'Building and proposing new functionalities focused on improving the user experience'
      },
      {
        title: 'Startup Environment',
        description: 'Experience in start-ups with agile development environments'
      },
      {
        title: 'Design Implementation',
        description: 'Comfortable turning design ideas into production-ready features'
      }
    ],
    skills: [
      'React',
      'TypeScript',
      'React Native',
      'Sass',
      'Node.js',
      'Loopback',
      'Firebase',
      'MongoDB'
    ]
  },
  {
    id: 'self-employed-business-consultant',
    title: 'Founder & Business Consultant',
    company: 'International Business',
    companyLogo: '/self-employed.png',
    employmentType: 'Self-employed',
    location: 'Manchester Area, United Kingdom',
    locationType: 'Remote',
    startDate: new Date('2013-01-01'),
    endDate: new Date('2021-12-31'),
    isCurrent: false,
    description: 'Founded and scaled a specialized consulting practice from scratch, serving 150+ international business professionals with market research and trade data solutions to support their global expansion strategies.',
    achievements: [
      {
        title: 'Business Infrastructure',
        description: 'Built entire business infrastructure independently—from service design and pricing strategy to client acquisition and delivery'
      },
      {
        title: 'Strategic Partnerships',
        description: 'Established strategic partnerships with Chambers of Commerce and business associations to create referral networks and enhance market credibility'
      },
      {
        title: 'Customer Discovery',
        description: 'Cultivated expertise in customer discovery, translating diverse business challenges into practical, data-driven solutions'
      }
    ],
    skills: [
      'Business Strategy',
      'Market Research',
      'International Trade',
      'Client Relations',
      'Partnership Development',
      'Service Design',
      'Data Analysis',
      'Global Expansion'
    ]
  },
  {
    id: 'grupo-banco-popular-credit-risk-analyst',
    title: 'Credit Risk Analyst',
    company: 'Grupo Banco Popular',
    companyLogo: '/bank-popular.jpeg',
    employmentType: 'Full-time',
    location: 'Madrid, Spain',
    locationType: 'On-site',
    startDate: new Date('2008-08-01'),
    endDate: new Date('2009-02-28'),
    isCurrent: false,
    description: 'Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.',
    achievements: [
      {
        title: 'Analytical Skills & Data Extraction',
        description: 'Strong attention to detail and analytical skills, extracting key data'
      },
      {
        title: 'Risk Factor Identification',
        description: 'Identification of risk factors that affect the investment for the bank'
      },
      {
        title: 'Risk Policy Adaptation & Reporting',
        description: 'Reporting to the risk committee recommendations, findings, and adapting bank risk policy'
      }
    ],
    skills: [
      'Credit Risk Analysis',
      'Financial Risk Management',
      'Data Analysis',
      'Reporting',
      'Policy Development',
      'Investment Analysis'
    ]
  },
  {
    id: 'ge-money-bank-credit-risk-analyst',
    title: 'Credit Risk Analyst',
    company: 'GE Money Bank',
    companyLogo: '/ge-capital-bank.jpeg',
    employmentType: 'Full-time',
    location: 'Madrid, Spain',
    locationType: 'On-site',
    startDate: new Date('2006-01-01'),
    endDate: new Date('2008-08-31'),
    isCurrent: false,
    description: 'Fundamental analysis of credit operations for individuals and companies. Identifying and evaluating financial risks and setting credit limits accordingly. Reporting and submitting operations to the Director of Investments and communicating with commercial branches.',
    achievements: [
      {
        title: 'Analytical Skills & Data Extraction',
        description: 'Strong attention to detail and analytical skills, extracting key data'
      },
      {
        title: 'Risk Factor Identification',
        description: 'Identification of risk factors that affect the investment for the bank'
      },
      {
        title: 'Risk Policy Adaptation & Reporting',
        description: 'Reporting to the risk committee recommendations, findings, and adapting bank risk policy'
      }
    ],
    skills: [
      'Credit Risk Analysis',
      'Financial Risk Management',
      'Data Analysis',
      'Reporting',
      'Policy Development',
      'Investment Analysis'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    description: 'AI-powered project management for modern teams',
    projectLogo: '/taskflow-icon.svg',
    status: 'LIVE IN PRODUCTION',
    keyFeatures: [
      'Real-time collaboration with WebSockets',
      'AI-powered task prioritization',
      'Advanced analytics dashboard'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'TypeScript'],
    links: {
      liveUrl: 'https://taskflow-pro.com',
      githubUrl: 'https://github.com/username/taskflow-pro'
    },
    metadata: {
      dateRange: '2024 - Present',
      role: 'Solo Developer',
      userCount: '2.5K Users'
    }
  },
  {
    id: 'designhub',
    title: 'DesignHub',
    description: 'Collaborative design system management',
    projectLogo: '/designhub-icon.svg',
    status: 'LIVE IN PRODUCTION',
    keyFeatures: [
      'Component library management',
      'Design token synchronization',
      'Team collaboration tools'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma API', 'MongoDB'],
    links: {
      liveUrl: 'https://designhub.app',
      githubUrl: 'https://github.com/username/designhub'
    },
    metadata: {
      dateRange: '2023 - 2024',
      role: 'Lead Developer',
      userCount: '1.2K Users'
    }
  },
  {
    id: 'devtools-suite',
    title: 'DevTools Suite',
    description: 'Comprehensive developer productivity toolkit',
    projectLogo: '/devtools-icon.svg',
    status: 'IN DEVELOPMENT',
    keyFeatures: [
      'Code snippet management',
      'API testing interface',
      'Performance monitoring'
    ],
    techStack: ['Vue.js', 'Express', 'Redis', 'Docker', 'AWS'],
    links: {
      githubUrl: 'https://github.com/username/devtools-suite'
    },
    metadata: {
      dateRange: '2024 - Present',
      role: 'Solo Developer'
    }
  }
];
