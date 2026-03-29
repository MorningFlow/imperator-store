"use client";
import { ShieldCheck, Crosshair, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBuildModal } from "@/context/BuildModalContext";

export default function FinalCTA() {
  const { openBuildModal } = useBuildModal();
  return (
    <section id="cta" className="bg-obsidian border-t border-charcoal/30 relative py-32 px-6 flex items-center justify-center overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-50 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-in-out">
          <Image
            src="/coloseum.png"
            alt="Colosseum Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-lg mx-auto text-center">
        <motion.div 
          className="flex justify-center mb-6 relative h-48 w-48 mx-auto"
          animate={{ 
            rotateY: [0, 360],
            rotateZ: [-2, 2, -2],
            y: [-10, 10, -10],
          }}
          transition={{ 
            rotateY: { 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 1.5, 
              ease: "easeInOut" 
            },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          <Image 
            src="/rounded-logo.png" 
            alt="Imperator Icon" 
            fill 
            className="object-contain drop-shadow-[0_15px_35px_rgba(174,145,66,0.4)] transition-all duration-700 hover:drop-shadow-[0_20px_45px_rgba(174,145,66,0.6)]" 
          />
        </motion.div>

        <div className="relative inline-block mx-auto mb-10 p-[1px] rounded-sm overflow-hidden shadow-[0_0_50px_rgba(174,145,66,0.05)]">
          {/* Revolving edge glow */}
          <motion.div
            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_240deg,rgba(174,145,66,0.8)_360deg)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* Text Container */}
          <div className="relative bg-obsidian/90 backdrop-blur-md px-10 py-8 h-full w-full rounded-sm overflow-hidden">
            <h2 className="font-serif text-4xl sm:text-5xl text-offwhite leading-[1.1] relative z-20">
              YOUR BUILD SLOT<br />
              IS <span className="text-gold-light">WAITING.</span>
            </h2>

            {/* Glowing wipe over text */}
            <motion.div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold-light/20 to-transparent z-30 pointer-events-none skew-x-12"
              animate={{ x: ['-250%', '350%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        <p className="text-offwhite/80 font-sans text-sm mb-10 shadow-black drop-shadow w-full md:w-5/6 mx-auto leading-relaxed">
          Hand-crafted in Texas, every Imperator bow is a commitment to uncompromising excellence. Due to the meticulous, 30+ hours of work required for each piece, we only accept a strictly limited number of commissions per month. Secure your place in the forge today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck strokeWidth={1.5} className="w-6 h-6 text-gold mb-3 mx-auto opacity-90" />
            <h4 className="text-gold-light text-[10px] tracking-[0.2em] font-sans uppercase mb-1 font-bold">Lifetime Warranty</h4>
            <p className="text-offwhite/50 text-[10px]">Guaranteed for life.</p>
          </div>
          <div className="flex flex-col items-center">
            <Award strokeWidth={1.5} className="w-6 h-6 text-gold mb-3 mx-auto opacity-90" />
            <h4 className="text-gold-light text-[10px] tracking-[0.2em] font-sans uppercase mb-1 font-bold">Texas Forged</h4>
            <p className="text-offwhite/50 text-[10px]">Handcrafted in the USA.</p>
          </div>
          <div className="flex flex-col items-center">
            <Crosshair strokeWidth={1.5} className="w-6 h-6 text-gold mb-3 mx-auto opacity-90" />
            <h4 className="text-gold-light text-[10px] tracking-[0.2em] font-sans uppercase mb-1 font-bold">Precision Tillered</h4>
            <p className="text-offwhite/50 text-[10px]">Tuned to your exact specs.</p>
          </div>
        </div>

        <button 
          onClick={() => openBuildModal()}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-8 py-4 rounded uppercase text-sm tracking-wider w-full shadow-[0_10px_30px_rgba(174,145,66,0.25)] hover:shadow-[0_10px_40px_rgba(174,145,66,0.4)] transition-all active:scale-[0.98] mx-auto sm:w-3/4 mb-4"
        >
          <Crosshair className="w-4 h-4 font-bold" /> CLAIM YOUR BUILD SLOT NOW
        </button>
        <p className="text-offwhite/40 text-[10px] uppercase tracking-widest font-sans mt-2">
          Subject to current waitlist times.
        </p>
      </div>
    </section>
  );
}
