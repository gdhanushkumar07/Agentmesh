// src/components/landing/FutureOfWork.tsx
"use client";

import React from "react";
import { Users, Bot, AlertTriangle, ShieldX } from "lucide-react";

export default function FutureOfWork() {
  const evolutionToday = [
    { label: "Humans", desc: "Manual, slow, isolated operations." },
    { label: "Emails", desc: "Long, unstructured conversation chains." },
    { label: "Meetings", desc: "Synch blocks to explain variables." },
    { label: "Tickets", desc: "Forwarded, static system records." },
    { label: "Today's Coordination", desc: "High friction, human-dependent relays." }
  ];

  const evolutionTomorrow = [
    { label: "AI Agents", desc: "Autonomous, lightning-fast workers." },
    { label: "???", desc: "How do they collaborate across boundaries?" },
    { label: "No Coordination", desc: "Agents operate in isolated silos." },
    { label: "No Shared Context", desc: "Stateless prompts with zero memory." },
    { label: "No Protocol", desc: "Inability to verify identity & limits safely." }
  ];

  return (
    <section id="evolution" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative grid-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-02 / The Evolution
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            The Future of Business <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Coordination</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            Companies are rapidly deploying intelligent AI agents. The bottleneck has shifted from intelligence to coordination.
          </p>
        </div>

        {/* Visual comparison box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* TODAY: Human Bottleneck */}
          <div className="bg-white border border-charcoal/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-charcoal/5 text-charcoal/70">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm uppercase font-extrabold text-charcoal tracking-wide">Yesterday's Evolution</h3>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed font-normal">
                Information crawls slowly through manual communication loops and human handoffs.
              </p>
            </div>

            <div className="my-6 space-y-2.5">
              {evolutionToday.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 bg-cream/60 border border-charcoal/5 rounded-xl text-xs font-semibold text-charcoal/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-yellow-dark">0{idx+1}</span>
                    <span>{step.label}</span>
                  </div>
                  <span className="text-xs text-charcoal/50 font-normal">{step.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl text-xs text-rose-700 font-medium mt-auto">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Slow, prone to manual entry errors, and restricted by office hours.</span>
            </div>
          </div>

          {/* TOMORROW: The AI Department Grid */}
          <div className="bg-charcoal text-cream border border-charcoal/20 rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[380px] shadow-xl grid-bg-dark hover:shadow-2xl transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-yellow/10 text-yellow">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm uppercase font-extrabold text-cream tracking-wide">Tomorrow's Gridlock</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                Siloed intelligence nodes operating without a secure transaction layer.
              </p>
            </div>

            <div className="my-6 space-y-2.5">
              {evolutionTomorrow.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-cream"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-yellow">0{idx+1}</span>
                    <span className={idx === 1 ? "text-yellow underline underline-offset-4 decoration-dashed font-bold" : ""}>{step.label}</span>
                  </div>
                  <span className="text-xs text-white/50 font-normal">{step.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-yellow/10 border border-yellow/20 p-4 rounded-xl text-xs text-yellow font-medium mt-auto">
              <ShieldX className="w-4 h-4 shrink-0 mt-0.5 text-yellow" />
              <span>Isolated agents cannot safely communicate across departments or companies.</span>
            </div>
          </div>
        </div>

        {/* Bottleneck Statement Banner */}
        <div className="border border-yellow-dark/40 bg-yellow/10 p-8 rounded-2xl text-center space-y-3 shadow-xs">
          <h3 className="font-sans text-base sm:text-lg font-extrabold text-charcoal uppercase tracking-wider">
            Intelligence isn't the problem anymore. Coordination is.
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 font-normal leading-relaxed max-w-2xl mx-auto">
            Individual AI agents are highly capable. The real bottleneck is <strong>coordination</strong> — establishing trust, context paths, and credentials so they can resolve workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
