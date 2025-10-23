export interface Project {
  id: string;
  title: string;
  description: string;
  projectLogo: string;
  status: 'LIVE IN PRODUCTION' | 'IN DEVELOPMENT' | 'COMPLETED';
  keyFeatures: string[];
  techStack: string[];
  links: {
    liveUrl?: string;
    githubUrl?: string;
  };
  metadata: {
    dateRange: string;
    role: string;
    userCount?: string;
  };
}
