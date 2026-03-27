import ScrollSequenceCanvas from "./ScrollSequenceCanvas";

export default function Heritage() {
  return (
    <section className="bg-obsidian relative h-[250vh] border-t border-charcoal">
      
      {/* Scroll-scrubbed Canvas Animation locked into the background */}
      <ScrollSequenceCanvas 
        folderPath="/frames-scroll" 
        frameCount={120} 
        /* 9:16 portrait frames. Match prompt requests: full fill on desktop, keep native shape on mobile */
        className="w-full h-[90svh] md:h-full object-contain md:object-cover md:blur-[1px] mix-blend-screen mix-blend-plus-lighter opacity-80 scale-125 transform-gpu" 
      />

      {/* Foreground Typography Content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* We use a sticky container so the text stays perfectly framed with the spinning bow */}
        <div className="sticky top-0 h-screen w-full flex items-end justify-center px-6 pb-24 md:pb-32">
          <div className="text-center max-w-2xl mx-auto bg-obsidian-light/20 backdrop-blur-[2px] p-6 md:p-10 rounded-2xl border border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
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
      </div>
    </section>
  );
}
