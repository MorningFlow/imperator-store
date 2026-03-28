"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  { src: "/gallery/whatsapp/workshop-10.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-11.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-12.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-13.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-14.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-15.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-16.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-17.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-18.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-19.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-2.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-20.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-21.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-22.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-23.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-24.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-25.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-26.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-27.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-28.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-29.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-3.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-30.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-31.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-32.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-33.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-34.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-35.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-36.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-37.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-38.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-39.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-4.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-40.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-41.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-42.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-43.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-44.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-45.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-46.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-47.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-48.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-49.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-5.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-50.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-51.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-52.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-53.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-54.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-55.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-56.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-57.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-6.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-7.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-8.jpg", title: "Workshop Detail", category: "Workshop" },
  { src: "/gallery/whatsapp/workshop-9.jpg", title: "Workshop Detail", category: "Workshop" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/#collection" 
            className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-colors text-xs font-bold tracking-widest uppercase mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
          
          <FadeIn className="mb-16">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Visual Heritage</h4>
            <h1 className="font-serif text-4xl md:text-6xl text-offwhite mb-6 uppercase tracking-wider">The Gallery</h1>
            <p className="text-offwhite/60 text-lg max-w-2xl font-sans leading-relaxed">
              Explore the intersection of Roman tradition and modern precision. Every Imperator bow is a testament to functional art, forged from the finest materials and captured in detail.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <FadeIn 
                key={i} 
                delay={0.05 * i} 
                direction="up" 
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-charcoal bg-obsidian-light"
              >
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-offwhite font-serif text-2xl uppercase tracking-widest">
                    {image.title}
                  </h3>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-px h-full bg-gold/50" />
                  <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <FadeIn delay={0.4}>
              <h2 className="font-serif text-2xl text-offwhite mb-8 uppercase tracking-widest">Ready to Forge Your Own?</h2>
              <Link 
                href="/#cta" 
                className="inline-block bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-12 py-5 rounded uppercase text-sm tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] transition-all"
              >
                Custom Build Your Heirloom
              </Link>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
