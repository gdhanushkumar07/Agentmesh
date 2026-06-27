// src/components/landing/FutureOfWork.tsx
"use client";

import React from "react";
import { Users, Bot, ArrowDown, AlertTriangle, ArrowRight, ShieldX } from "lucide-react";

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
    <section id="problem" className="py-20 bg-cream border-t border-charcoal/10 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-02 / The Evolution
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            The Future of Business Coordination
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Companies are rapidly deploying intelligent AI agents. The bottleneck has shifted from intelligence to coordination.
          </p>
        </div>

        {/* Visual comparison box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* TODAY: Human Bottleneck */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[360px] shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-charcoal/50" />
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">Yesterday's Evolution</h3>
              </div>
              <p className="text-[11px] text-charcoal/60 leading-relaxed font-medium">
                Information crawls slowly through manual communication loops.
              </p>
            </div>

            <div className="my-6 space-y-2">
              {evolutionToday.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-2.5 bg-cream-dark/20 border border-charcoal/5 rounded-lg text-[10px] font-semibold text-charcoal/70"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-yellow-dark">0{idx+1}</span>
                    <span>{step.label}</span>
                  </div>
                  <span className="text-[9px] text-charcoal/40 font-normal">{step.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 bg-red-50 border border-red-150 p-3 rounded-xl text-[10px] text-red-700 font-semibold mt-auto">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Slow, prone to manual entry errors, and restricted by office hours.</span>
            </div>
          </div>

          {/* TOMORROW: The AI Department Grid */}
          <div className="bg-charcoal text-cream border border-charcoal rounded-2xl p-6 flex flex-col justify-between min-h-[360px] shadow-sm grid-bg-dark">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-yellow" />
                <h3 className="font-syne text-xs uppercase font-extrabold text-cream">Tomorrow's Gridlock</h3>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                Siloed intelligence nodes without a secure transaction layer.
              </p>
            </div>

            <div className="my-6 space-y-2">
              {evolutionTomorrow.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-2.5 bg-white/5 border border-white/5 rounded-lg text-[10px] font-semibold text-cream"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-yellow">0{idx+1}</span>
                    <span className={idx === 1 ? "text-yellow underline underline-offset-4 decoration-dashed" : ""}>{step.label}</span>
                  </div>
                  <span className="text-[9px] text-white/40 font-normal">{step.desc}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 bg-yellow/10 border border-yellow/20 p-3 rounded-xl text-[10px] text-yellow font-semibold mt-auto">
              <ShieldX className="w-3.5 h-3.5 shrink-0 mt-0.5 text-yellow" />
              <span>Isolated agents cannot safely communicate across departments or companies.</span>
            </div>
          </div>
        </div>

        {/* Bottleneck Statement Banner */}
        <div className="border border-yellow-dark bg-yellow/15 p-6 rounded-2xl text-center space-y-2">
          <h3 className="font-syne text-sm font-extrabold text-charcoal uppercase tracking-wider">
            Intelligence isn't the problem anymore. Coordination is.
          </h3>
          <p className="text-xs text-charcoal/70 font-semibold leading-relaxed max-w-xl mx-auto">
            Individual AI agents are highly capable. The real bottleneck is **coordination** — establishing trust, context paths, and credentials so they can resolve workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
