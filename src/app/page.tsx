import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BowAnatomy from "@/components/BowAnatomy";
import WoodUSP from "@/components/WoodUSP";
import Collection from "@/components/Collection";
import Craftsmanship from "@/components/Craftsmanship";
import Heritage from "@/components/Heritage";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ImageSequencePingPong from "@/components/ImageSequencePingPong";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative min-h-[95vh] pt-24 pb-12 px-6 flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian z-0" />
          
          {/* Cinematic Ping-Pong Canvas Backgrounds */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-obsidian text-gold">
            {/* Mobile Animation */}
            <ImageSequencePingPong 
              folderPath="/frames-mobile"
              frameCount={145}
              className="w-full h-full object-cover opacity-90 blur-[0.5px] block md:hidden"
            />
            {/* Desktop Animation */}
            <ImageSequencePingPong 
              folderPath="/frames-desktop"
              frameCount={146}
              className="w-full h-full object-cover opacity-90 blur-[1px] hidden md:block"
            />
            {/* Dark gradient overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/20" />
            <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply" />
          </div>

          <div className="relative z-20 w-full max-w-md mx-auto mt-auto flex flex-col pb-8">
            <h2 className="font-serif text-4xl sm:text-5xl text-gold-light mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
              Where Legacy<br />
              Meets the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark font-medium">Kill Shot.</span>
            </h2>
            <p className="text-offwhite/80 font-sans text-sm mb-10 w-[85%] leading-relaxed mix-blend-plus-lighter shadow-black drop-shadow">
              Where Roman Imperial luxury meets modern hunting.
            </p>
            
            <button className="flex items-center gap-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-6 py-4 rounded uppercase text-sm tracking-wider w-full justify-center mb-6 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all active:scale-[0.98]">
              ORDER YOUR BOW <ArrowRight className="w-5 h-5 font-bold" />
            </button>
            
            <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center gap-x-3 gap-y-2 text-[11px] text-offwhite/70 font-medium tracking-wide">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" /> 25% Deposit</span>
              <span className="hidden sm:inline text-charcoal-light">/</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" /> Free US Shipping</span>
              <span className="hidden sm:inline text-charcoal-light">/</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" /> Texas-Made</span>
            </div>
          </div>
        </section>

        <BowAnatomy />
        <WoodUSP />
        <Collection />
        <Craftsmanship />
        <Heritage />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
