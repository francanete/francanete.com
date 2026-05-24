"use client";

import { useEffect, useRef } from "react";
import { Experience } from "@/types/experience";
import ExperienceItem from "./ExperienceItem";

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => ref.current?.classList.add("is-ready"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section ref={ref} className="fc-section">
      <div className="fc-container">
        {/* Section header */}
        <div className="fc-section-header fc-rise">
          <span className="eyebrow">Experience</span>
          <span className="mono-text">2006 — Present · {experiences.length} roles</span>
        </div>

        {/* Vertical rail */}
        <div className="fc-exp-rail">
          <div className="fc-exp-rail-line" />
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} experience={exp} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
