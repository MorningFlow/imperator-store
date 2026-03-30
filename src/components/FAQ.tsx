"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "How long is the current waitlist?",
    answer: "Given the bespoke nature of our commissions and the meticulous hand-crafting process, our waitlist is currently 8 to 12 weeks. We refuse to rush perfection, ensuring every bow meets our rigorous standards."
  },
  {
    question: "Do these bows have enough power for Elk or Moose?",
    answer: "Absolutely. Our limb geometries and premium material laminates are engineered for maximum energy transfer. With a draw weight of 45lbs or higher and a properly tuned heavy arrow, an Imperator Bow delivers devastating penetration capable of clean pass-throughs on the largest North American and African game."
  },
  {
    question: "Can I customize the wood and finish?",
    answer: "Yes. While The Field Bow offers a curated selection of proven materials, The Heirloom tier is entirely bespoke. Our master bowyer will personally consult with you to select exotic wood combinations, custom leather grips, and any personalized engraving you desire."
  },
  {
    question: "What is your warranty policy?",
    answer: "Every Imperator Bow is backed by our Ironclad Lifetime Guarantee. If the bow fails due to a defect in craftsmanship or materials, we will repair or replace it unconditionally. This guarantee is fully transferable if you pass the bow down to the next generation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-obsidian py-32 px-6 border-t border-charcoal/30 relative overflow-hidden">
      
      {/* Decorative Left Video */}
      <div className="hidden xl:block absolute left-[-5%] top-1/2 -translate-y-1/2 w-[450px] pointer-events-none opacity-20 mix-blend-screen z-0">
        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [-webkit-mask-composite:source-in]">
          <video src="/care-video.mp4" className="w-full h-auto object-cover grayscale" autoPlay muted loop playsInline />
        </div>
      </div>

      {/* Decorative Right Video */}
      <div className="hidden xl:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[450px] pointer-events-none opacity-20 mix-blend-screen z-0">
        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="relative w-full [mask-image:linear-gradient(to_left,transparent,black_40%,black_60%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_left,transparent,black_40%,black_60%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [-webkit-mask-composite:source-in]">
          <video src="/warranty-video-v2.mp4" className="w-full h-auto object-cover grayscale" autoPlay muted loop playsInline />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] font-sans mb-3 uppercase">Clarity</h4>
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite uppercase tracking-wider mb-4">Common Questions</h2>
          <p className="text-offwhite/50 text-sm max-w-2xl mx-auto font-sans">
            Clear answers for the decisive archer. If you have unique requirements, our master bowyer is available during your build consultation.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                  className={cn(
                    "border border-white/10 rounded-sm overflow-hidden transition-all duration-300",
                    isOpen ? "bg-white/5 border-gold/30" : "bg-transparent hover:bg-white/5"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={cn(
                      "font-serif text-lg md:text-xl transition-colors",
                      isOpen ? "text-gold-light" : "text-offwhite"
                    )}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4"
                    >
                      <ChevronDown className={cn(
                        "w-5 h-5",
                        isOpen ? "text-gold" : "text-offwhite/50"
                      )} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-offwhite/70 font-sans text-sm leading-relaxed border-t border-white/10 pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
