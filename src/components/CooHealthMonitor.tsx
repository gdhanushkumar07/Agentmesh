// src/components/CooHealthMonitor.tsx
"use client";

import React from "react";
import { Scenario } from "../lib/scenarios";
import { Activity, ShieldCheck, AlertTriangle, Clock, RefreshCw } from "lucide-react";

interface CooHealthMonitorProps {
  scenario?: Scenario | null;
  currentStepIndex?: number;
}

interface CooHealthState {
  name: string;
  org: string;
  status: "Healthy" | "Slow Response" | "Waiting" | "Under Audit";
  diagnostic: string;
}

export default function CooHealthMonitor({ scenario, currentStepIndex = -1 }: CooHealthMonitorProps) {
  // Compute COO Agent health states dynamically from the active scenario step
  const getCooHealthStates = (): CooHealthState[] => {
    const defaultStates: CooHealthState[] = [
      { name: "Marketplace Order Agent", org: "Marketplace Platform", status: "Healthy", diagnostic: "Active order pipeline listening. Latency: 45ms" },
      { name: "Seller Inventory Agent", org: "Seller Alpha", status: "Healthy", diagnostic: "Active stock check query. Latency: 62ms" },
      { name: "Seller Inventory Agent 2", org: "Seller Beta", status: "Healthy", diagnostic: "Buffer reserves stand-by. Latency: 32ms" },
      { name: "Warehouse Agent", org: "Warehouse Hub", status: "Healthy", diagnostic: "Smart packing lane queue clear. Latency: 55ms" },
      { name: "Logistics Agent", org: "Logistics Carrier", status: "Healthy", diagnostic: "Courier dispatch routes clear. Latency: 48ms" },
      { name: "Payment Agent", org: "Marketplace Platform", status: "Healthy", diagnostic: "Stripe capture gateway listening. Latency: 50ms" },
      { name: "Insurance Agent", org: "Asset Insurance", status: "Healthy", diagnostic: "Transit policy underwriting clear. Latency: 40ms" }
    ];

    if (!scenario) return defaultStates;

    // Seller Outage check (Headphones order scenario step 3)
    if (scenario.id === "headphones-order-fulfillment") {
      if (currentStepIndex === 3) {
        return defaultStates.map(coo => {
          if (coo.name === "Seller Inventory Agent") {
            return {
              ...coo,
              status: "Slow Response",
              diagnostic: "Connection Timeout. Aicoo Heartbeat detected inactivity on Seller Alpha."
            };
          }
          return coo;
        });
      }
    }

    return defaultStates;
  };

  const cooStates = getCooHealthStates();
  const slowCount = cooStates.filter(c => c.status === "Slow Response" || c.status === "Under Audit").length;
  const waitingCount = cooStates.filter(c => c.status === "Waiting").length;

  return (
    <div className="flex flex-col bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm h-full max-h-[500px]">
      {/* Top metrics summary */}
      <div className="flex justify-between items-center px-6 py-4 bg-cream border-b border-charcoal/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
            Network Monitor
          </span>
          <h2 className="text-sm font-syne uppercase tracking-wide text-charcoal font-bold">Network Monitor</h2>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase text-charcoal/60">
          <span className="text-green-600">Healthy: {cooStates.filter(c => c.status === 'Healthy').length}</span>
          {slowCount > 0 && <span className="text-yellow-600">Alerts: {slowCount}</span>}
          {waitingCount > 0 && <span className="text-charcoal/50">Pending: {waitingCount}</span>}
        </div>
      </div>

      {/* Grid Status Lists */}
      <div className="p-6 overflow-y-auto space-y-4 grid-bg flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cooStates.map((coo, idx) => {
            const isHealthy = coo.status === "Healthy";
            const isSlow = coo.status === "Slow Response" || coo.status === "Under Audit";
            
            return (
              <div 
                key={idx}
                className={`p-4 bg-cream border rounded-xl space-y-2 shadow-sm transition-all ${
                  isHealthy 
                    ? "border-charcoal/5 hover:border-charcoal/15" 
                    : isSlow 
                      ? "border-yellow-dark bg-yellow/5 animate-pulse" 
                      : "border-charcoal/10 bg-charcoal/5 opacity-70"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-syne font-extrabold uppercase text-charcoal">{coo.name}</h4>
                    <span className="text-[9px] font-bold text-charcoal/40 uppercase">{coo.org}</span>
                  </div>
                  <span className={`text-[8px] font-syne font-extrabold uppercase px-1.5 py-0.5 rounded border ${
                    isHealthy 
                      ? "bg-green-50 text-green-700 border-green-200" 
                      : isSlow 
                        ? "bg-yellow/20 text-yellow-dark border-yellow/30" 
                        : "bg-charcoal/10 text-charcoal/60 border-charcoal/20"
                  }`}>
                    {coo.status}
                  </span>
                </div>

                <div className="flex gap-1.5 items-start text-[10px] font-semibold text-charcoal/60 leading-relaxed pt-1.5 border-t border-charcoal/5">
                  {isHealthy ? (
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-yellow-dark shrink-0 mt-0.5" />
                  )}
                  <span>{coo.diagnostic}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Health Sweep Diagnosis Footer */}
        {slowCount > 0 && (
          <div className="bg-yellow/10 border border-yellow-dark/20 p-4 rounded-xl space-y-2 animate-in fade-in duration-200">
            <h5 className="text-[10px] font-syne font-extrabold uppercase text-yellow-dark flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-yellow-dark animate-pulse" />
              <span>Aicoo Heartbeat Outage Mitigation Active</span>
            </h5>
            <p className="text-[10px] text-charcoal/70 leading-relaxed font-semibold">
              Network Monitor detected timeout on primary Seller Alpha. Marketplace Order Agent has automatically bypassed the offline node, routing backup stock inquiries to Seller Beta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
