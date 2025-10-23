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
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'LIVE IN PRODUCTION':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'IN DEVELOPMENT':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'COMPLETED':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div
            className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Status Badge */}
            <div className={`absolute -top-2 right-6 text-xs font-semibold px-3 py-1.5 rounded-full border ${getStatusColor(project.status)} transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                {project.status}
            </div>

            {/* Project Icon with Enhanced Styling */}
            <div className="mb-6">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                    <Image
                        src={project.projectLogo}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            {/* Title and Description */}
            <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-2xl mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    KEY FEATURES
                </h4>
                <ul className="space-y-2">
                    {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                            <span className="text-emerald-500 mr-3 mt-0.5 font-bold">✓</span>
                            <span className="leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                        <span
                            key={tech}
                            className="text-xs font-medium text-gray-700 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 group-hover:shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Metadata */}
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="font-medium">{project.metadata.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <span className="font-medium">{project.metadata.role}</span>
                    </div>
                    {project.metadata.userCount && (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="font-medium">{project.metadata.userCount}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                {project.links.liveUrl && (
                    <a
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-1 justify-center"
                    >
                        <span>View Live</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
                {project.links.githubUrl && (
                    <a
                        href={project.links.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-1 justify-center"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                )}
            </div>
        </div>
    );
}
