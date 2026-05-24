import Image from "next/image";
import { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
  delay: number;
}

export default function ExperienceItem({ experience, delay }: ExperienceItemProps) {
  const startYear = experience.startDate.getFullYear();
  const endYear = experience.endDate ? experience.endDate.getFullYear() : "now";
  const showDescription =
    experience.isCurrent || experience.id === "self-employed-business-consultant";
  const skillCount = experience.isCurrent ? 8 : 4;

  return (
    <div
      className="fc-exp-row fc-rise"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Date */}
      <div className="mono-text fc-exp-date">
        {startYear} — {endYear}
      </div>

      {/* Rail node */}
      <div className="fc-exp-node">
        {experience.isCurrent ? (
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: 999,
              background: "var(--ink)",
              boxShadow: "0 0 0 4px #fff, 0 0 0 5px var(--ink)",
            }}
          />
        ) : (
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: 999,
              background: "#fff",
              boxShadow: "0 0 0 1px var(--rule-2)",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="fc-exp-content">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 14,
          }}
        >
          <div
            style={{ display: "flex", gap: 14, alignItems: "center", minWidth: 0, flex: 1 }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid var(--rule)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={experience.companyLogo}
                alt={experience.company}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 className="h3-text" style={{ margin: 0 }}>
                {experience.title}
              </h3>
              <p
                className="body-sm"
                style={{ margin: "2px 0 0", color: "var(--ink-3)" }}
              >
                {experience.company} · {experience.location} · {experience.locationType}
              </p>
            </div>
          </div>
          {experience.isCurrent && (
            <span className="live-dot" style={{ flexShrink: 0, paddingTop: 4 }}>
              Now
            </span>
          )}
        </div>

        {/* Description */}
        {showDescription && (
          <p className="body-sm fc-exp-indent" style={{ margin: "0 0 14px" }}>
            {experience.description}
          </p>
        )}

        {/* Skills */}
        <div
          className="fc-exp-indent"
          style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
        >
          {experience.skills.slice(0, skillCount).map((skill) => (
            <span key={skill} className="chip chip-sm">
              {skill}
            </span>
          ))}
          {experience.skills.length > skillCount && (
            <span className="mono-text" style={{ alignSelf: "center", paddingLeft: 4 }}>
              +{experience.skills.length - skillCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
