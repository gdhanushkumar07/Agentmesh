// src/components/landing/DemoPreview.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  Network, UserCheck, Activity, Terminal, ArrowRight, Layout 
} from "lucide-react";

export default function DemoPreview() {
  const router = useRouter();

  const previews = [
    {
      id: "D-01",
      icon: Network,
      title: "Agent Network Graph",
      subtitle: "Full SVGs showing message streams, flows, and glows.",
      href: "/network",
      previewRender: (
        <svg viewBox="0 0 200 100" className="w-full h-20 opacity-70 group-hover:opacity-100 transition-opacity">
          <circle cx="50" cy="50" r="10" fill="#121212" stroke="#f2c94c" strokeWidth="1.5" />
          <circle cx="150" cy="50" r="10" fill="#121212" />
          <path d="M 60 50 L 140 50" stroke="#f2c94c" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
          <circle cx="95" cy="50" r="3" fill="#f2c94c">
            <animate attributeName="cx" from="60" to="140" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      )
    },
    {
      id: "D-02",
      icon: UserCheck,
      title: "Human Escalation Portal",
      subtitle: "Q1-Q4 Eisenhower priority lists and handoff dossiers.",
      href: "/escalation",
      previewRender: (
        <div className="grid grid-cols-2 gap-1.5 h-20 w-full opacity-70 group-hover:opacity-100 transition-opacity">
          <div className="border border-red-200 bg-red-50/50 rounded p-1 text-[7px] font-bold text-red-700">Q1: DO NOW</div>
          <div className="border border-yellow/20 bg-yellow/5 rounded p-1 text-[7px] font-bold text-yellow-dark">Q2: PLAN</div>
          <div className="border border-charcoal/5 bg-cream-dark/20 rounded p-1 text-[7px] font-bold text-charcoal/60">Q3: WORK</div>
          <div className="border border-dashed border-charcoal/10 rounded p-1 text-[7px] font-bold text-charcoal/30">Q4: LOG</div>
        </div>
      )
    },
    {
      id: "D-03",
      icon: Activity,
      title: "Heartbeat Cron Sweeps",
      subtitle: "Proactive telemetry history and auto-draft outreach email cards.",
      href: "/heartbeat",
      previewRender: (
        <div className="flex flex-col gap-1.5 h-20 justify-center w-full opacity-70 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1.5 text-[8px] font-semibold text-charcoal/60">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Sweep #run_881: Flagged 2 risk accounts</span>
          </div>
          <div className="w-full bg-charcoal/5 h-1.5 rounded overflow-hidden">
            <div className="bg-yellow h-full w-[70%]" />
          </div>
        </div>
      )
    },
    {
      id: "D-04",
      icon: Terminal,
      title: "Aicoo API Transaction Ledger",
      subtitle: "Inspected JSON payloads streaming raw API logs.",
      href: "/network",
      previewRender: (
        <div className="bg-charcoal border border-white/5 p-2 rounded h-20 font-mono text-[7px] text-yellow/80 space-y-1 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
          <div>&gt; POST /api/v1/accumulate</div>
          <div className="text-green-400">&gt; Status: 200 OK</div>
          <div className="text-white/40">&gt; payload: &#123; files: [...] &#125;</div>
        </div>
      )
    }
  ];

  return (
    <section id="demo" className="py-20 bg-cream border-t border-charcoal/10 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-08 / The Interactive System
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Launch AgentMesh OS
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Choose a preview panel below to enter the interactive workspace dashboard and audit transactions in real-time.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previews.map((prev) => {
            const Icon = prev.icon;
            return (
              <div 
                key={prev.id}
                onClick={() => router.push(prev.href)}
                className="bg-cream border border-charcoal/10 hover:border-charcoal/30 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="flex justify-between items-start">
                  <span className="font-syne text-xs font-bold text-charcoal/30 group-hover:text-yellow-dark transition-colors">
                    {prev.id}
                  </span>
                  <div className="bg-charcoal/5 p-2 rounded-lg border border-charcoal/5 text-charcoal group-hover:bg-charcoal group-hover:text-yellow transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Miniature Visualization render */}
                <div className="my-6 border border-charcoal/5 bg-cream-dark/10 p-3 rounded-xl flex items-center justify-center">
                  {prev.previewRender}
                </div>

                <div className="space-y-2 mt-auto">
                  <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center justify-between">
                    <span>{prev.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-yellow-dark transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-[10px] text-charcoal/55 leading-relaxed font-medium">
                    {prev.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA launch */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => router.push("/network")}
            className="flex items-center gap-2 px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-cream rounded-xl font-syne font-bold uppercase text-xs transition-all shadow-md group border border-charcoal"
          >
            <Layout className="w-4 h-4 text-yellow" />
            <span>Launch Complete Dashboard</span>
            <ArrowRight className="w-4 h-4 text-yellow transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
