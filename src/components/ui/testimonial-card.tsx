"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- Type Definitions for props ---
export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  initials: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  className?: string;
}

// --- Internal Sub-Components ---

// StatCard using shadcn variables
const StatCard = ({ value, label }: Stat) => (
  <Card className="bg-obsidian-light/50 border-gold/20 text-center rounded-xl backdrop-blur-sm">
    <CardContent className="p-4">
      <p className="text-3xl font-serif font-bold text-gold-light">{value}</p>
      <p className="text-sm text-offwhite/70">{label}</p>
    </CardContent>
  </Card>
);

// A sticky testimonial card for the stacking effect.
const StickyTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${130 + index * 24}px` }} // Staggered top position for stacking below navbar
    >
      <div className={cn(
        "p-6 rounded-2xl shadow-xl flex flex-col h-auto w-full",
        "bg-obsidian border border-gold/20"
      )}>
        {/* Top section: Initials and Author */}
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark flex items-center justify-center flex-shrink-0 border border-gold/50 shadow-inner"
            aria-label={`Initials of ${testimonial.name}`}
          >
            <span className="font-serif text-lg text-obsidian font-bold">{testimonial.initials}</span>
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-lg text-offwhite">{testimonial.name}</p>
            <p className="text-sm text-offwhite/60">{testimonial.title}</p>
          </div>
        </div>

        {/* Middle section: Rating */}
        <div className="flex items-center gap-2 my-4">
          <span className="font-bold text-base text-offwhite">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-gold fill-gold"
                    : "text-offwhite/20"
                )}
              />
            ))}
          </div>
        </div>

        {/* Bottom section: Quote */}
        {testimonial.quote && (
          <p className="text-base text-offwhite/80 italic">&ldquo;{testimonial.quote}&rdquo;</p>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Exported Component ---

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  className,
}: ClientsSectionProps) => {
  // Calculate a height for the scroll container to ensure all cards can stack
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("w-full bg-background text-foreground py-20 md:py-28", className)}>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs uppercase tracking-widest font-bold">
            <div className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-gold-light">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-offwhite tracking-tight">{title}</h2>
          <p className="text-lg text-offwhite/70">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Button variant="outline" size="lg" className="rounded border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light transition-colors uppercase font-bold tracking-wider">{secondaryActionLabel}</Button>
            <Button size="lg" className="rounded bg-gradient-to-r from-gold-light to-gold text-obsidian hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all font-bold uppercase tracking-wider">{primaryActionLabel}</Button>
          </div>
        </div>

        {/* Right Column: Container for the sticky card stack */}
        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard
              key={testimonial.name}
              index={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
