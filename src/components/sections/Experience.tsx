"use client";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "3.5rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}
    >
      <p style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        Background
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "2.5rem" }}>
        Experience
      </h2>

      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "2rem",
              padding: "1.75rem 0",
              borderTop: "0.5px solid var(--border)",
              ...(i === EXPERIENCES.length - 1 ? { borderBottom: "0.5px solid var(--border)" } : {}),
            }}
          >
            {/* Left — date */}
            <div style={{ paddingTop: 2 }}>
              {exp.period.split("—").map((part, idx) => (
                <div key={idx} style={{ fontSize: 12, color: idx === 1 && exp.current ? "transparent" : "var(--text-secondary)" }}>
                  {idx === 1 && exp.current ? (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text-secondary)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                      Present
                    </div>
                  ) : (
                    part.trim()
                  )}
                </div>
              ))}
            </div>

            {/* Right — content */}
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 3 }}>
                {exp.role}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: "1rem" }}>
                {exp.company}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1.25rem" }}>
                {exp.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    <span style={{ color: "var(--border-light)", flexShrink: 0, marginTop: 1 }}>—</span>
                    {b}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      color: "var(--text-secondary)",
                      border: "0.5px solid var(--border)",
                      borderRadius: 100,
                      padding: "2px 9px",
                      background: "var(--surface)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

