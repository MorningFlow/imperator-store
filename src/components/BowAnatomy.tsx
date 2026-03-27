import Image from "next/image";

export default function BowAnatomy() {
  return (
    <section className="bg-obsidian py-20 px-4 md:px-8 border-t border-charcoal/30 flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-10 w-full z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light uppercase tracking-widest mb-3" style={{ letterSpacing: '0.1em' }}>
          NOTHING IS ACCIDENTAL.
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-offwhite/80">
          Every component chosen. Every detail intentional.
        </p>
      </div>

      {/* Anatomy Image (Labels are baked in) */}
      <div className="relative w-full max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] z-0">
        <Image 
          src="/nothing-accidental-bg.png" 
          alt="Imperator Bow Anatomy Details" 
          fill 
          className="object-contain" 
          priority
        />
        
        {/* Soft Edge Vignette Fades to blend directly with the background */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-32 bg-gradient-to-b from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-32 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
