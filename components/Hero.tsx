"use client";

import { useEffect, useRef } from "react";
import { technologies, currentFocus } from "@/appConfig";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => ref.current?.classList.add("is-ready"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={ref} className="fc-section-hero">
      <div className="fc-container">
        {/* Top bar */}
        <div className="fc-hero-topbar fc-rise">
          <span className="mono-text" style={{ fontSize: 12, letterSpacing: "0.04em" }}>
            FC ·· FRAN&nbsp;CANETE
          </span>
          <span className="mono-text">MANCHESTER, UK · 2026</span>
        </div>

        {/* Eyebrow */}
        <div className="fc-hero-eyebrow fc-rise" style={{ transitionDelay: "60ms" }}>
          <span className="eyebrow">Full Stack Engineer</span>
        </div>

        {/* Display name */}
        <h1
          className="display-name fc-hero-name fc-rise"
          style={{ transitionDelay: "120ms" }}
        >
          Fran Canete.
        </h1>

        {/* Two-column body */}
        <div
          className="fc-hero-grid fc-rise"
          style={{ transitionDelay: "200ms" }}
        >
          {/* Left — quote + paragraphs */}
          <div>
            <p className="h2-text" style={{ margin: 0, marginBottom: 28, color: "var(--ink)" }}>
              From running my own business to engineering software—building
              integrations by day, AI products by night.
            </p>
            <div
              style={{ marginBottom: 28, width: 64, background: "var(--ink)", height: 2 }}
            />
            <p className="body-text" style={{ margin: 0, marginBottom: 16 }}>
              After running my own business for 10 years, I transitioned to
              software engineering. Now I work at ConnexAI building integrations
              for enterprise platforms, while exploring AI through side projects.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              I&apos;ve deployed two SaaS applications using OpenAI and Google
              Gemini—both live in production. I work primarily with React,
              TypeScript, and Node.js, but I&apos;m more interested in solving
              problems than any specific tech stack.
            </p>
          </div>

          {/* Right — stack chips */}
          <div>
            {/* Core stack */}
            <div style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <span className="mono-text" style={{ textTransform: "uppercase" }}>
                  Core stack
                </span>
                <span className="mono-text">
                  {String(technologies.length).padStart(2, "0")}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently exploring */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <span className="mono-text" style={{ textTransform: "uppercase" }}>
                  Currently exploring
                </span>
                <span className="live-dot">2 active</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {currentFocus.map((tech) => (
                  <span key={tech} className="chip chip-dark">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
