"use client";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

export default function BowAnatomy() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="anatomy" className="bg-obsidian border-t border-charcoal/30 flex flex-col">
      
      {/* Headings */}
      <FadeIn className="text-center pt-24 pb-12 w-full z-10 px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light uppercase tracking-widest mb-3" style={{ letterSpacing: '0.1em' }}>
          NOTHING IS ACCIDENTAL.
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-offwhite/80">
          Every component chosen. Every detail intentional.
        </p>
      </FadeIn>

      {/* Edge-to-Edge Anatomy Video */}
      <div className="relative w-full aspect-video md:aspect-[21/9] z-0 overflow-hidden">
        <video 
          ref={videoRef}
          src="/Bow_anatomy.mp4" 
          className="object-cover w-full h-full"
          muted
          playsInline
        />
        
        {/* Soft Edge Vignettes */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-48 bg-gradient-to-b from-obsidian via-obsidian/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-48 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent pointer-events-none" />
      </div>

      {/* Details Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Riser */}
          <FadeIn delay={0.1} direction="up" className="border border-charcoal/50 bg-charcoal/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
            <div className="mb-4 border-b border-charcoal/50 pb-4">
              <h3 className="font-serif text-xl text-gold uppercase tracking-wider">The Riser <span className="text-xs text-offwhite/50 block font-sans tracking-normal mt-1">— Core Structure</span></h3>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-offwhite/70 leading-relaxed">
                <strong className="text-offwhite">The Control Hub.</strong> Hand-carved from figured walnut for an exceptional strength-to-weight ratio and visual dominance. 
              </p>
              <ul className="list-disc pl-4 text-offwhite/70 space-y-2">
                <li>Houses a precision-sculpted ergonomic grip for repeatable hand placement.</li>
                <li>Operates as the uncompromising load distribution center between the limbs.</li>
                <li>Heavier, denser mass guarantees maximum stability and deadens vibration upon release.</li>
              </ul>
            </div>
          </FadeIn>

          {/* Limbs */}
          <FadeIn delay={0.2} direction="up" className="border border-charcoal/50 bg-charcoal/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
            <div className="mb-4 border-b border-charcoal/50 pb-4">
              <h3 className="font-serif text-xl text-gold uppercase tracking-wider">The Limbs <span className="text-xs text-offwhite/50 block font-sans tracking-normal mt-1">— Energy System</span></h3>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-offwhite/70 leading-relaxed">
                <strong className="text-offwhite">The Engine.</strong> Forged from layers of laminated exotic hardwoods and reinforced with high-stress fiberglass.
              </p>
              <ul className="list-disc pl-4 text-offwhite/70 space-y-2">
                <li>Designed to aggressively store potential energy under extreme tension.</li>
                <li>Meticulously draw-tuned to deliver a violently smooth power curve.</li>
                <li>Advanced lamination drastically reduces energy bleed, maximizing kinetic output to the arrow.</li>
              </ul>
            </div>
          </FadeIn>

          {/* String */}
          <FadeIn delay={0.3} direction="up" className="border border-charcoal/50 bg-charcoal/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
            <div className="mb-4 border-b border-charcoal/50 pb-4">
              <h3 className="font-serif text-xl text-gold uppercase tracking-wider">The String <span className="text-xs text-offwhite/50 block font-sans tracking-normal mt-1">— Kinetic Transfer</span></h3>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-offwhite/70 leading-relaxed">
                <strong className="text-offwhite">The Lifeline.</strong> Spun from ultra-high molecular weight Dyneema fiber for immense tensile strength and zero creep.
              </p>
              <ul className="list-disc pl-4 text-offwhite/70 space-y-2">
                <li>Near-zero stretch translates to higher arrow velocity and pinpoint accuracy.</li>
                <li>Converts explosive limb energy efficiently into forward momentum.</li>
                <li>Dramatically reduces oscillation and shock compared to traditional strings.</li>
              </ul>
            </div>
          </FadeIn>

          {/* Nock */}
          <FadeIn delay={0.4} direction="up" className="border border-charcoal/50 bg-charcoal/10 rounded-xl p-6 hover:border-gold/30 transition-colors lg:col-start-1 md:col-start-1">
            <div className="mb-4 border-b border-charcoal/50 pb-4">
              <h3 className="font-serif text-xl text-gold uppercase tracking-wider">The Nock <span className="text-xs text-offwhite/50 block font-sans tracking-normal mt-1">— Connection Interface</span></h3>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-offwhite/70 leading-relaxed">
                <strong className="text-offwhite">The Critical Link.</strong> The reinforced anchor where the arrow locks onto the string, dictating the shot's initial geometry.
              </p>
              <ul className="list-disc pl-4 text-offwhite/70 space-y-2">
                <li>Precision seating ensures flawless, repeatable alignment on every draw.</li>
                <li>Exact nocking points eliminate chaotic energy dissipation.</li>
                <li>Guarantees the arrow departs perfectly straight, true to your aim.</li>
              </ul>
            </div>
          </FadeIn>

          {/* Arrow Rest */}
          <FadeIn delay={0.5} direction="up" className="border border-charcoal/50 bg-charcoal/10 rounded-xl p-6 hover:border-gold/30 transition-colors lg:col-start-2 md:col-start-2">
            <div className="mb-4 border-b border-charcoal/50 pb-4">
              <h3 className="font-serif text-xl text-gold uppercase tracking-wider">Arrow Rest <span className="text-xs text-offwhite/50 block font-sans tracking-normal mt-1">— Stability Guide</span></h3>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-offwhite/70 leading-relaxed">
                <strong className="text-offwhite">The Launch Pad.</strong> A whisper-quiet whisker-style containment system built for the unforgiving conditions of the hunt.
              </p>
              <ul className="list-disc pl-4 text-offwhite/70 space-y-2">
                <li>Cradles and guides the arrow, entirely eliminating lateral play during the draw cycle.</li>
                <li>"Whisker silence" dramatically cuts noise down to zero.</li>
                <li>Elevates field consistency and safety, at the cost of only nominal speed.</li>
              </ul>
            </div>
          </FadeIn>
          
          {/* System View */}
          <FadeIn delay={0.6} direction="up" className="border border-gold/40 bg-gradient-to-br from-gold/10 to-obsidian rounded-xl p-8 hover:border-gold/60 transition-colors lg:col-start-3 md:col-span-2 lg:col-span-1 flex flex-col justify-center shadow-[0_0_30px_rgba(235,186,116,0.05)]">
            <div className="mb-6 border-b border-gold/30 pb-4">
              <h3 className="font-serif text-xl text-gold-light uppercase tracking-wider">System Synergy</h3>
            </div>
            <p className="text-offwhite/80 text-sm mb-6 leading-relaxed">The anatomy of a kill shot:</p>
            <ul className="space-y-3 text-sm text-offwhite mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div> 
                <span><strong className="text-gold-light tracking-wide uppercase text-xs">Limbs</strong> aggressively store energy.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div> 
                <span><strong className="text-gold-light tracking-wide uppercase text-xs">String</strong> transfers it instantly.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div> 
                <span><strong className="text-gold-light tracking-wide uppercase text-xs">Riser</strong> grounds and stabilizes.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div> 
                <span><strong className="text-gold-light tracking-wide uppercase text-xs">Rest</strong> guides the departure.</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div> 
                <span><strong className="text-gold-light tracking-wide uppercase text-xs">Nock</strong> dictates the trajectory.</span>
              </li>
            </ul>
            <div className="mt-auto bg-gold/10 p-4 border-l-2 border-gold rounded-r">
              <p className="text-gold-light font-bold text-[10px] tracking-widest uppercase mb-1">Result</p>
              <p className="font-serif text-lg text-offwhite leading-tight">A controlled, repeatable, high-efficiency weapon.</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
