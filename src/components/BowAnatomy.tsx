"use client";
import * as React from "react";
import FadeIn from "./FadeIn";
import ImageSequencePingPong from "./ImageSequencePingPong";

export default function BowAnatomy() {
  return (
    <section id="anatomy" className="bg-obsidian border-t border-charcoal/30 flex flex-col lg:flex-row relative">
      
      {/* Left Column: Video + Synergy Card */}
      <div className="w-full lg:w-[55%] xl:w-[60%] lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-6 md:p-10 lg:p-12 xl:p-16 bg-obsidian border-b lg:border-b-0 lg:border-r border-charcoal/30 gap-5">
        {/* Video Container with Diffusion Blending */}
        <FadeIn delay={0.1} direction="up" className="relative w-full max-w-2xl flex items-center justify-center">
          {/* Subtle glow behind the animation */}
          <div className="absolute w-[110%] h-[110%] bg-gold/5 blur-[80px] rounded-full pointer-events-none opacity-40 animate-pulse" />
          
          <div className="relative w-full aspect-video group/video [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-composite:source-in]">
            <ImageSequencePingPong 
              folderPath="/frames-anatomy"
              frameCount={96}
              className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover/video:scale-105 opacity-90"
            />
          </div>
        </FadeIn>

        {/* System Synergy — below the video */}
        <FadeIn delay={0.7} direction="up" className="w-full max-w-2xl bg-gradient-to-br from-gold/10 to-obsidian border border-gold/20 rounded-xl p-6 shadow-2xl hover:border-gold/40 transition-colors">
          <h3 className="font-serif text-base text-gold-light uppercase tracking-widest mb-3 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gold-light/50" /> System Synergy
          </h3>
          <p className="font-serif text-lg sm:text-xl text-offwhite leading-relaxed italic pr-4">
            &ldquo;Every piece operating in flawless unison. A controlled, repeatable, high-efficiency weapon.&rdquo;
          </p>
        </FadeIn>
      </div>

      {/* Right Column: Header + Scrollable Details */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-obsidian px-6 lg:px-12 xl:px-20 py-16 lg:py-32 flex flex-col gap-12 lg:gap-20 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.1} direction="up" className="mb-4 lg:mb-8 border-b border-charcoal/30 pb-12">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block font-medium opacity-80">Finalized Precision</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-gold-light uppercase tracking-tight mb-6 drop-shadow-[0_4px_15px_rgba(174,145,66,0.2)]">
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
      </div>
    </section>
  );
}
