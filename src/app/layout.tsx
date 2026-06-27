import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentMesh — The Agent Network OS for Business Operations",
  description: "AgentMesh is the operating system for AI-powered companies, where every business function runs as an autonomous agent coordinating through Aicoo's nervous system.",
  authors: [{ name: "Aicoo Hackathon Team" }],
  openGraph: {
    title: "AgentMesh — Agent Network OS",
    description: "Autonomously coordinate, negotiate, and execute business workflows with Aicoo.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}

