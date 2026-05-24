"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/appConfig";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => ref.current?.classList.add("is-ready"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={ref} className="fc-section">
      <div className="fc-container">
        <div className="fc-section-header fc-rise">
          <span className="eyebrow">Selected work</span>
          <span className="mono-text">
            0{projects.length} case studies · live in production
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
