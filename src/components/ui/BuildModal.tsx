"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { useBuildModal } from "@/context/BuildModalContext";
import { cn } from "@/lib/utils";

export default function BuildModal() {
  const { isOpen, closeBuildModal, presetBudget } = useBuildModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    if (isOpen && presetBudget) {
      setBudget(presetBudget);
    } else if (isOpen) {
      setBudget("$875 – $1,200"); // Default
    }
  }, [isOpen, presetBudget]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeBuildModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBuildModal}
            className="absolute inset-0 bg-obsidian/95 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-obsidian border border-gold/20 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeBuildModal}
              className="absolute top-6 right-6 text-offwhite/40 hover:text-gold transition-colors z-10 p-2"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl text-offwhite mb-3">Start Your Build</h2>
                  <p className="text-offwhite/50 text-sm font-sans">Tell us about the bow you envision.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    {/* Full Name */}
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2 transition-all group-focus-within:text-gold-light">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Marcus Aurelius"
                        className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-all font-sans text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2 transition-all group-focus-within:text-gold-light">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="marcus@imperator.com"
                        className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-all font-sans text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Intended Use */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">
                          Intended Use
                        </label>
                        <div className="relative">
                          <select className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite focus:outline-none focus:border-gold transition-all font-sans text-sm appearance-none cursor-pointer">
                            <option className="bg-obsidian">Hunting</option>
                            <option className="bg-obsidian">Target / Competition</option>
                            <option className="bg-obsidian">3D Archery</option>
                            <option className="bg-obsidian">Traditional / Recreation</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 pointer-events-none" />
                        </div>
                      </div>

                      {/* Budget Range */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">
                          Budget Range
                        </label>
                        <div className="relative">
                          <select 
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite focus:outline-none focus:border-gold transition-all font-sans text-sm appearance-none cursor-pointer"
                          >
                            <option className="bg-obsidian">$875 – $1,200</option>
                            <option className="bg-obsidian">$1,200 – $1,500</option>
                            <option className="bg-obsidian">$1,500 – $2,000</option>
                            <option className="bg-obsidian">$2,000+</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Draw Length */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2 transition-all group-focus-within:text-gold-light">
                          Draw Length (IN)
                        </label>
                        <input
                          type="text"
                          placeholder='e.g. 28"'
                          className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-all font-sans text-sm"
                        />
                      </div>

                      {/* Draw Weight */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2 transition-all group-focus-within:text-gold-light">
                          Draw Weight Goal (LBS)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 45 lbs"
                          className="w-full bg-transparent border-b border-white/10 py-2 text-offwhite placeholder:text-offwhite/20 focus:outline-none focus:border-gold transition-all font-sans text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-[10px] text-offwhite/40 mb-4 font-sans text-center leading-relaxed italic">
                      By requesting a build slot, you agree to our <a href="/policy" className="text-gold hover:text-gold-light underline decoration-gold/30">Commission Reservation & Build Policy</a>.
                    </p>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold py-4 rounded-sm uppercase text-xs tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(174,145,66,0.3)] disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                      ) : (
                        <>
                          Request Build Slot
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h2 className="font-serif text-3xl text-offwhite mb-4 uppercase tracking-wider">Vision Received</h2>
                <p className="text-offwhite/50 text-sm mb-10 leading-relaxed font-sans max-w-xs mx-auto">
                  Our master bowyer will review your specifications and reach out within 48 hours to discuss the next steps in forging your heirloom.
                </p>
                <button
                  onClick={handleReset}
                  className="px-10 py-4 border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-obsidian transition-all"
                >
                  Return to Forge
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
