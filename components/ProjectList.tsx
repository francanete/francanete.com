'use client';

import { useState, useEffect } from 'react';
import { projects } from '../appConfig';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-6">
          <p
            className={`text-xs font-semibold uppercase tracking-wider text-gray-700 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
