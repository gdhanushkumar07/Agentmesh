// src/components/OrgPerspectives.tsx
"use client";

import React from "react";
import { 
  ArrowLeft, Globe, Truck, ShieldCheck, Warehouse, Database, CheckSquare, 
  AlertCircle, Key, FileText, Compass, Settings
} from "lucide-react";

interface OrgPerspectiveProps {
  orgId: string;
  onBack: () => void;
}

export default function OrgPerspectives({ orgId, onBack }: OrgPerspectiveProps) {
  // Render specific layout based on selected organization
  const renderDashboard = () => {
    switch (orgId) {
      case "alpha":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[9px] font-mono bg-yellow/10 border border-yellow/20 px-2 py-0.5 rounded font-bold text-yellow-dark uppercase">Supplier Alpha Console</span>
                <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal mt-1">Sourcing & Fabrication</h2>
              </div>
              <IconBadge icon={Globe} color="bg-yellow/10 text-yellow-dark border-yellow/20" />
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-yellow-dark" />
                  <span>Fabrication Inventory Sheet</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <InventoryItem name="Industrial Steel Girders" qty="60 Available" status="Allocated to Buyer" />
                  <InventoryItem name="Heavy Machinery Gears" qty="15 Available" status="In Stock" />
                  <InventoryItem name="Monocrystalline Solar Panels" qty="0 Available" status="Out of Stock" />
                </div>
              </div>

              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-yellow-dark" />
                  <span>Aicoo Authorized Context Logs</span>
                </h3>
                <div className="space-y-3 text-[10px] font-semibold text-charcoal/60 leading-relaxed">
                  <div className="p-3 bg-charcoal/5 rounded-xl border border-charcoal/5">
                    <span className="text-[8px] font-mono bg-yellow/20 text-yellow-dark px-1.5 py-0.5 rounded font-bold uppercase">Shared Context</span>
                    <p className="mt-1">Scope: `/folders/quotations/Alpha` shared with Buyer Company</p>
                    <p className="text-[9px] text-charcoal/40 font-mono mt-0.5">Expires in 2 hours • READ ONLY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "beta":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[9px] font-mono bg-purple-50 border border-purple-200 px-2 py-0.5 rounded font-bold text-purple-600 uppercase">Supplier Beta Console</span>
                <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal mt-1">Reserve Stockpile Management</h2>
              </div>
              <IconBadge icon={Warehouse} color="bg-purple-50 text-purple-600 border-purple-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-purple-600" />
                  <span>Buffer reserves stockpile</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <InventoryItem name="Industrial Steel Girders" qty="40 Units" status="Safety Buffer Reserved" />
                  <InventoryItem name="Monocrystalline Solar Panels" qty="200 Units" status="Allocated for Tokyo" />
                  <InventoryItem name="Lithium Cell Packs" qty="500 Units" status="In Stock" />
                </div>
              </div>

              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-purple-600" />
                  <span>Aicoo Failover Handshakes</span>
                </h3>
                <div className="p-3 bg-purple-50/50 border border-purple-200/50 rounded-xl text-[10px] text-charcoal/70 leading-relaxed font-semibold">
                  <span className="text-[8px] font-mono bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold uppercase">Failover Active</span>
                  <p className="mt-1">Supplier Alpha outage detected. Sourcing failover tunnel redirected 40 steel girder order tokens to Supplier Beta autonomously.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "logistics":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[9px] font-mono bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-bold text-blue-600 uppercase">Logistics Company Operations</span>
                <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal mt-1">Fleet Transit Dispatch Console</h2>
              </div>
              <IconBadge icon={Truck} color="bg-blue-50 text-blue-600 border-blue-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Consolidated Transit Dispatch</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <InventoryItem name="Route CHI-908 (Chicago)" qty="Transit Planned" status="Consolidating cargo from Alpha & Beta" />
                  <InventoryItem name="Route TOK-112 (Miami)" qty="Dispatched" status="Express cargo in transit" />
                </div>
              </div>

              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Settings className="w-4 h-4 text-blue-600" />
                  <span>Aicoo Carrier Tools Ledger</span>
                </h3>
                <div className="p-3 bg-blue-50/50 border border-blue-200/50 rounded-xl text-[10px] text-charcoal/70 leading-relaxed font-semibold">
                  <span className="text-[8px] font-mono bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase">Authorized API Method</span>
                  <p className="mt-1">Tool `schedule_shipping` executed with parameter `mode: consolidated` via Buyer Company permission token.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "insurance":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[9px] font-mono bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-bold text-orange-600 uppercase">Insurance Company Desk</span>
                <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal mt-1">B2B Cargo Underwriting Console</h2>
              </div>
              <IconBadge icon={ShieldCheck} color="bg-orange-50 text-orange-600 border-orange-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-orange-600" />
                  <span>Transit Liability Evaluation</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <InventoryItem name="Steel Girders (Route CHI)" qty="Risk Score: 12%" status="Low Risk • Auto-cleared" />
                  <InventoryItem name="MRI Superconductors" qty="Risk Score: 38%" status="Medium Risk • Briefing Required" />
                </div>
              </div>

              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-orange-600" />
                  <span>Aicoo Underwriting Clearances</span>
                </h3>
                <div className="p-3 bg-orange-50/50 border border-orange-200/50 rounded-xl text-[10px] text-charcoal/70 leading-relaxed font-semibold">
                  <span className="text-[8px] font-mono bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold uppercase">Transit Policy Written</span>
                  <p className="mt-1">Decentralized underwriting policy generated for Logistics cargo. Aicoo verified credentials and locked liability boundaries securely.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "warehouse":
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-start border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-[9px] font-mono bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded font-bold text-cyan-600 uppercase">Warehouse smart storage</span>
                <h2 className="font-syne text-lg uppercase font-extrabold text-charcoal mt-1">Smart Packing & Loading Docks</h2>
              </div>
              <IconBadge icon={Warehouse} color="bg-cyan-50 text-cyan-600 border-cyan-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-cyan-600" />
                  <span>Express Dock Schedules</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <InventoryItem name="Loading Dock Lane 4" qty="Lane Booked" status="Reserved for Supplier Alpha girders" />
                  <InventoryItem name="Loading Dock Lane 1" qty="Lane Booked" status="Reserved for Supplier Beta panels" />
                </div>
              </div>

              <div className="bg-cream border border-charcoal/10 p-5 rounded-2xl space-y-4 shadow-sm">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-cyan-600" />
                  <span>Aicoo Access Control List</span>
                </h3>
                <div className="p-3 bg-cyan-50/50 border border-cyan-200/50 rounded-xl text-[10px] text-charcoal/70 leading-relaxed font-semibold">
                  <span className="text-[8px] font-mono bg-cyan-100 text-cyan-700 px-1.5 py-0.5 rounded font-bold uppercase">Context Granted</span>
                  <p className="mt-1">Buyer Procurement Agent requested storage space capacity limits context. Scope folder `/warehouse/docks` checked and cleared.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-cream border border-charcoal/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm animate-in fade-in duration-300">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-syne font-bold uppercase tracking-wider text-charcoal/60 hover:text-charcoal transition-colors border border-charcoal/10 px-3 py-1.5 rounded-lg bg-cream hover:bg-charcoal/5"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Change Organization Perspective</span>
      </button>

      {/* Main dashboard content */}
      <div className="grid-bg p-6 rounded-2xl border border-charcoal/5 bg-cream-dark/5">
        {renderDashboard()}
      </div>

      {/* Permission scope indicator footer */}
      <div className="bg-charcoal text-cream rounded-2xl p-5 flex gap-3 shadow-md items-start">
        <div className="bg-white/10 p-2 rounded-lg border border-white/5 text-yellow mt-0.5">
          <Key className="w-4 h-4 shrink-0" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-syne uppercase font-bold text-yellow">Aicoo Permission Boundaries Enforced</h4>
          <p className="text-[10px] text-white/70 leading-relaxed font-semibold">
            You are viewing this console under scoped B2B credentials. No database is shared. All inquiries and transaction data are exchanged and authorized securely using Aicoo protocol keys.
          </p>
        </div>
      </div>
    </div>
  );
}

// Reusable micro-components
function IconBadge({ icon: Icon, color }: { icon: React.ComponentType<any>; color: string }) {
  return (
    <div className={`p-2.5 rounded-xl border ${color} shadow-sm shrink-0`}>
      <Icon className="w-5 h-5" />
    </div>
  );
}

interface InventoryItemProps {
  name: string;
  qty: string;
  status: string;
}

function InventoryItem({ name, qty, status }: InventoryItemProps) {
  return (
    <div className="flex justify-between items-center p-3 bg-cream border border-charcoal/5 rounded-xl shadow-xs">
      <div>
        <h4 className="text-xs font-bold text-charcoal">{name}</h4>
        <span className="text-[9px] text-charcoal/40 font-semibold">{status}</span>
      </div>
      <span className="text-[10px] font-syne font-extrabold uppercase bg-charcoal/5 text-charcoal px-2 py-0.5 rounded">
        {qty}
      </span>
    </div>
  );
}
