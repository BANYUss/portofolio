"use client";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 2.5rem",
        borderBottom: "0.5px solid var(--border)",
        position: "sticky",
        top: 0,
        background: "var(--bg)",
        zIndex: 50,
      }}
    >
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: "var(--text-primary)",
          letterSpacing: "-0.3px",
        }}
      >
        sahrul.dev
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/Sahrul_Arif_Fauzi_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--text-primary)",
            border: "0.5px solid var(--border-light)",
            borderRadius: 8,
            padding: "6px 14px",
            textDecoration: "none",
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
