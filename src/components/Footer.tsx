import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-charcoal/50 pt-16 pb-8 px-6 text-sm text-offwhite/60">
      <div className="flex flex-col items-center mb-12">
        <Image 
          src="/logo.png" 
          alt="Imperator Bows Logo" 
          width={280} 
          height={80} 
          className="h-16 w-auto object-contain drop-shadow-lg mb-4 opacity-90" 
        />
        <p className="italic text-offwhite/80 text-center">Forged in Texas. Built for Legends.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-16 text-xs">
        <div>
          <h3 className="text-offwhite font-medium mb-3">Home</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Responsibility</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Policies</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-offwhite font-medium mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Bows</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-offwhite font-medium mb-3">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gold transition-colors">Affiliate</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Source</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">News</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terminals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-offwhite font-medium mb-3">Logs</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
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
