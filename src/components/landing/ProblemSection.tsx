// src/components/landing/ProblemSection.tsx
"use client";

import React from "react";
import { FileX, MailWarning, ShieldAlert, Cpu } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      id: "P-01",
      icon: FileX,
      title: "Lost Context",
      desc: "Ticket handoffs between teams wash away valuable history. Every department receives a blank slate, forcing repeat evaluations."
    },
    {
      id: "P-02",
      icon: MailWarning,
      title: "Manual Ticket Forwarding",
      desc: "Humans waste hours acting as manual sorting nodes — reading emails, looking up records, and assigning tags instead of resolving work."
    },
    {
      id: "P-03",
      icon: Cpu,
      title: "Siloed AI Assistants",
      desc: "Isolated LLM bots can't share workspace memory. They work in complete isolation, unaware of database or legal context updates."
    },
    {
      id: "P-04",
      icon: ShieldAlert,
      title: "Insecure Shared Access",
      desc: "Coordinating with partners requires full folder permissions or zero access. There is no protocol to share scopes securely and revoke them."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-02 / The Crisis
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Why Operations Fail at Scale
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Today's business workflows break because agents and departments operate as isolated islands. Coordination is left to manual processes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div 
                key={prob.id}
                className="bg-cream border border-charcoal/10 hover:border-charcoal/30 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all hover:-translate-y-1 hover:shadow-sm group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-syne text-sm font-bold text-charcoal/30 group-hover:text-yellow-dark transition-colors">
                    {prob.id}
                  </span>
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1.5 mt-8">
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {prob.title}
                  </h3>
                  <p className="text-[11px] text-charcoal/60 leading-relaxed font-medium">
                    {prob.desc}
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
