// src/app/network/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import PortalSelection from "../../components/PortalSelection";
import Marketplace from "../../components/Marketplace";
import SellerConsole from "../../components/SellerConsole";
import OrderSummary from "../../components/OrderSummary";
import CustomerJourney from "../../components/CustomerJourney";
import AgentNetwork from "../../components/AgentNetwork";
import CooConversationTimeline from "../../components/CooConversationTimeline";
import CooPermissionLedger from "../../components/CooPermissionLedger";
import CooExplorationPanel from "../../components/CooExplorationPanel";
import NetworkDashboardModals from "../../components/NetworkDashboardModals";
import { Scenario, SCENARIOS } from "../../lib/scenarios";
import { aicooService } from "../../services/aicoo";
import { clearApiLogs } from "../../lib/aicoo";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Eye, UserCheck, ShieldAlert } from "lucide-react";

export default function NetworkPage() {
  // Demo states: 'portal' | 'marketplace' | 'seller' | 'submitting' | 'dashboard'
  const [demoState, setDemoState] = useState<'portal' | 'marketplace' | 'seller' | 'submitting' | 'dashboard'>('portal');
  
  // Sourcing triggers
  const [initialPerspective, setInitialPerspective] = useState<'customer' | 'seller'>('customer');
  const [viewPerspective, setViewPerspective] = useState<'customer' | 'seller'>('customer');
  
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [submittingStatus, setSubmittingStatus] = useState<string>("");

  // Modal & notification states
  const [showBriefingModal, setShowBriefingModal] = useState<boolean>(false);
  const [showHealthModal, setShowHealthModal] = useState<boolean>(false);
  const [heartbeatAlert, setHeartbeatAlert] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'permissions' | 'inspector'>('permissions');

  const runLiveWorkflow = async (sc: Scenario, startingFrom: 'customer' | 'seller') => {
    setInitialPerspective(startingFrom);
    setViewPerspective(startingFrom);
    setActiveScenario(sc);
    setCurrentStepIndex(-1);
    setIsPlaying(false);
    setHeartbeatAlert(null);
    setIsExecuting(true);
    setDemoState('submitting');

    // Clear logs from previous sessions
    clearApiLogs();

    const transitionStatusMessages = startingFrom === 'customer' 
      ? [
          "Submitting headphones order to Marketplace Order Agent...",
          "Querying Alpha Sound Outlet inventory levels...",
          "Alpha reports stock deficit. Triggering Aicoo failover...",
          "Activating Aicoo Coordination visualizer..."
        ]
      : [
          "Fulfillment stock deficit detected (1 remaining, 2 ordered)...",
          "Initiating Aicoo cross-company sourcing request...",
          "Routing secure context keys to Seller Beta...",
          "Activating Aicoo Coordination visualizer..."
        ];

    for (let i = 0; i < transitionStatusMessages.length; i++) {
      setSubmittingStatus(transitionStatusMessages[i]);
      await new Promise(r => setTimeout(r, 600));
    }

    setDemoState('dashboard');

    try {
      for (let idx = 0; idx < sc.steps.length; idx++) {
        const step = sc.steps[idx];
        setCurrentStepIndex(idx);

        if (step.apiCallPath) {
          if (step.apiCallMethod === 'POST') {
            if (step.apiCallPath === '/init') {
              await aicooService.init();
            } else if (step.apiCallPath === '/accumulate') {
              await aicooService.accumulate(step.payload);
            } else if (step.apiCallPath === '/chat') {
              await aicooService.chat(step.payload.message);
            } else if (step.apiCallPath === '/briefing') {
              await aicooService.generateBriefing(step.payload);
            } else if (step.apiCallPath === '/briefing/matrix') {
              await aicooService.getMatrix(step.payload);
            } else if (step.apiCallPath === '/share/create') {
              await aicooService.createShareLink(step.payload);
            } else if (step.apiCallPath === '/tools') {
              await aicooService.executeTool(step.payload.tool, step.payload.params);
            }
          } else if (step.apiCallMethod === 'DELETE') {
            await aicooService.revokeShareLink('link_abc789');
          } else if (step.apiCallMethod === 'GET') {
            await aicooService.contextStatus();
          }
        }

        // Heartbeat Monitor alert during Alpha Outage check
        if (sc.id === "headphones-order-fulfillment" && idx === 3) {
          setHeartbeatAlert("Seller Alpha timeout. Aicoo Heartbeat initiated failover routing.");
        }

        await new Promise((resolve) => setTimeout(resolve, 2200));
      }
    } catch (err) {
      console.error("Error executing live workflow:", err);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleSignOff = async () => {
    setShowBriefingModal(false);
    if (activeScenario && activeScenario.id === "headphones-order-fulfillment") {
      setIsExecuting(true);
      try {
        for (let idx = 4; idx < activeScenario.steps.length; idx++) {
          const step = activeScenario.steps[idx];
          setCurrentStepIndex(idx);
          if (step.apiCallPath) {
            await aicooService.executeTool(step.payload.tool, step.payload.params);
          }
          await new Promise(r => setTimeout(r, 2200));
        }
      } catch (err) {
        console.error("Error executing post-escalation steps:", err);
      } finally {
        setIsExecuting(false);
      }
    }
  };

  const handleReset = () => {
    setActiveScenario(null);
    setCurrentStepIndex(-1);
    setIsPlaying(false);
    setIsExecuting(false);
    setHeartbeatAlert(null);
    setShowBriefingModal(false);
    setShowHealthModal(false);
    setDemoState('portal');
  };

  const isWorkflowComplete = activeScenario && currentStepIndex === activeScenario.steps.length - 1 && !isExecuting;

  return (
    <div className="min-h-screen bg-cream flex flex-col relative">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1 p-6 max-w-7xl w-full mx-auto flex flex-col gap-6">
        
        {/* State 1: Portal selection */}
        {demoState === 'portal' && (
          <ErrorBoundary fallbackTitle="Portal Selection Error">
            <PortalSelection onSelect={(role) => {
              if (role === 'marketplace') {
                setDemoState('marketplace');
              } else {
                setDemoState('seller');
              }
            }} />
          </ErrorBoundary>
        )}

        {/* State 2: Customer Marketplace */}
        {demoState === 'marketplace' && (
          <ErrorBoundary fallbackTitle="Marketplace Browser Error">
            <Marketplace 
              onBuyProduct={(prod, qty) => runLiveWorkflow(SCENARIOS[0], 'customer')} 
              onBack={() => setDemoState('portal')} 
            />
          </ErrorBoundary>
        )}

        {/* State 3: Seller Partner Console */}
        {demoState === 'seller' && (
          <ErrorBoundary fallbackTitle="Seller Console Error">
            <SellerConsole 
              onFulfillOrder={(prodId, qty) => runLiveWorkflow(SCENARIOS[0], 'seller')} 
              onBack={() => setDemoState('portal')} 
            />
          </ErrorBoundary>
        )}

        {/* State 4: Transition submit screen */}
        {demoState === 'submitting' && (
          <div className="flex-1 flex flex-col items-center justify-center py-32 space-y-6 animate-in fade-in duration-300 text-center max-w-md mx-auto">
            <div className="w-10 h-10 border-4 border-yellow-dark border-t-transparent rounded-full animate-spin"></div>
            <div className="space-y-2">
              <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">Procurement Request Submitted</h3>
              <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
                OpenRelay has registered the transaction. Aicoo is matching cryptographic identities across suppliers.
              </p>
              <p className="text-[10px] font-mono text-yellow-dark uppercase font-bold animate-pulse pt-3">
                {submittingStatus}
              </p>
            </div>
          </div>
        )}

        {/* State 5: Coordination Dashboard */}
        {demoState === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Control Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-cream border border-charcoal/10 px-5 py-3 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="text-[9px] font-mono bg-charcoal/5 px-2 py-0.5 rounded font-bold text-charcoal/40 uppercase">Coordination Center</span>
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal">{activeScenario?.name}</h3>
              </div>

              <div className="flex items-center gap-3">
                {isExecuting ? (
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-charcoal/70 bg-charcoal/5 px-3.5 py-1.5 rounded-lg border border-charcoal/10">
                    <div className="w-3.5 h-3.5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-mono text-[9px] tracking-tight uppercase">Executing Live Aicoo API...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-syne font-bold text-charcoal/50 uppercase">Visual Replay:</span>
                    <button
                      onClick={() => {
                        if (activeScenario && currentStepIndex === activeScenario.steps.length - 1) {
                          setCurrentStepIndex(-1);
                        }
                        setIsPlaying(!isPlaying);
                      }}
                      className="px-4 py-1.5 bg-yellow text-charcoal rounded-lg hover:bg-yellow-dark transition-all font-syne font-bold uppercase text-[9px] shadow-sm border border-yellow-dark"
                    >
                      <span>{isPlaying ? "Pause Replay" : "Start Replay"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Side: Customer Timeline or Final Summary Card */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                
                {/* Role Perspective Selector Tabs */}
                {!isWorkflowComplete && (
                  <div className="flex bg-cream border border-charcoal/10 p-1 rounded-xl text-[9px] font-syne font-bold uppercase select-none">
                    <button
                      onClick={() => setViewPerspective('customer')}
                      className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                        viewPerspective === 'customer' ? 'bg-charcoal text-cream shadow-xs' : 'text-charcoal/55 hover:bg-charcoal/5'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Customer View</span>
                    </button>
                    <button
                      onClick={() => setViewPerspective('seller')}
                      className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                        viewPerspective === 'seller' ? 'bg-yellow text-charcoal shadow-xs border border-yellow-dark/20' : 'text-charcoal/55 hover:bg-charcoal/5'
                      }`}
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Seller View</span>
                    </button>
                  </div>
                )}

                {/* Perspective Explanatory Info Box */}
                {!isWorkflowComplete && (
                  <div className="bg-cream border border-charcoal/10 rounded-xl p-3.5 flex gap-2 text-[10px] text-charcoal/60 leading-normal font-semibold">
                    <ShieldAlert className="w-4 h-4 text-charcoal/40 shrink-0 mt-0.5" />
                    <div>
                      {viewPerspective === 'customer' ? (
                        <span>Showing customer-facing order updates. Sensitive B2B routing paths and negotiations remain securely isolated.</span>
                      ) : (
                        <span>Showing Seller Alpha operations console. Displays incoming requests, reserves, packing, and payment completions.</span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  <ErrorBoundary fallbackTitle="Timeline Display Error">
                    {isWorkflowComplete ? (
                      <OrderSummary 
                        onReplay={() => runLiveWorkflow(activeScenario as Scenario, initialPerspective)} 
                        onReset={handleReset} 
                      />
                    ) : (
                      <CustomerJourney
                        scenario={activeScenario as Scenario}
                        currentStepIndex={currentStepIndex}
                        onStepClick={(idx) => {
                          setCurrentStepIndex(idx);
                          setActiveTab('inspector');
                        }}
                        onReset={handleReset}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        onOpenBriefing={() => setShowBriefingModal(true)}
                        perspective={viewPerspective}
                      />
                    )}
                  </ErrorBoundary>
                </div>
              </div>

              {/* Right Side: Operations Control Room */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex-1">
                  <ErrorBoundary fallbackTitle="Agent Network Topology Error">
                    <AgentNetwork
                      activeScenario={activeScenario as Scenario}
                      currentStepIndex={currentStepIndex}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                      setCurrentStepIndex={setCurrentStepIndex}
                      hideControls={true}
                    />
                  </ErrorBoundary>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="min-h-[220px]">
                    <ErrorBoundary fallbackTitle="Conversation Timeline Error">
                      <CooConversationTimeline
                        scenario={activeScenario as Scenario}
                        currentStepIndex={currentStepIndex}
                      />
                    </ErrorBoundary>
                  </div>
                  
                  <div className="min-h-[220px] flex flex-col bg-cream border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm">
                    {/* Tab Header bar */}
                    <div className="flex border-b border-charcoal/10 bg-cream-dark/10 text-xs font-syne font-bold uppercase select-none">
                      <button
                        onClick={() => setActiveTab('permissions')}
                        className={`flex-1 py-3 text-center border-r border-charcoal/10 transition-all ${
                          activeTab === 'permissions' ? 'bg-cream text-yellow-dark' : 'text-charcoal/50 hover:bg-cream-dark/5'
                        }`}
                      >
                        Permission Ledger
                      </button>
                      <button
                        onClick={() => setActiveTab('inspector')}
                        className={`flex-1 py-3 text-center transition-all ${
                          activeTab === 'inspector' ? 'bg-cream text-yellow-dark' : 'text-charcoal/50 hover:bg-cream-dark/5'
                        }`}
                      >
                        Coordination Inspector
                      </button>
                    </div>
                    {/* Tab Content */}
                    <div className="flex-1 min-h-[180px]">
                      {activeTab === 'permissions' ? (
                        <ErrorBoundary fallbackTitle="Permission Ledger Error">
                          <CooPermissionLedger
                            scenario={activeScenario as Scenario}
                            currentStepIndex={currentStepIndex}
                          />
                        </ErrorBoundary>
                      ) : (
                        <ErrorBoundary fallbackTitle="Coordination Inspector Error">
                          <CooExplorationPanel
                            scenario={activeScenario as Scenario}
                            currentStepIndex={currentStepIndex}
                          />
                        </ErrorBoundary>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <NetworkDashboardModals
        showBriefingModal={showBriefingModal}
        setShowBriefingModal={setShowBriefingModal}
        showHealthModal={showHealthModal}
        setShowHealthModal={setShowHealthModal}
        heartbeatAlert={heartbeatAlert}
        setHeartbeatAlert={setHeartbeatAlert}
        activeScenario={activeScenario}
        currentStepIndex={currentStepIndex}
        handleSignOff={handleSignOff}
      />
    </div>
  );
}
