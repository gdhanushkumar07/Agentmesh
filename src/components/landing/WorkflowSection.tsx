// src/components/landing/WorkflowSection.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { User, Headphones, CreditCard, Scale, Globe, UserCheck, ChevronRight } from "lucide-react";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    { label: "Customer", sub: "Submits Ticket", icon: User, details: "Starts transaction with initial dispute or refund query." },
    { label: "Support Agent", sub: "Triage & Reason", icon: Headphones, details: "Invokes Aicoo Chat to analyze intent and route the ticket." },
    { label: "Billing Agent", sub: "Financial Audit", icon: CreditCard, details: "Verifies logs in Stripe and outputs exception records." },
    { label: "Legal Agent", sub: "Compliance Check", icon: Scale, details: "Verifies policies and generates human sign-off briefings." },
    { label: "Partner Agent", sub: "Cross-Company", icon: Globe, details: "Accesses scoped billing folders to reconcile supplier invoices." },
    { label: "Human Expert", sub: "Sign-Off Approval", icon: UserCheck, details: "Accesses Eisenhower Matrix for high-fidelity resolutions." }
  ];

  useEffect(() => {
    // Staggered interval to cycle active steps when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
          }, 2500);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="workflow" ref={sectionRef} className="py-20 bg-cream border-t border-charcoal/10 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-syne uppercase tracking-wider text-yellow-dark bg-yellow/10 px-2.5 py-0.5 rounded border border-yellow/20 inline-block font-bold">
            S-04 / The Pipeline
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-charcoal leading-none">
            End-To-End Autonomous Workflows
          </h2>
          <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
            Watch how a complex, multi-team refund request propagates across Agent nodes before reaching human sign-off.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <div 
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 p-5 rounded-2xl border transition-all duration-500 cursor-pointer select-none ${
                    isActive 
                      ? "bg-charcoal border-yellow text-cream shadow-md -translate-y-1" 
                      : "bg-cream-dark/25 border-charcoal/5 text-charcoal hover:border-charcoal/20"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-lg border ${
                      isActive ? "bg-yellow border-yellow text-charcoal" : "bg-charcoal/5 border-charcoal/5 text-charcoal"
                    }`}>
                      <Icon className="w-4 h-4 animate-pulse" />
                    </div>
                    <span className="font-syne text-[10px] font-bold opacity-45">0{idx + 1}</span>
                  </div>

                  <div className="mt-6 space-y-1">
                    <h3 className="font-syne text-xs uppercase font-extrabold">{step.label}</h3>
                    <p className={`text-[9px] font-syne font-bold uppercase ${isActive ? 'text-yellow' : 'text-yellow-dark'}`}>{step.sub}</p>
                    <p className={`text-[10px] leading-relaxed font-medium mt-2 transition-all ${
                      isActive ? 'text-cream-dark' : 'text-charcoal/50'
                    }`}>
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-charcoal/20 px-1">
                    <ChevronRight className={`w-5 h-5 ${isActive ? 'text-yellow-dark animate-pulse' : ''}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
