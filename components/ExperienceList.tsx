'use client';

import { useState, useEffect } from 'react';
import { experiences } from '../appConfig';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="px-6 py-12 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="space-y-3">
          <p
            className={`text-xs font-semibold uppercase tracking-wider text-gray-700 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Experience
          </p>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
