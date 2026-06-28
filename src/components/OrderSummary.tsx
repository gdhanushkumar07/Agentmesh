// src/components/OrderSummary.tsx
"use client";

import React from "react";
import { CheckCircle2, RotateCcw, ArrowLeft, ShieldCheck, Cpu, Database, Key, HelpCircle } from "lucide-react";

interface OrderSummaryProps {
  onReplay: () => void;
  onReset: () => void;
}

export default function OrderSummary({ onReplay, onReset }: OrderSummaryProps) {
  const stats = [
    { label: "Seller Organizations Contacted", value: "2", icon: Database },
    { label: "AI Agents Involved", value: "7", icon: Cpu },
    { label: "Aicoo Routes Executed", value: "14", icon: ShieldCheck },
    { label: "Context Shares Scoped", value: "9", icon: Key },
    { label: "Permissions Granted", value: "6", icon: ShieldCheck },
    { label: "Alternative Seller Used", value: "Yes", icon: CheckCircle2, color: "text-green-600 font-bold" },
    { label: "Human Intervention", value: "No", icon: HelpCircle }
  ];

  return (
    <div className="bg-cream border border-charcoal/15 rounded-3xl p-6 md:p-8 space-y-6 shadow-md max-w-lg mx-auto animate-in zoom-in-95 duration-200">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center space-y-2 pb-4 border-b border-charcoal/5">
        <div className="bg-green-100 p-2.5 rounded-2xl border border-green-200 text-green-600 animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal pt-2">
          Order Successfully Coordinated
        </h2>
        <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold max-w-sm">
          Aicoo synchronized inventory, warehouses, carriers, and liability coverages across different organizations in 24.2 seconds.
        </p>
      </div>

      {/* Stats list */}
      <div className="space-y-2.5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx}
              className="flex justify-between items-center p-3 bg-cream border border-charcoal/5 rounded-xl text-xs font-semibold shadow-xs"
            >
              <div className="flex items-center gap-2 text-charcoal/65">
                <Icon className="w-4 h-4 text-charcoal/40" />
                <span>{stat.label}</span>
              </div>
              <span className={`font-mono text-xs uppercase ${stat.color || "text-charcoal font-bold"}`}>
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Explanatory banner */}
      <div className="p-4 bg-charcoal text-cream rounded-2xl border border-charcoal/5 space-y-1">
        <h4 className="text-[9px] font-syne uppercase tracking-wider text-yellow font-extrabold">
          Aicoo Protocol Ledger Summary
        </h4>
        <p className="text-[10px] text-white/70 leading-relaxed font-semibold">
          Decentralized security was maintained throughout the process. No company exposed its internal ERP databases; agents communicated via scoped, time-bound context shares.
        </p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={onReplay}
          className="flex items-center justify-center gap-1.5 py-3 border border-charcoal/10 hover:border-charcoal/20 bg-cream rounded-xl text-[10px] font-syne font-bold uppercase transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restart Replay</span>
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-1.5 py-3 bg-charcoal hover:bg-charcoal/90 text-cream rounded-xl text-[10px] font-syne font-bold uppercase transition-all border border-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-yellow" />
          <span>Back to Product</span>
        </button>
      </div>

    </div>
  );
}
