// src/lib/scenarios.ts

export interface ScenarioStep {
  stepIndex: number;
  source: string; // node id
  target: string; // node id
  action: string; // Description of the step
  apiCallName: string; // Endpoint name for the log
  apiCallMethod: 'POST' | 'GET' | 'DELETE';
  apiCallPath: string;
  payload: any;
  glowNode: string; // Node to glow
  pulseType: 'message' | 'context' | 'share' | 'revoke' | 'complete';
  badge?: string; // Optional badge details (e.g. "🔐 Scoped", "💾 Sync")
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  steps: ScenarioStep[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: "refund",
    name: "Scenario 1: Customer Refund Dispute",
    description: "Autonomously escalates customer issue through Support, Billing, and Legal agents, writing persistent context at each stage.",
    steps: [
      {
        stepIndex: 0,
        source: "customer",
        target: "support",
        action: "Customer submits a refund dispute for subscription invoice INV-8822.",
        apiCallName: "POST /api/v1/init",
        apiCallMethod: "POST",
        apiCallPath: "/init",
        payload: { workspace: "customer_mesh" },
        glowNode: "support",
        pulseType: "message",
        badge: "Incoming Dispute"
      },
      {
        stepIndex: 1,
        source: "support",
        target: "support",
        action: "Support Agent reads context and reasons using Aicoo Chat.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Triage refund request for INV-8822." },
        glowNode: "support",
        pulseType: "context",
        badge: "💾 Read Context"
      },
      {
        stepIndex: 2,
        source: "support",
        target: "billing",
        action: "Support Agent escalates to Billing Agent due to high dollar value threshold.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Support/escalation.md", content: "Escalated high refund INV-8822" }] },
        glowNode: "billing",
        pulseType: "message",
        badge: "💾 Escalated"
      },
      {
        stepIndex: 3,
        source: "billing",
        target: "billing",
        action: "Billing Agent verifies invoice in Stripe context and writes account history.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Billing/verification.md", content: "Invoice paid 14 days ago" }] },
        glowNode: "billing",
        pulseType: "context",
        badge: "💾 Stripe Checked"
      },
      {
        stepIndex: 4,
        source: "billing",
        target: "legal",
        action: "Billing Agent forwards compliance checks to Legal Agent.",
        apiCallName: "POST /api/v1/tools (send_message)",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "send_message_to_human", params: { recipient: "legal" } },
        glowNode: "legal",
        pulseType: "message",
        badge: "Forward Legal"
      },
      {
        stepIndex: 5,
        source: "legal",
        target: "legal",
        action: "Legal Agent checks refund terms and creates escalation briefing for CEO approval.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: { timeDuration: "last 24h" },
        glowNode: "ceo",
        pulseType: "context",
        badge: "📋 Briefing Generated"
      },
      {
        stepIndex: 6,
        source: "legal",
        target: "ceo",
        action: "Briefing and Q1-Q4 Eisenhower Priority Matrix shared with CEO dashboard.",
        apiCallName: "POST /api/v1/briefing/matrix",
        apiCallMethod: "POST",
        apiCallPath: "/briefing/matrix",
        payload: { q1: ["High Value Refund Approval"] },
        glowNode: "ceo",
        pulseType: "complete",
        badge: "⚠️ Action Required"
      }
    ]
  },
  {
    id: "cross-company",
    name: "Scenario 2: Cross-Company Coordination",
    description: "Billing Agent coordinates with an external Partner Agent by generating a folder-scoped share link and auto-revoking it upon resolution.",
    steps: [
      {
        stepIndex: 0,
        source: "billing",
        target: "billing",
        action: "Billing Agent identifies partner-related discrepancy in shipping costs.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Billing/discrepancy.md", content: "Shipping fee mismatch" }] },
        glowNode: "billing",
        pulseType: "context",
        badge: "💾 Log Issue"
      },
      {
        stepIndex: 1,
        source: "billing",
        target: "partner",
        action: "Billing Agent generates a read-only share link scoped to `/Billing` folder only.",
        apiCallName: "POST /api/v1/share/create",
        apiCallMethod: "POST",
        apiCallPath: "/share/create",
        payload: { scope: "folders", folderIds: [2], access: "read", expiresIn: "7d" },
        glowNode: "partner",
        pulseType: "share",
        badge: "🔐 /Billing Scoped"
      },
      {
        stepIndex: 2,
        source: "partner",
        target: "partner",
        action: "Partner Agent accesses shared billing folder and matches shipment data.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Check billing folder files for discrepancy" },
        glowNode: "partner",
        pulseType: "context",
        badge: "💾 Read Shared Files"
      },
      {
        stepIndex: 3,
        source: "partner",
        target: "billing",
        action: "Partner Agent resolves discrepancy and submits shipping correction.",
        apiCallName: "POST /api/v1/tools (send_message)",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "send_message_to_human", params: { text: "Discrepancy resolved, credited $50." } },
        glowNode: "billing",
        pulseType: "message",
        badge: "Resolved & Closed"
      },
      {
        stepIndex: 4,
        source: "billing",
        target: "partner",
        action: "Billing Agent auto-revokes the share link immediately to secure context.",
        apiCallName: "DELETE /api/v1/share/{id}",
        apiCallMethod: "DELETE",
        apiCallPath: "/share/link_abc789",
        payload: {},
        glowNode: "billing",
        pulseType: "revoke",
        badge: "🚫 Link Revoked"
      }
    ]
  },
  {
    id: "devops",
    name: "Scenario 3: DevOps Incident & Operations Control",
    description: "DevOps Agent automatically detects service anomalies, scaling infrastructure using Operations, and notifies CEO.",
    steps: [
      {
        stepIndex: 0,
        source: "devops",
        target: "devops",
        action: "DevOps monitor triggers alarm: database API latency spike > 500ms.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "DevOps/incident-81.md", content: "Latency spike alert" }] },
        glowNode: "devops",
        pulseType: "context",
        badge: "🚨 Alert Triggered"
      },
      {
        stepIndex: 1,
        source: "devops",
        target: "operations",
        action: "DevOps Agent requests Operations Agent to spin up auxiliary container replicas.",
        apiCallName: "POST /api/v1/tools (search_pulse_contact)",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "search_pulse_contact", params: { query: "operations agent" } },
        glowNode: "operations",
        pulseType: "message",
        badge: "Request Scaling"
      },
      {
        stepIndex: 2,
        source: "operations",
        target: "operations",
        action: "Operations Agent triggers deploy scripts and scales replicas from 3 to 6.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Operations/scaling.md", content: "Scaled replicas to 6" }] },
        glowNode: "operations",
        pulseType: "context",
        badge: "💾 scaled +3"
      },
      {
        stepIndex: 3,
        source: "operations",
        target: "devops",
        action: "Operations Agent confirms scaling complete. DevOps Agent verifies latency stabilizes.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Re-run latency check." },
        glowNode: "devops",
        pulseType: "message",
        badge: "Verify Recovery"
      },
      {
        stepIndex: 4,
        source: "devops",
        target: "ceo",
        action: "DevOps logs incident summary to CEO's briefing folder.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "CEO/incident-summary.md", content: "Incident-81 resolved in 4m20s" }] },
        glowNode: "ceo",
        pulseType: "complete",
        badge: "💾 Log CEO Summary"
      }
    ]
  }
];
