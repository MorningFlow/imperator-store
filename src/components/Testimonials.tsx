import { ClientsSection, Stat, Testimonial } from "@/components/ui/testimonial-card";

const statsData: Stat[] = [
  { value: "10,000+", label: "Bows Forged" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "50+", label: "Awards Won" },
];

const testimonialsData: Testimonial[] = [
  {
    name: "Ram Militon",
    title: "US",
    quote: "Archers who've shot Imperator understand my passion in their honest raw response to archer back.",
    initials: "RM",
    rating: 5.0,
  },
  {
    name: "Parirayelk",
    title: "US",
    quote: "Customer has expressly Imperator specific and questions expected active approach via the ultra-rotor con ned back.",
    initials: "P",
    rating: 5.0,
  },
  {
    name: "Sarehover",
    title: "US",
    quote: "Premium performance multi-use securing hunts and monsters... who braved him only only a mile more.",
    initials: "S",
    rating: 5.0,
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-obsidian w-full pt-28 pb-16 scroll-mt-24">
      <ClientsSection
        className="bg-obsidian border-t border-charcoal/50"
        tagLabel="The Legion"
        title="Archers Who've Shot Imperator Don't Go Back."
        description="Join the elite ranks of bowhunters and target archers who demand the absolute best in premium performance and uncompromising craftsmanship."
        stats={statsData}
        testimonials={testimonialsData}
        primaryActionLabel="Order Your Bow"
        secondaryActionLabel="Explore Collection"
      />
    </div>
  );
}
