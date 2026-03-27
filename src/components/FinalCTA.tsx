import { ShieldCheck, Crosshair, Award } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="bg-obsidian border-t border-charcoal/30 relative py-32 px-6 flex items-center justify-center overflow-hidden group">
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
        <div className="flex justify-center mb-6 relative h-32 w-32 mx-auto">
          <Image src="/rounded-logo.png" alt="Imperator Icon" fill className="object-contain drop-shadow-lg" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl text-offwhite leading-[1.1] mb-6 shadow-black drop-shadow-lg">
          YOUR BUILD SLOT<br/>
          IS <span className="text-gold-light">WAITING.</span>
        </h2>
        
        <p className="text-offwhite/80 font-sans italic text-sm mb-12 shadow-black drop-shadow w-3/4 mx-auto leading-relaxed">
          Forged in Texas. Reliable now, convenient and modern build slot now.
        </p>

        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-8 py-4 rounded uppercase text-sm tracking-wider w-full shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-all active:scale-[0.98] mx-auto sm:w-3/4">
          <Crosshair className="w-5 h-5 font-bold" /> CLAIM YOUR BUILD SLOT NOW
        </button>
      </div>
    </section>
  );
}
