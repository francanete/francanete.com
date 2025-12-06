"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Experience } from "../types/experience";
import { calculateDuration, formatDateRange } from "../utils/experience";

interface NestedExperienceItemProps {
  experiences: Experience[];
  title: string;
}

export default function NestedExperienceItem({
  experiences,
  title,
}: NestedExperienceItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate total duration across all experiences
  const calculateTotalDuration = (): string => {
    let totalDays = 0;

    experiences.forEach((exp) => {
      const end = exp.endDate || new Date();
      const start = exp.startDate;
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      totalDays += diffDays;
    });

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);

    if (years > 0 && months > 0) {
      return `${years} yr${years > 1 ? "s" : ""} ${months} mo${
        months > 1 ? "s" : ""
      } total`;
    } else if (years > 0) {
      return `${years} yr${years > 1 ? "s" : ""} total`;
    } else if (months > 0) {
      return `${months} mo${months > 1 ? "s" : ""} total`;
    } else {
      return "Less than 1 mo total";
    }
  };

  // Get combined skills from all experiences
  const getCombinedSkills = (): string[] => {
    const allSkills = experiences.flatMap((exp) => exp.skills);
    const uniqueSkills = Array.from(new Set(allSkills));
    return uniqueSkills;
  };

  const combinedSkills = getCombinedSkills();
  const totalDuration = calculateTotalDuration();

  return (
    <div className="group relative overflow-hidden border border-neutral-200/80 bg-gradient-to-br from-white via-neutral-50/50 to-neutral-100/30 p-5 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50">
      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-neutral-300/60" />
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-neutral-300/60" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-neutral-300/60" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-neutral-300/60" />

      {/* Collapsed Header Section */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {/* Mobile Layout - Stacked */}
        <div
          className={`flex flex-col gap-4 sm:hidden ${
            !isExpanded ? "pb-8" : ""
          }`}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-neutral-200">
                <Image
                  src={experiences[0].companyLogo}
                  alt={experiences[0].company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 mb-4">
              <h2 className="font-semibold text-neutral-900 text-base break-words">
                {title}
              </h2>
              <p className="text-xs text-neutral-600 break-words mt-1">
                {experiences.length} position
                {experiences.length > 1 ? "s" : ""} · {totalDuration}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1">
                {experiences[0].location} · {experiences[0].locationType}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className={`hidden sm:block ${!isExpanded ? "pb-8" : ""}`}>
          <div className={`flex gap-5 ${isExpanded ? "mb-6" : "mb-0"}`}>
            {/* Company Logo - Use first experience's logo */}
            <div className="flex-shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-neutral-200">
                <Image
                  src={experiences[0].companyLogo}
                  alt={experiences[0].company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title and Aggregated Info */}
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-neutral-900 text-lg break-words">
                {title}
              </h2>
              <p className="text-sm text-neutral-600 break-words mt-1">
                {experiences.length} position
                {experiences.length > 1 ? "s" : ""} · {totalDuration}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1">
                {experiences[0].location} · {experiences[0].locationType}
              </p>
            </div>
          </div>

          {/* Skills - ONLY show on desktop when collapsed - glass effect */}
          {!isExpanded && (
            <div className="flex flex-wrap items-center gap-2 ml-[4.25rem] mt-3">
              {combinedSkills.slice(0, 5).map((tech, index) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/60 bg-white/40 px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm whitespace-nowrap"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(8px)",
                    transition: `all 0.4s ease ${300 + index * 40}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
              {combinedSkills.length > 5 && (
                <span className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500 whitespace-nowrap">
                  +{combinedSkills.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Content - All Experiences */}
      {isExpanded && (
        <div
          id={`nested-experience-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="space-y-6 sm:ml-6">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="border-t border-neutral-200 pt-6 first:border-t-0 first:pt-0"
              >
                {/* Individual Experience Header */}
                <div className="flex gap-4 mb-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md border border-neutral-200">
                      <Image
                        src={experience.companyLogo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="font-semibold text-neutral-900 text-sm break-words">
                      {experience.company}
                    </h3>
                    <p className="text-xs text-neutral-600 break-words">
                      {experience.employmentType}
                    </p>
                    <div className="flex flex-wrap items-center text-xs text-neutral-500">
                      <p className="break-words">
                        {formatDateRange(
                          experience.startDate,
                          experience.endDate
                        )}{" "}
                        ·{" "}
                        {calculateDuration(
                          experience.startDate,
                          experience.endDate
                        )}{" "}
                        · {experience.location} · {experience.locationType}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual Experience Details */}
                <div className="sm:ml-14 space-y-4">
                  <p className="text-sm leading-relaxed text-neutral-700 break-words">
                    {experience.description}
                  </p>
                  <ul className="space-y-2">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-sm text-neutral-700 break-words"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>
                            <span className="font-medium text-neutral-900">
                              {achievement.title}
                            </span>{" "}
                            – {achievement.description}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Combined Skills Section - Only show when expanded */}
      {isExpanded && (
        <div
          className={`mt-8 space-y-4 border-t border-neutral-200 pt-8 sm:ml-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 sm:ml-14">
            Skills
          </p>
          <div className="flex flex-wrap gap-2 sm:ml-14">
            {combinedSkills.map((tech, index) => (
              <span
                key={tech}
                className="rounded-md border border-white/60 bg-white/40 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: `all 0.4s ease ${500 + index * 30}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Show more button for collapsed state - bottom right corner */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`nested-experience-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200 z-10"
        >
          <span>Show more</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}

      {/* Show less button for expanded state */}
      {isExpanded && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`nested-experience-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
          >
            <span>Show less</span>
            <svg
              className="w-3.5 h-3.5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
