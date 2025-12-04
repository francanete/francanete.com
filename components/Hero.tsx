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
    "AI Orchestration",
    "Next.js",
    "OpenAI",
    "Google Gemini API",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Name and role */}
          <div className="flex flex-col justify-center">
            <div className="space-y-10">
              {/* Role badge */}
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
                  <span className="h-px w-8 bg-neutral-300" />
                  Full Stack Engineer
                </span>
              </div>

              {/* Name */}
              <h1
                className={`font-semibold leading-none tracking-tight text-neutral-900 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="block text-5xl sm:text-6xl lg:text-7xl">
                  Fran Canete
                </span>
              </h1>

              {/* Divider */}
              <div
                className={`h-px w-full bg-gradient-to-r from-neutral-200 via-neutral-300 to-transparent transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: "300ms", transformOrigin: "left" }}
              />

              {/* Tech Stack */}
              <div
                className={`space-y-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/60 bg-white/40 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(8px)",
                        transition: `all 0.4s ease ${400 + index * 40}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div
                className={`space-y-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center gap-3">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                    Current Focus
                  </p>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    2 Active Projects
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentFocus.map((tech, index) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-900/20 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-sm transition-all hover:bg-neutral-900/90 hover:shadow-md"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(8px)",
                        transition: `all 0.4s ease ${550 + index * 40}ms`,
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
          <div className="flex flex-col justify-center lg:pl-8">
            <div className="space-y-8">
              <blockquote
                className={`border-l-2 border-neutral-900 pl-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-xl font-medium leading-relaxed text-neutral-900 sm:text-2xl lg:text-[1.75rem]">
                  From running my own business to engineering software—building
                  integrations by day, AI products by night.
                </p>
              </blockquote>

              <div
                className={`space-y-4 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <p className="text-base leading-relaxed text-neutral-600 lg:text-lg">
                  After running my own business for 10 years, I transitioned to
                  software engineering. Now I work at ConnexAI building
                  integrations for enterprise platforms, while exploring AI
                  through side projects.
                </p>
                <p className="text-base leading-relaxed text-neutral-600 lg:text-lg">
                  I&apos;ve deployed two SaaS applications using OpenAI and
                  Google Gemini—both live in production. I work primarily with
                  React, TypeScript, and Node.js, but I&apos;m more interested
                  in solving problems than any specific tech stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
