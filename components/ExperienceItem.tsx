"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Experience } from "../types/experience";
import { calculateDuration, formatDateRange } from "../utils/experience";

// Add CSS for glow animation
const glowKeyframes = `
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 0 2px oklch(64.9% .1141 182 / 0.3), 0 0 8px oklch(64.9% .1141 182 / 0.2);
    }
    50% {
      box-shadow: 0 0 0 2px oklch(64.9% .1141 182 / 0.5), 0 0 12px oklch(64.9% .1141 182 / 0.3);
    }
  }
`;

// Inject the CSS
if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = glowKeyframes;
    document.head.appendChild(style);
}

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
        <div className="relative bg-gray-50 rounded-lg p-6 border border-gray-200">
            {/* Current Badge */}
            {experience.isCurrent && (
                <div
                    className="absolute -top-3 right-4 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm"
                    style={{
                        backgroundColor: "oklch(64.9% .1141 182)",
                        boxShadow:
                            "0 0 0 2px oklch(64.9% .1141 182 / 0.3), 0 0 8px oklch(64.9% .1141 182 / 0.2)",
                        animation: "glow 3s ease-in-out infinite",
                    }}
                >
                    Current
                </div>
            )}
            {/* Header Section */}
            <div
                className={`transition-all duration-700 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
            >
                <div
                    className={`flex gap-4 ${isExpanded || experience.isCurrent ? "mb-4" : "mb-0"}`}
                >
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
                    <div className="flex-1 space-y-1">
                        <h2 className="font-bold text-gray-900 text-lg">
                            {experience.title}
                        </h2>
                        <p className="text-sm text-gray-700">
                            {experience.company} · {experience.employmentType}
                        </p>
                        <p className="text-sm text-gray-700">
                            {formatDateRange(
                                experience.startDate,
                                experience.endDate,
                            )}{" "}
                            ·{" "}
                            {calculateDuration(
                                experience.startDate,
                                experience.endDate,
                            )}
                        </p>
                        <p className="text-sm text-gray-700">
                            {experience.location} · {experience.locationType}
                        </p>
                    </div>

                    {/* Skills - horizontally aligned for collapsed state */}
                    {!isExpanded && !experience.isCurrent && (
                        <div className="flex items-center gap-1">
                            {experience.skills
                                .slice(0, 5)
                                .map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium text-gray-900 px-2 py-1 bg-white rounded-full border border-gray-300"
                                        style={{
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible
                                                ? "translateY(0)"
                                                : "translateY(10px)",
                                            transition: `all 0.5s ease ${300 + index * 50}ms`,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            {experience.skills.length > 5 && (
                                <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-white rounded-full border border-gray-300">
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
                        <p className="text-sm leading-relaxed text-gray-900 ml-16">
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
                        <ul className="space-y-2 ml-16">
                            {experience.achievements.map(
                                (achievement, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-sm text-gray-900">
                                            <span className="font-medium">
                                                {achievement.title}
                                            </span>{" "}
                                            – {achievement.description}
                                        </span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </>
            )}

            {/* Skills Section - Only show when expanded */}
            {(isExpanded || experience.isCurrent) && (
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                >
                    <div className="flex flex-wrap gap-2 ml-16">
                        {experience.skills.map((tech, index) => (
                            <span
                                key={tech}
                                className="text-xs font-medium text-gray-900 px-3 py-1 bg-white rounded-full border border-gray-300 transition-all duration-300 cursor-default"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateY(10px)",
                                    transition: `all 0.5s ease ${600 + index * 50}ms`,
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
                    className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                        <span>Show less</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-200 rotate-180"
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
