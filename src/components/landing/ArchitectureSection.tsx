// src/components/landing/ArchitectureSection.tsx
"use client";

import React, { useState } from "react";
import { Network, Database, ShieldAlert, Cpu, ArrowDownUp, Check } from "lucide-react";

interface ArchPath {
  id: string;
  name: string;
  endpoint: string;
  desc: string;
  d: string; // SVG path data
}

export default function ArchitectureSection() {
  const [hoveredPath, setHoveredPath] = useState<ArchPath | null>(null);

  const paths: ArchPath[] = [
    {
      id: "P1",
      name: "Onboarding & Workspace Sync",
      endpoint: "POST /api/v1/init",
      desc: "Triggered during company setup to initialize the persistent company database and folders in the Aicoo network.",
      d: "M 400 70 L 400 130"
    },
    {
      id: "P2",
      name: "Agent Reasoning & Context Lookup",
      endpoint: "POST /api/v1/chat",
      desc: "Invoked by agents to reason about incoming tickets. Reads the accumulated folders to prevent context washing.",
      d: "M 220 160 Q 200 215 360 270"
    },
    {
      id: "P3",
      name: "Persistent Memory Accumulation",
      endpoint: "POST /api/v1/accumulate",
      desc: "Writes decisions, billing verification results, and incident logs as markdown files in `/Support`, `/Billing`, or `/Legal` directories.",
      d: "M 400 190 L 400 250"
    },
    {
      id: "P4",
      name: "Scoped Folder-Link Generation",
      endpoint: "POST /api/v1/share/create",
      desc: "Creates temporary folder permissions to let external partners audit financial logs, automatically revoking links when resolved.",
      d: "M 580 160 Q 600 215 440 270"
    },
    {
      id: "P5",
      name: "Handoff Synthesis & Briefings",
      endpoint: "POST /api/v1/briefing",
      desc: "Aggregates workspace logs into simple briefings and a Q1-Q4 Eisenhower Priority Matrix to prepare human experts.",
      d: "M 320 290 Q 240 330 360 370"
    },
    {
      id: "P6",
      name: "Proactive Sweep Telemetry",
      endpoint: "POST /api/v1/heartbeat/run",
      desc: "Triggers scheduled cron sweeps that inspect active folders for failure anomalies and draft email support alerts.",
      d: "M 480 290 Q 560 330 440 370"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-07 / The Protocol Schema
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Aicoo Architecture Routing
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Hover over the active connections in the diagram below to inspect the underlying Aicoo endpoint mapping.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SVG Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-cream border border-charcoal/10 rounded-2xl p-4 flex items-center justify-center min-h-[380px] grid-bg">
            <svg viewBox="0 0 800 440" className="w-full h-full max-w-[800px]">
              <defs>
                <marker id="arrow-grey" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#121212" fillOpacity="0.2" />
                </marker>
                <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f2c94c" />
                </marker>
              </defs>

              {/* Hoverable paths */}
              {paths.map((p) => {
                const isHovered = hoveredPath?.id === p.id;
                return (
                  <path
                    key={p.id}
                    d={p.d}
                    fill="none"
                    stroke={isHovered ? "#f2c94c" : "#121212"}
                    strokeOpacity={isHovered ? 1 : 0.15}
                    strokeWidth={isHovered ? 4 : 2}
                    markerEnd={isHovered ? "url(#arrow-yellow)" : "url(#arrow-grey)"}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setApiKeyOverlay(p)}
                    onMouseLeave={() => setHoveredPath(null)}
                    style={{ strokeLinecap: 'round' }}
                  />
                );
              })}

              {/* Tier 1: Portals */}
              <g transform="translate(400, 50)">
                <rect x="-120" y="-20" width="240" height="40" rx="10" fill="#121212" stroke="#121212" strokeWidth="1.5" />
                <text x="0" y="5" fill="#f4f4f0" textAnchor="middle" fontSize="11" fontWeight="bold" className="font-syne uppercase tracking-wider">
                  Client Portals & UI
                </text>
              </g>

              {/* Tier 2: Agent Network Router */}
              <g transform="translate(400, 160)">
                <rect x="-140" y="-25" width="280" height="50" rx="12" fill="#eaeae6" stroke="#121212" strokeWidth="1.5" />
                <text x="0" y="5" fill="#121212" textAnchor="middle" fontSize="11" fontWeight="extrabold" className="font-syne uppercase tracking-wider">
                  Agent Mesh Routing Layer
                </text>
              </g>

              {/* Tier 3: Aicoo Protocol Gateway */}
              <g transform="translate(400, 270)">
                <rect x="-140" y="-25" width="280" height="50" rx="12" fill="#121212" stroke="#121212" strokeWidth="1.5" />
                <text x="0" y="5" fill="#f2c94c" textAnchor="middle" fontSize="11" fontWeight="extrabold" className="font-syne uppercase tracking-wider">
                  Aicoo Protocol Gateway
                </text>
              </g>

              {/* Tier 4: Storage */}
              <g transform="translate(400, 380)">
                <rect x="-120" y="-20" width="240" height="40" rx="10" fill="#eaeae6" stroke="#121212" strokeWidth="1.5" />
                <text x="0" y="5" fill="#121212" textAnchor="middle" fontSize="11" fontWeight="bold" className="font-syne uppercase tracking-wider">
                  Persistent Memory Folders
                </text>
              </g>
            </svg>
          </div>

          {/* Tooltip detail card (4 Cols) */}
          <div className="lg:col-span-4 bg-charcoal text-cream border border-charcoal rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[300px] grid-bg-dark">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-syne uppercase tracking-wider text-yellow bg-yellow/10 px-2.5 py-0.5 rounded font-bold">
                  S-07A
                </span>
                <span className="text-xs font-syne uppercase font-bold text-cream">Endpoint Audit Ledger</span>
              </div>

              {hoveredPath ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="space-y-1">
                    <span className="text-[10px] font-syne uppercase font-bold text-yellow">{hoveredPath.name}</span>
                    <h3 className="font-mono text-xs font-bold text-cream bg-white/10 px-2.5 py-1 rounded inline-block mt-1">
                      {hoveredPath.endpoint}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-semibold">
                    {hoveredPath.desc}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 py-8 text-white/30 text-center">
                  <Network className="w-8 h-8 mx-auto opacity-20 animate-pulse" />
                  <p className="font-syne text-xs uppercase tracking-wider">Hover connection path</p>
                  <p className="text-[10px] opacity-70">Move cursor over routing lines to inspect transactions.</p>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4 text-[10px] font-bold text-white/40 uppercase tracking-wider">
              AICOO API Protocol Schema v1.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function setApiKeyOverlay(p: ArchPath) {
    setHoveredPath(p);
  }
}
