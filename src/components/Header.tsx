import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-obsidian/90 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <button className="text-offwhite hover:text-gold transition-colors" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Imperator Bows Logo" 
            width={200} 
            height={60} 
            className="h-10 w-auto object-contain drop-shadow" 
            priority
          />
        </div>
        <div className="w-6 h-6" /> {/* Spacer for centering */}
      </div>
    </header>
  );
}
