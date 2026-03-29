import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BowCarePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-obsidian pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-offwhite/90">
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-gold-light mb-4 tracking-wide uppercase">Bow Care & Stringing Guide</h1>
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase">Inspired by Rome. Crafted for Mastery.</p>
          </div>

          {/* Video float + wraparound text with Diffusion Blending */}
          <div className="clearfix">
            <div className="float-left relative mr-8 mb-6 w-full sm:w-[300px] md:w-[340px] lg:w-[380px] group/video flex items-center justify-center">
              {/* Glow behind the video */}
              <div className="absolute w-[110%] h-[110%] bg-gold/5 blur-[80px] rounded-full pointer-events-none opacity-40 animate-pulse" />
              
              <div className="relative w-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-composite:source-in]">
                <video
                  src="/care-video.mp4"
                  className="w-full h-auto object-cover opacity-90"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">Overview</h2>
              <p className="leading-relaxed">
                Thank you for choosing one of our handcrafted traditional bows. Each bow is built with precision, care, and a deep respect for traditional archery craftsmanship. Proper maintenance and stringing technique will help ensure your bow remains stable, accurate, and beautiful for years to come.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">Stringing Your Bow</h2>
              <p className="leading-relaxed">
                Always use a <strong>bow stringer</strong> when stringing or unstringing your bow. This method evenly distributes pressure across the limbs and prevents twisting or stress that can occur from improper methods such as the &quot;step-through&quot; technique.
              </p>
              <ol className="list-decimal list-inside space-y-3 leading-relaxed ml-4">
                <li>Place the larger loop of the string over the top limb and slide it down several inches.</li>
                <li>Secure the smaller loop in the bottom limb&apos;s string groove.</li>
                <li>Position the bow stringer cups or pockets correctly on both limb tips.</li>
                <li>Step on the stringer cord and slowly pull upward on the riser to flex the limbs.</li>
                <li>Guide the top loop of the string securely into the upper limb groove, then gently release pressure.</li>
                <li>Inspect both string grooves to confirm proper seating before drawing.</li>
              </ol>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">Brace Height</h2>
              <p className="leading-relaxed">
                Brace height refers to the distance between the string and the deepest part of the grip. Maintaining proper brace height ensures optimal arrow flight, quiet shooting, and limb alignment.
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed ml-4">
                <li>Recurve bows generally perform best between <strong>7½&quot; and 8½&quot;</strong> of brace height.</li>
                <li>Longbows generally perform best between <strong>6¾&quot; and 7¾&quot;</strong> of brace height.</li>
              </ul>
              <p className="leading-relaxed">
                To adjust brace height, twist the string tighter to shorten it (increasing brace height), or untwist it to lengthen (decreasing brace height). Always check brace height after the first few dozen shots or changes in humidity, as string materials can settle.
              </p>
            </section>
          </div>

          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">Storage and Maintenance</h2>
            <ul className="list-disc list-inside space-y-4 leading-relaxed ml-4">
              <li><strong>Unstring your bow</strong> when not in use for extended periods, especially in warm or humid environments.</li>
              <li><strong>Avoid direct sunlight and extreme heat</strong>, such as inside a car, which can soften epoxy and affect limb alignment.</li>
              <li><strong>Do not lean</strong> your bow on one limb for long periods; store it on a rack or hanger to keep the limbs balanced.</li>
              <li><strong>Clean</strong> your bow with a soft, dry cloth. Avoid harsh chemicals or solvents that can damage the finish.</li>
              <li><strong>Inspect</strong> for loose laminations or limb twist periodically. If discovered, contact us for assessment before continued use.</li>
            </ul>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">String Care</h2>
            <p className="leading-relaxed">
              Keep your bowstring waxed and clean. Apply a light coat of high-quality string wax every few shooting sessions or when the string feels dry. Work the wax into the strands using your fingers to ensure even coverage. Replace your string if you notice fraying, separation, or excessive stretch.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">Final Notes</h2>
            <p className="leading-relaxed">
              Following these care and maintenance steps will preserve the performance and longevity of your bow. A properly maintained bow not only shoots better but remains a true reflection of your craftsmanship and dedication as an archer.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
