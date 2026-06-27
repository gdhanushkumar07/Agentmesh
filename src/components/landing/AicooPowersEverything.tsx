// src/components/landing/AicooPowersEverything.tsx
"use client";

import React from "react";
import { Key, Database, ShieldAlert, ArrowRightLeft, FileText, Activity, Search, RefreshCw } from "lucide-react";

export default function AicooPowersEverything() {
  const capabilities = [
    {
      icon: Key,
      title: "Persistent Identity",
      endpoint: "POST /api/v1/init",
      desc: "Bootstraps secure company workspaces, creating isolated identity partitions for each supply chain node."
    },
    {
      icon: Database,
      title: "Context Accumulation",
      endpoint: "POST /api/v1/accumulate",
      desc: "Saves transaction decisions, invoice audits, and shipment logs as persistent files in scoped directories."
    },
    {
      icon: ShieldAlert,
      title: "Permissioned Sharing",
      endpoint: "POST /api/v1/share/create",
      desc: "Generates folder-scoped access links for external supplier agents, revoking access automatically upon resolution."
    },
    {
      icon: ArrowRightLeft,
      title: "Cross-Company Routing",
      endpoint: "POST /api/v1/tools",
      desc: "Routes high-fidelity structured payloads and message triggers across different corporate networks."
    },
    {
      icon: FileText,
      title: "Handoff Briefings",
      endpoint: "POST /api/v1/briefing",
      desc: "Aggregates complex multi-agent supply chain transactions into readable executive summaries."
    },
    {
      icon: Activity,
      title: "Heartbeat Sweeps",
      endpoint: "POST /api/v1/heartbeat/run",
      desc: "Triggers scheduled loops across folders to detect transit anomalies and auto-draft supplier warnings."
    },
    {
      icon: Search,
      title: "Partner Discovery",
      endpoint: "Tool: search_pulse_contact",
      desc: "Searches the central Aicoo network directory to discover correct external contact nodes."
    },
    {
      icon: RefreshCw,
      title: "Intelligent Dispatch",
      endpoint: "POST /api/v1/chat",
      desc: "Combines LLM reasoning with accumulated folder context to route tickets to the correct agent."
    }
  ];

  return (
    <section id="aicoo-capabilities" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-07 / How Aicoo Powers Everything
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Built on Aicoo Protocol
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Every feature of VendorFlow is powered directly by a corresponding Aicoo API endpoint.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all hover:border-charcoal/30 group"
              >
                <div className="flex justify-between items-start">
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <code className="text-[9px] bg-charcoal/5 px-2 py-0.5 rounded font-mono font-bold text-yellow-dark">
                    {cap.endpoint}
                  </code>
                </div>

                <div className="space-y-1.5 mt-8">
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {cap.title}
                  </h3>
                  <p className="text-[10px] text-charcoal/60 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
