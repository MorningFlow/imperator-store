"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  const letters = "IMPERATOR".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: "blur(10px)",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Logo Text Reveal */}
        <div className="flex overflow-hidden px-4">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-light tracking-[-0.05em] drop-shadow-[0_10px_30px_rgba(174,145,66,0.3)]"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Animated Accent Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
          className="h-[1px] w-48 sm:w-64 md:w-80 bg-gradient-to-r from-transparent via-gold to-transparent mt-6"
        />
        
        {/* Brand Tagline Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="h-[1px] w-8 bg-gold/30" />
          <p className="text-[10px] sm:text-[11px] text-offwhite uppercase tracking-[0.5em] font-sans font-semibold">
            Honoring the Hunt
          </p>
          <div className="h-[1px] w-8 bg-gold/30" />
        </motion.div>
      </div>

      {/* Background Ambience Bloom (Optimized for performance) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          className="w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]"
        />
      </div>
    </motion.div>
  );
}
