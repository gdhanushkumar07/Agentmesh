// src/components/AgentNetwork.tsx
"use client";

import React, { useState, useEffect } from "react";
import { SCENARIOS, Scenario, ScenarioStep } from "../lib/scenarios";
import { aicoo } from "../lib/aicoo";
import { 
  Crown, Headphones, CreditCard, Scale, Cpu, Settings, Globe, User, 
  Play, RotateCcw, ChevronRight, ArrowRightLeft, ShieldCheck, Database
} from "lucide-react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: React.ComponentType<any>;
  color: string;
  type: 'internal' | 'external' | 'partner';
}

const NODES: Record<string, Node> = {
  customer: { id: "customer", label: "Customer", x: 60, y: 220, icon: User, color: "bg-charcoal text-cream border-muted-border", type: 'external' },
  support: { id: "support", label: "Procurement AI", x: 220, y: 220, icon: Headphones, color: "bg-charcoal text-cream border-muted-border", type: 'internal' },
  billing: { id: "billing", label: "Finance AI", x: 400, y: 220, icon: CreditCard, color: "bg-charcoal text-cream border-muted-border", type: 'internal' },
  legal: { id: "legal", label: "Insurance AI", x: 580, y: 220, icon: Scale, color: "bg-charcoal text-cream border-muted-border", type: 'internal' },
  ceo: { id: "ceo", label: "CEO / Briefing", x: 400, y: 80, icon: Crown, color: "bg-yellow text-charcoal border-yellow-dark", type: 'internal' },
  devops: { id: "devops", label: "Warehouse AI", x: 220, y: 360, icon: Cpu, color: "bg-charcoal text-cream border-muted-border", type: 'internal' },
  operations: { id: "operations", label: "Shipping AI", x: 400, y: 360, icon: Settings, color: "bg-charcoal text-cream border-muted-border", type: 'internal' },
  partner: { id: "partner", label: "Supplier AI", x: 740, y: 220, icon: Globe, color: "bg-yellow text-charcoal border-yellow-dark", type: 'partner' },
};

const EDGES = [
  { from: "customer", to: "support", dashed: false },
  { from: "support", to: "billing", dashed: false },
  { from: "billing", to: "legal", dashed: false },
  { from: "legal", to: "ceo", dashed: false },
  { from: "devops", to: "operations", dashed: false },
  { from: "operations", to: "support", dashed: false },
  { from: "devops", to: "support", dashed: false },
  { from: "billing", to: "partner", dashed: true },
  { from: "operations", to: "ceo", dashed: false },
  { from: "ceo", to: "support", dashed: false },
];

interface AgentNetworkProps {
  onStepTriggered?: (step: ScenarioStep) => void;
  onScenarioReset?: () => void;
}

