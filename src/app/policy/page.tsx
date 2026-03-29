"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Hammer, CreditCard, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h4 className="text-gold text-xs font-bold tracking-[0.3em] font-sans mb-4 uppercase">IMPERATOR BOW COMPANY, LTD. CO.</h4>
            <h1 className="font-serif text-4xl md:text-5xl text-offwhite mb-6 uppercase tracking-wider">Commission Reservation & Build Policy</h1>
            <div className="w-20 h-1 bg-gold/50 mb-8" />
            <p className="text-offwhite/70 italic font-serif text-lg leading-relaxed">
              Every Imperator bow is crafted individually, with careful selection of materials and a build process that reflects our commitment to mastery and tradition.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Section 1: Reservation */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l border-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-gold rounded-full shadow-[0_0_10px_rgba(174,145,66,0.8)]" />
              <div className="flex items-center gap-3 mb-6 text-gold">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="font-serif text-2xl uppercase tracking-widest">Commission Reservation</h2>
              </div>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                A 40% Commission Reservation is required to secure your build slot and initiate material selection.
              </p>
              <ul className="space-y-4 text-sm text-offwhite/60">
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Secures your place in the production schedule</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Covers procurement of premium materials and initial shop time</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Confirms your commitment to a custom-built piece</span>
                </li>
              </ul>
              <p className="mt-8 text-xs font-bold text-gold uppercase tracking-[0.1em] italic">
                Commission Reservations are non-refundable once materials are allocated or the build process has begun.
              </p>
            </motion.section>

            {/* Section 2: Payments */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l border-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-gold rounded-full shadow-[0_0_10px_rgba(174,145,66,0.8)]" />
              <div className="flex items-center gap-3 mb-6 text-gold">
                <CreditCard className="w-5 h-5" />
                <h2 className="font-serif text-2xl uppercase tracking-widest">Build Progression & Payment Structure</h2>
              </div>
              <p className="text-offwhite/80 mb-8 font-sans text-sm">To maintain clarity and ensure a smooth process, commissions are structured as follows:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Commission Reservation", amount: "40%", sub: "Due at time of order" },
                  { label: "Midpoint Payment", amount: "20%", sub: "Optional ( rough shaping )" },
                  { label: "Remaining Balance", amount: "40–60%", sub: "Due prior to shipment" }
                ].map((step, index) => (
                  <div key={index} className="bg-charcoal/20 border border-white/5 p-6 rounded-sm">
                    <div className="text-gold font-serif text-xl mb-1">{step.amount}</div>
                    <div className="text-offwhite/80 text-[10px] uppercase tracking-widest font-bold mb-2">{step.label}</div>
                    <div className="text-offwhite/40 text-[9px] uppercase tracking-[0.1em]">{step.sub}</div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-offwhite/50 italic">
                The bow will not proceed to final finishing or ship until the remaining balance is received.
              </p>
            </motion.section>

            {/* Section 3: Materials & Customization */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l border-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-gold rounded-full shadow-[0_0_10px_rgba(174,145,66,0.8)]" />
              <div className="flex items-center gap-3 mb-6 text-gold">
                <Hammer className="w-5 h-5" />
                <h2 className="font-serif text-2xl uppercase tracking-widest">Material Selection & Customization</h2>
              </div>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                Each bow is built using natural materials, often including rare or highly figured woods. As such:
              </p>
              <ul className="space-y-4 text-sm text-offwhite/60">
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Grain patterns, coloration, and figure will vary</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Selected materials will be approved prior to final build when applicable</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold">•</span>
                  <span>Once approved and allocated, material selections are considered final</span>
                </li>
              </ul>
            </motion.section>

            {/* Section 4: Lead Time */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 border-l border-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-gold rounded-full shadow-[0_0_10px_rgba(174,145,66,0.8)]" />
              <div className="flex items-center gap-3 mb-6 text-gold">
                <Calendar className="w-5 h-5" />
                <h2 className="font-serif text-2xl uppercase tracking-widest">Lead Time & Cancellations</h2>
              </div>
              <div className="space-y-6 text-offwhite/80 leading-relaxed text-sm">
                <p>
                  Estimated lead times will be provided at the time of order. While every effort is made to meet these timelines, the nature of handcrafted work may require adjustments.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3">Cancellations</h4>
                  <ul className="space-y-3 text-offwhite/60">
                    <li>Cancellations prior to material allocation may be considered on a case-by-case basis.</li>
                    <li>Once work has begun, the Commission Reservation becomes non-refundable.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Footer Text */}
            <div className="pt-12 border-t border-gold/20 text-center">
              <p className="text-gold/60 italic font-serif mb-2">Inspired by Rome. Crafted for Mastery.</p>
              <p className="text-offwhite/30 text-[10px] uppercase tracking-[0.2em] font-bold">Imperator Bow Company, Ltd. Co.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
