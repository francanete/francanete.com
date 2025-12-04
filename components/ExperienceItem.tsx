"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Experience } from "../types/experience";
import { calculateDuration, formatDateRange } from "../utils/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(experience.isCurrent);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="group relative overflow-hidden border border-neutral-200/80 bg-gradient-to-br from-white via-neutral-50/50 to-neutral-100/30 p-5 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50">
      {/* Technical corner accents */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-neutral-300/60" />
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-neutral-300/60" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-neutral-300/60" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-neutral-300/60" />

      {/* Current Badge */}
      {experience.isCurrent && (
        <div className="absolute -top-px right-6 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 shadow-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Current
        </div>
      )}
      {/* Header Section */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {/* Mobile Layout - Stacked */}
        <div
          className={`flex flex-col gap-4 sm:hidden ${
            !isExpanded && !experience.isCurrent ? "pb-8" : ""
          }`}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-neutral-200">
                <Image
                  src={experience.companyLogo}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-neutral-900 text-base break-words">
                {experience.title}
              </h2>
              <p className="text-xs text-neutral-600 break-words mt-1">
                {experience.company} · {experience.employmentType}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1">
                {formatDateRange(experience.startDate, experience.endDate)} ·{" "}
                {calculateDuration(experience.startDate, experience.endDate)}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1 mb-4">
                {experience.location} · {experience.locationType}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div
          className={`hidden sm:block ${
            !isExpanded && !experience.isCurrent ? "pb-8" : ""
          }`}
        >
          <div
            className={`flex gap-5 ${
              isExpanded || experience.isCurrent ? "mb-4" : "mb-0"
            }`}
          >
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-neutral-200">
                <Image
                  src={experience.companyLogo}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title and Company Info */}
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-neutral-900 text-lg break-words">
                {experience.title}
              </h2>
              <p className="text-sm text-neutral-600 break-words mt-1">
                {experience.company} · {experience.employmentType}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1">
                {formatDateRange(experience.startDate, experience.endDate)} ·{" "}
                {calculateDuration(experience.startDate, experience.endDate)}
              </p>
              <p className="text-xs text-neutral-500 break-words mt-1">
                {experience.location} · {experience.locationType}
              </p>
            </div>
          </div>

          {/* Skills - ONLY show on desktop when collapsed - glass effect */}
          {!isExpanded && !experience.isCurrent && (
            <div className="flex flex-wrap items-center gap-2 ml-[4.25rem] mt-3">
              {experience.skills.slice(0, 5).map((tech, index) => (
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
              {experience.skills.length > 5 && (
                <span className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500 whitespace-nowrap">
                  +{experience.skills.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {(isExpanded || experience.isCurrent) && (
        <>
          {/* Description */}
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-sm leading-relaxed text-neutral-700 sm:ml-[4.25rem] break-words">
              {experience.description}
            </p>
          </div>

          {/* Achievements */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <ul className="space-y-2 sm:ml-[4.25rem]">
              {experience.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-neutral-700"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="break-words">
                    <span className="font-medium text-neutral-900">
                      {achievement.title}
                    </span>{" "}
                    – {achievement.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Skills Section - Only show when expanded */}
      {(isExpanded || experience.isCurrent) && (
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400 sm:ml-[4.25rem] mb-3">
            Skills
          </p>
          <div className="flex flex-wrap gap-2 sm:ml-[4.25rem]">
            {experience.skills.map((tech, index) => (
              <span
                key={tech}
                className="rounded-md border border-white/60 bg-white/40 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md whitespace-nowrap"
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
      {!isExpanded && !experience.isCurrent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
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
      {!experience.isCurrent && isExpanded && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
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
