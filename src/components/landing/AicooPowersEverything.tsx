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
    <section id="aicoo-capabilities" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-07 / How Aicoo Powers Everything
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Built on Aicoo <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Protocol</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            Every feature of OpenRelay is powered directly by a corresponding Aicoo API endpoint.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-charcoal/10 rounded-2xl p-8 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:border-charcoal/30 hover:-translate-y-1.5 hover:shadow-xl group shadow-sm"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="bg-charcoal/5 p-3 rounded-xl border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <code className="text-[10px] bg-charcoal/5 px-2.5 py-1 rounded-full font-mono font-bold text-yellow-dark border border-charcoal/5">
                    {cap.endpoint}
                  </code>
                </div>

                <div className="space-y-2 mt-8">
                  <h3 className="font-sans text-sm uppercase font-extrabold text-charcoal tracking-wide">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
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
