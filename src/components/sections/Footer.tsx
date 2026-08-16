"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
        © 2025 Sahrul Arif Fauzi
      </span>
      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
        Built with Next.js & Tailwind CSS
      </span>
    </footer>
  );
}

