// src/app/agent/[type]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { 
  Headphones, CreditCard, Scale, Cpu, Settings, Globe, 
  ChevronLeft, Folder, FileText, ArrowRight, ShieldCheck, Terminal 
} from "lucide-react";
import Link from "next/link";

interface AgentConfig {
  name: string;
  role: string;
  icon: React.ComponentType<any>;
  color: string;
  prompt: string;
  primaryTool: string;
  files: { name: string; path: string; content: string }[];
}

const AGENT_DATA: Record<string, AgentConfig> = {
  support: {
    name: "Support Agent",
    role: "Initial customer triage, ticket analysis, and request routing.",
    icon: Headphones,
    color: "bg-charcoal text-cream border-charcoal/15",
    primaryTool: "search_pulse_contact",
    prompt: "You are the Support Agent. Your role is to examine incoming customer disputes, parse active contract logs in the `/Support` directory, check billing compliance thresholds, and route requests to Legal or Billing departments using the tools provided.",
    files: [
      { name: "escalation.md", path: "Support/escalation.md", content: "# Escalation Memo\n\n**Invoice**: INV-8822\n**Amount**: $1,200.00\n**Reason**: Customer disputing annual charge. High threshold limits. Routing to Billing Agent for Stripe check." },
      { name: "terms.md", path: "Support/terms.md", content: "# Support SLA Guidelines\n\nStandard response times: 15 minutes for Q1. For refunds over $500, escalate directly to Billing." }
    ]
  },
  billing: {
    name: "Billing Agent",
    role: "Financial auditing, invoice clearance, and ledger matching.",
    icon: CreditCard,
    color: "bg-yellow text-charcoal border-yellow-dark",
    primaryTool: "send_message_to_human",
    prompt: "You are the Billing Agent. Your role is to reconcile internal ledger discrepancies, verify charges in Stripe databases, generate folder-scoped sharing credentials to let external partners audit financial logs safely, and revoke links once closed.",
    files: [
      { name: "verification.md", path: "Billing/verification.md", content: "# Stripe Payment Verification\n\n**Invoice ID**: INV-8822\n**Status**: Succeeded\n**Paid At**: 14 Days Ago\n**Review**: The customer has not utilized premium credits. Billing policy permits refunds within 30 days." },
      { name: "discrepancy.md", path: "Billing/discrepancy.md", content: "# Discrepancy Log\n\nDiscrepancy of shipping fees matching invoice surcharge and Partner carrier billing log. Generating scoped folder-access for Partner Agent." }
    ]
  },
  legal: {
    name: "Legal Agent",
    role: "Compliance audit, risk analysis, and priority briefings.",
    icon: Scale,
    color: "bg-charcoal text-cream border-charcoal/15",
    primaryTool: "generateBriefing",
    prompt: "You are the Legal Agent. Your role is to verify refund compliance parameters, analyze contractual risks of cancellations, generate comprehensive briefing dossiers for Human portal reviews, and build Q1-Q4 Eisenhower Priority matrices.",
    files: [
      { name: "refund-policy.md", path: "Legal/refund-policy.md", content: "# Refund Policy & Compliance Guidelines\n\nRefunds for annual subscriptions processed between 14-30 days are subject to standard cancellation penalties, unless waived by the executive office." }
    ]
  },
  devops: {
    name: "DevOps Agent",
    role: "Server telemetry, telemetry monitoring, and auto-scaling triggers.",
    icon: Cpu,
    color: "bg-charcoal text-cream border-charcoal/15",
    primaryTool: "search_pulse_contact",
    prompt: "You are the DevOps Agent. Monitor container replica health. If database API latencies spike above 500ms, immediately identify the Operations Agent, request additional container replication, and log resolution metrics.",
    files: [
      { name: "incident-81.md", path: "DevOps/incident-81.md", content: "# DevOps Incident Log\n\n**Trigger**: API Latency > 500ms\n**Incident Status**: Critical\n**Action**: Routing scaling request to Operations Agent." },
      { name: "incident-summary.md", path: "DevOps/incident-summary.md", content: "# Post-Mortem incident-81\n\n**Anomalous Latency Duration**: 4m20s\n**Resolution**: Scaled auxiliary database container replicas from 3 to 6. Verified latency stabilized at 82ms." }
    ]
  },
  operations: {
    name: "Operations Agent",
    role: "Infrastructure automation and scaling script controllers.",
    icon: Settings,
    color: "bg-charcoal text-cream border-charcoal/15",
    primaryTool: "executeTool",
    prompt: "You are the Operations Agent. Execute server replica orchestration. When DevOps signals high resource congestion, initiate auto-scaling deploy scripts, update live configuration templates, and notify support teams.",
    files: [
      { name: "scaling.md", path: "Operations/scaling.md", content: "# Container Scaling Script log\n\n**Action**: Replica increment +3\n**Script**: deploy-containers.sh\n**Result**: Container state verified healthy. All nodes synchronized." }
    ]
  },
  partner: {
    name: "Partner Agent",
    role: "External carrier reconciliation and shared folder auditing.",
    icon: Globe,
    color: "bg-yellow text-charcoal border-yellow-dark",
    primaryTool: "send_message_to_human",
    prompt: "You are the Partner Agent representing an external transport carrier. Your role is to access shared billing folder links securely, cross-reference invoice items against your internal carrier logs, and report corrections.",
    files: [
      { name: "carrier-logs.md", path: "Partner/carrier-logs.md", content: "# Carrier Shipping Surcharge Sheets\n\nFreight shipment invoice matching surcharge code FC-992. Billing discrepancies resolved by adjusting freight credits." }
    ]
  }
};

