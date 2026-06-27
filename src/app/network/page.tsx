// src/app/network/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AgentNetwork from "../../components/AgentNetwork";
import NetworkLog from "../../components/NetworkLog";
import ShareManager from "../../components/ShareManager";
import { ScenarioStep } from "../../lib/scenarios";
import { Info, ShieldAlert, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NetworkPage() {
  const [activeStep, setActiveStep] = useState<ScenarioStep | null>(null);

  const handleStepTriggered = (step: ScenarioStep) => {
    setActiveStep(step);
  };

  const handleScenarioReset = () => {
    setActiveStep(null);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main OS Panel */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Topology & Details (8 Columns) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex-1">
            <AgentNetwork 
              onStepTriggered={handleStepTriggered}
              onScenarioReset={handleScenarioReset}
            />
          </div>

          {/* Quick Help / Walkthrough info banner */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 flex gap-3 shadow-sm items-start">
            <div className="bg-yellow/10 p-2 rounded-lg border border-yellow/20 text-yellow-dark mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-syne uppercase font-bold text-charcoal">How to test the VendorFlow demo:</h4>
              <p className="text-xs text-charcoal/60 leading-relaxed font-medium">
                1. Select a Scenario (e.g. <strong>Delayed Shipment</strong> or <strong>Damaged Goods Claim</strong>). <br />
                2. Click <strong>Play Run</strong> to execute automatically or <strong>Step</strong> to run manually. <br />
                3. Observe API logs showing endpoints like <code className="bg-charcoal/5 px-1 py-0.5 rounded font-mono text-[10px]">/accumulate</code> and <code className="bg-charcoal/5 px-1 py-0.5 rounded font-mono text-[10px]">/share/create</code> executing in the console on the right. <br />
                4. When an escalation triggers, navigate to the <Link href="/escalation" className="text-yellow-dark underline font-bold inline-flex items-center gap-0.5">Human Portal <ArrowUpRight className="w-3 h-3" /></Link> to see the generated briefing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Ledger Logs & Link Manager (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1">
            <NetworkLog />
          </div>
          <div className="flex-1">
            <ShareManager />
          </div>
        </div>
      </main>
    </div>
  );
}
