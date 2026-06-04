export type ExperienceLogo =
  | '/connex_one_ltd_logo.jpeg'
  | '/hellotim_logo.jpeg'
  | '/self-employed.png'
  | '/bank-popular.jpeg'
  | '/ge-capital-bank.jpeg';

export interface Achievement {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo: ExperienceLogo;
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
