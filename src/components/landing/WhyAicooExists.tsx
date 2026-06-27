// src/components/landing/WhyAicooExists.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Cpu, ShieldCheck, Database, Key, Activity, ArrowRightLeft } from "lucide-react";

export default function WhyAicooExists() {
  const [activeCycle, setActiveCycle] = useState(0);

  const capabilities = [
    { title: "Identity", icon: Key, desc: "Bootstraps persistent agent credentials via workspace verification (/init)." },
    { title: "Context", icon: Database, desc: "Maintains history across departments by storing logs in memory folders (/accumulate)." },
    { title: "Permissions", icon: ShieldCheck, desc: "Restricts exposure via temporary, folder-scoped share links (/share/create)." },
    { title: "Routing", icon: ArrowRightLeft, desc: "Discovers and forwards messages across agents via tool execution bridges." },
    { title: "Heartbeat", icon: Activity, desc: "Runs background monitoring tasks to auto-detect workspace errors (/heartbeat/run)." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % capabilities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-aicoo" className="py-20 bg-cream border-t border-charcoal/10 relative grid-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-04 / The Infrastructure
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            Aicoo is the Communication Protocol
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            OpenAI creates intelligent agents. Aicoo allows intelligent agents to collaborate.
          </p>
        </div>

        {/* Visualization area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Animated Hub-Spoke SVG (8 Cols) */}
          <div className="lg:col-span-8 bg-cream border border-charcoal/10 rounded-2xl p-4 flex flex-col justify-between min-h-[380px] relative">
            <svg viewBox="0 0 600 320" className="w-full h-full max-w-[600px] my-auto">
              <defs>
                <circle id="core-glow" r="28" fill="#f2c94c" opacity="0.15" className="animate-ping" style={{ animationDuration: '3s' }} />
              </defs>

              {/* Hub Spoke Lines */}
              <line x1="300" y1="160" x2="100" y2="70" stroke="#121212" strokeOpacity="0.1" strokeWidth="2" />
              <line x1="300" y1="160" x2="100" y2="250" stroke="#121212" strokeOpacity="0.1" strokeWidth="2" />
              <line x1="300" y1="160" x2="500" y2="70" stroke="#121212" strokeOpacity="0.1" strokeWidth="2" />
              <line x1="300" y1="160" x2="500" y2="250" stroke="#121212" strokeOpacity="0.1" strokeWidth="2" />

              {/* Animated Message Packets */}
              <circle r="5" fill="#f2c94c">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 300 160 L 100 70 M 100 70 L 300 160" />
              </circle>
              <circle r="5" fill="#f2c94c">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 300 160 L 500 250 M 500 250 L 300 160" />
              </circle>

              {/* Outer Nodes */}
              <g transform="translate(100, 70)">
                <circle r="18" fill="#121212" stroke="#121212" />
                <text y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#121212" className="font-syne uppercase">Procurement</text>
              </g>
              <g transform="translate(100, 250)">
                <circle r="18" fill="#121212" stroke="#121212" />
                <text y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#121212" className="font-syne uppercase">Finance</text>
              </g>
              <g transform="translate(500, 70)">
                <circle r="18" fill="#121212" stroke="#121212" />
                <text y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#121212" className="font-syne uppercase">Insurance</text>
              </g>
              <g transform="translate(500, 250)">
                <circle r="18" fill="#eaeae6" stroke="#121212" strokeWidth="1.5" />
                <text y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#121212" className="font-syne uppercase">Supplier</text>
              </g>

              {/* Hub Aicoo Core */}
              <g transform="translate(300, 160)" className="cursor-pointer">
                <use href="#core-glow" />
                <circle r="26" fill="#121212" stroke="#f2c94c" strokeWidth="2.5" />
                <text x="0" y="4" fill="#f2c94c" textAnchor="middle" fontSize="9" fontWeight="extrabold" className="font-syne tracking-widest uppercase">
                  AICOO
                </text>
              </g>
            </svg>

            {/* Bottom Statement */}
            <div className="text-center pb-2 text-[10px] font-syne uppercase tracking-wider text-charcoal/45 font-bold">
              Without Aicoo, companies have AI agents. With Aicoo, companies have coordinated organizations.
            </div>
          </div>

          {/* Right sidebar tracker (4 Cols) */}
          <div className="lg:col-span-4 bg-charcoal text-cream rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[300px] border border-charcoal grid-bg-dark">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-syne uppercase tracking-wider text-yellow bg-yellow/10 px-2.5 py-0.5 rounded font-bold">S-04A</span>
                <span className="text-xs font-syne uppercase font-bold text-cream">Aicoo Protocol</span>
              </div>

              <div className="space-y-3 pt-2">
                {capabilities.map((cap, idx) => {
                  const CapIcon = cap.icon;
                  const isCurrent = activeCycle === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveCycle(idx)}
                      className={`flex gap-3 p-2 rounded-xl cursor-pointer border transition-all ${
                        isCurrent 
                          ? "bg-white/10 border-yellow/20 text-yellow" 
                          : "bg-transparent border-transparent text-white/50 hover:text-white/80"
                      }`}
                    >
                      <CapIcon className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold font-syne uppercase">{cap.title}</h4>
                        {isCurrent && <p className="text-[10px] text-white/60 leading-relaxed font-semibold">{cap.desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-[9px] font-bold text-white/40 uppercase tracking-wider">
              AICOO COORDINATION SUITE v1.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
