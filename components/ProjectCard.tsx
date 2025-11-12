"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FEATURES_LIMIT = 3;
  const TECH_STACK_LIMIT = 6;

  const hasExpandableContent =
    (project.summary && project.summary !== project.description) ||
    project.keyFeatures.length > FEATURES_LIMIT ||
    project.techStack.length > TECH_STACK_LIMIT;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE IN PRODUCTION":
        return "bg-green-100 text-green-800 border-green-200";
      case "IN DEVELOPMENT":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "COMPLETED":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-500 flex flex-col h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Status Badge */}
      <div
        className={`absolute -top-2 right-6 text-xs font-semibold px-3 py-1.5 rounded-full border ${getStatusColor(
          project.status
        )} transition-all duration-300`}
      >
        {project.status}
      </div>

      {/* Project Icon with Enhanced Styling */}
      <div className="mb-6">
        <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
          <Image src={project.projectLogo} alt={project.title} fill />
        </div>
      </div>

      {/* Title and Description */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-2xl mb-3 transition-colors duration-300">
          {project.title}
        </h3>
        {project.links.liveUrl && (
          <a
            href={project.links.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-3"
          >
            <span>View Live</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
        <div className="transition-all duration-300">
          <p className="text-gray-600 leading-relaxed text-base">
            {isExpanded
              ? project.description
              : project.summary || project.description}
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          KEY FEATURES
        </h4>
        <div className="transition-all duration-300">
          <ul className="space-y-2">
            {(isExpanded
              ? project.keyFeatures
              : project.keyFeatures.slice(0, FEATURES_LIMIT)
            ).map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start text-sm text-gray-700 transition-colors duration-300"
              >
                <span className="text-emerald-500 mr-3 mt-0.5 font-bold">
                  ✓
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          TECH STACK
        </h4>
        <div className="transition-all duration-300">
          <div className="flex flex-wrap gap-2">
            {(isExpanded
              ? project.techStack
              : project.techStack.slice(0, TECH_STACK_LIMIT)
            ).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-gray-700 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Expand/Collapse Button */}
      {hasExpandableContent && (
        <div className="mb-6 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Show more details</span>
                <svg
                  className="w-4 h-4"
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
              </>
            )}
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {project.links.githubUrl && (
          <a
            href={project.links.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-1 justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}
