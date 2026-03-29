"use client";

import React, { createContext, useContext, useState } from "react";

interface BuildModalContextType {
  isOpen: boolean;
  presetBudget: string;
  openBuildModal: (budget?: string) => void;
  closeBuildModal: () => void;
}

const BuildModalContext = createContext<BuildModalContextType | undefined>(undefined);

export function BuildModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetBudget, setPresetBudget] = useState("");

  const openBuildModal = (budget?: string) => {
    if (budget) setPresetBudget(budget);
    setIsOpen(true);
  };
  const closeBuildModal = () => {
    setIsOpen(false);
    setPresetBudget(""); // Clear on close
  };

  return (
    <BuildModalContext.Provider value={{ isOpen, presetBudget, openBuildModal, closeBuildModal }}>
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
