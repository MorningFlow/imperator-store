import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BowAnatomy from "@/components/BowAnatomy";
import WoodUSP from "@/components/WoodUSP";
import Collection from "@/components/Collection";
import Craftsmanship from "@/components/Craftsmanship";
import Pricing from "@/components/Pricing";
import Heritage from "@/components/Heritage";
import WhyImperator from "@/components/WhyImperator";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ImageSequencePingPong from "@/components/ImageSequencePingPong";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1: Hero — Premium Content Overlay Layout */}
        <section id="hero" className="relative min-h-screen bg-obsidian overflow-hidden flex flex-col items-start">

          {/* ─── BACKGROUND: Video Animation (Right-Aligned 2/3) ─────────────────── */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Mobile Animation */}
            <div className="absolute inset-0 block md:hidden">
              <ImageSequencePingPong
                folderPath="/frames-mobile"
                frameCount={145}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Desktop Animation: Pins to Right 2/3 */}
            <div className="absolute inset-y-0 right-0 w-full md:w-2/3 hidden md:block bg-obsidian">
              <ImageSequencePingPong
                folderPath="/frames-desktop"
                frameCount={96}
                className="w-full h-full object-contain object-center opacity-95"
              />
            </div>

            {/* Gradient Blending Layer: Deepened further right for maximum text contrast */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-gradient-to-r from-obsidian via-obsidian/98 via-55% to-transparent z-10 hidden md:block" />
            
            {/* Bottom-edge feather */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-10" />
            
            {/* Subtle dark vignette on outer right */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-obsidian/60 to-transparent z-10" />
          </div>

          {/* ─── FOREGROUND: Text Content (Overlays Left Side) ─────────────────── */}
          <div className="relative z-20 flex flex-col justify-center w-full md:w-1/2 min-h-screen pt-28 pb-12 px-8 md:px-10 lg:px-14 xl:px-20">
            {/* Top accent line */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-gold to-gold-dark mb-8" />

            {/* Eyebrow label */}
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/60 font-sans font-semibold mb-5">
              Handcrafted in Texas
            </p>

            {/* Main headline */}
            <h1 className="font-serif font-bold text-3xl sm:text-4xl xl:text-5xl text-gold-light leading-[1.15] uppercase tracking-tight mb-6">
              You Don&apos;t Hunt<br />for Meat.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-gold-dark font-extrabold">
                You Hunt for<br />the Story.
              </span>
            </h1>

            {/* Separator */}
            <div className="w-full max-w-[200px] h-[1px] bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mb-6" />

            {/* Sub-copy */}
            <p className="text-offwhite/60 font-sans text-sm leading-relaxed mb-10 max-w-sm">
              Most bows get forgotten in the truck.<br />
              The Imperator gets handed down.
            </p>

            {/* CTA Button */}
            <a
              href="#collection"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-7 py-3.5 rounded-sm uppercase text-[11px] tracking-[0.15em] w-fit mb-10 shadow-[0_4px_24px_rgba(174,145,66,0.25)] hover:shadow-[0_6px_32px_rgba(174,145,66,0.45)] hover:brightness-110 transition-all duration-300 active:scale-[0.98]"
            >
              Build Your Heirloom <ArrowRight className="w-4 h-4" />
            </a>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3">
              {[
                { label: "40% Deposit to Start" },
                { label: "Free US Shipping" },
                { label: "Texas-Made, Lifetime Backed" },
              ].map(({ label }) => (
                <span key={label} className="flex items-center gap-2 text-[11px] text-offwhite/50 font-medium tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <BowAnatomy />
        <WoodUSP />
        <Collection />
        <Craftsmanship />
        <Pricing />
        <Heritage />
        <WhyImperator />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
