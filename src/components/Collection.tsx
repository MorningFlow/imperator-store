"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import Lightbox from "./ui/Lightbox";

export default function Collection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="collection" className="wood-grain-bg bg-obsidian py-24 px-6 relative border-t border-charcoal/30">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none z-[1]" />

      <FadeIn className="text-center mb-16 relative z-10">
        <h4 className="text-offwhite/40 text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Products</h4>
        <p className="text-gold-light text-xs font-semibold tracking-widest font-sans mb-2 uppercase">The Collection</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-offwhite leading-tight">Three Models. Zero Compromises.</h2>
      </FadeIn>

      <div className="flex justify-center mx-auto max-w-6xl relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 w-full scrollbar-none items-stretch">
          
          {/* Card 1: Aquila Recurve */}
          <FadeIn delay={0.1} direction="up" className="flex flex-col snap-center shrink-0 w-[85vw] md:w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden shrink-0">
               <Image src="/aquila-new.jpg" alt="Aquila Recurve" fill className="object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700" />
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
               <Image src="/collection-2.jpg" alt="Praetorian Longbow" fill className="object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700" />
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

          {/* Card 3: Acies Triplex — Coming Soon */}
          <FadeIn delay={0.3} direction="up" className="flex flex-col snap-center shrink-0 w-[85vw] md:w-[340px] border border-gold/10 rounded-xl bg-gradient-to-br from-charcoal/30 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-80">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden shrink-0 bg-charcoal/20">
               <div className="absolute inset-0 flex items-center justify-center border-b border-gold/5">
                 <span className="text-gold/40 text-[10px] font-bold tracking-[0.5em] uppercase translate-y-2">Under Development</span>
               </div>
               <div className="relative z-10 text-gold-light/20 font-serif text-5xl select-none uppercase tracking-tighter opacity-10">
                 Acies
               </div>
            </div>
            <div className="px-5 pb-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-gold/50 text-xs font-bold tracking-widest font-sans uppercase">Takedown Recurve</h5>
                <span className="bg-gold/10 text-gold-light text-[8px] font-bold px-2 py-0.5 rounded-full border border-gold/20 tracking-tighter uppercase">Coming Q4</span>
              </div>
              <h3 className="text-offwhite/50 font-serif text-2xl mb-2">Acies Triplex</h3>
              <p className="text-offwhite/40 text-xs font-sans mb-6 leading-relaxed">The tactical genius of Rome’s triple battle line, reimagined for the modern archer. A three-piece takedown system currently in the final stages of engineering.</p>
              
              <div className="flex items-center justify-end mt-auto pt-4">
                <button 
                  disabled
                  className="flex items-center gap-1.5 bg-charcoal/50 text-offwhite/30 font-bold px-4 py-2 rounded text-[10px] tracking-wider uppercase cursor-not-allowed border border-white/5"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
      
      {/* Gallery Preview Section */}
      <div className="mt-24 max-w-6xl mx-auto border-t border-charcoal/30 pt-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="text-left">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Visual Heritage</h4>
            <h2 className="font-serif text-3xl text-offwhite uppercase tracking-wider">The Gallery</h2>
          </div>
          <Link 
            href="/gallery" 
            className="group flex items-center gap-2 text-gold-light hover:text-gold transition-colors text-xs font-bold tracking-widest uppercase border-b border-gold/20 pb-1"
          >
            Explore Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num, i) => (
            <FadeIn key={i} delay={0.1 * i} direction="up" className="aspect-square relative overflow-hidden rounded-lg border border-charcoal group bg-obsidian">
              <button 
                onClick={() => setSelectedImage(`/gallery/new/gallery-${num}.jpg`)}
                className="w-full h-full relative cursor-zoom-in"
              >
                <Image 
                  src={`/gallery/new/gallery-${num}.jpg`} 
                  alt={`Gallery Preview ${i + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] text-gold-light tracking-widest uppercase font-bold text-left leading-tight">View Details</span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
}
