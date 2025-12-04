'use client';

import { useState, useEffect } from 'react';
import { experiences } from '../appConfig';
import ExperienceItem from './ExperienceItem';
import NestedExperienceItem from './NestedExperienceItem';

export default function ExperienceList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Group experiences by title
  const groupedExperiences = experiences.reduce((acc, experience) => {
    const title = experience.title;
    if (!acc[title]) {
      acc[title] = [];
    }
    acc[title].push(experience);
    return acc;
  }, {} as Record<string, typeof experiences>);

  // Convert to array and sort by most recent start date
  const experienceGroups = Object.entries(groupedExperiences).map(([title, exps]) => ({
    title,
    experiences: exps.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  })).sort((a, b) => b.experiences[0].startDate.getTime() - a.experiences[0].startDate.getTime());

  return (
    <section className="px-6 py-20 lg:px-8 bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-10">
          {/* Section header with line accent */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
              <span className="h-px w-8 bg-neutral-300" />
              Experience
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {experienceGroups.map((group) => (
              group.experiences.length > 1 ? (
                <NestedExperienceItem
                  key={group.title}
                  title={group.title}
                  experiences={group.experiences}
                />
              ) : (
                <ExperienceItem
                  key={group.experiences[0].id}
                  experience={group.experiences[0]}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
