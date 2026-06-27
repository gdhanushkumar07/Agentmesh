// src/components/landing/WhyAgentMesh.tsx
"use client";

import React from "react";
import { 
  Headphones, CreditCard, Scale, Settings, Cpu, Sparkles, Globe, Crown 
} from "lucide-react";

export default function WhyAgentMesh() {
  const agents = [
    {
      id: "A-01",
      icon: Headphones,
      name: "Support Agent",
      role: "Triage & Routing",
      desc: "Autonomously accepts issues, analyzes intent against support documents, and forwards requests with full context.",
      style: "bg-cream text-charcoal border-charcoal/10"
    },
    {
      id: "A-02",
      icon: CreditCard,
      name: "Billing Agent",
      role: "Financial Verification",
      desc: "Checks Stripe logs, resolves credit discrepancies, and generates scoped folders to safely coordinate with partners.",
      style: "bg-yellow text-charcoal border-yellow-dark"
    },
    {
      id: "A-03",
      icon: Scale,
      name: "Legal Agent",
      role: "Compliance & Risk",
      desc: "Reviews cancellations against policy agreements, monitors GDPR constraints, and aggregates briefs for CEO review.",
      style: "bg-charcoal text-cream border-white/5"
    },
    {
      id: "A-04",
      icon: Settings,
      name: "Operations Agent",
      role: "Script Orchestration",
      desc: "Deploys container replicas, changes cloud routing templates, and scales server capacity during alerts.",
      style: "bg-cream text-charcoal border-charcoal/10"
    },
    {
      id: "A-05",
      icon: Cpu,
      name: "DevOps Agent",
      role: "System Diagnostics",
      desc: "Monitors response telemetry and logs latency spikes to trigger self-healing deployment scripts in Operations.",
      style: "bg-yellow text-charcoal border-yellow-dark"
    },
    {
      id: "A-06",
      icon: Sparkles,
      name: "Marketing Agent",
      role: "Outreach & Engagement",
      desc: "Analyzes user activity to draft targeted newsletters and support follow-ups for customers at risk.",
      style: "bg-cream text-charcoal border-charcoal/10"
    },
    {
      id: "A-07",
      icon: Globe,
      name: "Partner Agent",
      role: "External Sync",
      desc: "Accesses temporary folder shares from third parties to match supplier invoices and close cargo discrepancies.",
      style: "bg-charcoal text-cream border-white/5"
    },
    {
      id: "A-08",
      icon: Crown,
      name: "CEO Agent",
      role: "Global Executive",
      desc: "Consolidates all department briefing matrix cards into a priority Eisenhower grid for immediate human review.",
      style: "bg-yellow text-charcoal border-yellow-dark"
    }
  ];

  return (
    <section id="agents" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-03 / The Topology
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            An Autonomous Department Grid
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            AgentMesh transforms your corporate hierarchy into a mesh network. Every core business department is staffed by an autonomous AI agent.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isDark = agent.style.includes("bg-charcoal");
            return (
              <div 
                key={agent.id}
                className={`border rounded-2xl p-6 flex flex-col justify-between min-h-[260px] transition-all hover:-translate-y-1 hover:shadow-sm group ${agent.style}`}
              >
                <div className="flex justify-between items-start">
                  <span className={`font-syne text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity`}>
                    {agent.id}
                  </span>
                  <div className={`p-2 rounded-lg border ${
                    isDark 
                      ? "bg-white/10 border-white/5 text-cream" 
                      : "bg-charcoal/5 border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 mt-12">
                  <span className={`text-[9px] font-syne font-bold uppercase tracking-wider ${
                    isDark ? "text-yellow" : "text-yellow-dark"
                  }`}>
                    {agent.role}
                  </span>
                  <h3 className="font-syne text-xs uppercase font-extrabold">
                    {agent.name}
                  </h3>
                  <p className={`text-[11px] leading-relaxed font-medium ${
                    isDark ? "text-white/60" : "text-charcoal/60"
                  }`}>
                    {agent.desc}
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
