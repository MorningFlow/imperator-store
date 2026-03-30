"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Target, TreePine, Crosshair, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBuildModal } from "@/context/BuildModalContext";

type Question = {
  id: string;
  title: string;
  subtitle: string;
  options: { label: string; icon: React.ReactNode; value: string }[];
};

const questions: Question[] = [
  {
    id: "use",
    title: "Primary Application",
    subtitle: "How will you mostly use your Imperator bow?",
    options: [
      { label: "Bowhunting", icon: <TreePine className="w-6 h-6" />, value: "hunting" },
      { label: "Target / 3D", icon: <Target className="w-6 h-6" />, value: "target" },
      { label: "A Mix of Both", icon: <Crosshair className="w-6 h-6" />, value: "both" },
    ]
  },
  {
    id: "experience",
    title: "Archer Experience",
    subtitle: "Where are you on your traditional archery journey?",
    options: [
      { label: "Just Starting", icon: <Target className="w-6 h-6" />, value: "beginner" },
      { label: "Seasoned Shooter", icon: <Crosshair className="w-6 h-6" />, value: "seasoned" },
      { label: "Master Class", icon: <TreePine className="w-6 h-6" />, value: "master" },
    ]
  },
  {
    id: "preference",
    title: "Aesthetic & Feel",
    subtitle: "Which design philosophy speaks to you?",
    options: [
      { label: "Compact & Aggressive", icon: <Crosshair className="w-6 h-6" />, value: "aquila" },
      { label: "Smooth & Traditional", icon: <TreePine className="w-6 h-6" />, value: "praetorian" },
      { label: "Static & Powerful", icon: <Target className="w-6 h-6" />, value: "centurion" },
    ]
  }
];

export default function QuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [recommendedModel, setRecommendedModel] = useState("Praetorian");
  const { openBuildModal } = useBuildModal();

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    setIsCalculating(true);
    
    // Simple logic for recommendation based on answers
    setTimeout(() => {
      let resultModel = "Praetorian"; // Default
      
      if (answers.use === "hunting" && answers.preference === "aquila") resultModel = "Aquila Recurve";
      if (answers.use === "target" && answers.preference === "centurion") resultModel = "Centurion Static Recurve";
      if (answers.use === "both") resultModel = "Praetorian";

      setRecommendedModel(resultModel);
      setIsCalculating(false);
      setHasResult(true);
    }, 1500); // Fake calculating delay for premium feel
  };

  const handleReserve = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(0);
      setAnswers({});
      setHasResult(false);
      openBuildModal(undefined, recommendedModel);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-dark/95 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-xl bg-charcoal/60 border border-gold/20 rounded-none overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="px-8 py-6 flex items-center justify-between border-b border-gold/10 bg-obsidian/40">
              <div className="flex flex-col">
                <span className="text-gold-light text-[8px] font-bold uppercase tracking-[0.4em] mb-1">Guided Experience</span>
                <h2 className="text-offwhite tracking-widest uppercase font-serif font-bold text-sm">
                  Bow Match Finder
                </h2>
              </div>
              <button
                onClick={onClose}
                className="group w-10 h-10 flex items-center justify-center border border-white/10 hover:border-gold transition-colors duration-500 rounded-none bg-white/5"
                aria-label="Close Quiz"
              >
                <X className="w-5 h-5 text-offwhite/50 group-hover:text-gold transition-colors" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-12 relative min-h-[450px] flex flex-col justify-center bg-gradient-to-b from-transparent to-black/20">
              {isCalculating ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center text-center space-y-8"
                >
                  <div className="relative">
                    <div className="w-16 h-16 border-2 border-gold/10 border-t-gold rounded-full animate-spin" />
                    <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-gold animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-offwhite mb-3 tracking-wide">Analyzing Your Profile</h3>
                    <p className="text-offwhite/40 text-[10px] font-sans uppercase tracking-[0.2em]">Curating your perfect heirloom...</p>
                  </div>
                </motion.div>
              ) : hasResult ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center justify-center text-center space-y-8 py-8"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 shadow-[0_0_40px_rgba(174,145,66,0.2)]">
                    <Target className="w-10 h-10 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Your Perfect Match</h4>
                    <h3 className="text-4xl md:text-5xl font-serif text-offwhite mb-4">{recommendedModel}</h3>
                    <p className="text-offwhite/60 text-sm font-sans max-w-sm mx-auto leading-relaxed">
                      Based on your preferences, this model offers the ideal balance of performance and aesthetics for your shooting style.
                    </p>
                  </div>
                  <button 
                    onClick={handleReserve}
                    className="flex items-center gap-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(174,145,66,0.4)] active:scale-95 transition-all"
                  >
                    Reserve Now <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="text-center mb-10">
                      <p className="text-gold/60 text-xs font-bold font-sans tracking-[0.2em] uppercase mb-4">
                        Step {currentStep + 1} of {questions.length}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-serif text-offwhite mb-3">
                        {questions[currentStep].title}
                      </h3>
                      <p className="text-offwhite/50 text-sm font-sans max-w-md mx-auto">
                        {questions[currentStep].subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {questions[currentStep].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleSelect(questions[currentStep].id, option.value)}
                          className={cn(
                            "flex flex-col items-center justify-center p-6 border rounded-sm transition-all duration-300 group",
                            answers[questions[currentStep].id] === option.value
                              ? "border-gold bg-gold/10 text-gold-light shadow-[0_0_20px_rgba(174,145,66,0.2)]"
                              : "border-white/10 bg-white/5 text-offwhite/70 hover:border-gold/50 hover:bg-gold/5 hover:text-gold"
                          )}
                        >
                          <div className={cn(
                            "mb-4 transition-transform duration-300 group-hover:scale-110",
                            answers[questions[currentStep].id] === option.value ? "text-gold" : "text-offwhite/40 group-hover:text-gold"
                          )}>
                            {option.icon}
                          </div>
                          <span className="font-serif text-lg text-center tracking-wide">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Progress Bar (Hidden on result) */}
            {!hasResult && (
              <div className="w-full h-1 bg-obsidian absolute bottom-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + (isCalculating ? 1 : 0)) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
