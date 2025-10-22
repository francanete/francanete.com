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
            return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""} total`;
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
        <div className="group relative overflow-hidden rounded-lg border border-gray-200/10 p-8 shadow-sm/10">
            {/* Collapsed Header Section */}
            <div
                className={`transition-all duration-700 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
            >
                <div className={`flex gap-4 ${isExpanded ? "mb-6" : "mb-0"}`}>
                    {/* Company Logo - Use first experience's logo */}
                    <div className="flex-shrink-0">
                        <div className="relative h-12 w-12 overflow-hidden rounded">
                            <Image
                                src={experiences[0].companyLogo}
                                alt={experiences[0].company}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Title and Aggregated Info */}
                    <div className="flex-1 space-y-0.5">
                        <h2 className="font-semibold text-gray-900 text-base">
                            {title}
                        </h2>
                        <p className="font-sans text-sm text-gray-700">
                            {experiences.length} position
                            {experiences.length > 1 ? "s" : ""} ·{" "}
                            {totalDuration}
                        </p>
                        <div className="flex flex-wrap items-center text-xs text-gray-600">
                            <p>
                                {experiences[0].location} ·{" "}
                                {experiences[0].locationType}
                            </p>
                        </div>
                    </div>

                    {/* Skills - horizontally aligned for collapsed state */}
                    {!isExpanded && (
                        <div className="flex items-center gap-1">
                            {combinedSkills.slice(0, 5).map((tech, index) => (
                                <span
                                    key={tech}
                                    className="font-sans text-xs font-medium text-gray-600 px-2 py-0.5 bg-gray-100 rounded-full"
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
                            {combinedSkills.length > 5 && (
                                <span className="font-sans text-xs font-medium text-gray-500 px-2 py-0.5 bg-gray-100 rounded-full">
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
                    className={`transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                >
                    <div className="space-y-6 ml-6">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className="border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
                            >
                                {/* Individual Experience Header */}
                                <div className="flex gap-4 mb-4">
                                    {/* Company Logo */}
                                    <div className="flex-shrink-0">
                                        <div className="relative h-10 w-10 overflow-hidden rounded">
                                            <Image
                                                src={experience.companyLogo}
                                                alt={experience.company}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Company Info */}
                                    <div className="flex-1 space-y-0.5">
                                        <h3 className="font-semibold text-gray-900 text-sm">
                                            {experience.company}
                                        </h3>
                                        <p className="font-sans text-xs text-gray-700">
                                            {experience.employmentType}
                                        </p>
                                        <div className="flex flex-wrap items-center text-xs text-gray-600">
                                            <p>
                                                {formatDateRange(
                                                    experience.startDate,
                                                    experience.endDate,
                                                )}{" "}
                                                ·{" "}
                                                {calculateDuration(
                                                    experience.startDate,
                                                    experience.endDate,
                                                )}{" "}
                                                · {experience.location} ·{" "}
                                                {experience.locationType}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Individual Experience Details */}
                                <div className="ml-14 space-y-4">
                                    <p className="text-pretty font-sans text-sm leading-relaxed text-gray-900">
                                        {experience.description}
                                    </p>
                                    <ul className="list-disc pl-5 text-pretty font-sans text-sm leading-relaxed text-gray-900 space-y-2">
                                        {experience.achievements.map(
                                            (achievement, achievementIndex) => (
                                                <li key={achievementIndex}>
                                                    <span className="font-medium">
                                                        {achievement.title}
                                                    </span>{" "}
                                                    – {achievement.description}
                                                </li>
                                            ),
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
                    className={`mt-8 space-y-4 border-t border-gray-200 pt-8 ml-6 transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                >
                    <div className="flex flex-wrap gap-2 ml-14">
                        {combinedSkills.map((tech, index) => (
                            <span
                                key={tech}
                                className="font-sans text-xs font-medium text-gray-900 px-3 py-1 bg-white/30 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl hover:bg-white/50 hover:shadow-2xl hover:border-white/50 transition-all duration-300 cursor-default relative overflow-hidden"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateY(10px)",
                                    transition: `all 0.5s ease ${500 + index * 50}ms`,
                                    background:
                                        "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)",
                                    boxShadow:
                                        "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(255,255,255,0.1)",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent rounded-2xl" />
                                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/20 rounded-2xl" />
                                <span className="relative z-10">{tech}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Show more button for collapsed state - bottom right corner */}
            {!isExpanded && (
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
            {isExpanded && (
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                        <span>Show less</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 rotate-180`}
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
