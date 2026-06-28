// src/components/DemoIdentityOnboarding.tsx
"use client";

import React, { useState, useEffect } from "react";
import { 
  User, Building2, ArrowRight, ArrowLeft, 
  Check, ShieldAlert, ShieldCheck, Terminal, Loader2 
} from "lucide-react";

interface DemoIdentityOnboardingProps {
  onComplete: (identityType: "customer" | "partner", details: any) => void;
}

export default function DemoIdentityOnboarding({ onComplete }: DemoIdentityOnboardingProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [identityType, setIdentityType] = useState<"customer" | "partner" | null>(null);

  // Customer Form State
  const [customerForm, setCustomerForm] = useState({
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@email.com",
    phone: "9876543210",
    deliveryCity: "Hyderabad",
    customerType: "Prime", // Regular | Prime | Business Customer
    preferredPayment: "UPI", // Credit Card | UPI | Net Banking
    address: "Plot 42, Hitech City, Hyderabad, 500081"
  });

  // Partner Form State
  const [partnerForm, setPartnerForm] = useState({
    companyName: "Alpha Electronics", // Alpha Electronics | Beta Audio | Prime Logistics | Vision Warehouse | Sky Insurance
    companyEmail: "ops@alpha-electronics.com",
    businessId: "BIZ-ALPHA-778",
    organizationRole: "Seller", // Seller | Warehouse | Courier | Insurance | Marketplace | Finance
    location: "Hyderabad Central Hub",
    contactPerson: "Rajesh Kumar"
  });

  // Transition logs animation state
  const [activeLogIndex, setActiveLogIndex] = useState<number>(0);
  const transitionLogs = [
    "Initializing Organization Identity...",
    "Verifying Role & Cryptographic Identity...",
    "Establishing Secure Aicoo Session Context...",
    "Applying Scoped Permission Policies...",
    "Loading Context-Isolated Workspace..."
  ];

  // Auto-fill emails/IDs based on company names to make it look premium and authentic
  const handleCompanyChange = (company: string) => {
    const emailMap: Record<string, string> = {
      "Alpha Electronics": "ops@alpha-electronics.com",
      "Beta Audio": "fulfillment@beta-audio.co",
      "Prime Logistics": "cargo@primelogistics.net",
      "Vision Warehouse": "inventory@visionwarehouse.io",
      "Sky Insurance": "claims@skyinsurance.com"
    };

    const idMap: Record<string, string> = {
      "Alpha Electronics": "BIZ-ALPHA-778",
      "Beta Audio": "BIZ-BETA-339",
      "Prime Logistics": "BIZ-PRIME-404",
      "Vision Warehouse": "BIZ-VISION-882",
      "Sky Insurance": "BIZ-SKY-105"
    };

    const roleMap: Record<string, string> = {
      "Alpha Electronics": "Seller",
      "Beta Audio": "Seller",
      "Prime Logistics": "Courier",
      "Vision Warehouse": "Warehouse",
      "Sky Insurance": "Insurance"
    };

    const locMap: Record<string, string> = {
      "Alpha Electronics": "Hyderabad Central Hub",
      "Beta Audio": "Bangalore Depot",
      "Prime Logistics": "Delhi Transit Terminal",
      "Vision Warehouse": "Mumbai Cargo Yard",
      "Sky Insurance": "Chennai Corporate Office"
    };

    const contactMap: Record<string, string> = {
      "Alpha Electronics": "Rajesh Kumar",
      "Beta Audio": "Aditi Roy",
      "Prime Logistics": "Sardar Gurbaksh",
      "Vision Warehouse": "Vikram Rathore",
      "Sky Insurance": "Meera Swaminathan"
    };

    setPartnerForm(prev => ({
      ...prev,
      companyName: company,
      companyEmail: emailMap[company] || prev.companyEmail,
      businessId: idMap[company] || prev.businessId,
      organizationRole: roleMap[company] || prev.organizationRole,
      location: locMap[company] || prev.location,
      contactPerson: contactMap[company] || prev.contactPerson
    }));
  };

  const handleRoleChange = (role: string) => {
    setPartnerForm(prev => ({
      ...prev,
      organizationRole: role
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && identityType) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  // Step 3 animation loop
  useEffect(() => {
    if (step !== 3) return;
    
    const interval = setInterval(() => {
      setActiveLogIndex(prev => {
        if (prev < transitionLogs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete(identityType!, identityType === "customer" ? customerForm : partnerForm);
          }, 600);
          return prev;
        }
      });
    }, 550);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-4">
      {/* Outer Card */}
      <div className="bg-cream border border-charcoal/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
        
        {/* Glow element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Step Progress Header */}
        {step < 3 && (
          <div className="flex items-center justify-between mb-8 select-none">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-syne uppercase font-bold text-charcoal/50">Demo Context Onboarding</span>
            </div>
            
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                    step === num 
                      ? "bg-yellow text-charcoal border border-yellow-dark" 
                      : step > num 
                        ? "bg-charcoal text-cream" 
                        : "bg-transparent text-charcoal/30 border border-charcoal/10"
                  }`}>
                    {step > num ? <Check className="w-3 h-3 stroke-[3]" /> : num}
                  </div>
                  {num < 3 && <div className={`w-6 h-[1px] ${step > num ? "bg-charcoal" : "bg-charcoal/10"}`} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: CHOOSE IDENTITY */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="space-y-2">
              <h2 className="font-syne text-2xl font-extrabold uppercase text-charcoal tracking-wide">
                Choose Demo Identity
              </h2>
              <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">
                To experience OpenRelay's cross-company orchestration, select the viewpoint from which you'd like to inspect the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A: Customer */}
              <button
                type="button"
                onClick={() => setIdentityType("customer")}
                className={`flex flex-col text-left p-5 border rounded-2xl transition-all group ${
                  identityType === "customer"
                    ? "bg-white border-yellow ring-2 ring-yellow/30 shadow-md"
                    : "bg-white/50 border-charcoal/10 hover:border-charcoal/20 hover:bg-white"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  identityType === "customer" 
                    ? "bg-yellow text-charcoal border border-yellow-dark" 
                    : "bg-charcoal/5 text-charcoal/60"
                }`}>
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal mt-4 flex items-center gap-1.5">
                  <span>Marketplace Customer</span>
                  {identityType === "customer" && <Check className="w-3.5 h-3.5 text-yellow-dark" />}
                </h3>
                <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold mt-2">
                  Browse products, simulate purchases, and track shipments. Ideal for testing customer privacy isolation.
                </p>
              </button>

              {/* Option B: Partner */}
              <button
                type="button"
                onClick={() => setIdentityType("partner")}
                className={`flex flex-col text-left p-5 border rounded-2xl transition-all group ${
                  identityType === "partner"
                    ? "bg-white border-yellow ring-2 ring-yellow/30 shadow-md"
                    : "bg-white/50 border-charcoal/10 hover:border-charcoal/20 hover:bg-white"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  identityType === "partner" 
                    ? "bg-yellow text-charcoal border border-yellow-dark" 
                    : "bg-charcoal/5 text-charcoal/60"
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal mt-4 flex items-center gap-1.5">
                  <span>Partner Company</span>
                  {identityType === "partner" && <Check className="w-3.5 h-3.5 text-yellow-dark" />}
                </h3>
                <p className="text-[10px] text-charcoal/60 leading-relaxed font-semibold mt-2">
                  Represent a seller, warehouse, insurer, or courier. Ideal for testing corporate data separation.
                </p>
              </button>
            </div>

            <div className="pt-2 border-t border-charcoal/5 flex justify-end">
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!identityType}
                className="btn-enterprise inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal/90 text-cream text-[10px] font-syne font-extrabold uppercase tracking-wider disabled:opacity-50 disabled:pointer-events-none transition-all shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-yellow" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DETAILS FORM */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-1">
              <h2 className="font-syne text-2xl font-extrabold uppercase text-charcoal tracking-wide">
                {identityType === "customer" ? "Enter Customer Details" : "Partner Organization Details"}
              </h2>
              <p className="text-xs text-charcoal/65 leading-relaxed font-semibold">
                {identityType === "customer" 
                  ? "This information is only used to personalize the demo experience locally."
                  : "Choose the organization and role you represent for this demonstration."}
              </p>
            </div>

            {identityType === "customer" ? (
              /* CUSTOMER FORM FIELDS */
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">First Name</label>
                    <input
                      type="text"
                      value={customerForm.firstName}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="Rahul"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Last Name</label>
                    <input
                      type="text"
                      value={customerForm.lastName}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Sharma"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Email Address</label>
                    <input
                      type="email"
                      value={customerForm.email}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="rahul@email.com"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Phone Number</label>
                    <input
                      type="text"
                      value={customerForm.phone}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Delivery City</label>
                    <input
                      type="text"
                      value={customerForm.deliveryCity}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, deliveryCity: e.target.value }))}
                      placeholder="Hyderabad"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Customer Type</label>
                    <select
                      value={customerForm.customerType}
                      onChange={(e) => setCustomerForm(prev => ({ ...prev, customerType: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Prime">Prime Member</option>
                      <option value="Business Customer">Business Customer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Preferred Payment Method</label>
                  <select
                    value={customerForm.preferredPayment}
                    onChange={(e) => setCustomerForm(prev => ({ ...prev, preferredPayment: e.target.value }))}
                    className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="UPI">UPI (Unified Payments Interface)</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Mock Address</label>
                  <textarea
                    rows={2}
                    value={customerForm.address}
                    onChange={(e) => setCustomerForm(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter delivery address..."
                    className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow resize-none transition-all"
                  />
                </div>
              </div>
            ) : (
              /* PARTNER FORM FIELDS */
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Company Name</label>
                    <select
                      value={partnerForm.companyName}
                      onChange={(e) => handleCompanyChange(e.target.value)}
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    >
                      <option value="Alpha Electronics">Alpha Electronics</option>
                      <option value="Beta Audio">Beta Audio</option>
                      <option value="Prime Logistics">Prime Logistics</option>
                      <option value="Vision Warehouse">Vision Warehouse</option>
                      <option value="Sky Insurance">Sky Insurance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Organization Role</label>
                    <select
                      value={partnerForm.organizationRole}
                      onChange={(e) => handleRoleChange(e.target.value)}
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    >
                      <option value="Seller">Seller</option>
                      <option value="Warehouse">Warehouse Operator</option>
                      <option value="Courier">Courier / Carrier</option>
                      <option value="Insurance">Insurance Underwriter</option>
                      <option value="Marketplace">Marketplace Platform</option>
                      <option value="Finance">Finance / Escrow</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Corporate Email</label>
                    <input
                      type="email"
                      value={partnerForm.companyEmail}
                      onChange={(e) => setPartnerForm(prev => ({ ...prev, companyEmail: e.target.value }))}
                      placeholder="ops@alpha.com"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Business Registry ID</label>
                    <input
                      type="text"
                      value={partnerForm.businessId}
                      onChange={(e) => setPartnerForm(prev => ({ ...prev, businessId: e.target.value }))}
                      placeholder="BIZ-9081"
                      className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Terminal / Hub Location</label>
                  <input
                    type="text"
                    value={partnerForm.location}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Hyderabad Logistics Terminal"
                    className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-syne uppercase font-bold text-charcoal/50">Contact Person</label>
                  <input
                    type="text"
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, contactPerson: e.target.value }))}
                    placeholder="Sarah Jenkins"
                    className="w-full px-3.5 py-2 border border-charcoal/10 rounded-xl bg-white text-xs text-charcoal font-semibold focus:outline-none focus:border-yellow transition-all"
                  />
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-charcoal/5 flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-charcoal/10 hover:bg-charcoal/5 rounded-xl text-[10px] font-syne font-bold uppercase text-charcoal transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="btn-enterprise inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal/90 text-cream text-[10px] font-syne font-extrabold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-yellow" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PLATFORM INITIALIZATION LOADER */}
        {step === 3 && (
          <div className="py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-500 max-w-sm mx-auto">
            {/* Loading spinner with pulsing shield */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <Loader2 className="w-16 h-16 text-yellow animate-spin stroke-[2]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-charcoal animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-syne text-xs uppercase font-extrabold text-charcoal tracking-widest">
                  Aicoo Protocol Handshake
                </h3>
                <p className="text-[10px] text-charcoal/50 uppercase font-bold tracking-wider">
                  Establishing secure communication context
                </p>
              </div>

              {/* Terminal Logs Simulation */}
              <div className="bg-charcoal text-left p-4 rounded-xl border border-white/10 shadow-inner font-mono text-[9px] text-emerald-400 space-y-2 h-44 overflow-hidden flex flex-col justify-end">
                {transitionLogs.slice(0, activeLogIndex + 1).map((log, idx) => {
                  const isCurrent = idx === activeLogIndex;
                  return (
                    <div key={idx} className={`flex items-start gap-1.5 ${isCurrent ? "text-yellow" : "text-emerald-400/80"}`}>
                      <span>{isCurrent ? "⚡" : "✓"}</span>
                      <span className="font-semibold">{log}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
