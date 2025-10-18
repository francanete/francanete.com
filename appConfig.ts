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
  }
];
