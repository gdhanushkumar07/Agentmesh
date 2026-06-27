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
  badge?: string; // Optional badge details
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  steps: ScenarioStep[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: "delayed-shipment",
    name: "Scenario 1: Delayed Shipment",
    description: "Customer cargo is delayed. Procurement, Supplier, Warehouse, Finance, and Shipping Agents coordinate to resolve logistics and update ETA.",
    steps: [
      {
        stepIndex: 0,
        source: "customer",
        target: "support",
        action: "Customer submits delayed shipment dispute for order ORD-551.",
        apiCallName: "POST /api/v1/init",
        apiCallMethod: "POST",
        apiCallPath: "/init",
        payload: { workspace: "vendorflow_mesh" },
        glowNode: "support",
        pulseType: "message",
        badge: "Shipment delayed"
      },
      {
        stepIndex: 1,
        source: "support",
        target: "support",
        action: "Procurement Agent analyzes dispute context using Aicoo Chat.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Verify shipping delay ORD-551" },
        glowNode: "support",
        pulseType: "context",
        badge: "💾 Read Context"
      },
      {
        stepIndex: 2,
        source: "support",
        target: "partner",
        action: "Procurement Agent creates folder-scoped share link for external Supplier Agent.",
        apiCallName: "POST /api/v1/share/create",
        apiCallMethod: "POST",
        apiCallPath: "/share/create",
        payload: { scope: "folders", folderIds: [2], label: "Supplier shipment log context", access: "read" },
        glowNode: "partner",
        pulseType: "share",
        badge: "🔐 Created secure context for Supplier Agent"
      },
      {
        stepIndex: 3,
        source: "partner",
        target: "partner",
        action: "Supplier Agent checks inventory status and saves logs in Aicoo memory store.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Billing/shipment-status.md", content: "Shipment delayed due to freight limits." }] },
        glowNode: "partner",
        pulseType: "context",
        badge: "💾 Shipment status stored in shared memory"
      },
      {
        stepIndex: 4,
        source: "partner",
        target: "billing",
        action: "Supplier Agent forwards billing invoice verified checks to Finance Agent.",
        apiCallName: "POST /api/v1/tools (send_message)",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "send_message_to_human", params: { recipient: "finance" } },
        glowNode: "billing",
        pulseType: "message",
        badge: "Invoice verified"
      },
      {
        stepIndex: 5,
        source: "billing",
        target: "operations",
        action: "Finance Agent clears payment and requests Shipping Agent to reroute cargo.",
        apiCallName: "POST /api/v1/tools (execute)",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "execute_route_change", params: { route: "Express Air" } },
        glowNode: "operations",
        pulseType: "message",
        badge: "Delivery rerouted"
      },
      {
        stepIndex: 6,
        source: "operations",
        target: "ceo",
        action: "Shipping Agent reroutes shipping path, notifies Customer Agent, and generates briefing summary.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: { timeDuration: "last 24h" },
        glowNode: "ceo",
        pulseType: "complete",
        badge: "Generated procurement summary"
      }
    ]
  },
  {
    id: "damaged-goods",
    name: "Scenario 2: Damaged Goods Claim",
    description: "Warehouse Agent flags broken freight cargo. Insurance and Finance Agents coordinate claim validation and customer credit.",
    steps: [
      {
        stepIndex: 0,
        source: "devops",
        target: "legal",
        action: "Warehouse Agent logs broken cargo incident report to Insurance Agent.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Warehouse/incident.md", content: "Freight damaged on arrival" }] },
        glowNode: "legal",
        pulseType: "context",
        badge: "Damaged cargo logged"
      },
      {
        stepIndex: 1,
        source: "legal",
        target: "legal",
        action: "Insurance Agent audits policy coverage rules using Aicoo Chat.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Verify transit damage policy parameters" },
        glowNode: "legal",
        pulseType: "context",
        badge: "Policy checked"
      },
      {
        stepIndex: 2,
        source: "legal",
        target: "billing",
        action: "Insurance Agent approves claim payouts and posts adjustment to Finance Agent.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Billing/credit.md", content: "Insurance claim approved" }] },
        glowNode: "billing",
        pulseType: "message",
        badge: "Claim approved"
      },
      {
        stepIndex: 3,
        source: "billing",
        target: "customer",
        action: "Finance Agent refunds customer account and generates handoff briefing.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: { summary: "Customer account credited $500 for transit damage." },
        glowNode: "customer",
        pulseType: "complete",
        badge: "Customer credited"
      }
    ]
  },
  {
    id: "invoice-dispute",
    name: "Scenario 3: Invoice Dispute",
    description: "Supplier flags billing surcharge discrepancies. Finance and Procurement coordinate rate resolutions.",
    steps: [
      {
        stepIndex: 0,
        source: "partner",
        target: "billing",
        action: "Supplier Agent flags invoice surcharge dispute on INV-990.",
        apiCallName: "POST /api/v1/init",
        apiCallMethod: "POST",
        apiCallPath: "/init",
        payload: {},
        glowNode: "billing",
        pulseType: "message",
        badge: "Dispute INV-990"
      },
      {
        stepIndex: 1,
        source: "billing",
        target: "billing",
        action: "Finance Agent audits contract pricing guidelines.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Verify invoice surcharge guidelines" },
        glowNode: "billing",
        pulseType: "context",
        badge: "Audit contract"
      },
      {
        stepIndex: 2,
        source: "billing",
        target: "support",
        action: "Finance Agent requests rate verification details from Procurement Agent.",
        apiCallName: "POST /api/v1/tools",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "query_rates", params: { invoiceId: "INV-990" } },
        glowNode: "support",
        pulseType: "message",
        badge: "Query rates"
      },
      {
        stepIndex: 3,
        source: "support",
        target: "billing",
        action: "Procurement confirms carriage rates exception and writes ledger resolution.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Billing/resolution.md", content: "INV-990 rate correction applied." }] },
        glowNode: "billing",
        pulseType: "message",
        badge: "Resolved & synced"
      }
    ]
  },
  {
    id: "customs-delay",
    name: "Scenario 4: Customs Delay",
    description: "Shipping Agent detects customs clearance hold. Alerts Insurance and Procurement to trigger updates.",
    steps: [
      {
        stepIndex: 0,
        source: "operations",
        target: "legal",
        action: "Shipping Agent flags cargo customs clearance hold, alerting Insurance Agent.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Legal/customs.md", content: "Cargo held at port." }] },
        glowNode: "legal",
        pulseType: "context",
        badge: "Customs hold"
      },
      {
        stepIndex: 1,
        source: "legal",
        target: "support",
        action: "Insurance Agent generates risk briefing summary for Procurement Agent.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: {},
        glowNode: "support",
        pulseType: "message",
        badge: "Risk briefed"
      },
      {
        stepIndex: 2,
        source: "support",
        target: "partner",
        action: "Procurement Agent generates scoped folder share link requesting custom forms from Supplier.",
        apiCallName: "POST /api/v1/share/create",
        apiCallMethod: "POST",
        apiCallPath: "/share/create",
        payload: { scope: "folders", folderIds: [2], access: "write" },
        glowNode: "partner",
        pulseType: "share",
        badge: "🔐 Request forms"
      }
    ]
  },
  {
    id: "supplier-capacity",
    name: "Scenario 5: Supplier Capacity Issue",
    description: "Procurement scans supplier forecast levels, writing warnings to CEO briefing lists.",
    steps: [
      {
        stepIndex: 0,
        source: "support",
        target: "partner",
        action: "Procurement Agent scans supplier capability forecasts for next quarter.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Analyze supplier capacity parameters" },
        glowNode: "partner",
        pulseType: "message",
        badge: "Query capacity"
      },
      {
        stepIndex: 1,
        source: "partner",
        target: "partner",
        action: "Supplier Agent saves updated capacity spreadsheets in memory folder.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { files: [{ path: "Partner/forecast.md", content: "Production capacity limited." }] },
        glowNode: "partner",
        pulseType: "context",
        badge: "Forecast updated"
      },
      {
        stepIndex: 2,
        source: "partner",
        target: "ceo",
        action: "Supplier Agent escalates capacity shortage alerts to CEO matrix.",
        apiCallName: "POST /api/v1/briefing/matrix",
        apiCallMethod: "POST",
        apiCallPath: "/briefing/matrix",
        payload: { q1: ["Supplier capacity shortage warning"] },
        glowNode: "ceo",
        pulseType: "complete",
        badge: "Shortage alert"
      }
    ]
  },
  {
    id: "insurance-claim",
    name: "Scenario 6: Insurance Claim",
    description: "Customer submits cargo damage claims. Insurance Agent audits limits and drafts payouts.",
    steps: [
      {
        stepIndex: 0,
        source: "customer",
        target: "legal",
        action: "Customer submits cargo loss damage claim.",
        apiCallName: "POST /api/v1/init",
        apiCallMethod: "POST",
        apiCallPath: "/init",
        payload: {},
        glowNode: "legal",
        pulseType: "message",
        badge: "Loss Claim"
      },
      {
        stepIndex: 1,
        source: "legal",
        target: "billing",
        action: "Insurance Agent verifies policy coverage limits with Finance Agent.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Audit policy claim threshold values" },
        glowNode: "billing",
        pulseType: "message",
        badge: "Policy verified"
      },
      {
        stepIndex: 2,
        source: "billing",
        target: "customer",
        action: "Finance Agent drafts compensation credit and compiles briefing summary.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: {},
        glowNode: "customer",
        pulseType: "complete",
        badge: "Payout drafted"
      }
    ]
  }
];
