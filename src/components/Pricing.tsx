"use client";

import { Check, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useBuildModal } from "@/context/BuildModalContext";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "The Field Bow",
    price: "$875 – $1,100",
    budgetRef: "$875 – $1,200",
    description: "Entry selfbow, one wood, standard finish. Built for the rugged hunter who values utility above all.",
    features: [
      "Seasoned Osage or Hickory",
      "Standard Grip",
      "Durable Oil Finish",
      "Tillered to your specs",
    ],
    cta: "Begin This Build",
    featured: false,
  },
  {
    name: "The Heritage Build",
    price: "$1,400 – $1,900",
    budgetRef: "$1,500 – $2,000",
    description: "Premium stave, custom grip, personalized engraving. Our most popular choice for serious traditionalists.",
    features: [
      "Premium Osage Stave",
      "Custom Leather Grip",
      "Personalized Engraving",
      "Antler Tip Overlays",
      "Most Popular",
    ],
    cta: "Begin This Build",
    featured: true,
  },
  {
    name: "The Heirloom",
    price: "$2,400 – $3,200",
    budgetRef: "$2,000+",
    description: "Exotic woods, multi-laminate, museum-grade finish. A legacy piece built for performance and display.",
    features: [
      "Exotic Wood Laminates",
      "Museum Grade Finish",
      "Certificate of Provenance",
      "Custom Hard Case",
      "Lifetime Guarantee",
    ],
    cta: "Begin This Build",
    featured: false,
  },
];

export default function Pricing() {
  const { openBuildModal } = useBuildModal();

  return (
    <section id="pricing" className="bg-obsidian py-24 px-6 relative overflow-hidden border-t border-charcoal/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Investment</h4>
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite uppercase tracking-wider mb-4">Pricing & Tiers</h2>
          <p className="text-offwhite/50 text-sm max-w-2xl mx-auto font-sans mb-6">
            Choose the foundation of your legacy. Each build is a unique commission, crafted from the finest materials.
          </p>
          <div className="mx-auto bg-charcoal/40 border border-gold/20 rounded py-2 px-4 inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(174,145,66,0.8)]" />
            <p className="text-gold-light text-xs font-bold font-sans uppercase tracking-[0.1em]">
              Only 3 slots remaining for {new Date().toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <FadeIn 
              key={tier.name} 
              delay={0.1 * index} 
              className={cn(
                "relative flex flex-col p-8 rounded-sm transition-all duration-500 group",
                tier.featured 
                  ? "bg-obsidian-light/30 border border-gold/40 shadow-[0_0_50px_rgba(174,145,66,0.15)] scale-105 z-20" 
                  : "bg-charcoal/10 border border-white/5 hover:border-white/10"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-obsidian px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif text-2xl text-offwhite mb-2">{tier.name}</h3>
                <p className="text-gold-light font-serif text-xl font-medium tracking-tight mb-4">{tier.price}</p>
                <p className="text-offwhite/50 text-xs leading-relaxed font-sans">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-3.5 h-3.5 mt-0.5 shrink-0",
                      tier.featured ? "text-gold" : "text-gold/40"
                    )} />
                    <span className="text-offwhite/60 text-xs font-sans">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openBuildModal(tier.budgetRef, tier.name)}
                className={cn(
                  "w-full py-4 rounded-sm transition-all text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2",
                  tier.featured
                    ? "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian shadow-[0_4px_20px_rgba(174,145,66,0.3)] hover:shadow-[0_4px_30px_rgba(174,145,66,0.5)] active:scale-[0.98]"
                    : "border border-gold/30 text-gold hover:bg-gold hover:text-obsidian active:scale-[0.98]"
                )}
              >
                {tier.cta}
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Risk Reversal: Ironclad Guarantee */}
        <FadeIn className="mt-20 max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-charcoal/40 to-obsidian border border-gold/20 rounded-lg p-8 md:p-12 relative overflow-hidden group hover:border-gold/40 transition-colors">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gold/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="w-16 h-16 shrink-0 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 shadow-[0_0_30px_rgba(174,145,66,0.15)] group-hover:shadow-[0_0_40px_rgba(174,145,66,0.3)] transition-shadow">
                <ShieldCheck className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-gold-light mb-2">The Ironclad Lifetime Guarantee</h3>
                <p className="text-offwhite/70 text-sm leading-relaxed font-sans mb-4">
                  When you commission an Imperator Bow, you are investing in a legacy. We stand behind our craftsmanship unconditionally. If your bow ever fails due to a defect in materials or artisanship, we will repair or replace it—no questions asked. 
                </p>
                <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1.5 rounded-sm border border-gold/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] text-gold uppercase tracking-widest font-bold">100% Fully Transferable to Heirs</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent blur-3xl scale-150" />
      </div>
    </section>
  );
}
