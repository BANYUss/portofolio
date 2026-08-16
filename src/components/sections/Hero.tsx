"use client";
import Image from "next/image";
import { STATS, TECH_STACK } from "@/lib/data";

export default function Hero() {
  return (
    <section style={{ padding: "3rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: start;
        }
        .hero-photo { display: block; }
        .hero-title { font-size: 38px; }
        .stats-row { display: flex; gap: 2rem; flex-wrap: wrap; }

        @media (max-width: 640px) {
          .hero-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 1.5rem;
          }
          .hero-photo { display: flex; justify-content: center; }
          .hero-title { font-size: 26px !important; }
          .stats-row { gap: 1.25rem; }
        }
      `}</style>

      <div className="hero-grid">
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)", border: "0.5px solid var(--border)", borderRadius: 100, padding: "4px 12px", marginBottom: "1.5rem", background: "var(--surface)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
            Available for Software Developer Internship
          </div>

          {/* Headline */}
          <h1 className="hero-title" style={{ fontWeight: 500, lineHeight: 1.15, letterSpacing: "-1px", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            I build software solutions
            <br />
            <span style={{ color: "var(--text-secondary)" }}>from ideas into</span>
            <br />
            real applications.
          </h1>

          {/* Description */}
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 460, marginBottom: "1.5rem" }}>
            Information Technology student focused on building modern software solutions. Experienced in developing web applications, mobile apps, and AI-integrated systems through personal projects and freelance work.
          </p>

          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "2rem" }}>
            {TECH_STACK.map((t) => (
              <span key={t} style={{ fontSize: 12, color: "var(--text-secondary)", border: "0.5px solid var(--border)", borderRadius: 100, padding: "3px 10px", background: "var(--surface)" }}>
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--text-primary)", color: "var(--bg)", fontSize: 14, fontWeight: 500, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>
              <i className="ti ti-layout-grid" /> View Projects
            </a>
            <a href="/Sahrul_Arif_Fauzi_CV.pdf" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", color: "var(--text-primary)", fontSize: 14, fontWeight: 500, padding: "10px 20px", borderRadius: 8, border: "0.5px solid var(--border-light)", textDecoration: "none" }}>
              <i className="ti ti-download" /> Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ paddingTop: "2rem", borderTop: "0.5px solid var(--border)" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 20, fontWeight: 500, color: "var(--text-primary)" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Profile */}
        <div className="hero-photo" style={{ flexDirection: "column", alignItems: "center", gap: "0.875rem", flexShrink: 0, marginTop: 52 }}>
          <div style={{ position: "relative", width: 230, padding: 12 }}>
            <div style={{ width: 230, height: 280, borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 32px rgba(99,102,241,0.06)", background: "var(--surface)", position: "relative" }}>
              <Image src="/profile.png" alt="Sahrul Arif Fauzi" fill style={{ objectFit: "cover", objectPosition: "center top" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>

            <div style={{ position: "absolute", top: 4, right: -4, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: "var(--text-primary)", background: "var(--bg)", border: "0.5px solid var(--border-light)", borderRadius: 100, padding: "4px 10px", boxShadow: "0 4px 12px rgba(0,0,0,0.35)", whiteSpace: "nowrap" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e5e7eb", flexShrink: 0 }} /> Next.js
            </div>
            <div style={{ position: "absolute", bottom: 28, right: -8, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: "var(--text-primary)", background: "var(--bg)", border: "0.5px solid var(--border-light)", borderRadius: 100, padding: "4px 10px", boxShadow: "0 4px 12px rgba(0,0,0,0.35)", whiteSpace: "nowrap" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", flexShrink: 0 }} /> AI
            </div>
            <div style={{ position: "absolute", bottom: 14, left: -4, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500, color: "var(--text-primary)", background: "var(--bg)", border: "0.5px solid var(--border-light)", borderRadius: 100, padding: "4px 10px", boxShadow: "0 4px 12px rgba(0,0,0,0.35)", whiteSpace: "nowrap" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f05340", flexShrink: 0 }} /> Laravel
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginBottom: 5 }}>Sahrul Arif Fauzi</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--text-secondary)", background: "var(--surface)", border: "0.5px solid var(--border)", borderRadius: 100, padding: "3px 10px" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
              Software Developer Intern
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
