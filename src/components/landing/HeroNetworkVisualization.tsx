// src/components/landing/HeroNetworkVisualization.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Building2, ShoppingCart, ShieldCheck, Truck, Warehouse, 
  CreditCard, Shield, RefreshCw, CheckCircle2, Zap, ArrowRight, Lock
} from "lucide-react";

interface Node {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  x: number; // percentage
  y: number; // percentage
  color: string;
  badge?: string;
}

const NODES: Node[] = [
  { id: "buyer", name: "Buyer Company", role: "Procurement Agent", icon: Building2, x: 15, y: 22, color: "from-blue-600 to-indigo-600" },
  { id: "marketplace", name: "Marketplace", role: "Order Gateway", icon: ShoppingCart, x: 48, y: 18, color: "from-amber-500 to-yellow-500" },
  { id: "alpha", name: "Supplier Alpha", role: "Primary Stock", icon: ShieldCheck, x: 82, y: 22, color: "from-emerald-600 to-teal-600" },
  { id: "beta", name: "Supplier Beta", role: "Failover Stock", icon: RefreshCw, x: 82, y: 52, color: "from-purple-600 to-indigo-600" },
  { id: "warehouse", name: "Warehouse", role: "Storage Agent", icon: Warehouse, x: 50, y: 52, color: "from-orange-500 to-amber-600" },
  { id: "courier", name: "Courier", role: "Logistics Agent", icon: Truck, x: 18, y: 54, color: "from-cyan-600 to-blue-600" },
  { id: "finance", name: "Finance", role: "Billing Agent", icon: CreditCard, x: 30, y: 82, color: "from-green-600 to-emerald-600" },
  { id: "insurance", name: "Insurance", role: "Risk Underwriter", icon: Shield, x: 70, y: 82, color: "from-rose-600 to-pink-600" }
];

interface Packet {
  id: number;
  from: Node;
  to: Node;
  label: string;
  progress: number;
}

const PACKET_LABELS = [
  "Inventory Updated",
  "Shipment Booked",
  "Invoice Verified",
  "Permission Granted",
  "Context Shared",
  "ETA Updated"
];

export default function HeroNetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [packets, setPackets] = useState<Packet[]>([]);
  const [activeNodeId, setActiveNodeId] = useState<string>("marketplace");

  // Mouse Parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) / 25;
    const moveY = (e.clientY - centerY) / 25;
    setParallax({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  // Packet animation engine
  useEffect(() => {
    let packetIdCounter = 0;
    const interval = setInterval(() => {
      // Pick random source and target nodes
      const fromIdx = Math.floor(Math.random() * NODES.length);
      let toIdx = Math.floor(Math.random() * NODES.length);
      while (toIdx === fromIdx) {
        toIdx = Math.floor(Math.random() * NODES.length);
      }
      
      const label = PACKET_LABELS[Math.floor(Math.random() * PACKET_LABELS.length)];
      const newPacket: Packet = {
        id: packetIdCounter++,
        from: NODES[fromIdx],
        to: NODES[toIdx],
        label,
        progress: 0
      };

      setPackets((prev) => [...prev.slice(-4), newPacket]);
      setActiveNodeId(NODES[fromIdx].id);
    }, 2200);

    const animationFrame = setInterval(() => {
      setPackets((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + 0.018 }))
          .filter((p) => p.progress <= 1)
      );
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[460px] lg:min-h-[540px] flex items-center justify-center p-2 sm:p-4 perspective-1000 select-none"
    >
      {/* SaaS Browser Window Frame */}
      <div
        className="w-full max-w-[760px] bg-charcoal text-cream rounded-2xl border border-white/15 shadow-2xl overflow-hidden transition-transform duration-300 ease-out flex flex-col relative"
        style={{
          transform: `rotateY(${parallax.x}deg) rotateX(${-parallax.y}deg) translateY(${parallax.y * 0.5}px)`
        }}
      >
        {/* Browser Top Bar */}
        <div className="bg-charcoal-light px-4 py-3 border-b border-white/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-white/40 font-medium hidden sm:inline">
              aicoo.network/live-coordination
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-yellow">
              <Zap className="w-3 h-3 animate-pulse" />
              <span>Protocol Active</span>
            </div>
            <div className="text-[10px] font-mono text-white/30 hidden md:inline">
              Latency: 14ms
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] bg-charcoal-light/50 grid-bg-dark overflow-hidden p-4">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Mesh Connections */}
            {NODES.map((node, i) =>
              NODES.slice(i + 1).map((target, j) => {
                // Connect adjacent or logically related nodes
                const isConnected = 
                  (node.id === "buyer" && (target.id === "marketplace" || target.id === "finance")) ||
                  (node.id === "marketplace" && (target.id === "alpha" || target.id === "beta" || target.id === "warehouse")) ||
                  (node.id === "alpha" && target.id === "beta") ||
                  (node.id === "warehouse" && target.id === "courier") ||
                  (node.id === "courier" && target.id === "finance") ||
                  (node.id === "finance" && target.id === "insurance") ||
                  (node.id === "insurance" && target.id === "alpha");

                if (!isConnected) return null;

                return (
                  <line
                    key={`${node.id}-${target.id}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                );
              })
            )}

            {/* Active Moving Packet Pulses */}
            {packets.map((packet) => {
              const x = packet.from.x + (packet.to.x - packet.from.x) * packet.progress;
              const y = packet.from.y + (packet.to.y - packet.from.y) * packet.progress;
              return (
                <g key={packet.id}>
                  <circle cx={`${x}%`} cy={`${y}%`} r="4" fill="#f2c94c" className="animate-ping" />
                  <circle cx={`${x}%`} cy={`${y}%`} r="3" fill="#f2c94c" />
                </g>
              );
            })}
          </svg>

          {/* Floating Nodes */}
          {NODES.map((node) => {
            const Icon = node.icon;
            const isActive = activeNodeId === node.id;
            return (
              <div
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                  isActive ? "scale-105" : "scale-100 opacity-90"
                }`}
              >
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-charcoal/90 border ${
                    isActive ? "border-yellow shadow-lg shadow-yellow/10" : "border-white/15"
                  } backdrop-blur-md transition-all group cursor-pointer`}
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${node.color} text-white shrink-0`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="text-[11px] font-bold text-white tracking-tight leading-none truncate">
                      {node.name}
                    </div>
                    <div className="text-[9px] font-medium text-white/50 leading-none mt-1 truncate">
                      {node.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Travelling Packet Floating Badges */}
          {packets.map((packet) => {
            const x = packet.from.x + (packet.to.x - packet.from.x) * packet.progress;
            const y = packet.from.y + (packet.to.y - packet.from.y) * packet.progress;
            if (packet.progress < 0.15 || packet.progress > 0.85) return null;
            return (
              <div
                key={`badge-${packet.id}`}
                style={{ left: `${x}%`, top: `${y - 6}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none animate-in fade-in duration-200"
              >
                <div className="px-2.5 py-1 rounded-full bg-yellow text-charcoal font-bold text-[9px] uppercase tracking-wider shadow-md border border-yellow-dark flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal animate-pulse" />
                  <span>{packet.label}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Browser Footer Activity Bar */}
        <div className="bg-charcoal-light px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] z-20">
          <div className="flex items-center gap-2 text-white/60">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="font-medium text-white/80">Zero Data Exposure</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50 hidden sm:inline">Permissioned Cryptographic Context Relays</span>
          </div>
          <div className="flex items-center gap-1 text-yellow font-medium text-[10px] tracking-wide">
            <span>AICOO ENGINE</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
