"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Collection() {
  return (
    <section id="collection" className="bg-obsidian py-24 px-6 relative border-t border-charcoal/30">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <h4 className="text-offwhite/40 text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Products</h4>
        <p className="text-gold-light text-xs font-semibold tracking-widest font-sans mb-2 uppercase">The Collection</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-offwhite leading-tight">Three Models. Zero Compromises.</h2>
      </FadeIn>

      <div className="flex justify-center mx-auto max-w-6xl">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 w-full scrollbar-none items-stretch">
          
          {/* Card 1: Aquila Recurve */}
          <FadeIn delay={0.1} direction="up" className="flex flex-col snap-center shrink-0 w-[85vw] md:w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden shrink-0">
               <Image src="/Product1.png" alt="Aquila Recurve" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-5 pb-6 flex flex-col flex-1">
              <h5 className="text-gold text-xs font-bold tracking-widest font-sans mb-2 uppercase">Compact Recurve · 56"</h5>
              <h3 className="text-offwhite font-serif text-2xl mb-2">Aquila — The Eagle</h3>
              <p className="text-offwhite/60 text-xs font-sans mb-6 leading-relaxed">The Aquila symbolizes command and agility. Compact, fast, and fiercely elegant, it’s designed for archers who value power and precision in equal measure.</p>
              
              <div className="flex items-center justify-end mt-auto pt-4">
                <button 
                  onClick={() => { const elem = document.getElementById("cta"); if (elem) elem.scrollIntoView({ behavior: "smooth" }); }}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-gold-light to-gold text-obsidian font-bold px-4 py-2 rounded text-[10px] tracking-wider hover:opacity-90 transition-opacity uppercase"
                >
                  Reserve <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Praetorian Longbow */}
          <FadeIn delay={0.2} direction="up" className="flex flex-col snap-center shrink-0 w-[85vw] md:w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden shrink-0">
               <Image src="/Product2.png" alt="Praetorian Longbow" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-5 pb-6 flex flex-col flex-1">
              <h5 className="text-gold text-xs font-bold tracking-widest font-sans mb-2 uppercase">Hybrid Longbow · 58"</h5>
              <h3 className="text-offwhite font-serif text-2xl mb-2">Praetorian</h3>
              <p className="text-offwhite/60 text-xs font-sans mb-6 leading-relaxed">The companion of choice. A hybrid longbow engineered for balance, silence, and smooth performance. It honors the disciplined protectors of Rome.</p>
              
              <div className="flex items-center justify-end mt-auto pt-4">
                <button 
                  onClick={() => { const elem = document.getElementById("cta"); if (elem) elem.scrollIntoView({ behavior: "smooth" }); }}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-gold-light to-gold text-obsidian font-bold px-4 py-2 rounded text-[10px] tracking-wider hover:opacity-90 transition-opacity uppercase"
                >
                  Reserve <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Acies Triplex */}
          <FadeIn delay={0.3} direction="up" className="flex flex-col snap-center shrink-0 w-[85vw] md:w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden shrink-0 bg-obsidian border-b border-charcoal">
               <Image src="/logo.png" alt="Acies Triplex Recurve" width={120} height={40} className="object-contain opacity-50 drop-shadow-lg" />
            </div>
            <div className="px-5 pb-6 flex flex-col flex-1">
              <h5 className="text-gold text-xs font-bold tracking-widest font-sans mb-2 uppercase">Takedown Recurve</h5>
              <h3 className="text-offwhite font-serif text-2xl mb-2">Acies Triplex</h3>
              <p className="text-offwhite/60 text-xs font-sans mb-6 leading-relaxed">Pays homage to the tactical genius of Rome’s triple battle line. Modular and precise, this three-piece recurve is designed for modern archers who travel or compete.</p>
              
              <div className="flex items-center justify-end mt-auto pt-4">
                <button 
                  onClick={() => { const elem = document.getElementById("cta"); if (elem) elem.scrollIntoView({ behavior: "smooth" }); }}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-gold-light to-gold text-obsidian font-bold px-4 py-2 rounded text-[10px] tracking-wider hover:opacity-90 transition-opacity uppercase"
                >
                  Reserve <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
