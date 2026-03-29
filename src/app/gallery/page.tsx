"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";
import SplitHeading from "@/components/ui/SplitHeading";

const galleryImages = [
  { src: "/gallery/new/gallery-1.jpg", title: "Limbs of Power", category: "Craftsmanship" },
  { src: "/gallery/new/gallery-2.jpg", title: "The Archer's Grip", category: "Detail" },
  { src: "/gallery/new/gallery-3.jpg", title: "Grain & Gold", category: "Materials" },
  { src: "/gallery/new/gallery-4.jpg", title: "Handcrafted Riser", category: "Workshop" },
  { src: "/gallery/new/gallery-5.jpg", title: "The Finish", category: "Craftsmanship" },
  { src: "/gallery/new/gallery-6.jpg", title: "Forged Legend", category: "Archive" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-32 pb-24 px-6 bg-obsidian relative overflow-hidden">
        {/* Subtle Background Radial Gradient */}
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/#collection" 
            className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-all text-xs font-bold tracking-widest uppercase mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="relative">
              Back to Collection
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </span>
          </Link>
          
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Visual Heritage</span>
            </motion.div>
            
            <SplitHeading 
              text="THE GALLERY" 
              className="font-serif text-5xl md:text-8xl lg:text-9xl text-offwhite mb-8 uppercase tracking-tighter leading-none"
            />
            
            <p className="text-offwhite/50 text-base md:text-lg max-w-xl font-sans leading-relaxed tracking-wide">
              Explore the intersection of Roman tradition and modern precision. Every Imperator bow is a testament to functional art, captured in cinematic detail.
            </p>
          </div>

          {/* Clean Unified Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="group relative"
              >
                <button
                  onClick={() => setSelectedImage(image.src)}
                  className="w-full h-full relative"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-charcoal/40 bg-obsidian-light/30 transition-all duration-500 group-hover:border-gold/30">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Hover Overlay - Clean Reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {image.category}
                      </span>
                      <h3 className="text-offwhite font-serif text-2xl uppercase tracking-widest text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {image.title}
                      </h3>
                    </div>

                    {/* Minimal Corner Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_80px_rgba(174,145,66,0.1)]" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
            <FadeIn delay={0.4} className="relative z-10 bg-obsidian inline-block px-12">
              <h2 className="font-serif text-3xl text-offwhite mb-10 uppercase tracking-[0.2em] opacity-90">The Forge Awaits</h2>
              <Link 
                href="/#cta" 
                className="group relative inline-flex items-center justify-center px-16 py-5 overflow-hidden font-bold transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-100 group-hover:opacity-90 transition-opacity" />
                <span className="relative text-obsidian uppercase text-[11px] font-bold tracking-[0.2em]">
                  Custom Build Your Heirloom
                </span>
                <div className="absolute top-0 left-0 w-full h-px bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />

      <Lightbox 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}
