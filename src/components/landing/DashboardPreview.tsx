// src/components/landing/DashboardPreview.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, Network } from "lucide-react";

export default function DashboardPreview() {
  const router = useRouter();

  return (
    <section id="demo-preview" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-06 / See It Live
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            The VendorFlow Platform Console
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Below is a preview of the workflow coordinate console. Launch the network nodes to watch live cross-company scenarios execute.
          </p>
        </div>

        {/* Blueprint Layout Card */}
        <div className="border border-charcoal/10 rounded-3xl bg-cream-dark/15 overflow-hidden shadow-sm flex flex-col">
          {/* Mock Dashboard Top Nav */}
          <div className="flex justify-between items-center px-6 py-4 bg-cream border-b border-charcoal/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow animate-pulse" />
              <span className="text-xs font-syne uppercase font-bold text-charcoal/70">VENDORFLOW_CONTROL_BLUEPRINT</span>
            </div>
            <div className="text-[9px] font-mono bg-charcoal/5 px-2 py-0.5 rounded text-charcoal/40 font-bold">v1.0-STABLE</div>
          </div>

          {/* Grid Layout Mock */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[340px] grid-bg">
            {/* Left: SVG Network (8 Cols) */}
            <div className="lg:col-span-8 bg-cream border border-dashed border-charcoal/20 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-charcoal/40 transition-all">
              <div className="absolute top-4 left-4 bg-yellow/15 text-yellow-dark border border-yellow/20 px-2.5 py-0.5 rounded text-[8px] font-syne font-bold uppercase">
                Panel 1: Supply Chain Node Graph
              </div>

              <div className="flex-1 flex items-center justify-center py-10 opacity-70">
                <Network className="w-16 h-16 text-charcoal/20 animate-pulse" />
              </div>

              <div className="mt-auto space-y-1.5 bg-cream-dark/30 p-4 rounded-xl border border-charcoal/5">
                <h4 className="text-[10px] font-syne uppercase font-extrabold text-charcoal">Interactive Workflow Topology</h4>
                <p className="text-[10px] text-charcoal/65 leading-relaxed font-medium">
                  Renders the live agent grid. Circular nodes (Procurement, Supplier, Finance, Warehouse) pulse with glow states while active packets move along routing lines showing data transmission in real-time.
                </p>
              </div>
            </div>

            {/* Right: API Logs & Shares (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* API Logs Box */}
              <div className="flex-1 bg-charcoal text-cream border border-charcoal rounded-2xl p-5 flex flex-col justify-between min-h-[160px] relative grid-bg-dark">
                <div className="absolute top-4 left-4 bg-white/10 text-yellow border border-white/5 px-2 py-0.5 rounded text-[8px] font-syne font-bold uppercase">
                  Panel 2: Aicoo API Ledger
                </div>
                <div className="mt-8 font-mono text-[9px] text-yellow/80 space-y-1">
                  <div>&gt; POST /share/create (200 OK)</div>
                  <div>&gt; POST /accumulate (200 OK)</div>
                </div>
                <p className="text-[9px] text-white/50 leading-relaxed font-medium mt-auto">
                  LEDGER VIEW: Streams raw protocol API calls (`POST /accumulate`, `/share/create`) with inspectable JSON request payloads.
                </p>
              </div>

              {/* Share Permissions Box */}
              <div className="flex-1 bg-cream border border-dashed border-charcoal/20 rounded-2xl p-5 flex flex-col justify-between min-h-[160px] relative hover:border-charcoal/40 transition-all">
                <div className="absolute top-4 left-4 bg-charcoal/5 text-charcoal/70 border border-charcoal/5 px-2 py-0.5 rounded text-[8px] font-syne font-bold uppercase">
                  Panel 3: Scoped Folder Shares
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-[10px] font-bold text-charcoal/60">
                  <Shield className="w-3.5 h-3.5 text-yellow-dark" />
                  <span>Link: /Billing (Expires 7d)</span>
                </div>
                <p className="text-[9px] text-charcoal/55 leading-relaxed font-medium mt-auto">
                  ACCESS CONTROL: Lists active shared folders with one-click revocation keys.
                </p>
              </div>
            </div>
          </div>

          {/* Mock Dashboard Bottom Control panel */}
          <div className="px-6 py-4 bg-cream border-t border-charcoal/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">Scenario selector</span>
              <span className="text-[10px] text-charcoal/60 font-semibold leading-relaxed">
                Choose pre-built supply chain simulations (Delayed Shipment, Damaged Goods Claim) to auto-play routing.
              </span>
            </div>
            <button
              onClick={() => router.push("/network")}
              className="flex items-center gap-2 px-5 py-2.5 bg-yellow hover:bg-yellow-dark text-charcoal rounded-xl font-syne font-bold uppercase text-xs transition-all shadow-sm border border-yellow-dark shrink-0"
            >
              <span>Deploy VendorFlow Nodes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
