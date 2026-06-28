// src/components/CooPermissionLedger.tsx
"use client";

import React from "react";
import { Scenario } from "../lib/scenarios";
import { ShieldCheck, Calendar, Info, Clock } from "lucide-react";

interface CooPermissionLedgerProps {
  scenario: Scenario;
  currentStepIndex: number;
}

export default function CooPermissionLedger({ scenario, currentStepIndex }: CooPermissionLedgerProps) {
  const steps = scenario ? scenario.steps : [];
  
  // Filter steps executed so far that represent sharing context or permissions
  const activePermissions = Array.isArray(steps) 
    ? steps
        .slice(0, currentStepIndex + 1)
        .filter(s => s.capability === 'Context Share' || s.capability === 'Permission')
    : [];

  return (
    <div className="flex flex-col bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm h-full min-h-[300px]">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-charcoal/10 bg-cream-dark/20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">Ledger Ledger</span>
          <div className="flex items-center gap-1.5 text-xs font-syne uppercase font-bold text-charcoal">
            <ShieldCheck className="w-4.5 h-4.5 text-yellow-dark" />
            <span>Active Permission Ledger</span>
          </div>
        </div>
      </div>

      {/* Permissions List */}
      <div className="flex-1 p-5 overflow-y-auto max-h-[300px] space-y-3 grid-bg min-h-[220px]">
        {activePermissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-charcoal/30 py-8 text-center select-none">
            <ShieldCheck className="w-8 h-8 opacity-25 mb-1.5" />
            <p className="font-syne text-xs uppercase tracking-wider font-bold">Secure Isolation</p>
            <p className="text-[10px] mt-0.5 opacity-80 leading-relaxed max-w-[200px]">
              No active cross-company context shares or authorization tokens registered. Data is isolated.
            </p>
          </div>
        ) : (
          activePermissions.map((perm, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-cream border border-charcoal/5 hover:border-charcoal/15 rounded-xl space-y-2.5 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-200 text-xs font-semibold text-charcoal"
            >
              <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
                <span className="text-[9px] font-mono bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded uppercase font-bold animate-pulse">
                  Aicoo Share Active
                </span>
                <span className="text-[8px] text-charcoal/40 font-mono">ID: perm_{idx}908</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] leading-relaxed">
                <div>
                  <span className="text-[8px] text-charcoal/45 font-syne uppercase block font-bold">Shared By:</span>
                  <span className="font-bold">{perm.senderAgent}</span>
                  <span className="text-[8px] text-charcoal/55 block font-mono">({perm.senderOrg})</span>
                </div>
                <div>
                  <span className="text-[8px] text-charcoal/45 font-syne uppercase block font-bold">Shared With:</span>
                  <span className="font-bold">{perm.receiverAgent}</span>
                  <span className="text-[8px] text-charcoal/55 block font-mono">({perm.receiverOrg})</span>
                </div>
              </div>

              <div className="pt-2 border-t border-charcoal/5 grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <span className="text-[8px] text-charcoal/45 font-syne uppercase block font-bold">Shared Context:</span>
                  <span className="font-bold text-yellow-dark">{perm.badge === 'ALPHA OUTAGE' ? 'Connection Status' : (perm.badge || 'Inventory Quantity')}</span>
                </div>
                <div>
                  <span className="text-[8px] text-charcoal/45 font-syne uppercase block font-bold">Permission:</span>
                  <span className="font-mono bg-charcoal/5 px-1.5 py-0.5 rounded text-[8px] block w-fit mt-0.5">
                    {perm.capability === 'Permission' ? 'Execute (Read/Write)' : 'Read Only'}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-charcoal/5 text-[10px] space-y-1">
                <div>
                  <span className="text-[8px] text-charcoal/45 font-syne uppercase block font-bold">Reason:</span>
                  <p className="font-semibold text-charcoal/70 leading-normal">{perm.reason}</p>
                </div>
                <div className="flex items-center gap-1 pt-1 text-charcoal/40 font-bold uppercase text-[8px]">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Expiry: {perm.capability === 'Permission' ? '2 Hours' : '30 Minutes'}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
