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
    <section id="tech-stack" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-06 / Technology Stack
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Technical Stack <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Responsibility</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            OpenRelay organizes technology by operational responsibility to ensure speed, absolute security, and protocol isolation.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div 
                key={group.id}
                className="bg-white border border-charcoal/10 rounded-2xl p-8 flex flex-col justify-between min-h-[240px] transition-all duration-300 hover:border-charcoal/30 hover:-translate-y-1.5 hover:shadow-xl group shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <span className="font-sans text-xs font-extrabold text-charcoal/30 group-hover:text-yellow-dark transition-colors">
                    {group.id}
                  </span>
                  <div className="bg-charcoal/5 p-3 rounded-xl border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 mt-8">
                  <span className="text-[10px] font-sans font-extrabold uppercase tracking-wider text-yellow-dark block">
                    {group.subtitle}
                  </span>
                  <h3 className="font-sans text-sm uppercase font-extrabold text-charcoal tracking-wide">
                    {group.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
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
