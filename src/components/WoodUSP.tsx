import Image from "next/image";

export default function WoodUSP() {
  return (
    <section className="bg-obsidian border-t border-charcoal/50">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Wood Textures Mock */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <Image 
            src="/exotic-wood.png" 
            alt="Exotic Wood" 
            fill 
            className="object-cover" 
          />
        </div>

        {/* Right Side: USP Text */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-obsidian-light/50">
          <h4 className="text-offwhite/40 text-xs font-bold tracking-[0.2em] font-sans mb-4 uppercase">The Imperator Difference.</h4>
          <h2 className="font-serif text-3xl sm:text-4xl text-offwhite leading-tight mb-2">We Don&apos;t Sell You a Bow.</h2>
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-light mb-10 leading-tight">We sell you the wood.</h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <div className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">Exotic Hardwoods</h3>
              <p className="text-offwhite/60 text-xs font-sans">Sourced globally for strength and beauty, ensuring a flawless build every time.</p>
            </div>

            {/* Card 2 */}
            <div className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">Built For Hunters</h3>
              <p className="text-offwhite/60 text-xs font-sans">Engineered for stealth and field performance. Unyielding power on every draw.</p>
            </div>

            {/* Card 3 */}
            <div className="border-l-2 border-gold/50 bg-charcoal/30 p-5 rounded-r">
              <h3 className="text-offwhite font-sans text-sm font-semibold tracking-wide uppercase mb-1">One-of-One</h3>
              <p className="text-offwhite/60 text-xs font-sans">No two IMPERATOR bows share the same pattern. Your bow is singularly yours.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
