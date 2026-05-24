"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => ref.current?.classList.add("is-ready"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <footer ref={ref} className="fc-section-footer">
      <div className="fc-container">
        {/* Three-column top */}
        <div className="fc-footer-grid fc-rise">
          <div>
            <span className="eyebrow">Get in touch</span>
            <p className="h2-text" style={{ margin: "20px 0 0", maxWidth: 320 }}>
              Always open to interesting problems.
            </p>
          </div>

          <div
            className="mono-text"
            style={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <span style={{ color: "var(--ink-3)" }}>LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/francanete/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink)" }}
            >
              /in/francanete →
            </a>
          </div>

          <div
            className="mono-text"
            style={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <span style={{ color: "var(--ink-3)" }}>GITHUB</span>
            <a
              href="https://github.com/francanete"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink)" }}
            >
              /francanete →
            </a>
          </div>
        </div>

        <div className="fc-rule" style={{ margin: "40px 0 16px" }} />

        <div
          className="fc-footer-bottom fc-rise"
          style={{ transitionDelay: "80ms" }}
        >
          <span className="mono-text">© 2026 Fran Canete · Made with care.</span>
          <span className="mono-text">v3.0 · Minimal</span>
        </div>
      </div>
    </footer>
  );
}
