export interface Project {
  id: string;
  title: string;
  description: string;
  summary?: string;
  projectLogo: string;
  status: 'LIVE IN PRODUCTION' | 'IN DEVELOPMENT' | 'COMPLETED';
  category: string;
  learned: string[];
  statusLabel?: string;
  keyFeatures: string[];
  techStack: string[];
  links: {
    liveUrl?: string;
    githubUrl?: string | null;
  };
}
