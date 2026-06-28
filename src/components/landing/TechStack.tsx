// src/components/landing/TechStack.tsx
"use client";

import React from "react";
import { Layout, Cpu, Brain, Network, Cloud } from "lucide-react";

export default function TechStack() {
  const groups = [
    {
      id: "T-01",
      icon: Layout,
      title: "Frontend Core",
      subtitle: "Next.js / React / Tailwind CSS",
      description: "Renders responsive B2B dashboards, premium glassmorphic shopping grids, and hardware-accelerated SVG packet animations."
    },
    {
      id: "T-02",
      icon: Cpu,
      title: "Backend Engine",
      subtitle: "Node.js / TypeScript",
      description: "Powers Edge runtime handlers, B2B business logic checking, secure token creation, and end-to-end type safety."
    },
    {
      id: "T-03",
      icon: Brain,
      title: "AI Reasoning",
      subtitle: "OpenAI / LangChain",
      description: "Provides the underlying intelligence nodes for agent decision routing, stock query calculations, and briefings generation."
    },
    {
      id: "T-04",
      icon: Network,
      title: "Coordination Layer",
      subtitle: "Aicoo Protocol",
      description: "The secure communication infrastructure protocol managing identity workspaces, context-sharing scopes, and heartbeat sweeps."
    },
    {
      id: "T-05",
      icon: Cloud,
      title: "Deployment",
      subtitle: "Vercel Platform",
      description: "Distributes static assets and Edge routes globally with sub-second replication, git integration, and webhook management."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-06 / Technology Stack
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Technical Stack Responsibility
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            VendorFlow organizes technology by operational responsibility to ensure speed, absolute security, and protocol isolation.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div 
                key={group.id}
                className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[200px] transition-all hover:border-charcoal/30 group shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <span className="font-syne text-xs font-bold text-charcoal/30 group-hover:text-yellow-dark transition-colors">
                    {group.id}
                  </span>
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 mt-8">
                  <span className="text-[9px] font-syne font-bold uppercase tracking-wider text-yellow-dark">
                    {group.subtitle}
                  </span>
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {group.title}
                  </h3>
                  <p className="text-[10px] text-charcoal/65 leading-relaxed font-semibold">
                    {group.description}
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
