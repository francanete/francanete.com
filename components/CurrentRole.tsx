export default function CurrentRole() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Current Position
          </p>

          <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/20 md:p-10">
            {/* Header - Title and Company */}
            <div className="mb-6 space-y-2">
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Senior Software Engineer
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                <p className="font-sans text-lg font-medium">TechCorp Inc.</p>
                <span className="text-border">•</span>
                <p className="font-mono text-sm">2022 - Present</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-pretty font-sans leading-relaxed text-foreground">
                Leading the development of scalable web applications serving
                over 1M+ users. Architecting and implementing features across
                the full stack, from database design to responsive user
                interfaces.
              </p>
              <p className="text-pretty font-sans leading-relaxed text-muted-foreground">
                Collaborating with cross-functional teams to deliver
                high-quality products on time. Mentoring junior developers and
                establishing best practices for code quality and testing.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                  "GraphQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-foreground/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle accent line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
