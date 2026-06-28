// src/components/OrgSelector.tsx
"use client";

import React from "react";
import { 
  Building2, Globe, Truck, ShieldCheck, Warehouse, CreditCard, ArrowRight
} from "lucide-react";

export interface OrgDetails {
  id: string;
  name: string;
  industry: string;
  description: string;
  role: string;
  responsibilities: string[];
  color: string;
  bgLight: string;
  borderCol: string;
  icon: React.ComponentType<any>;
}

export const ORGANIZATIONS: OrgDetails[] = [
  {
    id: "buyer",
    name: "Buyer Company",
    industry: "Manufacturing & Retail",
    role: "Procurement & Finance Desk",
    description: "Sourcing enterprise components, managing invoice auditing, scheduling bulk fulfillment requests.",
    responsibilities: [
      "Submit high-volume B2B orders",
      "Coordinate routing pathways via Aicoo",
      "Approve high-value compliance briefings"
    ],
    color: "text-charcoal",
    bgLight: "bg-charcoal/5",
    borderCol: "border-charcoal/15",
    icon: Building2
  },
  {
    id: "alpha",
    name: "Supplier Alpha",
    industry: "Raw Material Fabrication",
    role: "Primary Supply Partner",
    description: "Evaluates buyer RFQs, shares temporary catalog listings, and manages manufacturing allocations.",
    responsibilities: [
      "Receive incoming procurement inquires",
      "Securely share scoped inventory details",
      "Approve invoice terms through Aicoo"
    ],
    color: "text-yellow-dark",
    bgLight: "bg-yellow/10",
    borderCol: "border-yellow/20",
    icon: Globe
  },
  {
    id: "beta",
    name: "Supplier Beta",
    industry: "Heavy Component Reserves",
    role: "Backup Sourcing Network",
    description: "Monitors failover requests and reserves alternative material stock buffers during primary supplier outages.",
    responsibilities: [
      "Maintain active buffer reserves",
      "Resolve backup sourcing requests",
      "Synchronize inventory checks in real time"
    ],
    color: "text-purple-600",
    bgLight: "bg-purple-50",
    borderCol: "border-purple-200",
    icon: Warehouse
  },
  {
    id: "logistics",
    name: "Logistics Company",
    industry: "Global Transit & Delivery",
    role: "Consolidation & Fleet Routing",
    description: "Receives dispatch directives, optimizes carrier shipping routes, and schedules transit timelines.",
    responsibilities: [
      "Formulate consolidated transit plans",
      "Book express priority carriers",
      "Route real-time dispatch milestones"
    ],
    color: "text-blue-600",
    bgLight: "bg-blue-50",
    borderCol: "border-blue-200",
    icon: Truck
  },
  {
    id: "insurance",
    name: "Insurance Company",
    industry: "Corporate Asset Protection",
    role: "Risk & Coverage Underwriting",
    description: "Assesses B2B shipping liability risks, writes custom transit policies, and clears cargo coverage.",
    responsibilities: [
      "Assess transit liability risk",
      "Generate custom coverage policies",
      "Verify and clear cargo dispatches"
    ],
    color: "text-orange-600",
    bgLight: "bg-orange-50",
    borderCol: "border-orange-200",
    icon: ShieldCheck
  },
  {
    id: "warehouse",
    name: "Warehouse Company",
    industry: "Smart Storage & Packing",
    role: "Smart Packing & Dispatch Slots",
    description: "Manages cargo packing lanes, reserves loading docks, and schedules dispatch timing gates.",
    responsibilities: [
      "Reserve express packing slots",
      "Verify loading dock capacities",
      "Issue cargo dispatch confirmations"
    ],
    color: "text-cyan-600",
    bgLight: "bg-cyan-50",
    borderCol: "border-cyan-200",
    icon: Warehouse
  }
];

interface OrgSelectorProps {
  onSelect: (orgId: string) => void;
}

export default function OrgSelector({ onSelect }: OrgSelectorProps) {
  return (
    <div className="space-y-10 py-8 animate-in fade-in duration-300 max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-3 py-1 rounded-full border border-yellow/20 inline-block font-bold">
          Aicoo Protocol Portal
        </span>
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
          Select Your Organization Perspective
        </h2>
        <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
          VendorFlow enables independent AI Agents to coordinate workflows across business boundaries. Choose an organization below to experience its authorized dashboard and data scope.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ORGANIZATIONS.map((org) => {
          const Icon = org.icon;
          return (
            <button
              key={org.id}
              onClick={() => onSelect(org.id)}
              className="flex flex-col text-left bg-cream border border-charcoal/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-charcoal/20 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-dark/20"
            >
              {/* Icon & Industry */}
              <div className="flex justify-between items-start w-full">
                <div className={`p-3 rounded-xl ${org.bgLight} ${org.borderCol} border ${org.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono bg-charcoal/5 px-2 py-0.5 rounded font-bold text-charcoal/40 uppercase">
                  {org.industry}
                </span>
              </div>

              {/* Title & Role */}
              <div className="mt-5 space-y-1">
                <h3 className="font-syne text-sm uppercase font-extrabold text-charcoal group-hover:text-yellow-dark transition-colors">
                  {org.name}
                </h3>
                <span className="text-[10px] font-syne font-bold uppercase text-charcoal/55 block">
                  {org.role}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs text-charcoal/60 leading-relaxed font-medium flex-1">
                {org.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-4 pt-4 border-t border-charcoal/5 w-full">
                <span className="text-[9px] font-syne uppercase text-charcoal/40 font-extrabold block mb-2">
                  Key Agent Scopes:
                </span>
                <ul className="space-y-1 text-[10px] text-charcoal/65 font-semibold list-disc list-inside">
                  {org.responsibilities.map((resp, idx) => (
                    <li key={idx} className="truncate">{resp}</li>
                  ))}
                </ul>
              </div>

              {/* CTA arrow */}
              <div className="mt-6 flex items-center gap-1.5 text-[10px] font-syne font-extrabold uppercase tracking-wider text-charcoal group-hover:text-yellow-dark transition-colors">
                <span>View Console</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
