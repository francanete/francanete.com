import { Experience } from './types/experience';

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
  }
];
