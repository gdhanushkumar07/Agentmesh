// src/components/landing/WhyAicooExists.tsx
"use client";

import React from "react";
import { UserCheck, ArrowRightLeft, ShieldCheck, FileText, Activity, Globe } from "lucide-react";

export default function WhyAicooExists() {
  const cards = [
    {
      icon: UserCheck,
      title: "Trusted Identity",
      explanation: "Every corporate AI agent is assigned a verifiable cryptographic identity.",
      example: "Supplier systems immediately authenticate incoming stock queries, verifying they belong to an authorized buyer."
    },
    {
      icon: ArrowRightLeft,
      title: "Dynamic Routing",
      explanation: "Procurement requests automatically reach the correct department and agent.",
      example: "An inventory inquiry bypasses email queues, reaching the seller's stock management agent instantly."
    },
    {
      icon: ShieldCheck,
      title: "Permissioned Context",
      explanation: "Only the required data points are shared, protected by time-bound expiration.",
      example: "A delivery carrier gets read-only access to the shipping address logs, but never sees payment info."
    },
    {
      icon: FileText,
      title: "Executive Briefings",
      explanation: "Generates human-readable transaction summaries when human review is required.",
      example: "A purchase exceeding $1,000,000 automatically drafts a clean risk profile briefing for CFO sign-off."
    },
    {
      icon: Activity,
      title: "Heartbeat Sweeps",
      explanation: "Continuously monitors agent connections to auto-detect and mitigate outages.",
      example: "When primary Seller Alpha goes offline, the heartbeat warning triggers automatic failover to Seller Beta."
    },
    {
      icon: Globe,
      title: "Cross-Organization Trust",
      explanation: "Enables AI agents belonging to separate companies to collaborate securely.",
      example: "Decentralized marketplaces coordinate orders, shipping slots, and insurance coverage autonomously."
    }
  ];

  return (
    <section id="why-aicoo" className="py-20 bg-cream border-t border-charcoal/10 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-04 / The Infrastructure Protocol
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Why Aicoo Is Essential
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Intelligence is cheap. Secure cross-company communication is difficult. Aicoo provides the trusted pipeline that connects isolated enterprise AI systems.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all hover:border-charcoal/30 group shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[8px] font-mono text-charcoal/40 font-bold uppercase">Aicoo Protocol Standard</span>
                </div>

                <div className="space-y-3 mt-8">
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {card.title}
                  </h3>
                  <p className="text-[10px] text-charcoal/70 leading-relaxed font-semibold">
                    {card.explanation}
                  </p>
                  
                  {/* Business Example Box */}
                  <div className="bg-charcoal/5 border border-charcoal/5 p-3 rounded-xl text-[9px] leading-relaxed text-charcoal/55 font-semibold">
                    <strong className="text-charcoal/75 block uppercase font-syne text-[7.5px] tracking-wider mb-0.5">Real-World Case:</strong>
                    {card.example}
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
