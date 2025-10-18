'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  const currentFocus = [
    "Go",
    "Rust",
    "GraphQL",
    "Docker",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center px-6 py-20 lg:px-12 bg-white">
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column - Name and role */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className={`font-mono text-sm uppercase tracking-wider text-gray-500 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                Full Stack Software Engineer
              </p>
              <h1
                className={`text-balance font-bold leading-[0.95] tracking-tight text-gray-900 text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: '200ms',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                Fran
                <br />
                <span className="relative inline-block">
                  Canete
                  <span className="absolute -bottom-2 left-0 h-1 w-16 bg-gray-900 transition-all duration-500 group-hover:w-full" />
                </span>
              </h1>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                Canete
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="font-mono text-sm text-gray-900 px-3 py-1 bg-gray-50 rounded-md border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-all duration-200 cursor-default"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.5s ease ${400 + index * 50}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actively Building - Shows learning through projects */}
            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-2">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  Actively Building
                </p>
                <span className="font-mono text-xs text-gray-400">→ 4 side projects</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((tech, index) => (
                  <span
                    key={tech}
                    className="font-mono text-sm text-gray-900 px-3 py-1 bg-gray-50 rounded-md border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-all duration-200 cursor-default"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.5s ease ${600 + index * 50}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right column - Description */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="space-y-6">
            <p
              className={`text-pretty font-sans text-xl leading-relaxed text-gray-900 md:text-2xl lg:text-3xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
            <p
              className={`max-w-2xl text-pretty font-sans text-base leading-relaxed text-gray-600 md:text-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Specializing in creating scalable applications with modern
              technologies and best practices. Currently focused on crafting
              thoughtful user interfaces that blend robust engineering with
              exceptional design.
            </p>

            {/* Stats or highlights */}
            <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Active Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">GitHub Commits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}