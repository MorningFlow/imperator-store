"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function checkQuery() {
      const result = window.matchMedia(query);
      setValue(result.matches);
    }
    checkQuery();
    window.addEventListener("resize", checkQuery);
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);

    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

export const siteConfig = {
  hero: {
    badgeIcon: null,
    badge: "",
    title: "Imperator Bows",
    description: "Forged in Texas. Built for Legends.",
  },
  footerLinks: [
    {
      title: "Information",
      links: [
        { id: 1, title: "Bow Care Guide", url: "/care" },
        { id: 2, title: "Limited Warranty", url: "/warranty" },
        { id: 3, title: "Build Policy", url: "/policy" },
        { id: 4, title: "Legal Disclaimer", url: "/legal" },
      ],
    },
    {
      title: "Contact",
      links: [
        { id: 4, title: "imperatorbows@gmail.com", url: "mailto:imperatorbows@gmail.com" },
        { id: 5, title: "Conroe, Texas", url: "#" },
        { id: 6, title: "Veteran-Owned & Operated", url: "#" },
      ],
    }
  ],
};

export const FlickeringFooter = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-20 bg-obsidian border-t border-gold/20 flex flex-col justify-end pt-10 relative overflow-hidden text-sm shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="flex flex-col md:flex-row md:items-start justify-between px-10 pt-4 pb-0 max-w-7xl mx-auto w-full relative z-20">
        
        {/* Left Side: Brand */}
        <div className="flex flex-col items-start justify-start gap-y-4 max-w-sm mx-0 w-full md:w-1/3">
          <Link href="/" className="cursor-pointer z-20 group">
            <Image 
              src="/logo.png" 
              alt="Imperator Bows Logo" 
              width={220} 
              height={60} 
              className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(174,145,66,0.2)] opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_25px_rgba(174,145,66,0.4)]" 
            />
          </Link>
          <p className="tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-offwhite/80 to-offwhite/40 italic font-serif z-20 text-xs border-l-2 border-gold/50 pl-3 py-0.5">
            {siteConfig.hero.description}
          </p>
          
          {/* Social Links Replacing Badges */}
          <div className="flex items-center gap-4 mt-1 text-gold z-20">
             <a href="https://www.facebook.com/share/18EbXY1LWm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(174,145,66,0.8)]">
               <FaFacebook className="w-5 h-5" />
             </a>
             <a href="https://www.instagram.com/imperatorbows?igsh=eG9renNyODRiNG9n&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(174,145,66,0.8)]">
               <FaInstagram className="w-5 h-5" />
             </a>
             <a href="#" aria-label="YouTube" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(174,145,66,0.8)]">
               <FaYoutube className="w-6 h-6 -mt-0.5" />
             </a>
             <a href="#" aria-label="TikTok" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(174,145,66,0.8)]">
               <FaTiktok className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Middle: Animated Tagline */}
        <div className="flex flex-col items-center justify-start w-full md:w-1/3 pt-12 md:pt-8 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-4"
          >
            <p className="text-[10px] md:text-xs font-sans uppercase tracking-[0.15em] md:tracking-[0.2em] text-gold-light/90 font-bold drop-shadow-[0_0_8px_rgba(174,145,66,0.4)] relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-white leading-relaxed">
                Crafted for Those<br className="hidden lg:block"/> Who Never Miss Their Mark.
              </span>
              <motion.span 
                className="absolute -bottom-2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
            </p>
          </motion.div>
        </div>

        {/* Right Side: Links */}
        <div className="pt-8 md:pt-0 w-full md:w-1/3 z-20 flex md:justify-end">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-end gap-x-16 gap-y-6">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-3">
                <li className="mb-1 text-[10px] uppercase tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[12px]/snug text-offwhite/60 hover:text-gold-light transition-all duration-300"
                  >
                    <Link href={link.url} className="relative overflow-hidden">
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-light transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                    <div className="flex size-4 items-center justify-center border border-transparent rounded-full translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-hover:border-gold/40 group-hover:bg-gold/10 text-gold-light">
                      <ChevronRightIcon className="h-2.5 w-2.5" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};
