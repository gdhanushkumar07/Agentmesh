// src/components/landing/RealProblem.tsx
"use client";

import React from "react";
import { ShoppingCart, Headphones, Store, Home, Truck, CreditCard, Shield, Scale, ArrowRight, Lock } from "lucide-react";

export default function RealProblem() {
  const nodes = [
    { name: "Customer", role: "Triggers checkout", icon: ShoppingCart, color: "border-charcoal bg-charcoal text-cream" },
    { name: "Marketplace", role: "Order Agent", icon: Store, color: "border-charcoal/10 bg-cream text-charcoal" },
    { name: "Seller", role: "Inventory Agent", icon: Headphones, color: "border-charcoal/10 bg-cream text-charcoal" },
    { name: "Warehouse", role: "Storage Agent", icon: Home, color: "border-charcoal/10 bg-cream text-charcoal" },
    { name: "Courier", role: "Logistics Agent", icon: Truck, color: "border-charcoal/10 bg-cream text-charcoal" },
    { name: "Payment", role: "Billing Agent", icon: CreditCard, color: "border-charcoal/10 bg-cream text-charcoal" },
    { name: "Insurance", role: "Risk Underwriter", icon: Shield, color: "border-charcoal/10 bg-cream text-charcoal" }
  ];

  return (
    <section id="problem" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-02 / The Coordination Friction
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            One Click. Seven Independent Organizations.
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            When a customer clicks <strong>Buy Now</strong>, behind the scenes multiple independent organizations must coordinate.
          </p>
        </div>

        {/* Animated Connected Flow Diagram */}
        <div className="bg-cream border border-charcoal/10 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-1 text-[9px] text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full font-bold uppercase animate-pulse">
            <Lock className="w-3 h-3" />
            <span>Isolated Security Silos</span>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 py-8 relative">
            
            {/* SVG Connector Dotted Lines behind elements */}
            <div className="hidden xl:block absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 border-t border-dashed border-charcoal/15 z-0" />

            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={idx}>
                  <div className={`z-10 flex flex-col items-center p-4 border rounded-2xl w-36 text-center shadow-xs transition-transform hover:-translate-y-0.5 duration-200 ${node.color}`}>
                    <div className="p-2.5 rounded-xl bg-charcoal/5 border border-charcoal/5 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-syne text-xs font-extrabold uppercase tracking-wide truncate max-w-full">{node.name}</h4>
                    <p className="text-[9px] opacity-60 font-semibold mt-1">{node.role}</p>
                  </div>
                  {idx < nodes.length - 1 && (
                    <div className="xl:hidden text-charcoal/30 rotate-90 my-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Simple Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-charcoal/10 text-xs font-semibold text-charcoal/70">
            <div className="space-y-1.5">
              <span className="text-[9px] font-syne uppercase text-charcoal/45 font-bold">The Friction</span>
              <p className="leading-relaxed">
                Each organization operates on completely different ERP databases, APIs, and proprietary code bases.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[9px] font-syne uppercase text-charcoal/45 font-bold">The Security Risk</span>
              <p className="leading-relaxed">
                None of these organizations should directly expose their customer databases or inventory lists to another company's AI.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="text-[9px] font-syne uppercase text-yellow-dark font-bold">The VendorFlow Solution</span>
              <p className="leading-relaxed text-charcoal">
                VendorFlow coordinates this workflow. Independent corporate AI agents safely communicate through the secure, permissioned Aicoo protocol.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
