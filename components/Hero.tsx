'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    "TypeScript",
    "JavaScript",
    "SQL",
    "React",
    "Node.js",
    "PostgreSQL",
    "REST APIs",
    "AWS",
    "Docker",
  ];

  const currentFocus = [
    "LLM API Integration",
    "AI orchestration",
    "Nextjs",
    "MongoDB",
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
                className={`text-sm uppercase tracking-wider text-gray-500 transition-all duration-700 ${
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
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="font-sans text-sm font-medium text-gray-900 px-4 py-2 bg-white/30 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl hover:bg-white/50 hover:shadow-2xl hover:border-white/50 transition-all duration-300 cursor-default relative overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.5s ease ${400 + index * 50}ms`,
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

            {/* Actively Building - Shows learning through projects */}
            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Actively Building
                </p>
                <span className="text-xs text-gray-400">→ 4 side projects</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((tech, index) => (
                  <span
                    key={tech}
                    className="font-sans text-sm font-medium text-gray-900 px-4 py-2 bg-white/30 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl hover:bg-white/50 hover:shadow-2xl hover:border-white/50 transition-all duration-300 cursor-default relative overflow-hidden"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.5s ease ${600 + index * 50}ms`,
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