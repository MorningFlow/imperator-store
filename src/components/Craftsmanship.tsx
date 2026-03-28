import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-obsidian-light py-24 px-6 relative border-t border-charcoal">
      {/* Background Image */}
      <div className="absolute top-0 inset-x-0 h-96 overflow-hidden z-0">
         <Image 
            src="/the-craft-section.png" 
            alt="The Craft Workbench" 
            fill 
            className="object-cover opacity-60" 
         />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-light/90 to-obsidian-light z-0 pointer-events-none" />

      <FadeIn className="relative z-10 pt-24 max-w-lg mx-auto">
        <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">The Craft.</h4>
        <h2 className="font-serif text-4xl sm:text-5xl text-offwhite leading-[1.1] mb-2">24 Hours of Work.</h2>
        <h2 className="font-serif text-4xl sm:text-5xl text-gold-light leading-[1.1] mb-12 italic">A Lifetime of Shots.</h2>

        <div className="space-y-8">
          <FadeIn delay={0.1} direction="left" className="flex items-start gap-6 border-b border-charcoal/50 pb-6 border-l-2 border-l-transparent hover:border-l-gold pl-4 transition-all duration-300">
            <span className="text-gold text-4xl font-serif leading-none shrink-0">01</span>
            <div>
              <h3 className="text-offwhite text-sm font-bold tracking-widest uppercase mb-1 font-sans">Select Your Wood</h3>
              <p className="text-offwhite/50 text-xs leading-relaxed">Choose from our curated selection of exotic hardwoods, including curly maple and Banksia pod veneers.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left" className="flex items-start gap-6 border-b border-charcoal/50 pb-6 border-l-2 border-l-transparent hover:border-l-gold pl-4 transition-all duration-300">
            <span className="text-gold text-4xl font-serif leading-none shrink-0">02</span>
            <div>
              <h3 className="text-offwhite text-sm font-bold tracking-widest uppercase mb-1 font-sans">Deposit Secures Build</h3>
              <p className="text-offwhite/50 text-xs leading-relaxed">A 25% deposit secures your build slot in our forge.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left" className="flex items-start gap-6 border-b border-charcoal/50 pb-6 border-l-2 border-l-transparent hover:border-l-gold pl-4 transition-all duration-300">
            <span className="text-gold text-4xl font-serif leading-none shrink-0">03</span>
            <div>
              <h3 className="text-offwhite text-sm font-bold tracking-widest uppercase mb-1 font-sans">Hand Shaped & Tuned</h3>
              <p className="text-offwhite/50 text-xs leading-relaxed">Crafted, tillered, and tuned meticulously by hand to your exact draw specs.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left" className="flex items-start gap-6 border-l-2 border-l-transparent hover:border-l-gold pl-4 transition-all duration-300">
            <span className="text-gold text-4xl font-serif leading-none shrink-0">04</span>
            <div>
              <h3 className="text-offwhite text-sm font-bold tracking-widest uppercase mb-1 font-sans">Shipped To Your Door</h3>
              <p className="text-offwhite/50 text-xs leading-relaxed">Remaining balance is cleared and your bow ships securely, ready for the hunt.</p>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={0.5} direction="up" className="mt-12 w-full flex justify-center">
          <div className="inline-flex items-center gap-2 border border-gold/40 text-gold-light bg-gold/5 px-4 py-2 rounded-full text-[10px] tracking-widest font-sans font-medium uppercase uppercase">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 shrink-0" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold shrink-0" />
            </span>
            Limited Builds Per Month
          </div>
        </FadeIn>
      </FadeIn>
    </section>
  );
}
