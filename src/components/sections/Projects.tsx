"use client";
import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
  { label: "Mobile", value: "mobile" },
  { label: "Machine Learning", value: "ml" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = PROJECTS.filter((p) =>
    active === "all" ? true : p.filter.includes(active)
  );

  return (
    <section
      id="projects"
      style={{ padding: "3.5rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}
    >
      <p style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        Work
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "1.5rem" }}>
        Projects
      </h2>

      {/* Filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "2rem" }}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              fontSize: 12,
              color: active === f.value ? "var(--bg)" : "var(--text-secondary)",
              border: "0.5px solid var(--border)",
              borderRadius: 100,
              padding: "5px 14px",
              background: active === f.value ? "var(--text-primary)" : "var(--surface)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
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
        {filtered.map((project) => (
          <div
            key={project.name}
            style={{
              background: "var(--bg)",
              padding: "1.25rem",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: 8,
                border: "0.5px solid var(--border)",
                marginBottom: "1rem",
                overflow: "hidden",
                background: "var(--surface)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;height:100%;"><i class="ti ${project.icon}" style="font-size:26px;color:var(--text-secondary);opacity:0.3;"></i><span style="font-size:10px;color:var(--text-secondary);opacity:0.35;">screenshot coming soon</span></div>`;
                    }
                  }}
                />
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <i className={`ti ${project.icon}`} style={{ fontSize: 26, color: "var(--text-secondary)", opacity: 0.3 }} />
                  <span style={{ fontSize: 10, color: "var(--text-secondary)", opacity: 0.35 }}>screenshot coming soon</span>
                </div>
              )}
            </div>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.4 }}>
                {project.name}
              </div>
              <div style={{ display: "flex", gap: 5, flexShrink: 0, marginLeft: 8 }}>
                {project.isLocal && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "var(--text-secondary)", background: "var(--surface)", border: "0.5px solid var(--border)", borderRadius: 100, padding: "2px 8px" }}>
                    <i className="ti ti-device-laptop" style={{ fontSize: 10 }} /> Local Project
                  </span>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ width: 26, height: 26, borderRadius: 6, border: "0.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontSize: 12, background: "var(--surface)", textDecoration: "none" }}>
                    <i className="ti ti-brand-github" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ width: 26, height: 26, borderRadius: 6, border: "0.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontSize: 12, background: "var(--surface)", textDecoration: "none" }}>
                    <i className="ti ti-external-link" />
                  </a>
                )}
                {project.colab && (
                  <a href={project.colab} target="_blank" rel="noopener noreferrer" title="Open in Google Colab" style={{ width: 26, height: 26, borderRadius: 6, border: "0.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontSize: 12, background: "var(--surface)", textDecoration: "none" }}>
                    <i className="ti ti-brand-google" />
                  </a>
                )}
              </div>
            </div>

            <div style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: "0.5rem", opacity: 0.7 }}>
              {project.category}
            </div>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {project.featuredTag && (
                <span style={{ fontSize: 10, color: "#818cf8", border: "0.5px solid rgba(129,140,248,0.3)", borderRadius: 100, padding: "2px 7px", background: "rgba(129,140,248,0.08)" }}>
                  {project.featuredTag}
                </span>
              )}
              {project.tags.map((tag) => (
                <span key={tag} style={{ fontSize: 10, color: "var(--text-secondary)", border: "0.5px solid var(--border)", borderRadius: 100, padding: "2px 7px", background: "var(--surface)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ gridColumn: "1 / -1", padding: "3rem", textAlign: "center", background: "var(--bg)" }}>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
