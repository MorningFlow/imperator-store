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
    <section id="anatomy" className="bg-obsidian border-t border-charcoal/30 flex flex-col lg:flex-row relative">
      
      {/* Left Column: Sticky Media (Video + Heading) */}
      <div className="w-full lg:w-[60%] xl:w-[65%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-charcoal/30">
        <div className="absolute inset-0 z-0 bg-obsidian">
          <video 
            ref={videoRef}
            src="/Bow_anatomy.mp4" 
            className="object-cover w-full h-full opacity-50 mix-blend-screen scale-105"
            muted
            playsInline
            loop
          />
          {/* Soft Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-obsidian via-obsidian/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pointer-events-none lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian via-obsidian/30 to-transparent pointer-events-none" />
        </div>
        
        <FadeIn className="relative z-10 text-center lg:text-left px-6 lg:px-16 pt-32 pb-48 lg:py-0 pointer-events-none">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gold-light uppercase tracking-widest mb-4 drop-shadow-[0_4px_15px_rgba(212,175,55,0.4)]" style={{ letterSpacing: '0.1em' }}>
            NOTHING IS<br className="hidden lg:block" /> ACCIDENTAL.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-offwhite/90 drop-shadow-lg max-w-sm mx-auto lg:mx-0">
            Every component chosen.<br className="hidden lg:block" /> Every detail intentional.
          </p>
        </FadeIn>
      </div>

      {/* Right Column: Scrollable Details */}
      <div className="w-full lg:w-[40%] xl:w-[35%] bg-obsidian px-6 lg:px-12 xl:px-20 py-16 lg:py-32 flex flex-col gap-12 lg:gap-24 relative z-10">
        
        {/* Riser */}
        <FadeIn delay={0.1} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Riser</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Control Hub.</strong> Hand-carved from figured walnut for supreme strength. Houses an ergonomic grip for perfect, repeatable hand placement while deadening vibration.
          </p>
        </FadeIn>

        {/* Limbs */}
        <FadeIn delay={0.2} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Limbs</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Engine.</strong> Laminated hardwoods and high-stress fiberglass securely store energy, delivering a violently smooth draw curve with zero power bleed.
          </p>
        </FadeIn>

        {/* String */}
        <FadeIn delay={0.3} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The String</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Lifeline.</strong> Spun from zero-creep Dyneema fiber. Maximizes arrow velocity by eliminating stretch, converting raw tension fully into forward momentum.
          </p>
        </FadeIn>

        {/* Nock */}
        <FadeIn delay={0.4} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">The Nock</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Critical Link.</strong> The precision anchor point locking the arrow to the string, ensuring flawless departure alignment and consistent flight geometry.
          </p>
        </FadeIn>

        {/* Arrow Rest */}
        <FadeIn delay={0.5} direction="up" className="border-l-[3px] border-gold/40 pl-6 lg:pl-10 hover:border-gold transition-colors group">
          <h3 className="font-serif text-2xl lg:text-3xl text-gold uppercase tracking-wider mb-2 group-hover:text-gold-light transition-colors">Arrow Rest</h3>
          <p className="text-offwhite/70 text-base leading-relaxed max-w-lg">
            <strong className="text-offwhite">The Launch Pad.</strong> A near-silent containment system that annihilates lateral play during your draw, granting ultimate stability for split-second hunting shots.
          </p>
        </FadeIn>
        
        {/* System Synergy Highlight */}
        <FadeIn delay={0.6} direction="up" className="mt-8 bg-gradient-to-br from-gold/10 to-obsidian border border-gold/20 rounded-xl p-8 shadow-2xl max-w-lg hover:border-gold/40 transition-colors">
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
