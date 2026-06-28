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
    <section id="why-aicoo" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative grid-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-04 / The Infrastructure Protocol
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Why Aicoo Is <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Essential</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            Intelligence is cheap. Secure cross-company communication is difficult. Aicoo provides the trusted pipeline that connects isolated enterprise AI systems.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-charcoal/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:border-charcoal/30 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div className="flex justify-between items-start">
                  <div className="bg-charcoal/5 p-3 rounded-xl border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-charcoal/40 font-bold uppercase">Aicoo Protocol Standard</span>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="font-sans text-sm uppercase font-extrabold text-charcoal tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                    {card.explanation}
                  </p>
                  
                  {/* Business Example Box */}
                  <div className="bg-charcoal/5 border border-charcoal/5 p-4 rounded-xl text-xs leading-relaxed text-charcoal/70 font-normal">
                    <strong className="text-charcoal/80 block uppercase font-sans font-extrabold text-[10px] tracking-wider mb-1">Real-World Case:</strong>
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
