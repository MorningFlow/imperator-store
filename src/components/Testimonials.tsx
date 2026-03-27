import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-obsidian-light py-24 px-6 border-t border-charcoal/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-gold-dark text-xs font-bold tracking-[0.2em] font-sans mb-4 uppercase">What the Legion Says</h4>
          <h2 className="font-serif text-3xl sm:text-5xl text-offwhite leading-tight mx-auto max-w-sm">
            Archers Who&apos;ve Shot Imperator Don&apos;t Go Back.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Review 1 */}
          <div className="bg-gradient-to-br from-charcoal/40 to-obsidian p-1 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gold/20">
            <div className="bg-obsidian/80 p-6 sm:p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <p className="text-offwhite/70 italic font-serif leading-relaxed mb-6">
                &quot;Archers who&apos;ve shot Imperator understand my passion in their honest raw response to archer back.&quot;
              </p>
              <span className="text-gold-light text-[10px] sm:text-xs tracking-widest uppercase font-bold uppercase">— RAM MILITON, US</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-gradient-to-br from-charcoal/40 to-obsidian p-1 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gold/20">
            <div className="bg-obsidian/80 p-6 sm:p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <p className="text-offwhite/70 italic font-serif leading-relaxed mb-6">
                &quot;Customer has expressly Imperator specific and questions expected active approach via the ultra-rotor con ned back.&quot;
              </p>
              <span className="text-gold-light text-[10px] sm:text-xs tracking-widest uppercase font-bold">— PARIRAYELK, US</span>
            </div>
          </div>
          
          {/* Review 3 */}
          <div className="bg-gradient-to-br from-charcoal/40 to-obsidian p-1 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gold/20">
            <div className="bg-obsidian/80 p-6 sm:p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <p className="text-offwhite/70 italic font-serif leading-relaxed mb-6">
                &quot;Premium performance multi-use securing hunts and monsters... who braved him only only a mile more.&quot;
              </p>
              <span className="text-gold-light text-[10px] sm:text-xs tracking-widest uppercase font-bold">— SAREHOVER, US</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
