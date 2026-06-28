// src/components/ProductPage.tsx
"use client";

import React, { useState } from "react";
import { Headphones, Star, Shield, Truck, AlertTriangle } from "lucide-react";

interface ProductPageProps {
  onBuy: () => void;
}

export default function ProductPage({ onBuy }: ProductPageProps) {
  const [qty, setQty] = useState(2);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBuyNow = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onBuy();
    }, 2800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-300 relative">
      {/* Breadcrumb */}
      <div className="text-[10px] font-mono text-charcoal/40 uppercase mb-6 flex gap-2">
        <span>Electronics</span>
        <span>➔</span>
        <span>Audio</span>
        <span>➔</span>
        <span>Headphones</span>
      </div>

      {isSubmitting ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream/98 backdrop-blur-md text-center py-20 px-6 animate-in fade-in duration-300">
          <div className="w-12 h-12 border-4 border-yellow-dark border-t-transparent rounded-full animate-spin mb-6"></div>
          <div className="space-y-3 max-w-md">
            <h3 className="font-syne text-sm uppercase font-extrabold text-charcoal tracking-wide">
              Order Submitted Successfully
            </h3>
            <p className="text-xs text-charcoal/70 leading-relaxed font-semibold">
              Preparing shipping lanes for 2x Sony WH-1000XM6 Headphones.
            </p>
            <p className="text-[11px] font-syne uppercase tracking-wider text-yellow-dark font-extrabold animate-pulse pt-4">
              What happens behind the scenes after you click Buy Now?
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-cream border border-charcoal/10 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* Left Column: Product Image Representation */}
          <div className="md:col-span-6 flex flex-col items-center justify-center p-8 bg-cream-dark/20 border border-charcoal/5 rounded-2xl relative aspect-square">
            <div className="absolute top-4 left-4 bg-charcoal text-cream text-[9px] font-syne uppercase font-bold tracking-wider px-2 py-0.5 rounded">
              Best Seller
            </div>
            
            {/* Premium CSS Headphone Mockup */}
            <div className="relative p-6 bg-cream border border-charcoal/10 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              <Headphones className="w-32 h-32 text-charcoal" strokeWidth={1} />
            </div>

            <div className="mt-8 flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal/20"></span>
            </div>
          </div>

          {/* Right Column: Details & Checkout Options */}
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-2">
              <h1 className="font-syne text-2xl md:text-3xl font-extrabold uppercase text-charcoal leading-none">
                Sony WH-1000XM6 Wireless Noise Canceling Headphones
              </h1>
              
              <div className="flex items-center gap-1.5 text-xs text-charcoal/70 font-semibold">
                <div className="flex text-yellow-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.9 (1,842 customer reviews)</span>
              </div>
            </div>

            <hr className="border-charcoal/10" />

            {/* Pricing Card */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-syne text-3xl font-extrabold text-charcoal">$399.99</span>
                <span className="text-xs text-charcoal/45 line-through font-semibold">$449.99</span>
              </div>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Save $50.00 (11% off) today</p>
            </div>

            {/* Description */}
            <p className="text-xs text-charcoal/70 leading-relaxed font-semibold">
              Experience industry-leading noise cancellation powered by Dual Processor routing. Equipped with custom 40mm dome drivers, 40 hours of continuous playback, and multi-device context matching.
            </p>

            {/* Stock Warning Box */}
            <div className="bg-yellow/10 border border-yellow/20 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-syne font-extrabold uppercase text-yellow-dark">
                <AlertTriangle className="w-4 h-4" />
                <span>Limited Stock Available</span>
              </div>
              <p className="text-[10px] text-charcoal/65 leading-relaxed font-semibold">
                Primary Seller (<strong>Alpha Sound Outlet</strong>) has only <strong>1 unit</strong> remaining in store. Orders for multiple units will be automatically synchronized with backup suppliers through the Aicoo protocol.
              </p>
            </div>

            <hr className="border-charcoal/10" />

            {/* Buy Form */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-charcoal/60 uppercase text-[10px] font-bold">Select Quantity:</span>
                <div className="flex items-center border border-charcoal/10 rounded-lg overflow-hidden bg-cream shadow-xs">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-1 bg-charcoal/5 hover:bg-charcoal/10 text-charcoal text-sm font-bold border-r border-charcoal/10"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-charcoal font-syne font-bold">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-1 bg-charcoal/5 hover:bg-charcoal/10 text-charcoal text-sm font-bold border-l border-charcoal/10"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-2 pt-2 text-[10px] text-charcoal/60 font-bold uppercase">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-charcoal/40" />
                  <span>FREE Delivery: <strong>Tomorrow by 10 PM</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-charcoal/40" />
                  <span>Sellers: <strong>Alpha Sound Outlet (Primary) & Beta Audio Store (Backup)</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-charcoal hover:bg-charcoal/90 text-cream rounded-xl font-syne font-extrabold uppercase text-xs tracking-wider transition-all duration-200 shadow-md hover:-translate-y-0.5 border border-charcoal text-center"
              >
                Buy Now
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
