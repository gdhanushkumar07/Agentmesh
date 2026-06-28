// src/components/PortalSelection.tsx
"use client";

import React from "react";
import { ShoppingBag, Landmark, ArrowRight, ShieldCheck, Database, Key } from "lucide-react";

interface PortalSelectionProps {
  onSelect: (role: "marketplace" | "seller") => void;
}

export default function PortalSelection({ onSelect }: PortalSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12 animate-in fade-in duration-300">
      
      {/* Narrative Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] font-syne uppercase tracking-widest text-yellow-dark bg-yellow/10 px-3 py-1 rounded-full font-bold">
          VendorFlow Multi-Organization Demo Portal
        </span>
        <h1 className="font-syne text-3xl font-extrabold uppercase text-charcoal tracking-wide leading-tight">
          De-centralized AI Sourcing Experience
        </h1>
        <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
          Select a role perspective below to explore the demo. Aicoo acts as the secure permissioned protocol in the background, allowing independent entities to coordinate inventory and cargo bookings without exposing internal databases.
        </p>
      </div>

      {/* Selector Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: Customer Marketplace */}
        <div className="flex flex-col justify-between p-6 bg-cream border border-charcoal/10 rounded-3xl hover:border-charcoal/25 hover:shadow-md transition-all duration-300 group">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-charcoal text-cream rounded-2xl flex items-center justify-center shadow-sm">
              <ShoppingBag className="w-6 h-6" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-syne text-lg font-extrabold uppercase text-charcoal">
                  Marketplace Portal
                </h3>
                <span className="text-[8px] font-mono bg-charcoal/5 px-2 py-0.5 rounded font-bold text-charcoal/50 uppercase">Customer</span>
              </div>
              <p className="text-xs text-charcoal/65 leading-relaxed font-semibold">
                Browse our responsive catalog of 35+ products, apply filters, inspect stocks across multiple sellers, and click "Buy Now" to watch the automatic behind-the-scenes B2B coordination unfold.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-[10px] text-charcoal/60 font-bold uppercase">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>Search and filter 10 categories</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>Simulate low-stock failover purchases</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>Inspect customer-facing shipping updates</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelect("marketplace")}
            className="w-full mt-8 py-3.5 bg-charcoal group-hover:bg-charcoal/90 text-cream rounded-xl font-syne font-extrabold uppercase text-[10px] tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm border border-charcoal"
          >
            <span>Enter Marketplace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Card 2: Partner Seller Console */}
        <div className="flex flex-col justify-between p-6 bg-cream border border-charcoal/10 rounded-3xl hover:border-charcoal/25 hover:shadow-md transition-all duration-300 group">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-yellow text-charcoal rounded-2xl flex items-center justify-center shadow-sm border border-yellow-dark">
              <Landmark className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-syne text-lg font-extrabold uppercase text-charcoal">
                  Partner Console
                </h3>
                <span className="text-[8px] font-mono bg-yellow/20 px-2 py-0.5 rounded border border-yellow-dark/25 font-bold text-yellow-dark uppercase">Seller Alpha</span>
              </div>
              <p className="text-xs text-charcoal/65 leading-relaxed font-semibold">
                Monitor live revenue stats, list items, handle low-stock exceptions, inspect active B2B customer sheets, and see how Aicoo coordinates warehouse lanes and transit insurance options securely.
              </p>
            </div>

            <ul className="space-y-2 pt-2 text-[10px] text-charcoal/60 font-bold uppercase">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-dark shrink-0" />
                <span>Review private corporate metrics & revenue</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-dark shrink-0" />
                <span>Inspect isolated B2B customer ledgers</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-dark shrink-0" />
                <span>Trigger failover exception fulfillment</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onSelect("seller")}
            className="w-full mt-8 py-3.5 bg-yellow group-hover:bg-yellow-dark text-charcoal rounded-xl font-syne font-extrabold uppercase text-[10px] tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm border border-yellow-dark"
          >
            <span>Open Partner Console</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Secure Protocol Note */}
      <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-2xl flex gap-3 items-start max-w-2xl mx-auto shadow-xs">
        <Key className="w-5 h-5 text-charcoal/40 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal">Secure Permission Isolation</h4>
          <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold">
            Neither organization exposes raw API routes or SQL databases directly. Under the hood, VendorFlow coordinates operations via **Aicoo's decentralized context-sharing and temporary write permissions**, protecting company data privacy.
          </p>
        </div>
      </div>

    </div>
  );
}
