// src/components/SellerConsole.tsx
"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, Landmark, DollarSign, ShoppingCart, Package, 
  AlertTriangle, Users, CheckCircle2, Play, EyeOff, Lock 
} from "lucide-react";

interface SellerConsoleProps {
  onFulfillOrder: (productId: string, quantity: number) => void;
  onBack: () => void;
}

export default function SellerConsole({ onFulfillOrder, onBack }: SellerConsoleProps) {
  const [activeSubTab, setActiveSubTab] = useState<'dashboard' | 'inventory' | 'customers'>('dashboard');
  const [showFulfillWarning, setShowFulfillWarning] = useState(false);
  const [isFulfilling, setIsFulfilling] = useState(false);

  // Incoming Orders
  const orders = [
    { id: "ORD-9081", customer: "John Smith", product: "Sony WH-1000XM6 Headphones", qty: 2, date: "Today", status: "Deficit Pending", priority: "High", isLowStock: true, prodId: "sony-xm6" },
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
    { name: "John Smith", orders: 4, lifetimeValue: 1280.50, lastPurchase: "Today", tier: "Gold", status: "Active Order" },
    { name: "Emily Johnson", orders: 12, lifetimeValue: 4320.00, lastPurchase: "Yesterday", tier: "Platinum", status: "Idle" },
    { name: "David Brown", orders: 2, lifetimeValue: 2199.98, lastPurchase: "Yesterday", tier: "Bronze", status: "Active Order" },
    { name: "Sophia Lee", orders: 7, lifetimeValue: 1450.20, lastPurchase: "2 Days Ago", tier: "Gold", status: "Active Order" },
    { name: "Marcus Davis", orders: 1, lifetimeValue: 99.99, lastPurchase: "1 Week Ago", tier: "Bronze", status: "Idle" }
  ];

  const handleFulfillClick = (order: typeof orders[0]) => {
    if (order.isLowStock) {
      setShowFulfillWarning(true);
    } else {
      // Normal checkout/fulfillment
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
              Customer John Smith requested <strong>2 units</strong> of Sony WH-1000XM6 Headphones. 
              Our inventory records show only <strong>1 unit remaining</strong> in our primary warehouse.
            </p>

            <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-xl space-y-1 text-[10px]">
              <div className="font-bold uppercase text-charcoal/50">Auto-Mitigation Protocol Available:</div>
              <p className="text-charcoal/75 leading-relaxed font-semibold">
                VendorFlow can coordinate with <strong>Seller Beta (Audio Store)</strong> automatically through Aicoo to share backup stock securely without revealing our pricing algorithms or private customer lists.
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

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-cream border border-charcoal/10 px-5 py-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 border border-charcoal/10 rounded-xl hover:bg-charcoal/5 transition-all"
            title="Back to portal selector"
          >
            <ArrowLeft className="w-4 h-4 text-charcoal" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-yellow/10 p-1.5 rounded-lg border border-yellow/20 text-yellow-dark">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">Partner Console</h3>
              <p className="text-[10px] text-charcoal/50 font-semibold uppercase">Seller Alpha Perspective</p>
            </div>
          </div>
        </div>

        {/* Console navigation */}
        <div className="flex bg-charcoal/5 border border-charcoal/10 p-1 rounded-xl text-[10px] font-syne font-bold uppercase select-none w-full sm:w-auto">
          <button
            onClick={() => setActiveSubTab('dashboard')}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'dashboard' ? 'bg-cream text-charcoal shadow-xs' : 'text-charcoal/50 hover:bg-charcoal/5'
            }`}
          >
            Summary & Orders
          </button>
          <button
            onClick={() => setActiveSubTab('inventory')}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'inventory' ? 'bg-cream text-charcoal shadow-xs' : 'text-charcoal/50 hover:bg-charcoal/5'
            }`}
          >
            Inventory Manager
          </button>
          <button
            onClick={() => setActiveSubTab('customers')}
            className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-lg transition-all ${
              activeSubTab === 'customers' ? 'bg-cream text-charcoal shadow-xs' : 'text-charcoal/50 hover:bg-charcoal/5'
            }`}
          >
            Customer CRM
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      {activeSubTab === 'dashboard' ? (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Today's Revenue", value: "$12,480.00", desc: "+8.2% from yesterday", icon: DollarSign, color: "text-green-600" },
              { label: "Orders Received", value: "34", desc: "4 pending routing", icon: ShoppingCart, color: "text-charcoal" },
              { label: "Products Listed", value: "24 Items", desc: "10 categories active", icon: Package, color: "text-charcoal" },
              { label: "Low Stock Alerts", value: "3 Units", desc: "Requires B2B reserves", icon: AlertTriangle, color: "text-yellow-dark" }
            ].map((card, idx) => {
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

          {/* Incoming Customer Orders Table */}
          <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
              <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
                Orders Received
              </span>
              <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Incoming Customer Orders</h4>
            </div>

            <div className="overflow-x-auto">
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
            </div>
          </div>
        </div>
      ) : activeSubTab === 'inventory' ? (
        /* Inventory Table */
        <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex justify-between items-center border-b border-charcoal/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
                Products Listed
              </span>
              <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Fulfillment Inventory Catalog</h4>
            </div>
            <div className="text-[9px] font-bold text-charcoal/45 uppercase flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Isolated Database (Private)</span>
            </div>
          </div>

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
                    <td className="py-3.5 pr-4 flex items-center gap-1.5">
                      <span className={item.stock <= 4 ? "text-yellow-dark font-extrabold" : "text-charcoal/70"}>
                        {item.stock} Units
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 font-mono">${item.price.toFixed(2)}</td>
                    <td className="py-3.5 pr-4">{item.sold} Units</td>
                    <td className="py-3.5 text-right">
                      <span className={`text-[8px] font-syne font-extrabold uppercase px-2 py-0.5 rounded border ${
                        item.status === "In Stock" 
                          ? "bg-green-50 text-green-700 border-green-200" 
                          : item.status === "Low Stock" 
                            ? "bg-yellow/20 text-yellow-dark border-yellow/30" 
                            : item.status === "Out of Stock"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : "bg-charcoal/10 text-charcoal/60 border-charcoal/20"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* CRM List */
        <div className="bg-cream border border-charcoal/10 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3">
            <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">
              CRM Records
            </span>
            <h4 className="font-syne text-[10px] uppercase font-bold text-charcoal">Customer Directory Records</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-charcoal/10 text-[9px] font-syne uppercase text-charcoal/40 font-bold">
                  <th className="pb-3 pr-4">Customer Name</th>
                  <th className="pb-3 pr-4">Orders Placed</th>
                  <th className="pb-3 pr-4">Lifetime Value</th>
                  <th className="pb-3 pr-4">Last Purchase</th>
                  <th className="pb-3 pr-4">Customer Tier</th>
                  <th className="pb-3 text-right">Active Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5 font-semibold text-charcoal/80">
                {customers.map((cust, idx) => (
                  <tr key={idx} className="hover:bg-charcoal/5 transition-all">
                    <td className="py-3.5 pr-4 font-bold">{cust.name}</td>
                    <td className="py-3.5 pr-4">{cust.orders}</td>
                    <td className="py-3.5 pr-4 font-mono">${cust.lifetimeValue.toFixed(2)}</td>
                    <td className="py-3.5 pr-4 text-charcoal/60">{cust.lastPurchase}</td>
                    <td className="py-3.5 pr-4">
                      <span className={`text-[8px] font-syne font-extrabold uppercase px-1.5 py-0.5 rounded ${
                        cust.tier === "Platinum" ? "bg-purple-100 text-purple-700" : "bg-yellow/20 text-yellow-dark"
                      }`}>
                        {cust.tier}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <span className={`text-[8px] font-syne font-extrabold uppercase px-2 py-0.5 rounded border ${
                        cust.status === "Active Order" 
                          ? "bg-yellow/10 text-yellow-dark border-yellow/20 animate-pulse" 
                          : "bg-charcoal/5 text-charcoal/40 border-charcoal/10"
                      }`}>
                        {cust.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Secure isolation notice */}
      <div className="p-4 bg-charcoal/5 border border-charcoal/10 rounded-2xl flex gap-3 items-start max-w-2xl mx-auto shadow-xs">
        <EyeOff className="w-5 h-5 text-charcoal/40 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-[10px] font-syne uppercase font-bold text-charcoal">Scoped Permission Enforcement</h4>
          <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold">
            Seller Alpha cannot inspect other suppliers' inventories, payment gateways, or liability underwriters directly. This console behaves as a private silo, coordinating securely through Aicoo on demand.
          </p>
        </div>
      </div>

    </div>
  );
}
