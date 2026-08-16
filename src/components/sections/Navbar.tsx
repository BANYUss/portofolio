"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      borderBottom: "0.5px solid var(--border)",
      position: "sticky",
      top: 0,
      background: "var(--bg)",
      zIndex: 50,
    }}>
      {/* Main bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 1.5rem",
      }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.3px" }}>
          sahrul.dev
        </span>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "2rem" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="/Sahrul_Arif_Fauzi_CV.pdf" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", border: "0.5px solid var(--border-light)", borderRadius: 8, padding: "6px 14px", textDecoration: "none" }}>
            Resume
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "0.5px solid var(--border)", borderRadius: 8, padding: "6px 10px", color: "var(--text-primary)", cursor: "pointer", fontSize: 16, display: "none" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobile-menu" style={{
          borderTop: "0.5px solid var(--border)",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}
              style={{ fontSize: 15, color: "var(--text-secondary)", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
          <a href="/Sahrul_Arif_Fauzi_CV.pdf" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)", border: "0.5px solid var(--border-light)", borderRadius: 8, padding: "8px 14px", textDecoration: "none", textAlign: "center" }}>
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
