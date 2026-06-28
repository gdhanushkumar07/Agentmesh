// src/components/landing/WhyAgentMesh.tsx
"use client";

import React from "react";
import { ShoppingCart, Database, Key, CheckCircle } from "lucide-react";

export default function WhyAgentMesh() {
  const steps = [
    {
      id: "01",
      icon: ShoppingCart,
      title: "Order Checkout",
      headline: "Customer Places Purchase Request",
      desc: "Selecting products from a catalog triggers the B2B order. Marketplace agents receive the requisition and initialize the transaction."
    },
    {
      id: "02",
      icon: Database,
      title: "Stock Verification",
      headline: "Scans Supplier Inventory",
      desc: "Stock agents check availability. If the primary seller lacks inventory, VendorFlow bypasses the deficit to secure backup supplies."
    },
    {
      id: "03",
      icon: Key,
      title: "Secured Coordination",
      headline: "Aicoo Routes Permissioned Data",
      desc: "AI agents for warehousing, courier routing, payment gateways, and insurance underwriters collaborate securely in the background."
    },
    {
      id: "04",
      icon: CheckCircle,
      title: "Fulfillment Complete",
      headline: "Order Dispatched Confirmed",
      desc: "Funds are verified, shipping labels generated, and express carriers booked. The order is delivered tomorrow."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-03 / How It Works
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Decentralized Sourcing Operations
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            VendorFlow coordinates complex procurement pipelines without manual emails, meetings, or spreadsheets.
          </p>
        </div>

        {/* 4 Large Connected Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-cream border border-charcoal/10 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] transition-all hover:border-charcoal/30 hover:-translate-y-0.5 duration-200 shadow-sm relative group"
              >
                {/* Numeric Step Badge */}
                <div className="flex justify-between items-start">
                  <span className="font-syne text-sm font-extrabold text-charcoal/20 group-hover:text-yellow-dark transition-colors">
                    {step.id}
                  </span>
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 mt-12">
                  <span className="text-[8px] font-syne font-bold uppercase tracking-wider text-yellow-dark">
                    {step.title}
                  </span>
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">
                    {step.headline}
                  </h3>
                  <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold">
                    {step.desc}
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
