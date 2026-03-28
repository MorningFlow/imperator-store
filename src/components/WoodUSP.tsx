"use client";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

export default function WoodUSP() {
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
    <section id="materials" className="bg-obsidian border-t border-charcoal/50">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Video */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <video 
            ref={videoRef}
            src="/plank_fan_out.mp4" 
            className="object-cover w-full h-full"
            muted
            playsInline
            loop
          />
        </div>

        {/* Right Side: USP Text */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-obsidian-light/50 overflow-hidden">
          <FadeIn direction="up">
            <h4 className="text-offwhite/40 text-xs font-bold tracking-[0.2em] font-sans mb-4 uppercase">The Imperator Difference.</h4>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite leading-tight mb-2">We Don&apos;t Sell You a Bow.</h2>
            <h2 className="font-serif text-3xl sm:text-4xl text-gold-light mb-10 leading-tight">We sell you the wood.</h2>
          </FadeIn>

          <div className="space-y-4">
            {/* Card 1 */}
            <FadeIn delay={0.1} direction="left" className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">Exotic Hardwoods</h3>
              <p className="text-offwhite/60 text-xs font-sans">Sourced globally for strength and beauty. Features elite materials like Spalted Tamarind, Kingwood, and Osage Orange.</p>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2} direction="left" className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">Unbreakable Cores</h3>
              <p className="text-offwhite/60 text-xs font-sans">Reinforced with a precision-cut FR-4 I-beam core for unyielding stability and strength.</p>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3} direction="left" className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">Krystal Finish</h3>
              <p className="text-offwhite/60 text-xs font-sans">Heat-cured and protected by an ML Campbell Krystal finish for unmatched environmental resistance.</p>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
