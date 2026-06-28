// src/components/landing/DashboardPreview.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight, Network } from "lucide-react";

export default function DashboardPreview() {
  const router = useRouter();

  return (
    <section id="demo-preview" className="py-28 lg:py-36 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-yellow-dark text-xs font-bold uppercase tracking-wider">
            S-06 / See It Live
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            The OpenRelay Platform <span className="font-serif italic font-normal text-yellow-dark lowercase capitalize">Console</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-normal">
            Below is a preview of the workflow coordinate console. Launch the network nodes to watch live cross-company scenarios execute.
          </p>
        </div>

        {/* Blueprint Layout Card */}
        <div className="border border-charcoal/10 rounded-3xl bg-white overflow-hidden shadow-xl flex flex-col transition-all duration-300">
          {/* Mock Dashboard Top Nav */}
          <div className="flex justify-between items-center px-8 py-5 bg-cream/80 border-b border-charcoal/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-yellow animate-pulse" />
              <span className="text-xs font-sans uppercase font-extrabold tracking-wider text-charcoal/80">VENDORFLOW_CONTROL_BLUEPRINT</span>
            </div>
            <div className="text-[10px] font-mono bg-charcoal/5 px-2.5 py-1 rounded-full text-charcoal/50 font-bold">v1.0-STABLE</div>
          </div>

          {/* Grid Layout Mock */}
          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[380px] grid-bg">
            {/* Left: SVG Network (8 Cols) */}
            <div className="lg:col-span-8 bg-white border border-dashed border-charcoal/20 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-charcoal/40 transition-all shadow-2xs">
              <div className="absolute top-5 left-5 bg-yellow/15 text-yellow-dark border border-yellow/30 px-3 py-1 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-wider">
                Panel 1: Supply Chain Node Graph
              </div>

              <div className="flex-1 flex items-center justify-center py-12 opacity-70">
                <Network className="w-20 h-20 text-charcoal/20 animate-pulse" />
              </div>

              <div className="mt-auto space-y-2 bg-cream/50 p-5 rounded-xl border border-charcoal/10">
                <h4 className="text-xs font-sans uppercase font-extrabold text-charcoal tracking-wide">Interactive Workflow Topology</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                  Renders the live agent grid. Circular nodes (Procurement, Supplier, Finance, Warehouse) pulse with glow states while active packets move along routing lines showing data transmission in real-time.
                </p>
              </div>
            </div>

            {/* Right: API Logs & Shares (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* API Logs Box */}
              <div className="flex-1 bg-charcoal text-cream border border-charcoal rounded-2xl p-6 flex flex-col justify-between min-h-[180px] relative grid-bg-dark shadow-md">
                <div className="absolute top-5 left-5 bg-white/10 text-yellow border border-white/10 px-3 py-1 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-wider">
                  Panel 2: Aicoo API Ledger
                </div>
                <div className="mt-10 font-mono text-xs text-yellow/90 space-y-1.5">
                  <div>&gt; POST /share/create (200 OK)</div>
                  <div>&gt; POST /accumulate (200 OK)</div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-normal mt-auto pt-4">
                  LEDGER VIEW: Streams raw protocol API calls with inspectable JSON payloads.
                </p>
              </div>

              {/* Share Permissions Box */}
              <div className="flex-1 bg-white border border-dashed border-charcoal/20 rounded-2xl p-6 flex flex-col justify-between min-h-[180px] relative hover:border-charcoal/40 transition-all shadow-2xs">
                <div className="absolute top-5 left-5 bg-charcoal/5 text-charcoal/70 border border-charcoal/10 px-3 py-1 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-wider">
                  Panel 3: Scoped Folder Shares
                </div>
                <div className="mt-10 flex items-center gap-2 text-xs font-bold text-charcoal/70">
                  <Shield className="w-4 h-4 text-yellow-dark" />
                  <span>Link: /Billing (Expires 7d)</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-normal mt-auto pt-4">
                  ACCESS CONTROL: Lists active shared folders with one-click revocation keys.
                </p>
              </div>
            </div>
          </div>

          {/* Mock Dashboard Bottom Control panel */}
          <div className="px-8 py-6 bg-cream/80 border-t border-charcoal/10 flex flex-col sm:flex-row gap-6 justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans uppercase tracking-wider text-yellow-dark bg-yellow/15 border border-yellow/30 px-3 py-1 rounded-full font-extrabold shrink-0">Interactive Demo</span>
              <span className="text-xs sm:text-sm text-charcoal/70 font-normal leading-relaxed">
                Experience how a single marketplace order triggers secure coordination between multiple independent AI agents through Aicoo.
              </span>
            </div>
            <button
              onClick={() => router.push("/network")}
              className="btn-enterprise flex items-center gap-2.5 px-7 py-4 bg-charcoal hover:bg-charcoal/90 text-cream font-bold uppercase text-xs tracking-wider transition-all shadow-md shrink-0 border border-charcoal"
            >
              <span>Launch Live Demo</span>
              <ArrowRight className="w-4 h-4 text-yellow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
