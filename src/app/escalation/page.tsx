// src/app/escalation/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BriefingPanel from "../../components/BriefingPanel";
import { ShieldAlert, CheckSquare, Square, CheckCircle, ArrowRightLeft, UserCheck } from "lucide-react";

interface EscalationItem {
  id: string;
  customer: string;
  issue: string;
  agent: string;
  date: string;
  status: 'pending' | 'resolved';
  checklist: { id: string; text: string; done: boolean }[];
}

export default function EscalationPage() {
  const [items, setItems] = useState<EscalationItem[]>([
    {
      id: "esc_01",
      customer: "Carrier Express",
      issue: "Invoice Dispute INV-8822",
      agent: "Finance Agent",
      date: "Today, 14:32",
      status: "pending",
      checklist: [
        { id: "c1", text: "Verify payment clearance in Stripe dashboard", done: true },
        { id: "c2", text: "Confirm Finance Agent's rate adjustment exception", done: false },
        { id: "c3", text: "Approve and authorize manual credit adjustments", done: false }
      ]
    },
    {
      id: "esc_02",
      customer: "Sileon Logistics",
      issue: "Customs Surcharge Correction",
      agent: "Insurance Agent",
      date: "Today, 11:15",
      status: "pending",
      checklist: [
        { id: "c4", text: "Check partner carrier surcharge rate sheets", done: true },
        { id: "c5", text: "Sign off on the adjusted invoice credit note", done: false }
      ]
    }
  ]);
  const [selectedItemId, setSelectedItemId] = useState<string>("esc_01");

  const toggleCheck = (itemId: string, checkId: string) => {
    setItems(prev => prev.map(item => {
      if (item.id !== itemId) return item;
      return {
        ...item,
        checklist: item.checklist.map(c => c.id === checkId ? { ...c, done: !c.done } : c)
      };
    }));
  };

  const handleResolve = (itemId: string) => {
    setItems(prev => prev.map(item => {
      if (item.id !== itemId) return item;
      return { ...item, status: 'resolved' as const };
    }));
  };

  const selectedItem = items.find(i => i.id === selectedItemId);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Escalation Inbox (4 Columns) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-4 bg-cream-dark/20 flex items-center gap-2">
            <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">S-08</span>
            <h2 className="font-syne text-xs uppercase tracking-wider font-extrabold text-charcoal flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-yellow-dark" />
              <span>Escalation Inbox</span>
            </h2>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedItemId === item.id
                    ? "bg-charcoal border-charcoal text-cream shadow-md"
                    : "bg-cream border-charcoal/10 text-charcoal hover:border-charcoal/20"
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <span className="text-xs font-bold truncate">{item.customer}</span>
                  <span className={`text-[8px] font-syne font-bold uppercase px-1.5 py-0.5 rounded shrink-0 border ${
                    item.status === 'resolved'
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-red-50 text-red-600 border-red-150'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className={`text-[11px] leading-relaxed truncate ${selectedItemId === item.id ? 'text-cream-dark' : 'text-charcoal/60'}`}>
                  {item.issue}
                </p>
                <div className="flex justify-between items-center mt-3 text-[9px] opacity-75 font-medium">
                  <span>Escalated by: {item.agent}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Briefing & Resolution Panel (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          {selectedItem && (
            <div className="bg-cream border border-charcoal/10 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
                <div>
                  <h3 className="font-syne text-lg font-bold text-charcoal">{selectedItem.customer} Escalation Handoff</h3>
                  <p className="text-xs text-charcoal/50 font-medium mt-0.5">{selectedItem.issue}</p>
                </div>
                <span className="text-[10px] font-mono bg-charcoal/5 px-2 py-0.5 rounded font-bold text-charcoal/60">
                  ID: {selectedItem.id}
                </span>
              </div>

              {/* Action checklist */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal/50 tracking-wider">Required Resolution Checklist</h4>
                {selectedItem.status === 'resolved' ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-semibold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Handoff signed off. Operations updated. Context synced back to Agent network.</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedItem.checklist.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => toggleCheck(selectedItem.id, c.id)}
                        className="flex items-center gap-3 p-3 bg-cream-dark/25 hover:bg-cream-dark/40 border border-charcoal/5 rounded-xl cursor-pointer select-none transition-all"
                      >
                        {c.done ? (
                          <CheckSquare className="w-4.5 h-4.5 text-yellow-dark shrink-0" />
                        ) : (
                          <Square className="w-4.5 h-4.5 text-charcoal/30 shrink-0" />
                        )}
                        <span className={`text-xs font-medium text-charcoal ${c.done ? 'line-through opacity-50' : ''}`}>
                          {c.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action footer */}
              {selectedItem.status !== 'resolved' && (
                <div className="flex justify-end pt-2 border-t border-charcoal/10">
                  <button
                    onClick={() => handleResolve(selectedItem.id)}
                    className="px-5 py-2.5 bg-yellow hover:bg-yellow-dark text-charcoal font-syne font-bold uppercase text-xs rounded-xl transition-all shadow-sm border border-yellow-dark"
                  >
                    Sign Off & Resolve
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI Briefing Summary Component */}
          <BriefingPanel />
        </div>
      </main>
    </div>
  );
}
