// src/components/SellerConsole.tsx
"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, Landmark, DollarSign, ShoppingCart, Package, 
  AlertTriangle, Users, CheckCircle2, Play, EyeOff, Lock, 
  ShieldCheck, Truck, ShieldAlert, FileText, Activity, Coins 
} from "lucide-react";

interface SellerConsoleProps {
  onFulfillOrder: (productId: string, quantity: number) => void;
  onBack: () => void;
  partnerDetails?: {
    companyName: string;
    companyEmail: string;
    businessId: string;
    organizationRole: string;
    location: string;
    contactPerson: string;
  };
}

export default function SellerConsole({ onFulfillOrder, onBack, partnerDetails }: SellerConsoleProps) {
  const company = partnerDetails?.companyName || "Alpha Electronics";
  const role = partnerDetails?.organizationRole || "Seller";
  const location = partnerDetails?.location || "Chicago Hub";
  const businessId = partnerDetails?.businessId || "BIZ-9081";
  const contact = partnerDetails?.contactPerson || "Rajesh Kumar";

  const [activeSubTab, setActiveSubTab] = useState<string>("default");
  const [showFulfillWarning, setShowFulfillWarning] = useState(false);
  const [isFulfilling, setIsFulfilling] = useState(false);
  const [blockedEndpointName, setBlockedEndpointName] = useState<string | null>(null);

  // Incoming Orders (Seller Alpha)
  const orders = [
    { id: "ORD-9081", customer: "Rahul Sharma", product: "Sony WH-1000XM6 Headphones", qty: 2, date: "Today", status: "Deficit Pending", priority: "High", isLowStock: true, prodId: "sony-xm6" },
    { id: "ORD-9079", customer: "Emily Johnson", product: "MacBook Pro 16-inch M3 Max", qty: 1, date: "Yesterday", status: "Delivered", priority: "Medium", isLowStock: false, prodId: "macbook-pro-16" },
    { id: "ORD-9078", customer: "David Brown", product: "Samsung Odyssey G9 49\" Curved Monitor", qty: 1, date: "Yesterday", status: "Ready for Dispatch", priority: "High", isLowStock: false, prodId: "odyssey-g9" },
    { id: "ORD-9076", customer: "Sophia Lee", product: "Keychron Q1 Pro Mechanical Keyboard", qty: 3, date: "2 Days Ago", status: "Inventory Verification", priority: "Low", isLowStock: false, prodId: "keychron-q1" }
  ];

  // Inventory list
  const inventoryItems = [
    { name: "Sony WH-1000XM6 Headphones", stock: 1, price: 399.99, sold: 142, status: "Low Stock" },
    { name: "Samsung Odyssey G9 Monitor", stock: 4, price: 1099.99, sold: 48, status: "Low Stock" },
    { name: "MacBook Pro 16-inch M3 Max", stock: 25, price: 2499.00, sold: 19, status: "In Stock" },
    { name: "Logitech MX Master 3S Mouse", stock: 84, price: 99.99, sold: 341, status: "In Stock" },
    { name: "WD_BLACK 2TB NVMe SSD", stock: 0, price: 149.99, sold: 180, status: "Out of Stock" },
    { name: "Sony Alpha 7 IV Camera", stock: 0, price: 2498.00, sold: 11, status: "Restocking" },
    { name: "Keychron Q1 Pro Keyboard", stock: 12, price: 199.99, sold: 90, status: "Reserved" }
  ];

  // Customer List (CRM)
  const customers = [
    { name: "Rahul Sharma", orders: 4, lifetimeValue: 1280.50, lastPurchase: "Today", tier: "Gold", status: "Active Order" },
    { name: "Emily Johnson", orders: 12, lifetimeValue: 4320.00, lastPurchase: "Yesterday", tier: "Platinum", status: "Idle" },
    { name: "David Brown", orders: 2, lifetimeValue: 2199.98, lastPurchase: "Yesterday", tier: "Bronze", status: "Active Order" },
    { name: "Sophia Lee", orders: 7, lifetimeValue: 1450.20, lastPurchase: "2 Days Ago", tier: "Gold", status: "Active Order" }
  ];

  // Custom UI content maps based on role
  const getRoleTheme = () => {
    switch (role) {
      case "Warehouse":
        return {
          metrics: [
            { label: "Storage Used", value: "88.4%", desc: "Aisle A-D active", icon: Package, color: "text-charcoal" },
            { label: "Dispatch Backlog", value: "14 Orders", desc: "4 courier queues", icon: ShoppingCart, color: "text-yellow-dark" },
            { label: "Fulfillment SLA", value: "99.8%", desc: "Avg packing 6.2m", icon: CheckCircle2, color: "text-green-600" },
            { label: "Restock Triggers", value: "2 Items", desc: "Requires B2B reserves", icon: AlertTriangle, color: "text-red-500" }
          ],
          tabs: ["Stock Operations", "Dispatch Queue", "Carrier Handovers"],
          allowed: ["Warehouse Stock", "Fulfillment Backlog", "Shipments", "Warehouse Requests"],
          blocked: ["Customer Payment Info", "Seller Revenue Stats", "Carrier Fleet Routing", "Other Seller Stock"]
        };
      case "Courier":
        return {
          metrics: [
            { label: "Active Fleet", value: "94.2%", desc: "24 logistics lanes", icon: Truck, color: "text-green-600" },
            { label: "Cargo Shipments", value: "18 Active", desc: "6 delivery slots today", icon: Package, color: "text-charcoal" },
            { label: "Delay Alerts", value: "1 Port", desc: "Freight limit limit", icon: AlertTriangle, color: "text-yellow-dark" },
            { label: "Total Lanes", value: "8 Routes", desc: "B2B shipping scope", icon: Landmark, color: "text-charcoal" }
          ],
          tabs: ["Fleet & Routes", "Cargo Shipments", "Receipt Sign-offs"],
          allowed: ["Pickups", "Deliveries", "Active Routes", "Transit Timings"],
          blocked: ["Supplier Inventory DB", "Seller Revenue Stats", "Customer Payment Info", "Insurance Database"]
        };
      case "Insurance":
        return {
          metrics: [
            { label: "Risk Value Covered", value: "$1.25M", desc: "OpenRelay transactions", icon: DollarSign, color: "text-green-600" },
            { label: "Claims Open", value: "2 Pending", desc: "Requires transit verification", icon: AlertTriangle, color: "text-yellow-dark" },
            { label: "Active Policies", value: "142 Policies", desc: "Cargo transit cover", icon: ShieldCheck, color: "text-charcoal" },
            { label: "Premium Volume", value: "$4,210 Today", desc: "Real-time coverage", icon: Coins, color: "text-charcoal" }
          ],
          tabs: ["Claims Registry", "Risk Underwriting", "Policy Coverages"],
          allowed: ["Insurance Claims", "Transit Risk Models", "Policy Ledger", "B2B Active Shipments"],
          blocked: ["Seller Stock Level", "Warehouse Shelving Plans", "Customer Card Details", "Platform Payout Ledger"]
        };
      case "Marketplace":
        return {
          metrics: [
            { label: "Gross Merch Value", value: "$42,105", desc: "+12% this week", icon: DollarSign, color: "text-green-600" },
            { label: "Session Handshakes", value: "1,280/m", desc: "Active API triggers", icon: Activity, color: "text-charcoal" },
            { label: "Sellers Enrolled", value: "18 Sellers", desc: "Cross-organization mesh", icon: Users, color: "text-charcoal" },
            { label: "Disputed Orders", value: "1 Pending", desc: "Timeout failover checks", icon: AlertTriangle, color: "text-yellow-dark" }
          ],
          tabs: ["Marketplace Overview", "Seller Registries", "Transaction Audits"],
          allowed: ["Platform Orders", "Active Users", "Transactions", "Broker Audits"],
          blocked: ["Private Supplier Stock", "Insurance Underwriting API", "Warehouse Stock Locations", "Courier Dispatch Log"]
        };
      case "Finance":
        return {
          metrics: [
            { label: "Escrow Balance", value: "$89,200", desc: "B2B trade clearance", icon: DollarSign, color: "text-green-600" },
            { label: "Net Profits Today", value: "$4,120", desc: "Service rate fee cuts", icon: Coins, color: "text-charcoal" },
            { label: "Pending Payouts", value: "3 Escrows", desc: "Awaiting SLA handshakes", icon: AlertTriangle, color: "text-yellow-dark" },
            { label: "Verification Rate", value: "100.0%", desc: "No ledger errors", icon: CheckCircle2, color: "text-green-600" }
          ],
          tabs: ["Escrow Settlement", "Fee Ledger", "Payout Channels"],
          allowed: ["Platform Revenue", "Settlements", "Pending Payments", "Trade Ledgers"],
          blocked: ["Warehouse Stock Details", "Carrier Route Plans", "Supplier Markup Margins", "Insurance Policy Risks"]
        };
      case "Seller":
      default:
        return {
          metrics: [
            { label: "Today's Revenue", value: "$12,480.00", desc: "+8.2% from yesterday", icon: DollarSign, color: "text-green-600" },
            { label: "Orders Received", value: "34", desc: "4 pending routing", icon: ShoppingCart, color: "text-charcoal" },
            { label: "Products Listed", value: "24 Items", desc: "10 categories active", icon: Package, color: "text-charcoal" },
            { label: "Low Stock Alerts", value: "3 Units", desc: "Requires B2B reserves", icon: AlertTriangle, color: "text-yellow-dark" }
          ],
          tabs: ["Summary & Orders", "Inventory Manager", "Customer CRM"],
          allowed: ["Orders", "Inventory", "Revenue", "Low Stock", "Warehouse Requests"],
          blocked: ["Customer Payment Methods", "Other Seller Inventory", "Courier Internal Systems", "Insurance Databases"]
        };
    }
  };

  const currentTheme = getRoleTheme();

  const handleFulfillClick = (order: typeof orders[0]) => {
    if (order.isLowStock) {
      setShowFulfillWarning(true);
    } else {
      // Normal checkout
      onFulfillOrder(order.prodId, order.qty);
    }
  };

  const confirmFulfillFailover = () => {
    setShowFulfillWarning(false);
    setIsFulfilling(true);
    setTimeout(() => {
      setIsFulfilling(false);
      onFulfillOrder("sony-xm6", 2);
    }, 2800);
  };

  return (
    <div className="space-y-6 relative">
      
      {/* Failover overlay transitions */}
      {isFulfilling && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream/98 backdrop-blur-md text-center py-20 px-6 animate-in fade-in duration-300">
          <div className="w-12 h-12 border-4 border-yellow-dark border-t-transparent rounded-full animate-spin mb-6"></div>
          <div className="space-y-3 max-w-md">
            <h3 className="font-syne text-sm uppercase font-extrabold text-charcoal tracking-wide">
              Initiating Aicoo Sourcing Failover
            </h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-semibold">
              Primary warehouse has 1 unit, deficit of 1 unit detected. Requesting secure stock shares from Seller Beta.
            </p>
            <p className="text-[11px] font-syne uppercase tracking-wider text-yellow-dark font-extrabold animate-pulse pt-4">
              Routing coordination steps through Aicoo Protocol...
            </p>
          </div>
        </div>
      )}

      {/* Outage Sourcing Alert Warning Dialog */}
      {showFulfillWarning && (
        <div className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-cream border border-charcoal/15 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 text-charcoal font-semibold">
            <div className="flex items-center gap-2.5 text-yellow-dark border-b border-charcoal/5 pb-4">
              <AlertTriangle className="w-8 h-8 animate-pulse shrink-0" />
              <div>
                <h3 className="font-syne text-sm uppercase font-extrabold text-charcoal">Fulfillment Exception Detected</h3>
                <span className="text-[9px] text-charcoal/40 uppercase font-bold">Seller Inventory Agent Report</span>
              </div>
            </div>

            <p className="text-xs text-charcoal/70 leading-relaxed font-semibold">
              Customer Rahul Sharma requested <strong>2 units</strong> of Sony WH-1000XM6 Headphones. 
              Our inventory records show only <strong>1 unit remaining</strong> in our primary warehouse.
            </p>

            <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-xl space-y-1 text-[10px]">
              <div className="font-bold uppercase text-charcoal/50">Auto-Mitigation Protocol Available:</div>
              <p className="text-charcoal/75 leading-relaxed font-semibold">
                OpenRelay can coordinate with <strong>Seller Beta (Audio Store)</strong> automatically through Aicoo to share backup stock securely without revealing our pricing algorithms or private customer lists.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowFulfillWarning(false)}
                className="flex-1 py-3 border border-charcoal/10 hover:bg-charcoal/5 rounded-xl text-[10px] font-syne font-bold uppercase text-charcoal transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmFulfillFailover}
                className="flex-1 py-3 bg-yellow hover:bg-yellow-dark text-charcoal rounded-xl text-[10px] font-syne font-bold uppercase border border-yellow-dark transition-all flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Resolve via Aicoo</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Aicoo Access Denied Security Modal */}
      {blockedEndpointName && (
        <div className="fixed inset-0 z-40 bg-charcoal/45 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-cream border border-red-200 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 text-charcoal font-semibold text-center">
            <div className="w-14 h-14 bg-red-50 text-red-650 rounded-2xl flex items-center justify-center border border-red-150 mx-auto animate-bounce">
              <Lock className="w-7 h-7" />
            </div>
            
            <div className="space-y-1.5">
              <h3 className="font-syne text-sm uppercase font-extrabold text-red-800">Aicoo Context Shield Active</h3>
              <p className="text-[10px] text-charcoal/50 uppercase font-bold tracking-wider">Access Denied by Protocol Policies</p>
            </div>

            <p className="text-xs text-charcoal/65 leading-relaxed font-semibold px-2">
              Your identity scope as <strong>{company} ({role})</strong> does not hold permission keys to read or write to the private endpoint: <span className="font-mono text-red-700 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">{blockedEndpointName}</span>.
            </p>

            <div className="p-3.5 bg-charcoal text-cream rounded-xl space-y-1 text-left font-mono text-[9px] border border-white/5">
              <div className="text-yellow font-bold uppercase">Aicoo System Log:</div>
              <div className="text-white/60">SOURCE_IDENTITY: {businessId}</div>
              <div className="text-white/60">ROLE_SCOPE: {role}</div>
              <div className="text-white/60">ACTION_REJECTED: Context-sharing denied</div>
            </div>

            <button
              onClick={() => setBlockedEndpointName(null)}
              className="w-full py-3 bg-charcoal hover:bg-charcoal/90 text-cream rounded-xl text-[10px] font-syne font-bold uppercase transition-all shadow-md"
            >
              Close Shield Audit
            </button>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-cream border border-charcoal/10 px-5 py-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 border border-charcoal/10 rounded-xl hover:bg-charcoal/5 transition-all"
            title="Back to onboarding identity selection"
          >
            <ArrowLeft className="w-4 h-4 text-charcoal" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-yellow/10 p-1.5 rounded-lg border border-yellow/20 text-yellow-dark">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">{company}</h3>
              <p className="text-[10px] text-charcoal/50 font-semibold uppercase">{role} Console ({location})</p>
            </div>
          </div>
        </div>

        {/* Console navigation (Adaptive based on Selected Role) */}
        <div className="flex bg-charcoal/5 border border-charcoal/10 p-1 rounded-xl text-[10px] font-syne font-bold uppercase select-none w-full sm:w-auto">
          {currentTheme.tabs.map((tabName, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubTab(idx === 0 ? "default" : tabName.toLowerCase())}
              className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg transition-all ${
                (activeSubTab === "default" && idx === 0) || activeSubTab === tabName.toLowerCase()
                  ? 'bg-cream text-charcoal shadow-xs' 
                  : 'text-charcoal/50 hover:bg-charcoal/5'
              }`}
            >
              {tabName}
            </button>
          ))}
        </div>
      </div>

      {/* Split Layout: Dashboard Main vs Permissions Scope Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-6">
          {activeSubTab === 'default' ? (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentTheme.metrics.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div key={idx} className="bg-cream border border-charcoal/10 rounded-2xl p-4 space-y-2 shadow-sm">
                      <div className="flex justify-between items-center text-charcoal/40">
                        <span className="text-[9px] font-syne uppercase font-bold">{card.label}</span>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className={`font-syne text-sm font-extrabold uppercase ${card.color}`}>{card.value}</h3>
                        <p className="text-[9px] text-charcoal/50 font-semibold">{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Core Table View (Simulates primary role workflow task) */}
              <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
                  <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
                    Active Operations Queue
                  </span>
                  <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Requisitions En-route</h4>
                </div>

                <div className="overflow-x-auto">
                  {role === "Seller" ? (
                    /* Default Seller Order Table */
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-charcoal/10 text-[9px] font-syne uppercase text-charcoal/40 font-bold">
                          <th className="pb-3 pr-4">Order ID</th>
                          <th className="pb-3 pr-4">Customer Name</th>
                          <th className="pb-3 pr-4">Product</th>
                          <th className="pb-3 pr-4">Qty</th>
                          <th className="pb-3 pr-4">Status</th>
                          <th className="pb-3 pr-4">Priority</th>
                          <th className="pb-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-charcoal/5 font-semibold text-charcoal/80">
                        {orders.map(order => (
                          <tr key={order.id} className="hover:bg-charcoal/5 transition-all">
                            <td className="py-3.5 pr-4 font-mono text-[10px] text-charcoal/55">{order.id}</td>
                            <td className="py-3.5 pr-4">{order.customer}</td>
                            <td className="py-3.5 pr-4 flex items-center gap-1.5">
                              {order.isLowStock && <AlertTriangle className="w-3.5 h-3.5 text-yellow-dark shrink-0 animate-pulse" />}
                              <span>{order.product}</span>
                            </td>
                            <td className="py-3.5 pr-4">{order.qty}</td>
                            <td className="py-3.5 pr-4">
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                                order.status === "Delivered" 
                                  ? "bg-green-50 text-green-700 border-green-200" 
                                  : order.status === "Deficit Pending"
                                    ? "bg-yellow/10 text-yellow-dark border-yellow/20"
                                    : "bg-charcoal/5 text-charcoal/60 border-charcoal/10"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3.5 pr-4">
                              <span className={`text-[9px] uppercase font-bold ${
                                order.priority === "High" ? "text-red-600" : "text-charcoal/50"
                              }`}>{order.priority}</span>
                            </td>
                            <td className="py-3.5 text-right">
                              <button
                                onClick={() => handleFulfillClick(order)}
                                className={`px-3 py-1.5 rounded-lg text-[9px] font-syne font-bold uppercase border transition-all ${
                                  order.status === "Delivered" 
                                    ? "bg-charcoal/5 text-charcoal/30 border-charcoal/5 cursor-not-allowed" 
                                    : "bg-charcoal text-cream border-charcoal hover:bg-charcoal/90"
                                }`}
                                disabled={order.status === "Delivered"}
                              >
                                {order.isLowStock ? "Resolve Outage" : "Fulfill Order"}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    /* Other Roles Queue Simulator */
                    <div className="py-8 space-y-4">
                      <p className="text-xs text-charcoal/65 leading-relaxed font-semibold">
                        A B2B Requisition order has been submitted by buyer client <strong>Rahul Sharma</strong>. This organization is participating in the checkout fulfillment workflow coordinated by Aicoo.
                      </p>
                      
                      <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-xl flex items-center justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                          <span className="text-[8px] font-mono bg-yellow/25 border border-yellow-dark/30 text-yellow-dark px-2 py-0.5 rounded uppercase font-bold">
                            Workflow Action Required
                          </span>
                          <h4 className="font-syne text-xs uppercase font-extrabold text-charcoal mt-1">
                            {role === "Warehouse" ? "Reserve Deficit Inventory Allocation" :
                             role === "Courier" ? "Verify Courier Dispatch SLA" :
                             role === "Insurance" ? "Approve High-Value Surcharge Coverage" :
                             role === "Marketplace" ? "Audit Cross-Company Protocol Logs" :
                             "Sign Escrow Contract Settlement"}
                          </h4>
                          <p className="text-[10.5px] text-charcoal/60 font-semibold leading-normal">
                            Coordinating 2x Sony WH-1000XM6 Headphones ($799.98) route from Beta Audio to {location}.
                          </p>
                        </div>
                        
                        <button
                          onClick={() => onFulfillOrder("sony-xm6", 2)}
                          className="px-5 py-3.5 bg-yellow hover:bg-yellow-dark text-charcoal border border-yellow-dark rounded-xl text-[10px] font-syne font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Trigger Coordinated Flow</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Subtabs Render generic permitted lists */
            <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-charcoal/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
                    System Registry
                  </span>
                  <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Details Listing</h4>
                </div>
                <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Aicoo Access Approved</span>
                </span>
              </div>

              {activeSubTab.includes("inventory") || activeSubTab.includes("stock") ? (
                /* Inventory listing */
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-charcoal/10 text-[9px] font-syne uppercase text-charcoal/40 font-bold">
                        <th className="pb-3 pr-4">Product Name</th>
                        <th className="pb-3 pr-4">Available Stock</th>
                        <th className="pb-3 pr-4">Sales Price</th>
                        <th className="pb-3 pr-4">Total Sales</th>
                        <th className="pb-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/5 font-semibold text-charcoal/80">
                      {inventoryItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-charcoal/5 transition-all">
                          <td className="py-3.5 pr-4 font-bold">{item.name}</td>
                          <td className="py-3.5 pr-4">{item.stock} Units</td>
                          <td className="py-3.5 pr-4 font-mono">${item.price.toFixed(2)}</td>
                          <td className="py-3.5 pr-4">{item.sold} Units</td>
                          <td className="py-3.5 text-right">
                            <span className="text-[8px] font-syne font-extrabold uppercase bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : activeSubTab.includes("crm") || activeSubTab.includes("customer") ? (
                /* CRM records */
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-charcoal/10 text-[9px] font-syne uppercase text-charcoal/40 font-bold">
                        <th className="pb-3 pr-4">Customer Name</th>
                        <th className="pb-3 pr-4">Orders Placed</th>
                        <th className="pb-3 pr-4">Lifetime Value</th>
                        <th className="pb-3 pr-4">Last Purchase</th>
                        <th className="pb-3 text-right">Customer Tier</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/5 font-semibold text-charcoal/80">
                      {customers.map((cust, idx) => (
                        <tr key={idx} className="hover:bg-charcoal/5 transition-all">
                          <td className="py-3.5 pr-4 font-bold">{cust.name}</td>
                          <td className="py-3.5 pr-4">{cust.orders}</td>
                          <td className="py-3.5 pr-4 font-mono">${cust.lifetimeValue.toFixed(2)}</td>
                          <td className="py-3.5 pr-4 text-charcoal/60">{cust.lastPurchase}</td>
                          <td className="py-3.5 text-right">
                            <span className="text-[8px] font-syne font-extrabold uppercase bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                              {cust.tier}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* Generic list placeholder */
                <div className="py-12 text-center text-charcoal/50 space-y-2">
                  <FileText className="w-10 h-10 text-charcoal/20 mx-auto" />
                  <p className="text-xs uppercase font-extrabold text-charcoal">Encrypted Registry View</p>
                  <p className="text-[10px] text-charcoal/60 leading-normal max-w-sm mx-auto">
                    Aicoo dynamically grants write-access to this subtab based on your active partner authorization tokens. Data is encrypted at rest.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar: Profile & Context Shield Widget */}
        <div className="lg:col-span-3 space-y-6">
          {/* Corporate Profile Card */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
              <span className="text-[9px] font-syne uppercase font-bold text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded-full font-bold">Profile</span>
              <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Corporate ID</h4>
            </div>

            <div className="space-y-3.5 text-[10px] font-semibold text-charcoal/80 leading-normal">
              <div>
                <span className="text-[8px] text-charcoal/45 font-bold uppercase block">Company Name:</span>
                <span className="font-bold text-charcoal">{company}</span>
              </div>
              <div>
                <span className="text-[8px] text-charcoal/45 font-bold uppercase block">Business ID:</span>
                <span className="font-mono text-charcoal">{businessId}</span>
              </div>
              <div>
                <span className="text-[8px] text-charcoal/45 font-bold uppercase block">Org Role:</span>
                <span className="font-bold text-yellow-dark">{role}</span>
              </div>
              <div>
                <span className="text-[8px] text-charcoal/45 font-bold uppercase block">Contact Person:</span>
                <span className="font-bold text-charcoal">{contact}</span>
              </div>
            </div>
          </div>

          {/* Context Isolation Demonstration Widget */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-1.5 text-yellow-dark border-b border-charcoal/10 pb-3">
              <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
              <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Context Shield</h4>
            </div>

            <p className="text-[9.5px] text-charcoal/60 leading-relaxed font-semibold">
              Demonstrates security isolation. Under this role, only specific paths are authorized.
            </p>

            <div className="space-y-3.5 pt-1 text-[9px] font-semibold uppercase">
              {/* Permitted Views */}
              <div className="space-y-1.5">
                <span className="text-[8px] text-green-700 font-bold tracking-wider block">✓ Authorized Scope</span>
                <div className="flex flex-col gap-1">
                  {currentTheme.allowed.map((view, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-green-700 bg-green-50 px-2.5 py-1 rounded border border-green-100 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{view}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Forbidden Views */}
              <div className="space-y-1.5 pt-1.5">
                <span className="text-[8px] text-red-750 font-bold tracking-wider block">✗ Isolated boundary (Forbidden)</span>
                <div className="flex flex-col gap-1">
                  {currentTheme.blocked.map((view, idx) => (
                    <button
                      key={idx}
                      onClick={() => setBlockedEndpointName(view)}
                      className="flex items-center justify-between text-left gap-2 text-red-700 bg-red-50/50 hover:bg-red-50 px-2.5 py-1 rounded border border-red-100/50 font-bold hover:border-red-200 transition-all group"
                      title="Click to simulate unauthorized request"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Lock className="w-3.5 h-3.5 shrink-0 text-red-750" />
                        <span className="truncate">{view}</span>
                      </div>
                      <span className="text-[7.5px] bg-red-650 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Simulate</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Secure isolation notice */}
      <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-2xl flex gap-3 items-start max-w-2xl mx-auto shadow-xs">
        <EyeOff className="w-5 h-5 text-charcoal/40 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal">Context Isolation Protection</h4>
          <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold">
            Neither {company} nor other participants expose raw ERP interfaces. All cross-organization workflow handshakes are brokered by **Aicoo's cryptographically scoped session boundaries**.
          </p>
        </div>
      </div>

    </div>
  );
}
