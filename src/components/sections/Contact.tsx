"use client";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "3.5rem 2.5rem 4rem", borderBottom: "0.5px solid var(--border)" }}
    >
      <p style={{ fontSize: 11, color: "var(--text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
        Get in touch
      </p>
      <h2 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "0.75rem" }}>
        Let&apos;s build something together.
      </h2>
      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 400 }}>
        Looking for a Software Developer Intern or interested in building digital
        solutions? Feel free to reach out.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          border: "0.5px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          maxWidth: 480,
        }}
      >
        {CONTACT_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "1rem 1.25rem",
              background: "var(--bg)",
              borderBottom: i < CONTACT_LINKS.length - 1 ? "0.5px solid var(--border)" : "none",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                border: "0.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "var(--text-secondary)",
                background: "var(--surface)",
                flexShrink: 0,
              }}
            >
              <i className={`ti ${link.icon}`} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: 2 }}>{link.label}</div>
              <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>{link.value}</div>
            </div>
            <i className="ti ti-arrow-right" style={{ fontSize: 14, color: "var(--text-secondary)" }} />
          </a>
        ))}
      </div>
    </section>
  );
}

