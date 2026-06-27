// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Headphones, CreditCard, Scale, Globe, ArrowRight, ShieldCheck, Database, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen bg-cream flex flex-col md:flex-row border-collapse">
      {/* LEFT COLUMN: Hero canvas with Grid lines */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between grid-bg border-r border-charcoal/10 relative min-h-[50vh] md:min-h-screen">
        {/* Top brand */}
        <div className="flex items-center gap-2">
          <div className="bg-charcoal text-yellow p-1 rounded-lg border border-charcoal">
            <Globe className="w-4 h-4" />
          </div>
          <span className="font-syne text-xs uppercase font-bold tracking-wider text-charcoal">AgentMesh OS</span>
        </div>

        {/* Hero content */}
        <div className="my-auto py-12 max-w-xl space-y-6">
          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-charcoal leading-[0.95]">
            AI-Driven <br />
            <span className="text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block mt-2">Operations</span> <br />
            Connected.
          </h1>
          
          <p className="text-sm text-charcoal/70 font-medium leading-relaxed">
            AgentMesh is an operating system for modern business operations. Every department runs as an autonomous agent coordinating, negotiating, and sharing context through Aicoo's secure protocol.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/network"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal hover:bg-charcoal/90 text-cream rounded-xl font-syne font-bold uppercase text-xs transition-all shadow-md group"
            >
              <span>Deploy Network OS</span>
              <ArrowRight className="w-4 h-4 text-yellow transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/escalation"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-charcoal/10 hover:border-charcoal/30 text-charcoal rounded-xl font-syne font-bold uppercase text-xs transition-all shadow-sm"
            >
              <span>View Human Portal</span>
            </Link>
          </div>
        </div>

        {/* Footnotes */}
        <div className="flex flex-wrap items-center gap-6 text-[10px] text-charcoal/40 font-bold uppercase tracking-wider">
          <div>🚀 Next.js 16 App Router</div>
          <div>🔐 Secure Sandbox</div>
          <div>⚡ Powered by Aicoo</div>
        </div>
      </div>

      {/* RIGHT COLUMN: Stacked agent blocks inspired by S-02, S-03, S-04 */}
      <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col shrink-0 divide-y divide-charcoal/10 md:min-h-screen">
        {/* S-01: Support Agent (Cream background) */}
        <div className="p-8 bg-cream flex flex-col justify-between flex-1 relative group">
          <div className="flex justify-between items-start">
            <span className="font-syne text-xl font-black text-charcoal/20 group-hover:text-yellow-dark/40 transition-colors">S-01</span>
            <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5">
              <Headphones className="w-5 h-5 text-charcoal" />
            </div>
          </div>
          <div className="space-y-2 mt-12">
            <h3 className="font-syne text-xs uppercase tracking-wider font-extrabold text-charcoal">Support Agent</h3>
            <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
              Receives customer disputes, performs Aicoo-powered reasoning, parses file systems, and routes decisions to appropriate billing or engineering nodes.
            </p>
          </div>
        </div>

        {/* S-02: Billing Agent (Yellow background) */}
        <div className="p-8 bg-yellow flex flex-col justify-between flex-1 relative group">
          <div className="flex justify-between items-start">
            <span className="font-syne text-xl font-black text-charcoal/20 group-hover:text-charcoal/40 transition-colors">S-02</span>
            <div className="bg-charcoal/10 p-2 rounded-lg border border-charcoal/10">
              <CreditCard className="w-5 h-5 text-charcoal" />
            </div>
          </div>
          <div className="space-y-2 mt-12">
            <h3 className="font-syne text-xs uppercase tracking-wider font-extrabold text-charcoal">Billing Agent</h3>
            <p className="text-xs text-charcoal/80 leading-relaxed font-semibold">
              Connects to financial databases (Stripe, QuickBooks) to verify invoices, generates folder-scoped Aicoo sharing credentials, and closes discrepancies.
            </p>
          </div>
        </div>

        {/* S-03: Legal Agent (Charcoal background, white text) */}
        <div className="p-8 bg-charcoal text-cream flex flex-col justify-between flex-1 relative group border-t border-white/5">
          <div className="flex justify-between items-start">
            <span className="font-syne text-xl font-black text-white/10 group-hover:text-yellow/30 transition-colors">S-03</span>
            <div className="bg-white/10 p-2 rounded-lg border border-white/5">
              <Scale className="w-5 h-5 text-cream" />
            </div>
          </div>
          <div className="space-y-2 mt-12">
            <h3 className="font-syne text-xs uppercase tracking-wider font-extrabold text-yellow">Legal & Briefings Agent</h3>
            <p className="text-xs text-cream-dark/60 leading-relaxed font-semibold">
              Audits operations against compliance guidelines, creates Eisenhower priority lists, and generates briefings so humans are instantly contextualized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
