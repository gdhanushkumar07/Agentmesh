// src/components/landing/RealProblem.tsx
"use client";

import React from "react";
import { ShieldX, ShieldCheck, X, Check } from "lucide-react";

export default function RealProblem() {
  const pointsWithout = [
    { title: "Support AI cannot talk to Supplier AI", desc: "Customer complaints are blocked because agents have no direct communication bridge." },
    { title: "Supplier AI cannot access Finance AI", desc: "No secure permission system to request invoice checks without exposing the database." },
    { title: "Every Agent Repeats Work", desc: "No shared ledger. Every node starts blank and asks the customer for redundant details." },
    { title: "Context Disappears", desc: "Memos, Stripe statuses, and customs logs are lost between email forwarding." },
    { title: "Permissions are Impossible", desc: "No standard way to grant a 3rd party partner access to just one specific folder." }
  ];

  const pointsWith = [
    { title: "Cross-Company Pipelines", desc: "VendorFlow routes requests across corporate domains using Aicoo secure bridges." },
    { title: "Secure Folder-Scoped Shares", desc: "Supplier AI gets read/write access to only `/Billing` folders, expiring in 7 days." },
    { title: "Shared Cumulative Memory", desc: "Order details, carriage rates, and status logs accumulate in Aicoo folders." },
    { title: "No Manual Forwarding", desc: "Every step is handled automatically, with credentials verified via `/init` endpoints." },
    { title: "Full Transaction Logs", desc: "Every agent action, share request, and briefing generation is logged and inspectable." }
  ];

  return (
    <section id="problem-deepdive" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-03 / The Friction
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            The Coordination Problem
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Deploying disconnected AI agents creates corporate silos. Without coordination, workflows grind to a halt.
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm">
          {/* Without Coordination (Silos) */}
          <div className="p-8 bg-cream border-r border-charcoal/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg border border-red-500/20 text-red-500">
                  <ShieldX className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">Isolated AI Agents</h3>
              </div>
              <p className="text-[11px] text-charcoal/65 leading-relaxed font-semibold">
                Siloed agents cannot coordinate across companies, resulting in disconnected customer experiences.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-charcoal/10">
              {pointsWithout.map((p, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-charcoal">{p.title}</h4>
                    <p className="text-[10px] text-charcoal/50 leading-relaxed font-medium">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* With VendorFlow */}
          <div className="p-8 bg-charcoal text-cream space-y-6 flex flex-col justify-between grid-bg-dark border-l border-white/5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-yellow/10 p-2 rounded-lg border border-yellow/20 text-yellow animate-pulse">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xs uppercase font-extrabold text-cream">With VendorFlow</h3>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                Unified workflow coordinate infrastructure lets agents collaborate securely across company boundaries.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              {pointsWith.map((p, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-yellow shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-cream">{p.title}</h4>
                    <p className="text-[10px] text-white/50 leading-relaxed font-medium">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
