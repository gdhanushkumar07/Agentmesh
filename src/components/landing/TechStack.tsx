// src/components/landing/TechStack.tsx
"use client";

import React from "react";
import { Layout, Brain, Cpu, Database, ShieldAlert, Cloud, ArrowRightLeft } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      id: "T-01",
      icon: Layout,
      title: "Frontend Core",
      subtitle: "Next.js 16 & TypeScript",
      reason: "Chosen for static pre-rendering of dashboard states, type safety across endpoints, and Edge layout rendering speeds."
    },
    {
      id: "T-02",
      icon: Database,
      title: "Backend Engine",
      subtitle: "Node.js Edge Runtime",
      reason: "Runs serverless route checks close to LLM regions, ensuring sub-second response times for message packets."
    },
    {
      id: "T-03",
      icon: Brain,
      title: "AI Reasoning",
      subtitle: "OpenAI GPT-4o / Claude 3.5",
      reason: "Provides the underlying intelligence nodes for support classification, billing disputes auditing, and legal summaries."
    },
    {
      id: "T-04",
      icon: Cpu,
      title: "Visualization",
      subtitle: "SVG Canvas & CSS Animations",
      reason: "Renders responsive, hardware-accelerated agent topologies and active packet flows without heavy external package imports."
    },
    {
      id: "T-05",
      icon: ShieldAlert,
      title: "Infrastructure Store",
      subtitle: "Aicoo Memory Folders",
      reason: "Solves stateless LLM memory loss by persistently caching folder trees and exception reports across API calls."
    },
    {
      id: "T-06",
      icon: Cloud,
      title: "Deployment Hosting",
      subtitle: "Vercel Platform",
      reason: "Distributes static assets globally with instant edge replication, webhook handlers, and git integration."
    },
    {
      id: "T-07",
      icon: ArrowRightLeft,
      title: "Aicoo Integration",
      subtitle: "Aicoo Protocol Gateway",
      reason: "Connects VendorFlow to workspaces via `/init` and compiles Q1-Q4 priority matrix grids via `/briefing/matrix` endpoints."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-09 / Technology Stack
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Technical Stack Architecture
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            VendorFlow leverages modern web and protocol integration frameworks to ensure speed, security, and responsive layouts.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all hover:border-charcoal/30 group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-syne text-xs font-bold text-charcoal/30 group-hover:text-yellow-dark transition-colors">
                    {cat.id}
                  </span>
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 mt-8">
                  <span className="text-[9px] font-syne font-bold uppercase tracking-wider text-yellow-dark">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] text-charcoal/60 leading-relaxed font-medium">
                    {cat.reason}
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
