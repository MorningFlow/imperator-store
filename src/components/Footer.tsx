import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-charcoal/50 pt-16 pb-8 px-6 text-sm text-offwhite/60">
      <div className="flex flex-col items-center mb-12">
        <Link href="/" className="cursor-pointer">
          <Image 
            src="/logo.png" 
            alt="Imperator Bows Logo" 
            width={280} 
            height={80} 
            className="h-16 w-auto object-contain drop-shadow-lg mb-4 opacity-90" 
          />
        </Link>
        <p className="italic text-offwhite/80 text-center">Forged in Texas. Built for Legends.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-16 text-xs text-offwhite/70 max-w-6xl mx-auto w-full px-4 md:px-0">
        <div className="text-left mb-8 md:mb-0">
          <h3 className="text-offwhite font-medium mb-3 uppercase tracking-wider text-[10px] text-gold-light">Information</h3>
          <ul className="space-y-3">
            <li><a href="/care" className="hover:text-gold transition-colors block">Bow Care Guide</a></li>
            <li><a href="/warranty" className="hover:text-gold transition-colors block">Limited Warranty</a></li>
            <li><a href="/legal" className="hover:text-gold transition-colors block">Legal Disclaimer</a></li>
          </ul>
        </div>
        <div className="text-left md:text-right">
          <h3 className="text-offwhite font-medium mb-3 uppercase tracking-wider text-[10px] text-gold-light">Contact</h3>
          <ul className="space-y-3">
            <li><a href="mailto:imperatorbows@gmail.com" className="hover:text-gold transition-colors block">imperatorbows@gmail.com</a></li>
            <li>Conroe, TX</li>
            <li className="italic text-gold/70">Veteran-Owned & Operated</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px border-b border-charcoal/80 mb-8 max-w-lg mx-auto" />
      <div className="flex justify-center gap-6 text-gold">
        <a href="https://www.facebook.com/share/18EbXY1LWm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold-light transition-colors hover:scale-110">
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-gold-light transition-colors hover:scale-110">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/imperatorbows?igsh=eG9renNyODRiNG9n&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold-light transition-colors hover:scale-110">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-gold-light transition-colors hover:scale-110">
          <FaYoutube className="w-6 h-6 -mt-0.5" />
        </a>
        <a href="#" aria-label="TikTok" className="hover:text-gold-light transition-colors hover:scale-110">
          <FaTiktok className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
