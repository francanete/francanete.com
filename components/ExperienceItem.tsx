'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Experience } from '../types/experience';
import { calculateDuration, formatDateRange } from '../utils/experience';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200/10 p-6 shadow-sm/10">
      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left Column - Job Info */}
        <div
          className={`lg:col-span-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* LinkedIn-style Header with Logo */}
          <div className="mb-4 flex gap-3">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded">
                <Image
                  src={experience.companyLogo}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title and Company Info */}
            <div className="flex-1 space-y-0.5">
              <h2 className="font-semibold text-gray-900 text-base">
                {experience.title}
              </h2>
              <p className="font-sans text-sm text-gray-700">
                {experience.company} · <span className="text-gray-600">{experience.employmentType}</span>
              </p>
              <div className="flex flex-wrap items-center text-xs text-gray-600">
                <p>{formatDateRange(experience.startDate, experience.endDate)} · {calculateDuration(experience.startDate, experience.endDate)}</p>
              </div>
              <div className="flex flex-wrap items-center text-xs text-gray-600">
                <p>{experience.location} · {experience.locationType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div
          className={`lg:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="space-y-3">
            <p className="text-pretty font-sans text-sm leading-relaxed text-gray-900">
              {experience.description}
            </p>
            <ul className="list-disc pl-5 text-pretty font-sans text-sm leading-relaxed text-gray-900 space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="font-medium">{achievement.title}</span> – {achievement.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section - Glassmorphism Style - Full Width */}
      <div
        className={`mt-6 space-y-3 border-t border-gray-200 pt-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((tech, index) => (
            <span
              key={tech}
              className="font-sans text-sm font-medium text-gray-900 px-4 py-2 bg-white/30 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl hover:bg-white/50 hover:shadow-2xl hover:border-white/50 transition-all duration-300 cursor-default relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.5s ease ${500 + index * 50}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/20 rounded-2xl" />
              <span className="relative z-10">{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
