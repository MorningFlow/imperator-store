import ImageSequencePingPong from "./ImageSequencePingPong";

export default function Heritage() {
  return (
    <section id="heritage" className="bg-obsidian relative min-h-[90svh] md:min-h-screen border-t border-charcoal flex flex-col items-center justify-end overflow-hidden pb-16 md:pb-24 pt-20">
      
      {/* Looping Canvas Animation locked into the background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-obsidian">
        <ImageSequencePingPong 
          folderPath="/frames-scroll" 
          frameCount={120} 
          /* 9:16 portrait frames. Match prompt requests: full fill on desktop, keep native shape on mobile */
          className="w-full h-full object-contain md:object-cover md:blur-[1px] mix-blend-screen mix-blend-plus-lighter opacity-80 scale-125 transform-gpu" 
        />
        {/* Dark gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent mix-blend-multiply opacity-80" />
      </div>

      {/* Foreground Typography Content */}
      <div className="relative z-20 w-full flex items-end justify-center px-6 pointer-events-none">
        <div className="text-center max-w-2xl mx-auto bg-obsidian-light/20 backdrop-blur-[2px] p-6 md:p-10 rounded-2xl border border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">
          <h4 className="text-gold text-[10px] md:text-xs font-bold tracking-[0.3em] font-sans mb-4 uppercase drop-shadow">Inherit The Legend.</h4>
          <h2 className="font-serif text-3xl sm:text-5xl text-offwhite leading-[1.1] mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            Drawing from antiquity.
          </h2>
          <h2 className="font-serif text-3xl sm:text-5xl text-gold-light leading-[1.1] mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            Built for the modern hunter.
          </h2>
          <p className="text-offwhite/50 text-xs md:text-sm italic font-serif tracking-wider">A completely unyielding masterpiece.</p>
        </div>
      </div>
    </section>
  );
}
