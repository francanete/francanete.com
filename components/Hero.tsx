"use client";

import { useState, useEffect } from "react";

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
    "AWS Lambda",
    "Docker",
  ];

  const currentFocus = [
    "LLM API Integration",
    "AI orchestration",
    "Next.js",
    "OpenAI",
    "Google Gemini API",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center px-6 py-20 lg:px-12 bg-gray-50">
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column - Name and role */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className={`text-sm uppercase tracking-wider text-gray-500 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                FULL STACK SOFTWARE ENGINEER
              </p>
              <h1
                className={`text-balance font-bold leading-[0.95] tracking-tight text-gray-900 text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: "200ms",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Fran
                <br />
                <span className="relative inline-block">
                  Canete
                  <span className="absolute -bottom-2 left-0 h-1 w-16 bg-gray-900 transition-all duration-500" />
                </span>
              </h1>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-900 px-2.5 py-1.5 rounded-full border border-gray-300 transition-all duration-300 cursor-default"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `all 0.5s ease ${400 + index * 50}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actively Building */}
            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  ACTIVELY BUILDING
                </p>
                <span className="text-xs text-gray-400">→ 2 SIDE PROJECTS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((tech, index) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-900 px-2.5 py-1.5 rounded-full border border-gray-300 transition-all duration-300 cursor-default"
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
          </div>
        </div>

        {/* Right column - Description */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="space-y-6">
            <p
              className={`text-pretty font-sans text-xl leading-relaxed text-gray-900 md:text-2xl lg:text-3xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              From running my own business to engineering software—building
              integrations by day, AI products by night.
            </p>
            <p
              className={`max-w-2xl text-pretty font-sans text-base leading-relaxed text-gray-600 md:text-lg transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              After running my own business for 10 years, I transitioned to
              software engineering. Now I work at ConnexAI building integrations
              for enterprise platforms, and spend my free time exploring AI
              through side projects. I&apos;ve deployed two SaaS applications
              using OpenAI and Google Gemini—both live in production. I work
              primarily with React, TypeScript, and Node.js, but I&apos;m more
              interested in solving problems than any specific tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
