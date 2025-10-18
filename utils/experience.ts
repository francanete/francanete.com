import { Experience } from '../types/experience';

// Helper function to calculate duration between dates
export function calculateDuration(startDate: Date, endDate: Date | null = null): string {
  const end = endDate || new Date();
  const start = startDate;

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0 && months > 0) {
    return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  } else if (months > 0) {
    return `${months} mo${months > 1 ? 's' : ''}`;
  } else {
    return 'Less than 1 mo';
  }
}

// Helper function to format date for display
export function formatDateRange(startDate: Date, endDate: Date | null): string {
  const startMonth = startDate.toLocaleDateString('en-US', { month: 'short' });
  const startYear = startDate.getFullYear();

  if (endDate) {
    const endMonth = endDate.toLocaleDateString('en-US', { month: 'short' });
    const endYear = endDate.getFullYear();
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  } else {
    return `${startMonth} ${startYear} - Present`;
  }
}

// Helper function to get current experience
export function getCurrentExperience(experiences: Experience[]): Experience | undefined {
  return experiences.find(exp => exp.isCurrent);
}