export default function AgentPage() {
  const router = useRouter();
  const params = useParams();
  const type = (params?.type as string)?.toLowerCase();
  
  const [agent, setAgent] = useState<AgentConfig | null>(null);
  const [selectedFile, setSelectedFile] = useState<{ name: string; content: string } | null>(null);

  useEffect(() => {
    if (type && AGENT_DATA[type]) {
      setAgent(AGENT_DATA[type]);
      setSelectedFile(AGENT_DATA[type].files[0] || null);
    }
  }, [type]);

  if (!agent) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <p className="font-syne text-xs uppercase font-bold text-red-500">Agent Workspace Not Found</p>
          <Link href="/network" className="mt-4 text-xs font-syne font-bold uppercase underline">Return to Topology</Link>
        </div>
      </div>
    );
  }

  const AgentIcon = agent.icon;

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Agent Identity & System Prompt (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <button
            onClick={() => router.push("/network")}
            className="flex items-center gap-1.5 text-xs font-syne font-bold uppercase text-charcoal/60 hover:text-charcoal transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Network</span>
          </button>

          {/* S-10: Agent Card */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex justify-between items-start p-6 bg-cream-dark/20 border-b border-charcoal/10">
              <div className="space-y-1">
                <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">S-10</span>
                <h2 className="font-syne text-sm font-bold uppercase tracking-wide text-charcoal">{agent.name} Workspace</h2>
                <p className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">Aicoo Node Identifier</p>
              </div>
              <div className={`p-3.5 rounded-2xl border ${agent.color}`}>
                <AgentIcon className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal/50 tracking-wider mb-1">Primary Role</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed font-semibold">{agent.role}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal/50 tracking-wider mb-1">Primary Tool Bridge</h4>
                <code className="text-xs bg-charcoal/5 px-2 py-0.5 rounded font-mono font-bold text-yellow-dark">
                  {agent.primaryTool}()
                </code>
              </div>

              <div>
                <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal/50 tracking-wider mb-1.5">System Prompt / Instructions</h4>
                <div className="bg-charcoal/5 p-4 rounded-xl border border-charcoal/5 text-[11px] leading-relaxed text-charcoal/75 font-medium">
                  {agent.prompt}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Local Context File Explorer (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[460px]">
            {/* File List Pane */}
            <div className="w-full md:w-56 border-b md:border-b-0 md:border-r border-charcoal/10 p-4 space-y-3 shrink-0">
              <div className="flex items-center gap-2 text-xs font-syne uppercase font-bold text-charcoal/50 pb-2 border-b border-charcoal/10">
                <Folder className="w-4 h-4" />
                <span>Context Folder</span>
              </div>
              
              <div className="space-y-1">
                {agent.files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFile(file)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                      selectedFile?.name === file.name
                        ? "bg-charcoal text-cream font-bold"
                        : "text-charcoal/70 hover:bg-charcoal/5"
                    }`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* File Viewer Pane */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              {selectedFile ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-charcoal/10 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-charcoal/40" />
                      <span className="text-xs font-mono font-bold text-charcoal">{selectedFile.name}</span>
                    </div>
                    <span className="text-[9px] font-syne font-bold uppercase bg-yellow/15 text-yellow-dark border border-yellow/20 px-2 py-0.5 rounded">
                      💾 Aicoo Sync Active
                    </span>
                  </div>

                  <div className="bg-cream-dark/20 p-5 rounded-xl border border-charcoal/5 text-xs text-charcoal font-mono leading-relaxed whitespace-pre-wrap max-h-[300px] overflow-y-auto">
                    {selectedFile.content}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-charcoal/30 py-12 text-center my-auto">
                  <FileText className="w-8 h-8 opacity-25 mb-1.5" />
                  <p className="font-syne text-xs uppercase font-bold tracking-wider">Empty Directory</p>
                </div>
              )}

              <div className="border-t border-charcoal/10 pt-4 flex justify-between items-center text-[10px] text-charcoal/40 font-bold uppercase tracking-wider mt-6">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Isolated Memory Store</span>
                </div>
                <span>Workspace: {type}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
