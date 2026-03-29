import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-obsidian pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-offwhite/90">
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-gold-light mb-4 tracking-wide uppercase">Legal Disclaimer</h1>
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase">Imperator Bows, Ltd. Co. • Safety Warning</p>
          </div>

          <div className="p-6 bg-red-900/20 border border-red-900/50 rounded-lg space-y-4 mb-12">
            <h2 className="text-red-400 font-bold tracking-widest uppercase">Warning — Read Before Use</h2>
            <p className="text-sm leading-relaxed">
              This product is a weapon. By purchasing, possessing, or using this bow you acknowledge and accept the following terms:
            </p>
          </div>

          {/* Video float + wraparound text */}
          <div className="clearfix">
            <div className="float-left mr-8 mb-6 w-full sm:w-[300px] md:w-[340px] lg:w-[380px] rounded-lg overflow-hidden border border-charcoal/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <video
                src="/legal-video.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <section className="space-y-8">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">1. Natural Materials & Variability</h3>
                <p className="leading-relaxed text-sm">
                  This bow is handcrafted from natural woods, pods, and composite materials. Grain, coloration, voids, spalting, and other natural features are normal and do not indicate a defect. Natural materials may behave differently over time and under different environmental conditions (temperature, humidity, UV exposure).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">2. Inherent Risk</h3>
                <p className="leading-relaxed text-sm">
                  Improper use, assembly, maintenance, repair, or modification can result in equipment failure, property damage, serious injury, or death. Dry-firing (releasing the string without an arrow), using damaged or incorrect limbs, using incorrectly spined or overloaded arrows, or altering the bow beyond manufacturer specifications greatly increases the risk of catastrophic failure.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">3. Inspection & Maintenance</h3>
                <p className="leading-relaxed text-sm">
                  Inspect the bow, string, fittings, and arrows before each use. Do not use if you observe cracks, delamination, loose fittings, excessive wear, or other signs of damage. Follow all manufacturer maintenance, storage, and stringing/unstringing instructions. Store the bow in a cool, dry place away from direct sunlight and extreme temperature changes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">4. Qualified Use & Instruction</h3>
                <p className="leading-relaxed text-sm">
                  This bow should only be used by persons familiar with archery safety and proper equipment tuning. Seek professional instruction for installation, tuning, repair, or if you are unsure about any aspect of safe operation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">5. Minors & Supervision</h3>
                <p className="leading-relaxed text-sm">
                  Keep out of reach of children. Minors must be supervised by a responsible adult knowledgeable in archery safety.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">6. Legal Compliance</h3>
                <p className="leading-relaxed text-sm">
                  It is your responsibility to know and comply with all local, state, and federal laws governing possession, transport, and use of archery equipment.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">7. Warranties & Limitation of Liability</h3>
                <p className="leading-relaxed text-sm">
                  This product is sold &quot;AS IS&quot; except as expressly stated in the written warranty provided by Imperator Bows, Ltd. Co. Any implied warranties (including merchantability or fitness for a particular purpose) are expressly disclaimed to the maximum extent permitted by law. Imperator Bows, Ltd. Co. and its affiliates, employees, and agents are not liable for incidental, consequential, special, or punitive damages arising from use, misuse, or inability to use this product, whether in contract, tort (including negligence), or otherwise, except to the extent required by applicable law.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">8. Modifications & Repairs</h3>
                <p className="leading-relaxed text-sm">
                  Unauthorized modifications or repairs void any warranty and may render the bow unsafe. Have any structural repairs performed only by the manufacturer or an authorized, qualified technician.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-gold">9. Acknowledgement</h3>
                <p className="leading-relaxed text-sm">
                  By using this bow you accept and assume all risk of injury, death, and property damage and agree to release, indemnify, and hold harmless Imperator Bows, Ltd. Co. from any claims arising from such use, except to the extent prohibited by law.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
