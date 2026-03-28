"use client";
import * as React from "react";
import FadeIn from "./FadeIn";
import ImageSequencePingPong from "./ImageSequencePingPong";

export default function BowAnatomy() {
  return (

    <section id="anatomy" className="bg-obsidian border-t border-charcoal/30 flex flex-col lg:flex-row relative">
      
      {/* Left Column: Sticky Media (Video + Heading) */}
      <div className="w-full lg:w-[60%] xl:w-[65%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-charcoal/30">
        <div className="absolute inset-0 z-0 bg-obsidian">
          <ImageSequencePingPong 
            folderPath="/frames-anatomy"
            frameCount={96}
            className="w-full h-full object-cover opacity-80 mix-blend-screen scale-105"
          />
          {/* Soft Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-obsidian via-obsidian/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent pointer-events-none lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian via-obsidian/15 to-transparent pointer-events-none" />
        </div>
        

      </div>

      {/* Right Column: Scrollable Details */}
      <div className="w-full lg:w-[40%] xl:w-[35%] bg-obsidian px-6 lg:px-12 xl:px-20 py-16 lg:py-32 flex flex-col gap-12 lg:gap-24 relative z-10">
        {/* 1. New Header Location */}
        <FadeIn delay={0.1} direction="up" className="mb-8 lg:mb-12 border-b border-charcoal/30 pb-12">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block font-medium opacity-80">Finalized Precision</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-gold-light uppercase tracking-tight mb-6 drop-shadow-[0_4px_15px_rgba(212,175,55,0.2)]">
            Nothing is<br /> Accidental.
          </h2>
          <p className="font-sans text-sm md:text-base text-offwhite/60 tracking-wide leading-relaxed max-w-sm">
            Every component chosen with intent. Every detail engineered for a legacy that lasts generations.
          </p>
          <div className="h-[2px] w-12 bg-gold/40 mt-10" />
        </FadeIn>

        {/* Riser */}
        <FadeIn delay={0.2} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Riser</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Control Hub.</strong> Hand-carved from figured walnut for supreme strength. Houses an ergonomic grip for perfect, repeatable hand placement while deadening vibration.
          </p>
        </FadeIn>

        {/* Limbs */}
        <FadeIn delay={0.3} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Limbs</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Engine.</strong> Laminated hardwoods and high-stress fiberglass securely store energy, delivering a violently smooth draw curve with zero power bleed.
          </p>
        </FadeIn>

        {/* String */}
        <FadeIn delay={0.4} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The String</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Lifeline.</strong> Spun from zero-creep Dyneema fiber. Maximizes arrow velocity by eliminating stretch, converting raw tension fully into forward momentum.
          </p>
        </FadeIn>

        {/* Nock */}
        <FadeIn delay={0.5} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Nock</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Critical Link.</strong> The precision anchor point locking the arrow to the string, ensuring flawless departure alignment and consistent flight geometry.
          </p>
        </FadeIn>

        {/* Arrow Rest */}
        <FadeIn delay={0.6} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">Arrow Rest</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Launch Pad.</strong> A near-silent containment system that annihilates lateral play during your draw, granting ultimate stability for split-second hunting shots.
          </p>
        </FadeIn>
        
        {/* System Synergy Highlight */}
        <FadeIn delay={0.7} direction="up" className="mt-8 bg-gradient-to-br from-gold/10 to-obsidian border border-gold/20 rounded-xl p-8 shadow-2xl max-w-lg hover:border-gold/40 transition-colors">
          <h3 className="font-serif text-lg text-gold-light uppercase tracking-widest mb-4 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gold-light/50" /> System Synergy
          </h3>
          <p className="font-serif text-xl sm:text-2xl text-offwhite leading-relaxed italic pr-4">
            &ldquo;Every piece operating in flawless unison. A controlled, repeatable, high-efficiency weapon.&rdquo;
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
