"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface BuildModalContextType {
  isOpen: boolean;
  isQuizOpen: boolean;
  presetBudget: string;
  presetTier: string;
  openBuildModal: (budget?: string, tier?: string) => void;
  closeBuildModal: () => void;
  setIsQuizOpen: (isOpen: boolean) => void;
}

const BuildModalContext = createContext<BuildModalContextType | undefined>(undefined);

export function BuildModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [presetBudget, setPresetBudget] = useState("");
  const [presetTier, setPresetTier] = useState("");

  const openBuildModal = (budget?: string, tier?: string) => {
    if (budget) setPresetBudget(budget);
    if (tier) setPresetTier(tier);
    setIsOpen(true);
  };
  const closeBuildModal = () => {
    setIsOpen(false);
    setPresetBudget(""); // Clear on close
    setPresetTier(""); // Clear on close
  };

  // Scroll Lock handling for all modals
  useEffect(() => {
    if (isOpen || isQuizOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen, isQuizOpen]);

  return (
    <BuildModalContext.Provider value={{ 
      isOpen, 
      isQuizOpen, 
      presetBudget, 
      presetTier, 
      openBuildModal, 
      closeBuildModal,
      setIsQuizOpen 
    }}>
      {children}
    </BuildModalContext.Provider>
  );
}

export function useBuildModal() {
  const context = useContext(BuildModalContext);
  if (context === undefined) {
    throw new Error("useBuildModal must be used within a BuildModalProvider");
  }
  return context;
}
