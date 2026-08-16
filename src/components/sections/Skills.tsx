"use client";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "3.5rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}
    >
      <p style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        Stack
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "2rem" }}>
        Skills & Technologies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          border: "0.5px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--border)",
        }}
      >
        {SKILLS.map((skill) => (
          <div key={skill.title} style={{ background: "var(--bg)", padding: "1.375rem 1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  border: "0.5px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  background: "var(--surface)",
                  flexShrink: 0,
                }}
              >
                <i className={`ti ${skill.icon}`} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                {skill.title}
              </div>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem", paddingLeft: 40 }}>
              {skill.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingLeft: 40 }}>
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    border: "0.5px solid var(--border)",
                    borderRadius: 100,
                    padding: "3px 9px",
                    background: "var(--surface)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

