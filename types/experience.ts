export interface Achievement {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  employmentType: string;
  location: string;
  locationType: string;
  startDate: Date;
  endDate: Date | null;
  isCurrent: boolean;
  description: string;
  achievements: Achievement[];
  skills: string[];
}
