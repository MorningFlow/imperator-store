import ImageSequencePingPong from "./ImageSequencePingPong";

export default function Heritage() {
  return (
    <section id="heritage" className="bg-obsidian relative min-h-[90svh] md:min-h-screen border-t border-charcoal flex flex-col md:flex-row overflow-hidden pb-16 md:pb-0 pt-20 md:pt-0">
      
      {/* Left Column: Animation */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen pointer-events-none bg-obsidian">
        <ImageSequencePingPong 
          folderPath="/frames-scroll" 
          frameCount={120} 
          className="w-full h-full object-contain md:object-cover md:blur-[1px] scale-125 transform-gpu" 
        />
      </div>

      {/* Right Column: Foreground Typography Content */}
      <div className="relative z-20 w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-10 md:py-0 pointer-events-none">
        <div className="max-w-xl mx-auto md:mx-0 w-full bg-obsidian-light/20 backdrop-blur-[2px] p-6 md:p-10 rounded-2xl border border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto text-left">
          <h4 className="text-gold text-[10px] md:text-sm font-bold tracking-[0.3em] font-sans mb-4 uppercase drop-shadow">The Birth of Imperator</h4>
          <h2 className="font-serif text-3xl sm:text-5xl text-offwhite leading-[1.1] mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            Drawing from antiquity.
          </h2>
          <h2 className="font-serif text-3xl sm:text-5xl text-gold-light leading-[1.1] mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
            Built for the modern hunter.
          </h2>
          
          <div className="space-y-4 text-offwhite/80 font-sans text-sm md:text-base leading-relaxed shadow-black drop-shadow">
            <p>
              Imperator — Latin for Commander — symbolizes both strength and accountability. Our bows are built to embody Roman ideals: strength balanced by grace, purpose bound by discipline, and form perfected through dedication.
            </p>
            <p>
              Every riser is hand-shaped, every lamination precision-fitted, and every finish applied with extreme care. An Imperator bow is more than a tool — it&apos;s a reflection of the craftsman&apos;s journey, from childhood inspiration to veteran mastery.
            </p>
          </div>

          <p className="mt-8 text-gold text-xs md:text-sm italic font-serif tracking-wider border-l-2 border-gold pl-4">A completely unyielding masterpiece.</p>
        </div>
      </div>
    </section>
  );
}
