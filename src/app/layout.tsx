import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahrul Arif Fauzi — Software Developer",
  description:
    "Information Technology student focused on building modern software solutions. Web apps, mobile apps, and AI-integrated systems.",
  openGraph: {
    title: "Sahrul Arif Fauzi — Software Developer",
    description:
      "Information Technology student focused on building modern software solutions.",
    url: "https://sahrul.dev",
    siteName: "Sahrul Arif Fauzi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
