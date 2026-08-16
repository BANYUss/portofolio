"use client";
import Image from "next/image";
import { CERTIFICATIONS } from "@/lib/data";
export default function Certifications() {
  return (
    <section
      style={{ padding: "3.5rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}
    >
      <p style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        Credentials
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "2rem" }}>
        Certifications
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
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.name} style={{ background: "var(--bg)", padding: "1.25rem" }}>
            {/* Certificate image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
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
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;"><i class="ti ti-certificate" style="font-size:32px;color:var(--text-secondary);opacity:0.2;"></i><span style="font-size:10px;color:var(--text-secondary);opacity:0.35;">${cert.image.split("/").pop()}</span></div>`;
                  }
                }}
              />
            </div>

            {/* Info */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.4 }}>
                {cert.name}
              </div>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11,
                  color: "var(--text-secondary)",
                  background: "var(--surface)",
                  border: "0.5px solid var(--border)",
                  borderRadius: 100,
                  padding: "3px 10px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  marginLeft: 8,
                }}
              >
                <i className="ti ti-external-link" style={{ fontSize: 11 }} />
                View
              </a>
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 4 }}>{cert.issuer}</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", opacity: 0.6 }}>{cert.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
