// src/components/landing/WhyAicoo.tsx
"use client";

import React from "react";
import { ShieldX, ShieldCheck, XCircle, CheckCircle2 } from "lucide-react";

export default function WhyAicoo() {
  const withoutAicoo = [
    "No persistent identity across API invocations",
    "Total context loss during department transitions",
    "All-or-nothing folder sharing that compromises security",
    "No standardized message routing protocols",
    "No automated background diagnostics or monitoring",
    "Humans spend hours rebuilding history manually"
  ];

  const withAicoo = [
    { title: "Persistent Identity", endpoint: "/init", desc: "Bootstrap isolated company contexts." },
    { title: "Cumulative Context Store", endpoint: "/accumulate", desc: "Write transaction memories persistently." },
    { title: "Scoped Shared Permissions", endpoint: "/share/create", desc: "Create temporary, folder-scoped access links." },
    { title: "Standardized Routing", endpoint: "/tools", desc: "Search and interact via Aicoo tool wrappers." },
    { title: "Proactive Background sweeps", endpoint: "/heartbeat/run", desc: "Run scheduled telemetry checks automatically." },
    { title: "Human Briefings", endpoint: "/briefing", desc: "Generate dossiers and Eisenhower matrix summaries." }
  ];

  return (
    <section id="aicoo" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-05 / The Backbone
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Why AgentMesh Requires Aicoo
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            OpenAI gives you individual agents. Aicoo provides the nervous system that connects them into a corporate collective.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm">
          {/* WITHOUT AICOO: Charcoal block */}
          <div className="p-8 bg-charcoal text-cream-dark/80 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg border border-red-500/20 text-red-400">
                  <ShieldX className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-sm font-bold uppercase tracking-wider text-cream">Isolated LLM Silos</h3>
              </div>
              <p className="text-xs text-white/55 leading-relaxed font-medium">
                Without Aicoo, LLM agents have no way to cooperate, verify invoice compliance, or share secure access.
              </p>
            </div>

            <ul className="space-y-3 pt-6 border-t border-white/5">
              {withoutAicoo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-white/70 font-semibold">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH AICOO: Cream block */}
          <div className="p-8 bg-yellow/5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow/10 p-2 rounded-lg border border-yellow/20 text-yellow-dark">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-sm font-bold uppercase tracking-wider text-charcoal">The Aicoo Protocol OS</h3>
              </div>
              <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
                Aicoo acts as the secure inter-agent communication layer, maintaining absolute security and context.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-charcoal/5">
              {withAicoo.map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-xs font-extrabold text-charcoal flex items-center gap-1.5 flex-wrap">
                      <span>{item.title}</span>
                      <code className="text-[8px] bg-charcoal/5 px-1 py-0.5 rounded font-mono text-yellow-dark">
                        {item.endpoint}
                      </code>
                    </div>
                    <p className="text-[10px] text-charcoal/50 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
