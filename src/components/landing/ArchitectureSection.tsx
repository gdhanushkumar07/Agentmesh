// src/components/landing/ArchitectureSection.tsx
"use client";

import React, { useState } from "react";
import { User, Headphones, CreditCard, Globe, UserCheck, ArrowRight, ShieldCheck, Cpu, Settings } from "lucide-react";

interface ArchConnection {
  id: string;
  source: string;
  target: string;
  endpoint: string;
  context: string;
  permissions: string;
  d: string; // SVG line path
}

export default function ArchitectureSection() {
  const [hoveredConn, setHoveredConn] = useState<ArchConnection | null>(null);

  const nodes = [
    { id: "customer", label: "Customer", x: 50, y: 160, icon: User },
    { id: "procurement", label: "Procurement", x: 150, y: 160, icon: Headphones },
    { id: "supplier", label: "Supplier", x: 250, y: 160, icon: Globe },
    { id: "warehouse", label: "Warehouse", x: 350, y: 160, icon: Cpu },
    { id: "finance", label: "Finance", x: 450, y: 160, icon: CreditCard },
    { id: "shipping", label: "Shipping", x: 550, y: 160, icon: Settings },
    { id: "human", label: "Human", x: 650, y: 160, icon: UserCheck }
  ];

  const connections: ArchConnection[] = [
    {
      id: "C1",
      source: "customer",
      target: "procurement",
      endpoint: "POST /api/v1/init",
      context: "Dispute details, order number, and customer metadata.",
      permissions: "Write-only workspace ticket initializer.",
      d: "M 68 160 L 132 160"
    },
    {
      id: "C2",
      source: "procurement",
      target: "supplier",
      endpoint: "POST /api/v1/share/create",
      context: "Scoped supplier shipping folder permissions.",
      permissions: "Folder-scoped share key to Supplier Agent. Auto-revoked after 7d.",
      d: "M 168 160 L 232 160"
    },
    {
      id: "C3",
      source: "supplier",
      target: "warehouse",
      endpoint: "POST /api/v1/accumulate",
      context: "Freight inventory logs, weight records, and arrival times.",
      permissions: "Internal Agent read/write scope on `/Warehouse` folder.",
      d: "M 268 160 L 332 160"
    },
    {
      id: "C4",
      source: "warehouse",
      target: "finance",
      endpoint: "POST /api/v1/accumulate",
      context: "Stripe payment status, damage credit logs, and invoice adjustments.",
      permissions: "Internal Agent read/write scope on `/Finance` folder.",
      d: "M 368 160 L 432 160"
    },
    {
      id: "C5",
      source: "finance",
      target: "shipping",
      endpoint: "POST /api/v1/tools",
      context: "Logistics routing instructions, carrier selection, and ETA checks.",
      permissions: "Internal execute routing permission.",
      d: "M 468 160 L 532 160"
    },
    {
      id: "C6",
      source: "shipping",
      target: "human",
      endpoint: "POST /api/v1/briefing",
      context: "Consolidated resolution logs, carrier changes, and priority issues.",
      permissions: "Scoped read briefing privileges for escalation portal.",
      d: "M 568 160 L 632 160"
    }
  ];

  return (
    <section id="technology" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-08 / Architecture
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            System Routing <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Architecture</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            Hover over any connection path in the pipeline to audit the shared context parameters and permission scopes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SVG Diagram Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-charcoal/10 rounded-2xl p-6 flex items-center justify-center min-h-[340px] grid-bg shadow-sm">
            <svg viewBox="0 0 700 320" className="w-full h-full max-w-[700px] my-auto">
              <defs>
                <marker id="arr-grey" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#0e0f12" fillOpacity="0.2" />
                </marker>
                <marker id="arr-yellow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f2c94c" />
                </marker>
              </defs>

              {/* Connections */}
              {connections.map((conn) => {
                const isHovered = hoveredConn?.id === conn.id;
                return (
                  <path
                    key={conn.id}
                    d={conn.d}
                    fill="none"
                    stroke={isHovered ? "#f2c94c" : "#0e0f12"}
                    strokeOpacity={isHovered ? 1 : 0.15}
                    strokeWidth={isHovered ? 4 : 2}
                    markerEnd={isHovered ? "url(#arr-yellow)" : "url(#arr-grey)"}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredConn(conn)}
                    onMouseLeave={() => setHoveredConn(null)}
                    style={{ strokeLinecap: "round" }}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const NodeIcon = node.icon;
                const isPart = hoveredConn && (hoveredConn.source === node.id || hoveredConn.target === node.id);
                return (
                  <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                    <circle
                      r="20"
                      fill={node.id === 'human' ? '#f2c94c' : '#0e0f12'}
                      stroke={isPart ? '#f2c94c' : '#0e0f12'}
                      strokeWidth={isPart ? 3 : 1}
                      className="transition-all duration-300"
                    />
                    <g transform="translate(-8, -8)" className={node.id === 'human' ? 'text-charcoal' : 'text-cream'}>
                      <NodeIcon className="w-4 h-4" />
                    </g>
                    <text y="36" textAnchor="middle" fill="#0e0f12" className="text-[9px] font-sans uppercase font-extrabold tracking-wider opacity-80">
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Audit Details Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-charcoal text-cream border border-charcoal rounded-2xl p-8 flex flex-col justify-between shadow-xl min-h-[320px] grid-bg-dark">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-yellow animate-pulse shrink-0" />
                <span className="text-xs font-sans uppercase font-extrabold tracking-wide text-cream">Transaction Auditor</span>
              </div>

              {hoveredConn ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase text-white/40 tracking-wider block">Active Pipeline Endpoint</span>
                    <h3 className="font-mono text-xs font-bold text-yellow bg-white/10 px-2.5 py-1 rounded border border-white/10 inline-block">
                      {hoveredConn.endpoint}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase text-yellow tracking-wider block">Shared Context</span>
                    <p className="text-xs text-white/70 leading-relaxed font-normal">{hoveredConn.context}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase text-yellow tracking-wider block">Permissions Applied</span>
                    <p className="text-xs text-white/70 leading-relaxed font-normal">{hoveredConn.permissions}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 py-10 text-white/40 text-center">
                  <ArrowRight className="w-8 h-8 mx-auto opacity-30" />
                  <p className="font-sans text-xs uppercase font-extrabold tracking-wider text-white/60">Hover data path</p>
                  <p className="text-xs font-normal leading-relaxed max-w-xs mx-auto">
                    Move your cursor over connection lines between nodes to inspect variables, scopes, and endpoint keys.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-4 text-[10px] font-extrabold text-white/40 uppercase tracking-wider font-sans">
              Aicoo Compliance Ledger
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
