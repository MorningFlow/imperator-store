"use client";

import { ClientsSection, Testimonial } from "@/components/ui/testimonial-card";
import { useBuildModal } from "@/context/BuildModalContext";

const testimonialsData: Testimonial[] = [
  {
    name: "Ram Militon",
    title: "US",
    quote: "Archers who've shot Imperator understand my passion in their honest raw response to archer back.",
    initials: "RM",
    rating: 5.0,
    avatar: "/avatars/ram-militon.jpg",
  },
  {
    name: "Parirayelk",
    title: "US",
    quote: "Customer has expressly Imperator specific and questions expected active approach via the ultra-rotor con ned back.",
    initials: "P",
    rating: 5.0,
    avatar: "/avatars/parirayelk.jpg",
  },
  {
    name: "Sarehover",
    title: "US",
    quote: "Premium performance multi-use securing hunts and monsters... who braved him only only a mile more.",
    initials: "S",
    rating: 5.0,
    avatar: "/avatars/sarehover.jpg",
  },
];

export default function Testimonials() {
  const { openBuildModal } = useBuildModal();

  const handleExplore = () => {
    const elem = document.getElementById("collection");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="testimonials" className="bg-obsidian w-full pt-28 pb-16 scroll-mt-24">
      <ClientsSection
        className="bg-obsidian border-t border-charcoal/50"
        tagLabel="The Legion"
        title="Archers Who've Shot Imperator Don't Go Back."
        description="Join the elite ranks of bowhunters and target archers who demand the absolute best in premium performance and uncompromising craftsmanship."

        testimonials={testimonialsData}
        primaryActionLabel="Order Your Bow"
        secondaryActionLabel="Explore Collection"
        onPrimaryAction={() => openBuildModal()}
        onSecondaryAction={handleExplore}
      />
    </div>
  );
}
