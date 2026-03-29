import ImageSequencePingPong from "./ImageSequencePingPong";

export default function Heritage() {
  return (
    <section id="heritage" className="bg-obsidian relative min-h-[90svh] md:min-h-screen border-t border-charcoal flex flex-col md:flex-row overflow-hidden pb-16 md:pb-0 pt-20 md:pt-0">
      
      {/* Left Column: Animation (1/3 area) with "Diffusion" style blending */}
      <div className="relative w-full md:w-1/3 flex items-center justify-center p-6 md:p-12 bg-obsidian">
        {/* Glow effect behind the video */}
        <div className="absolute w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full pointer-events-none opacity-40 animate-pulse" />
        
        <div className="relative w-full max-w-[340px] aspect-[9/16] group/video [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-composite:source-in]">
          <ImageSequencePingPong 
            folderPath="/frames-scroll" 
            frameCount={120} 
            className="w-full h-full object-cover md:blur-[0.5px] transform-gpu opacity-80 transition-transform duration-700 group-hover/video:scale-105" 
          />
          {/* Subtle overlay gradient to deepen the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right Column: Foreground Typography Content (2/3 area) */}
      <div className="relative z-20 w-full md:w-2/3 flex items-center justify-start pr-6 md:pr-12 lg:pr-24 py-10 md:py-24 pointer-events-none">
        <div className="w-full bg-obsidian-light/30 backdrop-blur-xl rounded-[2rem] border border-gold/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)] pointer-events-auto text-left relative overflow-hidden flex flex-col min-h-[400px]">
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-[2rem] opacity-50 pointer-events-none z-10" />
          
          <div className="p-8 md:p-12 xl:p-20">
            <h4 className="text-gold text-[10px] md:text-sm font-bold tracking-[0.4em] font-sans mb-6 uppercase drop-shadow flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold/40"></span>
              The Birth of Imperator
            </h4>
            <h2 className="font-serif text-4xl sm:text-5xl xl:text-7xl text-offwhite leading-[1.05] mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] tracking-tight">
              Drawing from antiquity.
            </h2>
            <h2 className="font-serif text-4xl sm:text-5xl xl:text-7xl text-gold-light leading-[1.05] mb-12 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] tracking-tight">
              Built for the modern hunter.
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-offwhite/90 font-sans text-base md:text-lg leading-relaxed shadow-black drop-shadow font-light">
              <div className="space-y-6">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                  Imperator — Latin for Commander — symbolizes both strength and accountability. Our bows are built to embody Roman ideals: strength balanced by grace, purpose bound by discipline, and form perfected through dedication.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Every riser is hand-shaped, every lamination precision-fitted, and every finish applied with extreme care. An Imperator bow is more than a tool — it&apos;s a reflection of the craftsman&apos;s journey, from childhood inspiration to veteran mastery.
                </p>
                <div className="pt-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-gold/40"></div>
                  <p className="text-gold text-sm md:text-base italic font-serif tracking-widest uppercase opacity-80">A completely unyielding masterpiece.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
