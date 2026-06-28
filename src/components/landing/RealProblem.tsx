// src/components/landing/RealProblem.tsx
"use client";

import React from "react";
import { ShoppingCart, Headphones, Store, Home, Truck, CreditCard, Shield, ArrowRight, Lock } from "lucide-react";

export default function RealProblem() {
  const nodes = [
    { name: "Customer", role: "Triggers checkout", icon: ShoppingCart, color: "border-charcoal bg-charcoal text-cream shadow-md" },
    { name: "Marketplace", role: "Order Agent", icon: Store, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" },
    { name: "Seller", role: "Inventory Agent", icon: Headphones, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" },
    { name: "Warehouse", role: "Storage Agent", icon: Home, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" },
    { name: "Courier", role: "Logistics Agent", icon: Truck, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" },
    { name: "Payment", role: "Billing Agent", icon: CreditCard, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" },
    { name: "Insurance", role: "Risk Underwriter", icon: Shield, color: "border-charcoal/15 bg-white text-charcoal shadow-2xs" }
  ];

  return (
    <section id="problem" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-02 / The Coordination Friction
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            One Click. Seven Independent <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Organizations.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            When a customer clicks <strong>Buy Now</strong>, behind the scenes multiple independent organizations must coordinate in real time.
          </p>
        </div>

        {/* Animated Connected Flow Diagram */}
        <div className="bg-white border border-charcoal/10 rounded-3xl p-8 lg:p-12 space-y-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-6 right-6 flex items-center gap-1.5 text-xs text-rose-700 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse">
            <Lock className="w-3.5 h-3.5" />
            <span>Isolated Security Silos</span>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 py-8 relative">
            
            {/* SVG Connector Dotted Lines behind elements */}
            <div className="hidden xl:block absolute left-12 right-12 top-1/2 -translate-y-1/2 h-0.5 stroke-dash border-t-2 border-dashed border-charcoal/15 z-0" />

            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={idx}>
                  <div className={`z-10 flex flex-col items-center p-5 border rounded-2xl w-full xl:w-38 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${node.color}`}>
                    <div className="p-3 rounded-xl bg-charcoal/5 border border-charcoal/5 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans text-xs font-extrabold uppercase tracking-wide truncate max-w-full">{node.name}</h4>
                    <p className="text-[10px] opacity-60 font-medium mt-1">{node.role}</p>
                  </div>
                  {idx < nodes.length - 1 && (
                    <div className="xl:hidden text-charcoal/30 rotate-90 my-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Simple Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-charcoal/10 text-xs sm:text-sm font-normal text-charcoal/70">
            <div className="space-y-2">
              <span className="text-xs font-sans font-extrabold uppercase text-charcoal/45 tracking-wider block">The Friction</span>
              <p className="leading-relaxed">
                Each organization operates on completely different ERP databases, APIs, and proprietary code bases.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-sans font-extrabold uppercase text-charcoal/45 tracking-wider block">The Security Risk</span>
              <p className="leading-relaxed">
                None of these organizations should directly expose their customer databases or inventory lists to another company's AI.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-sans font-extrabold uppercase text-yellow-dark tracking-wider block">The OpenRelay Solution</span>
              <p className="leading-relaxed text-charcoal font-medium">
                OpenRelay coordinates this workflow. Independent corporate AI agents safely communicate through the secure, permissioned Aicoo protocol.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