export default function AgentNetwork({ onStepTriggered, onScenarioReset }: AgentNetworkProps) {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStats, setActiveStats] = useState({ calls: 0, syncs: 0, links: 0 });

  // Handle active step changes
  useEffect(() => {
    if (currentStepIndex >= 0 && currentStepIndex < selectedScenario.steps.length) {
      const step = selectedScenario.steps[currentStepIndex];
      
      // Execute the dual-mode client function
      if (step.apiCallPath) {
        if (step.apiCallMethod === 'POST') {
          if (step.apiCallPath === '/init') aicoo.init();
          else if (step.apiCallPath === '/accumulate') {
            aicoo.accumulate(step.payload);
            setActiveStats(prev => ({ ...prev, syncs: prev.syncs + 1 }));
          } else if (step.apiCallPath === '/chat') aicoo.chat(step.payload.message);
          else if (step.apiCallPath === '/briefing') aicoo.generateBriefing(step.payload);
          else if (step.apiCallPath === '/briefing/matrix') aicoo.getMatrix(step.payload);
          else if (step.apiCallPath === '/share/create') {
            aicoo.createShareLink(step.payload);
            setActiveStats(prev => ({ ...prev, links: prev.links + 1 }));
          } else if (step.apiCallPath === '/tools') aicoo.executeTool(step.payload.tool, step.payload.params);
        } else if (step.apiCallMethod === 'DELETE') {
          aicoo.revokeShareLink('link_abc789');
          setActiveStats(prev => ({ ...prev, links: Math.max(0, prev.links - 1) }));
        }
        setActiveStats(prev => ({ ...prev, calls: prev.calls + 1 }));
      }

      if (onStepTriggered) onStepTriggered(step);
    }
  }, [currentStepIndex]);

  // Autoplay handler
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (currentStepIndex < selectedScenario.steps.length - 1) {
        timer = setTimeout(() => {
          setCurrentStepIndex(prev => prev + 1);
        }, 2200);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(-1);
    setActiveStats({ calls: 0, syncs: 0, links: 0 });
    if (onScenarioReset) onScenarioReset();
  };

  const currentStep = currentStepIndex >= 0 ? selectedScenario.steps[currentStepIndex] : null;

  return (
    <div className="flex flex-col bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm h-full">
      {/* Top metrics bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-cream border-b border-charcoal/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2 py-0.5 rounded font-bold">S-01</span>
          <h2 className="text-sm font-syne uppercase tracking-wide text-charcoal font-bold">Agent Network OS</h2>
        </div>
        <div className="flex items-center gap-6 text-xs font-medium text-charcoal/60">
          <div className="flex items-center gap-1.5"><ArrowRightLeft className="w-3.5 h-3.5 text-yellow-dark" /><span>API Calls: <strong>{activeStats.calls}</strong></span></div>
          <div className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-yellow-dark" /><span>Context Accumulations: <strong>{activeStats.syncs}</strong></span></div>
          <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-yellow-dark" /><span>Active Shares: <strong>{activeStats.links}</strong></span></div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative flex-1 bg-cream-dark/40 grid-bg min-h-[360px] flex items-center justify-center p-4">
        <svg viewBox="0 0 800 440" className="w-full h-full max-w-[800px]">
          {/* Defs for gradients, badges, and markers */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#121212" fillOpacity="0.25" />
            </marker>
            <marker id="arrow-active" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f2c94c" />
            </marker>
          </defs>

          {/* Render Connections */}
          {EDGES.map((edge, idx) => {
            const fromNode = NODES[edge.from];
            const toNode = NODES[edge.to];
            const isActive = currentStep && (
              (currentStep.source === edge.from && currentStep.target === edge.to) ||
              (currentStep.source === edge.to && currentStep.target === edge.from)
            );
            return (
              <path
                key={`${edge.from}-${edge.to}-${idx}`}
                d={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                stroke={isActive ? "#f2c94c" : "#121212"}
                strokeOpacity={isActive ? 1 : 0.15}
                strokeWidth={isActive ? 2.5 : 1.5}
                markerEnd={isActive ? "url(#arrow-active)" : "url(#arrow)"}
                className={edge.dashed ? "animate-dash" : ""}
                strokeDasharray={edge.dashed ? "5,5" : undefined}
              />
            );
          })}

          {/* Render Animated Packets */}
          {currentStep && currentStep.source !== currentStep.target && (
            <g key={`packet-${currentStepIndex}`}>
              <circle r="6" fill="#f2c94c" className="shadow-lg">
                <animateMotion
                  dur="1.2s"
                  repeatCount="indefinite"
                  path={`M ${NODES[currentStep.source].x} ${NODES[currentStep.source].y} L ${NODES[currentStep.target].x} ${NODES[currentStep.target].y}`}
                />
              </circle>
              {currentStep.badge && (
                <g>
                  <animateMotion
                    dur="1.2s"
                    repeatCount="indefinite"
                    path={`M ${NODES[currentStep.source].x} ${NODES[currentStep.source].y} L ${NODES[currentStep.target].x} ${NODES[currentStep.target].y}`}
                  />
                  <rect x="-40" y="-22" width="80" height="14" rx="3" fill="#121212" opacity="0.85" />
                  <text x="0" y="-12" fill="#f2c94c" fontSize="8" textAnchor="middle" fontWeight="bold">
                    {currentStep.badge}
                  </text>
                </g>
              )}
            </g>
          )}

          {/* Render Nodes */}
          {Object.values(NODES).map((node) => {
            const NodeIcon = node.icon;
            const isGlow = currentStep && currentStep.glowNode === node.id;
            const isTarget = currentStep && currentStep.target === node.id;
            const isSource = currentStep && currentStep.source === node.id;
            const isNodeActive = isGlow || isTarget || isSource;

            return (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`} className="cursor-pointer">
                {/* Glow ring */}
                {isNodeActive && (
                  <circle r="34" fill="none" stroke="#f2c94c" strokeWidth="2" strokeDasharray="3,3" className="animate-spin" style={{ animationDuration: '6s' }} />
                )}
                {/* Inner node circle */}
                <circle
                  r="24"
                  fill={node.type === 'internal' ? '#121212' : '#f4f4f0'}
                  stroke={isNodeActive ? '#f2c94c' : '#121212'}
                  strokeWidth={isNodeActive ? 2.5 : 1.5}
                  strokeOpacity={isNodeActive ? 1 : 0.2}
                  className="transition-all duration-300"
                />
                {/* Icon wrapper */}
                <g transform="translate(-10, -10)" className={node.type === 'internal' ? 'text-cream' : 'text-charcoal'}>
                  <NodeIcon className={`w-5 h-5 ${isNodeActive ? 'text-yellow' : ''}`} />
                </g>
                {/* Node Label */}
                <text y="38" textAnchor="middle" fill="#121212" className="text-[10px] font-syne uppercase font-bold tracking-wider opacity-80 select-none">
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Step details toast overlay */}
        {currentStep && (
          <div className="absolute bottom-4 left-4 right-4 bg-charcoal border border-yellow/20 text-cream px-4 py-3 rounded-xl flex items-start gap-3 shadow-md max-w-[90%] md:max-w-[450px]">
            <div className="bg-yellow/15 p-1.5 rounded-lg border border-yellow/20 mt-0.5">
              <ChevronRight className="w-4 h-4 text-yellow animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase font-syne tracking-wider text-yellow font-bold mb-0.5">Step {currentStepIndex + 1} of {selectedScenario.steps.length}</div>
              <p className="text-xs text-cream-dark leading-relaxed font-medium">{currentStep.action}</p>
            </div>
          </div>
        )}
      </div>

      {/* Control panel */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-5 border-t border-charcoal/10 bg-cream">
        <div className="flex flex-wrap items-center gap-2">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => { setSelectedScenario(sc); handleReset(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-syne font-bold uppercase transition-all border ${
                selectedScenario.id === sc.id
                  ? "bg-charcoal text-cream border-charcoal"
                  : "bg-transparent text-charcoal/70 border-charcoal/10 hover:border-charcoal/30"
              }`}
            >
              {sc.name.split(":")[1]?.trim() || sc.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="p-2 border border-charcoal/10 rounded-lg hover:border-charcoal/30 text-charcoal hover:bg-charcoal/5 transition-all"
            title="Reset Scenario"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              if (currentStepIndex < selectedScenario.steps.length - 1) {
                setCurrentStepIndex(prev => prev + 1);
              }
            }}
            disabled={isPlaying || currentStepIndex === selectedScenario.steps.length - 1}
            className="flex items-center gap-1 px-3 py-2 border border-charcoal/10 rounded-lg hover:border-charcoal/30 text-charcoal hover:bg-charcoal/5 disabled:opacity-40 transition-all font-syne font-bold uppercase text-xs"
          >
            Step <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-4 py-2 bg-yellow text-charcoal rounded-lg hover:bg-yellow-dark transition-all font-syne font-bold uppercase text-xs shadow-sm border border-yellow-dark"
          >
            <Play className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} /> {isPlaying ? "PAUSE" : "PLAY RUN"}
          </button>
        </div>
      </div>
    </div>
  );
}
