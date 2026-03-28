"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // We want the loader to show for at least 2.5 seconds to fully complete the letters reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <div 
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0 invisible h-0" : "opacity-100 visible"
        }`}
      >
        {children}
      </div>
    </>
  );
}
