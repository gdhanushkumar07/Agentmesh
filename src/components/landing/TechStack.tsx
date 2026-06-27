// src/components/landing/TechStack.tsx
"use client";

import React from "react";
import { Layout, Brain, Cpu, Database, ShieldAlert, Cloud } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      id: "T-01",
      icon: Layout,
      title: "Frontend Core",
      items: ["Next.js 16 App Router", "TypeScript 5.x", "Tailwind CSS v4", "React 19 Hooks"]
    },
    {
      id: "T-02",
      icon: Brain,
      title: "AI Reasoning",
      items: ["Aicoo Chat Engine", "GPT-4o Integration", "Claude 3.5 Sonnet", "Dynamic Prompts"]
    },
    {
      id: "T-03",
      icon: Cpu,
      title: "Visualization",
      items: ["SVG Node Canvas", "CSS Packet Motion", "Developer Console Logs", "Telemetry Timeline"]
    },
    {
      id: "T-04",
      icon: Database,
      title: "Infrastructure",
      items: ["Aicoo Context Folders", "Persistent Workspace Store", "Stripe API Webhooks", "Node.js 24 Edge"]
    },
    {
      id: "T-05",
      icon: ShieldAlert,
      title: "Security",
      items: ["Folder-Scoped Share links", "Time-Based Auto-Revocation", "Bearer Auth Gateway", "HMAC Scopes"]
    },
    {
      id: "T-06",
      icon: Cloud,
      title: "Deployment",
      items: ["Vercel Edge Platform", "GitHub Actions CI/CD", "Next.js Static Export", "Websockets Sync"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-06 / The Stack
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Modern Developer Stack
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            AgentMesh runs on state-of-the-art framework layers, leveraging Next.js 16 and Aicoo core components.
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

                <div className="space-y-4 mt-8">
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, idx) => (
                      <span 
                        key={idx}
                        className="text-[9px] font-syne font-bold uppercase tracking-wider bg-cream-dark/30 border border-charcoal/5 text-charcoal/70 px-2.5 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
