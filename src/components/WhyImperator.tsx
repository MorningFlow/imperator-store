"use client";

import { ArrowRight, Clock, TreePine, ShieldCheck, Crosshair, Medal, Lock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    icon: Clock,
    title: "Built to Outlive You",
    text: "Every Imperator is tillered by hand to your exact draw specs — not pulled off a shelf, not assembled by a machine. 30+ hours of work goes into one bow. That's not production. That's obsession.",
  },
  {
    icon: TreePine,
    title: "Wood you can’t just find anywhere else",
    text: "African Blackwood Burl, Curly Black & White Ebony, Tasmanian Blackwood, Spalted Tamarind. We source rare exotic, luthier grade hardwoods globally — because what your bow is made of is part of the story you tell.",
  },
  {
    icon: Medal,
    title: "Veteran-Owned. Texas-Forged.",
    text: "Built by hands that know what accountability means. Every commission is a reflection of that standard.",
  },
  {
    icon: Lock,
    title: "Limited Builds Per Month — On Purpose",
    text: "We cap commissions to protect quality. Your bow gets the hours it deserves. No shortcuts. No exceptions.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom premium easing
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

import { useBuildModal } from "@/context/BuildModalContext";

export default function WhyImperator() {
  const { openBuildModal } = useBuildModal();
  return (
    <section
      id="why-imperator"
      className="bg-obsidian relative border-t border-charcoal overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* ─── LEFT: Text Content (2/3) ─── */}
        <motion.div 
          className="relative z-10 w-full lg:w-2/3 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-20 lg:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section eyebrow */}
          <motion.h4 
            variants={headerVariants}
            className="text-gold text-[10px] md:text-xs font-bold tracking-[0.4em] font-sans mb-4 uppercase drop-shadow flex items-center gap-3"
          >
            <span className="w-10 h-[1px] bg-gold/40"></span>
            The Imperator Difference
          </motion.h4>

          {/* Headline */}
          <motion.h2 
            variants={headerVariants}
            className="font-serif text-4xl sm:text-5xl xl:text-6xl text-offwhite leading-[1.05] mb-3 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] tracking-tight"
          >
            Why Imperator?
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="font-serif text-xl sm:text-2xl xl:text-3xl text-gold-light/80 leading-snug mb-14 max-w-2xl italic"
          >
            Because most bows are forgotten. Ours are inherited.
          </motion.p>

          {/* Reason Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-16"
          >
            {reasons.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02, 
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  backgroundColor: "rgba(30, 30, 30, 0.4)" 
                }}
                className="group relative bg-obsidian-light/20 backdrop-blur-sm border border-charcoal/30 hover:border-gold/20 rounded-xl p-6 transition-colors duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300"
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="w-4 h-4 text-gold opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                  <h3 className="font-serif text-lg text-offwhite group-hover:text-gold-light transition-colors duration-300">
                    {title}
                  </h3>
                </div>

                {/* Body */}
                <p className="text-offwhite/60 font-sans text-sm leading-relaxed pl-12">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-charcoal/30 pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="text-gold italic font-serif text-lg tracking-wide opacity-80">
              &ldquo;Other bows are sold. The Imperator is commissioned.&rdquo;
            </p>
            <motion.button
              onClick={openBuildModal}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold px-7 py-3.5 rounded-sm uppercase text-[11px] tracking-[0.15em] w-fit shadow-[0_4px_24px_rgba(174,145,66,0.25)] hover:shadow-[0_6px_32px_rgba(174,145,66,0.45)] transition-all duration-300 shrink-0"
            >
              Claim Your Build Slot <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: Video (1/3) ─── */}
        <div className="relative w-full lg:w-1/3 flex items-center justify-center p-6 md:p-12 bg-obsidian">
          {/* Glow effect behind the video */}
          <div className="absolute w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full pointer-events-none opacity-40 animate-pulse" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1], 
              delay: 0.4 
            }}
            className="relative w-full max-w-[380px] group/video [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-composite:source-in]"
          >
            <video
              src="/legal-video.mp4"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover/video:scale-[1.03] blur-[0.5px] opacity-90"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-obsidian/20 pointer-events-none" />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
