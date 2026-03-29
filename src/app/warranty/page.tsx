import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WarrantyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-obsidian pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-offwhite/90">
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-gold-light mb-4 tracking-wide uppercase">Limited Warranty</h1>
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase">Imperator Bows, Ltd. Co.</p>
          </div>

          <div className="space-y-4 border-l-2 border-gold/30 pl-4 py-2 italic text-sm text-offwhite/70 mb-12">
            <p><strong>Effective Date:</strong> January 2025</p>
            <p><strong>Coverage Period:</strong> 1 Year from Original Purchase Date</p>
            <p><strong>Applies To:</strong> Original Purchaser Only</p>
          </div>

          {/* Video float + wraparound text */}
          <div className="clearfix">
            <div className="float-left mr-8 mb-6 w-full sm:w-[300px] md:w-[340px] lg:w-[380px] rounded-lg overflow-hidden border border-charcoal/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <video
                src="/warranty-video.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">1. Limited Warranty Coverage</h2>
              <p className="leading-relaxed">
                Imperator Bows, Ltd. Co. (&quot;the Manufacturer&quot;) warrants its bows to be free from defects in materials and workmanship under normal use and proper maintenance for a period of one (1) year from the original date of purchase. This warranty applies to all laminated wooden bows, including risers, limbs, veneers, and finishes manufactured by Imperator Bows, Ltd. Co.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">2. Natural Materials & Variability</h2>
              <p className="leading-relaxed">
                Each bow is handcrafted using natural materials, including wood, pod, and composite laminates. As a result, natural grain patterns, color variations, voids, spalting, or figure inconsistencies are normal and not considered defects.
              </p>
              <p className="leading-relaxed">
                Imperator Bows, Ltd. Co. also uses Gordon Glass fiberglass laminates, which may occasionally show visible streaks, haze, or optical flow lines. These are a normal characteristic of the material and do not affect performance or safety — therefore, they are not considered defects and are not covered under warranty.
              </p>
            </section>

            <section className="space-y-6 mb-12">
              <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">3. Exclusions from Warranty</h2>
              <p className="leading-relaxed text-offwhite/80">This limited warranty does not cover:</p>
              <ul className="list-disc list-inside space-y-3 leading-relaxed ml-4">
                <li>Damage caused by dry firing (releasing the string without an arrow).</li>
                <li>Overdrawing beyond the bow&apos;s intended draw length.</li>
                <li>Improper stringing methods, including the &quot;step-through&quot; or &quot;push-pull&quot; techniques. Always use an approved bow stringer to avoid limb twist.</li>
                <li>Damage due to impact, drops, misuse, or accidents.</li>
                <li>Damage caused by excessive heat, cold, humidity, or prolonged improper storage (e.g., leaving the bow strung in a hot vehicle, near direct sunlight, or in damp conditions).</li>
                <li>Core or limb delaminations that occur due to storage or environmental neglect. Such cases may be evaluated individually at the company&apos;s discretion.</li>
                <li>Finish wear, cosmetic blemishes, or damage due to solvents, abrasives, or unauthorized modifications.</li>
                <li>Any bow that has been altered, refinished, or repaired by anyone other than Imperator Bows, Ltd. Co. or an authorized technician.</li>
              </ul>
            </section>
          </div>

          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">4. Case-by-Case Resolution</h2>
            <p className="leading-relaxed">
              In rare instances of lamination separation or structural defect, Imperator Bows, Ltd. Co. will evaluate the bow upon return and determine whether the issue is due to materials, workmanship, or external causes. At its discretion, the company may repair the bow, replace it with a bow of equal or greater value, or offer a partial or full credit toward a future purchase. Each case will be handled individually, and the decision of Imperator Bows, Ltd. Co. shall be final.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">5. Warranty Claim Process</h2>
            <p className="leading-relaxed text-offwhite/80">To initiate a claim:</p>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed ml-4">
              <li>Contact Imperator Bows, Ltd. Co. with your name, proof of purchase, serial number (if applicable), and photos or video of the issue.</li>
              <li>The company will provide return or evaluation instructions.</li>
              <li>Returned bows must be shipped prepaid and securely packaged. Shipping damage during return transit is the responsibility of the sender.</li>
            </ol>
            <p className="leading-relaxed">
              If the claim is approved, Imperator Bows, Ltd. Co. will cover return shipping of the repaired or replaced bow.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              This warranty is the sole and exclusive remedy for any claim. Imperator Bows, Ltd. Co. disclaims all other warranties, express or implied, including merchantability and fitness for a particular purpose. In no event shall Imperator Bows, Ltd. Co., its owners, or employees be liable for incidental, consequential, special, or punitive damages arising out of or in connection with the use or inability to use this product.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-gold border-b border-charcoal/50 pb-4">7. Acknowledgment</h2>
            <p className="leading-relaxed">
              By purchasing or using an Imperator bow, the customer acknowledges that the bow is a weapon that must be handled safely, that the materials used are natural and subject to normal variation, and that improper use or neglect may void warranty coverage.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
