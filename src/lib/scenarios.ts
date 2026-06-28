// src/lib/scenarios.ts

export interface ScenarioStep {
  stepIndex: number;
  source: string; // node ID of the sender Agent
  target: string; // node ID of the receiver Agent
  senderOrg: string; // organization name (e.g. "Buyer Company")
  senderAgent: string; // agent name (e.g. "Procurement Agent")
  receiverOrg: string; // organization name (e.g. "Supplier Alpha")
  receiverAgent: string; // agent name (e.g. "Sales Agent")
  dialogue: string; // AI dialogue message
  capability: 'Identity' | 'Routing' | 'Context Share' | 'Permission' | 'Briefing' | 'Heartbeat';
  reason: string; // why the task moved
  action: string; 
  narration: string;
  apiCallName: string;
  apiCallMethod: 'POST' | 'GET' | 'DELETE';
  apiCallPath: string;
  payload: any;
  glowNode: string;
  pulseType: 'message' | 'context' | 'share' | 'revoke' | 'complete';
  badge?: string;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  steps: ScenarioStep[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: "headphones-order-fulfillment",
    name: "Sony WH-1000XM6 Headphones Order Coordination",
    description: "Coordination network resolves 2x Sony Headphones order by failover routing from offline Seller Alpha to backup Seller Beta.",
    steps: [
      {
        stepIndex: 0,
        source: "customer",
        target: "support",
        senderOrg: "Customer Portal",
        senderAgent: "Customer Client",
        receiverOrg: "Marketplace Platform",
        receiverAgent: "Marketplace Order Agent",
        dialogue: "Submitting order: 2x Sony WH-1000XM6 Noise Canceling Headphones ($799.98).",
        capability: "Identity",
        reason: "Customer clicks Buy Now",
        action: "Customer submits headphones order request.",
        narration: "Headphones order submitted. Marketplace Order Agent registers Aicoo transaction workspace.",
        apiCallName: "POST /api/v1/init",
        apiCallMethod: "POST",
        apiCallPath: "/init",
        payload: { order: "Sony-WH6-2x", qty: 2 },
        glowNode: "support",
        pulseType: "message",
        badge: "Order Submitted"
      },
      {
        stepIndex: 1,
        source: "support",
        target: "partner",
        senderOrg: "Marketplace Platform",
        senderAgent: "Marketplace Order Agent",
        receiverOrg: "Seller Alpha (Sound Outlet)",
        receiverAgent: "Seller Inventory Agent",
        dialogue: "Verifying headphones stock levels. Sharing scoped delivery address logs.",
        capability: "Context Share",
        reason: "Primary stock check",
        action: "Marketplace Order Agent requests stock levels from Seller Alpha.",
        narration: "Marketplace Order Agent requests stock levels from Seller Alpha Sound Outlet, sharing read-only delivery context.",
        apiCallName: "POST /api/v1/share/create",
        apiCallMethod: "POST",
        apiCallPath: "/share/create",
        payload: { scope: "folders", folderIds: [2], label: "Headphones delivery scope" },
        glowNode: "partner",
        pulseType: "share",
        badge: "Query Alpha"
      },
      {
        stepIndex: 2,
        source: "partner",
        target: "support",
        senderOrg: "Seller Alpha (Sound Outlet)",
        senderAgent: "Seller Inventory Agent",
        receiverOrg: "Marketplace Platform",
        receiverAgent: "Marketplace Order Agent",
        dialogue: "Partial fulfillment warning: Only 1 unit of Sony WH-1000XM6 is currently in stock.",
        capability: "Routing",
        reason: "Alpha stock deficit",
        action: "Seller Alpha reports stock limit of 1 unit.",
        narration: "Seller Alpha reports stock deficit (only 1 unit available). Marketplace Order Agent searches backup inventory.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { stock: 1 },
        glowNode: "support",
        pulseType: "message",
        badge: "1 Unit Available"
      },
      {
        stepIndex: 3,
        source: "partner",
        target: "partner",
        senderOrg: "Seller Alpha (Sound Outlet)",
        senderAgent: "Seller Inventory Agent",
        receiverOrg: "Seller Alpha (Sound Outlet)",
        receiverAgent: "Seller Inventory Agent",
        dialogue: "Primary Connection Timeout. Aicoo Heartbeat detected inactivity on Seller Alpha.",
        capability: "Heartbeat",
        reason: "Seller Alpha offline",
        action: "Aicoo Heartbeat monitor logs outage warning.",
        narration: "Aicoo Heartbeat monitor detects timeout on primary Seller Alpha. Marketplace Order Agent triggers failover routing.",
        apiCallName: "GET /api/v1/context/status",
        apiCallMethod: "GET",
        apiCallPath: "/context/status",
        payload: {},
        glowNode: "partner",
        pulseType: "revoke",
        badge: "ALPHA OUTAGE"
      },
      {
        stepIndex: 4,
        source: "support",
        target: "ceo",
        senderOrg: "Marketplace Platform",
        senderAgent: "Marketplace Order Agent",
        receiverOrg: "Seller Beta (Audio Store)",
        receiverAgent: "Seller Inventory Agent 2",
        dialogue: "Deficit of 2 units. Requesting headphones reservation from backup Seller Beta.",
        capability: "Context Share",
        reason: "Backup stock check",
        action: "Marketplace Order Agent queries backup Seller Beta for 2 headphones.",
        narration: "Marketplace Order Agent requests stock allocation from backup Seller Beta Audio Store.",
        apiCallName: "POST /api/v1/share/create",
        apiCallMethod: "POST",
        apiCallPath: "/share/create",
        payload: { scope: "folders", folderIds: [3], label: "Backup delivery logs" },
        glowNode: "ceo",
        pulseType: "share",
        badge: "Query Beta"
      },
      {
        stepIndex: 5,
        source: "ceo",
        target: "support",
        senderOrg: "Seller Beta (Audio Store)",
        senderAgent: "Seller Inventory Agent 2",
        receiverOrg: "Marketplace Platform",
        receiverAgent: "Marketplace Order Agent",
        dialogue: "Inventory check complete: 2 units of Sony WH-1000XM6 reserved at Chicago hub.",
        capability: "Routing",
        reason: "Beta stock confirmed",
        action: "Seller Beta reserves 2 headphones.",
        narration: "Seller Beta reserves 2 headphones at Chicago hub, routing confirmation back.",
        apiCallName: "POST /api/v1/accumulate",
        apiCallMethod: "POST",
        apiCallPath: "/accumulate",
        payload: { reserved: 2 },
        glowNode: "support",
        pulseType: "message",
        badge: "2 Reserved"
      },
      {
        stepIndex: 6,
        source: "support",
        target: "devops",
        senderOrg: "Marketplace Platform",
        senderAgent: "Marketplace Order Agent",
        receiverOrg: "Fulfillment Hub",
        receiverAgent: "Warehouse Agent",
        dialogue: "Stock secured. Authorizing express packing lane slot allocation.",
        capability: "Permission",
        reason: "Fulfillment prep",
        action: "Marketplace Order Agent authorizes packing lane reservation.",
        narration: "Marketplace Order Agent grants Warehouse Agent tools to reserve express packing lane.",
        apiCallName: "POST /api/v1/tools",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "reserve_packing_lane", params: { lane: 4 } },
        glowNode: "devops",
        pulseType: "message",
        badge: "Lane Reserved"
      },
      {
        stepIndex: 7,
        source: "devops",
        target: "operations",
        senderOrg: "Fulfillment Hub",
        senderAgent: "Warehouse Agent",
        receiverOrg: "Logistics Carrier",
        receiverAgent: "Logistics Agent",
        dialogue: "Headphones packed. Requesting express courier dispatch scheduling.",
        capability: "Routing",
        reason: "Logistics routing",
        action: "Warehouse Agent requests express shipment dispatch.",
        narration: "Warehouse Agent coordinates express shipment scheduling with Logistics Agent.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Schedule express courier dispatch" },
        glowNode: "operations",
        pulseType: "context",
        badge: "Carrier Booked"
      },
      {
        stepIndex: 8,
        source: "operations",
        target: "legal",
        senderOrg: "Logistics Carrier",
        senderAgent: "Logistics Agent",
        receiverOrg: "Asset Insurance",
        receiverAgent: "Insurance Agent",
        dialogue: "Consolidated dispatch booked. Requesting transit cargo coverage clearance.",
        capability: "Routing",
        reason: "Insurance underwriting",
        action: "Logistics Agent requests cargo coverage clearance.",
        narration: "Logistics Agent requests cargo transit liability coverage from Insurance Agent.",
        apiCallName: "POST /api/v1/chat",
        apiCallMethod: "POST",
        apiCallPath: "/chat",
        payload: { message: "Underwrite headphones transit insurance" },
        glowNode: "legal",
        pulseType: "context",
        badge: "Insurance Req"
      },
      {
        stepIndex: 9,
        source: "legal",
        target: "billing",
        senderOrg: "Asset Insurance",
        senderAgent: "Insurance Agent",
        receiverOrg: "Marketplace Platform",
        receiverAgent: "Payment Agent",
        dialogue: "Transit insurance policy cleared. Releasing order funds verification.",
        capability: "Permission",
        reason: "Authorize payment capture",
        action: "Insurance Agent clears cargo policy, releasing payment capture tool.",
        narration: "Insurance Agent approves transit policy, authorizing Payment Agent to execute payment capture.",
        apiCallName: "POST /api/v1/tools",
        apiCallMethod: "POST",
        apiCallPath: "/tools",
        payload: { tool: "release_payment_capture", params: { amount: 799.98 } },
        glowNode: "billing",
        pulseType: "complete",
        badge: "Payment Verified"
      },
      {
        stepIndex: 10,
        source: "billing",
        target: "customer",
        senderOrg: "Marketplace Platform",
        senderAgent: "Payment Agent",
        receiverOrg: "Customer Portal",
        receiverAgent: "Customer Client",
        dialogue: "Transaction capture verified. Shipping labels generated. Headphones scheduled for dispatch.",
        capability: "Briefing",
        reason: "Fulfillment confirmation",
        action: "Payment Agent clears order transaction and updates customer timeline.",
        narration: "Payment Agent verifies transaction. Customer Client notified of shipping label generation.",
        apiCallName: "POST /api/v1/briefing",
        apiCallMethod: "POST",
        apiCallPath: "/briefing",
        payload: { summary: "2x Sony WH-1000XM6 Headphones cleared for dispatch." },
        glowNode: "customer",
        pulseType: "complete",
        badge: "Fulfillment Confirmed"
      }
    ]
  }
];
