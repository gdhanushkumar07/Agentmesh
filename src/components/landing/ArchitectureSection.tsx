// src/components/landing/ArchitectureSection.tsx
"use client";

import React, { useState } from "react";
import { User, Headphones, CreditCard, Scale, Globe, UserCheck, ArrowRight, ShieldCheck, Cpu, Settings } from "lucide-react";

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
    <section id="architecture" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-08 / Architecture
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            System Routing Architecture
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Hover over any connection path in the pipeline to audit the shared context parameters and permission scopes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SVG Diagram Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-cream border border-charcoal/10 rounded-2xl p-4 flex items-center justify-center min-h-[300px] grid-bg">
            <svg viewBox="0 0 700 320" className="w-full h-full max-w-[700px] my-auto">
              <defs>
                <marker id="arr-grey" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#121212" fillOpacity="0.2" />
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
                    stroke={isHovered ? "#f2c94c" : "#121212"}
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
                      r="18"
                      fill={node.id === 'human' ? '#f2c94c' : '#121212'}
                      stroke={isPart ? '#f2c94c' : '#121212'}
                      strokeWidth={isPart ? 2.5 : 1}
                      className="transition-all duration-300"
                    />
                    <g transform="translate(-8, -8)" className={node.id === 'human' ? 'text-charcoal' : 'text-cream'}>
                      <NodeIcon className="w-4 h-4" />
                    </g>
                    <text y="30" textAnchor="middle" fill="#121212" className="text-[8px] font-syne uppercase font-bold tracking-wider opacity-75">
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Audit Details Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-charcoal text-cream border border-charcoal rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[280px] grid-bg-dark">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-yellow animate-pulse shrink-0" />
                <span className="text-xs font-syne uppercase font-bold text-cream">Transaction Auditor</span>
              </div>

              {hoveredConn ? (
                <div className="space-y-3.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="space-y-1">
                    <span className="text-[9px] font-syne uppercase font-bold text-white/40">Active Pipeline Endpoint</span>
                    <h3 className="font-mono text-xs font-bold text-cream bg-white/10 px-2 py-0.5 rounded inline-block mt-0.5">
                      {hoveredConn.endpoint}
                    </h3>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[9px] font-syne uppercase font-bold text-yellow">Shared Context</span>
                    <p className="text-[11px] text-white/70 leading-relaxed font-medium">{hoveredConn.context}</p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[9px] font-syne uppercase font-bold text-yellow">Permissions Applied</span>
                    <p className="text-[11px] text-white/70 leading-relaxed font-medium">{hoveredConn.permissions}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 py-8 text-white/30 text-center">
                  <ArrowRight className="w-8 h-8 mx-auto opacity-20" />
                  <p className="font-syne text-xs uppercase tracking-wider">Hover data path</p>
                  <p className="text-[9px] opacity-75 leading-relaxed">
                    Move your cursor over connection lines between nodes to inspect variables, scopes, and endpoint keys.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4 text-[9px] font-bold text-white/40 uppercase tracking-wider">
              Aicoo Compliance Ledger
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
