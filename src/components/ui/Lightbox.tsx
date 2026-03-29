"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black p-4 md:p-10 cursor-zoom-out"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-8 right-8 z-[100001] w-12 h-12 flex items-center justify-center bg-gold/10 hover:bg-gold/20 border border-gold/20 hover:border-gold/40 text-gold-light rounded-full transition-all group active:scale-95"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center cursor-default"
          >
            <Image
              src={imageSrc}
              alt="Detailed View"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              priority
            />
          </motion.div>

          {/* Bottom Accent */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gold-light/40 font-serif tracking-[0.3em] uppercase text-[10px]"
          >
            <span className="w-8 h-px bg-gold/20" />
            Imperator Archive
            <span className="w-8 h-px bg-gold/20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
