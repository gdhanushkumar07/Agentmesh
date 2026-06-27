// src/app/heartbeat/page.tsx
"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import HeartbeatDash from "../../components/HeartbeatDash";
import { ShieldCheck, Server, AlertOctagon, HelpCircle, Activity } from "lucide-react";

export default function HeartbeatPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: System Health Card (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-4 bg-cream-dark/20 flex items-center gap-2">
            <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">S-09</span>
            <h2 className="font-syne text-xs uppercase tracking-wider font-extrabold text-charcoal flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-yellow-dark" />
              <span>Sweeper Configuration</span>
            </h2>
          </div>

          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
            <h3 className="font-syne text-xs uppercase font-bold text-charcoal/50 tracking-wider">Cron Policy</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-medium border-b border-charcoal/5 pb-2.5">
                <span className="text-charcoal/60">Schedule Frequency</span>
                <span className="text-charcoal font-bold bg-charcoal/5 px-2 py-0.5 rounded">Every 4 Hours</span>
              </div>
              <div className="flex justify-between items-center text-xs font-medium border-b border-charcoal/5 pb-2.5">
                <span className="text-charcoal/60">Target Workspaces</span>
                <span className="text-charcoal font-bold">15 Active Domains</span>
              </div>
              <div className="flex justify-between items-center text-xs font-medium border-b border-charcoal/5 pb-2.5">
                <span className="text-charcoal/60">Active Policy Tier</span>
                <span className="text-yellow-dark font-extrabold bg-yellow/10 px-2 py-0.5 rounded border border-yellow/20">ACTIONS</span>
              </div>
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-charcoal/60">Failure Trigger</span>
                <span className="text-charcoal font-bold">Human Alert Handoff</span>
              </div>
            </div>
          </div>

          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-3.5 shadow-sm">
            <h3 className="font-syne text-xs uppercase font-bold text-charcoal/50 tracking-wider">Proactive Sweeper Diagnostics</h3>
            <div className="flex items-start gap-2.5 text-xs text-charcoal/70 leading-relaxed font-medium">
              <Server className="w-4 h-4 text-charcoal/40 shrink-0 mt-0.5" />
              <span>Aicoo Heartbeat triggers auto-draft outreach workflows using historical customer context folders.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-charcoal/70 leading-relaxed font-medium">
              <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <span>Protects against silent API key deprecation, workspace storage capacity limits, and domain expiration.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Proactive Heartbeat Timeline (8 Columns) */}
        <div className="lg:col-span-8">
          <HeartbeatDash />
        </div>
      </main>
    </div>
  );
}
