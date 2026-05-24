import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const PROJECT_STATS: Record<string, { label: string; value: string }[]> = {
  planitly: [
    { label: "Background steps", value: "11" },
    { label: "DB migrations", value: "74" },
    { label: "API endpoints", value: "34" },
  ],
  duebase: [
    { label: "Companies indexed", value: "15M+" },
    { label: "Metrics extracted", value: "40+" },
    { label: "Time to report", value: "30s" },
  ],
};

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  const url = project.links.liveUrl?.replace("https://", "") ?? "";
  const stats = PROJECT_STATS[project.id] ?? [];

  return (
    <article
      className="fc-project-card fc-rise"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="fc-project-grid">
        {/* Left — meta + features */}
        <div>
          {/* Project header */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid var(--rule)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={project.projectLogo}
                alt={project.title}
                fill
                sizes="44px"
                className="object-contain"
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h3 className="h2-text" style={{ margin: 0 }}>{project.title}</h3>
                <span className="live-dot">Live</span>
              </div>
              <span className="mono-text">{url}</span>
            </div>
          </div>

          <p className="body-text" style={{ margin: "0 0 24px" }}>{project.summary}</p>

          {/* Stats row */}
          {stats.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                borderTop: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
                marginBottom: 24,
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    padding: "16px 0",
                    borderLeft: i ? "1px solid var(--rule)" : "none",
                    paddingLeft: i ? 16 : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mono-text" style={{ marginTop: 2 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key highlights */}
          <div className="mono-text" style={{ marginBottom: 12, textTransform: "uppercase" }}>
            Highlights
          </div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {project.keyFeatures.slice(0, 3).map((feature, i) => (
              <li key={i} className="body-sm" style={{ display: "flex", gap: 10 }}>
                <span
                  className="mono-text"
                  style={{ flexShrink: 0, paddingTop: 2, color: "var(--ink-4)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — screenshot mock + tech stack */}
        <div>
          <ProjectScreenshot projectId={project.id} url={url} />
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.techStack.slice(0, 8).map((tech) => (
              <span key={tech} className="chip chip-sm">
                {tech}
              </span>
            ))}
            {project.techStack.length > 8 && (
              <span className="mono-text" style={{ alignSelf: "center", paddingLeft: 4 }}>
                +{project.techStack.length - 8}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectScreenshot({ projectId, url }: { projectId: string; url: string }) {
  return (
    <div
      style={{
        aspectRatio: "4/3",
        border: "1px solid var(--rule)",
        borderRadius: 12,
        overflow: "hidden",
        background: "#FAFAFB",
        position: "relative",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 12px",
          borderBottom: "1px solid var(--rule)",
          background: "#fff",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#E1E1E4" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#E1E1E4" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#E1E1E4" }} />
        <span
          className="mono-text"
          style={{ marginLeft: "auto", color: "var(--ink-4)", fontSize: 10.5 }}
        >
          {url}
        </span>
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {projectId === "planitly" ? <PlanitlyMock /> : <DuebaseMock />}
      </div>
    </div>
  );
}

function PlanitlyMock() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ height: 10, width: 90, background: "var(--ink)", borderRadius: 4 }} />
        <div style={{ height: 8, width: 60, background: "var(--rule-2)", borderRadius: 4 }} />
      </div>
      <div
        style={{
          height: 32,
          background: "linear-gradient(135deg,#F1ECE5,#E5DDC9)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 10,
        }}
      >
        <span
          style={{ width: 16, height: 16, borderRadius: 4, background: "var(--ink)" }}
        />
        <div
          style={{
            height: 6,
            width: 100,
            background: "var(--ink)",
            opacity: 0.7,
            borderRadius: 4,
          }}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              height: 70,
              borderRadius: 8,
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{ height: 6, width: 30, background: "var(--ink-4)", borderRadius: 3 }}
            />
            <div
              style={{ height: 8, width: "70%", background: "var(--ink)", borderRadius: 3 }}
            />
            <div
              style={{
                height: 5,
                width: "50%",
                background: "var(--rule-2)",
                borderRadius: 3,
                marginTop: "auto",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {(["09:00", "12:30", "15:00"] as const).map((time, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: i === 0 ? "var(--ink)" : "var(--rule-2)",
              }}
            />
            <div
              style={{ height: 6, flex: 1, background: "var(--rule)", borderRadius: 3 }}
            />
            <div
              className="mono-text"
              style={{ fontSize: 9, color: "var(--ink-4)" }}
            >
              {time}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DuebaseMock() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ height: 10, width: 100, background: "var(--ink)", borderRadius: 4 }} />
        <div style={{ display: "flex", gap: 6 }}>
          <span
            style={{ height: 16, width: 40, background: "var(--rule)", borderRadius: 4 }}
          />
          <span
            style={{ height: 16, width: 40, background: "var(--ink)", borderRadius: 4 }}
          />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div
          style={{
            borderRadius: 8,
            padding: 10,
            background: "#fff",
            border: "1px solid var(--rule)",
          }}
        >
          <div className="mono-text" style={{ fontSize: 9, color: "var(--ink-4)" }}>
            HEALTH SCORE
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, color: "var(--ink)" }}>
            4.2
            <span style={{ fontSize: 11, color: "var(--ink-4)", fontWeight: 400 }}>/5</span>
          </div>
          <div
            style={{
              marginTop: 6,
              height: 4,
              background: "var(--rule)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{ width: "84%", height: "100%", background: "var(--ink)" }}
            />
          </div>
        </div>
        <div
          style={{
            borderRadius: 8,
            padding: 10,
            background: "#fff",
            border: "1px solid var(--rule)",
          }}
        >
          <div className="mono-text" style={{ fontSize: 9, color: "var(--ink-4)" }}>
            RISK
          </div>
          <div
            style={{ fontSize: 13, fontWeight: 600, marginTop: 4, color: "var(--ink)" }}
          >
            Low–medium
          </div>
          <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  width: 10,
                  height: 4,
                  borderRadius: 2,
                  background: i < 2 ? "var(--ink)" : "var(--rule)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderRadius: 8,
          padding: 10,
          background: "#fff",
          border: "1px solid var(--rule)",
        }}
      >
        <div
          className="mono-text"
          style={{ fontSize: 9, color: "var(--ink-4)", marginBottom: 6 }}
        >
          METRICS · 12 OF 40
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              style={{
                height: 18,
                borderRadius: 4,
                background: i % 3 === 0 ? "var(--ink)" : "var(--rule-2)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
