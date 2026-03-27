import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Collection() {
  return (
    <section className="bg-obsidian py-24 px-6 relative border-t border-charcoal/30">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h4 className="text-offwhite/40 text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Products</h4>
        <p className="text-gold-light text-xs font-semibold tracking-widest font-sans mb-2 uppercase">The Collection</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-offwhite leading-tight">Two Models. Zero Compromises.</h2>
      </div>

      <div className="flex justify-center mx-auto max-w-5xl">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 w-full scrollbar-none items-center">
          
          {/* Card 1: Aquila Recurve */}
          <div className="snap-center shrink-0 w-[85vw] max-w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden">
               <Image src="/product1.png" alt="Aquila Recurve" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-5 pb-6">
              <h5 className="text-gold text-xs font-bold tracking-widest font-sans mb-2 uppercase">The Recurve · Aquila</h5>
              <h3 className="text-offwhite font-serif text-2xl mb-4">Sculpted for Power.</h3>
              
              <div className="flex items-center justify-between mt-8">
                <span className="text-gold-light font-serif text-xl">$1,299</span>
                <button className="flex items-center gap-1.5 bg-gradient-to-r from-gold-light to-gold text-obsidian font-bold px-4 py-2 rounded uppercase text-[10px] tracking-wider hover:opacity-90 transition-opacity">
                  View Detail <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Praetorian Longbow */}
          <div className="snap-center shrink-0 w-[85vw] max-w-[340px] border border-gold/30 rounded-xl bg-gradient-to-br from-charcoal/50 to-obsidian p-1 overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="h-48 w-full rounded-t-lg mb-6 relative flex items-center justify-center overflow-hidden">
               <Image src="/product2.png" alt="Praetorian Longbow" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-5 pb-6">
              <h5 className="text-gold text-xs font-bold tracking-widest font-sans mb-2 uppercase">The Longbow · Praetorian</h5>
              <h3 className="text-offwhite font-serif text-2xl mb-4">The Weapon of Emperors.</h3>
              
              <div className="flex items-center justify-between mt-8">
                <span className="text-gold-light font-serif text-xl">$1,299</span>
                <button className="flex items-center gap-1.5 bg-gradient-to-r from-gold-light to-gold text-obsidian font-bold px-4 py-2 rounded uppercase text-[10px] tracking-wider hover:opacity-90 transition-opacity">
                  View Detail <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
