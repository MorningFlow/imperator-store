"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CustomCursorProps {
  active: boolean;
  label?: string;
}

export default function CustomCursor({ active, label = "VIEW" }: CustomCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center pointer-events-none z-[100] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%",
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: active ? 1 : 0, 
        opacity: active ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <span className="text-obsidian font-bold text-[10px] tracking-[0.2em]">{label}</span>
      {/* Outer ring effect */}
      <motion.div 
        className="absolute inset-0 rounded-full border border-gold-light/30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
