"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useBuildModal } from "@/context/BuildModalContext";

export default function Header() {
  const { openBuildModal } = useBuildModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Track scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "The Collection", href: "#collection" },
    { name: "Anatomy", href: "#anatomy" },
    { name: "Materials", href: "#materials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Our Heritage", href: "#heritage" },
    { name: "The Difference", href: "#why-imperator" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      setIsOpen(false);
      router.push(href);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerElement = document.querySelector('header');
      const headerOffset = headerElement ? headerElement.offsetHeight : 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4 md:py-6" : "py-0"
        )}
      >
        <div className={cn(
          "flex items-center justify-center px-4 md:px-8 transition-all duration-500 relative mx-auto",
          isScrolled 
            ? "max-w-[95%] md:max-w-[1100px] lg:max-w-[1240px] bg-obsidian/30 backdrop-blur-xl border border-white/10 rounded-full py-3 md:py-4 mt-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" 
            : "w-full max-w-full bg-obsidian/85 backdrop-blur-md border-b border-charcoal/30 py-4 md:py-6"
        )}>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="text-offwhite hover:text-gold transition-colors md:hidden absolute left-8" 
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Desktop Navigation (Left) */}
          <nav className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-10 mr-6 lg:mr-16">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-offwhite/70 hover:text-gold transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center z-10">
            <Link 
              href="/" 
              className="flex items-center" 
              onClick={(e) => {
                setIsOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Image 
                src="/logo.png" 
                alt="Imperator Bows Logo" 
                width={200} 
                height={60} 
                className="h-9 md:h-12 w-auto object-contain drop-shadow" 
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation (Right) */}
          <nav className="hidden md:flex flex-1 justify-start items-center gap-6 lg:gap-10 ml-6 lg:ml-16">
            {navLinks.slice(4, 8).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-offwhite/70 hover:text-gold transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-obsidian/80 backdrop-blur-md z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Menu */}
      <nav 
        className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-md bg-obsidian border-r border-gold/10 z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/" 
              onClick={(e) => {
                setIsOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Image 
                src="/logo.png" 
                alt="Imperator Bows Logo" 
                width={160} 
                height={48} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-offwhite/70 hover:text-gold transition-colors p-2 rounded-full hover:bg-white/5 active:scale-95"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-4 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="group flex items-center gap-4 text-2xl font-serif text-offwhite hover:text-gold transition-colors"
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.4s ease-out'
                }}
              >
                <span className="w-8 h-[1px] bg-gold/30 group-hover:bg-gold group-hover:w-12 transition-all duration-300"></span>
                {link.name}
              </a>
            ))}
          </div>

          <div 
            className="mt-auto pb-8 relative"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.4s ease-out'
            }}
          >
             <button 
               onClick={() => { 
                setIsOpen(false); 
                openBuildModal();
               }}
               className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian font-bold py-4 rounded uppercase text-sm tracking-widest shadow-[0_4px_20px_rgba(174,145,66,0.2)] hover:shadow-[0_4px_25px_rgba(174,145,66,0.4)] transition-all active:scale-[0.98]"
             >
               Order Your Bow
             </button>
          </div>
        </div>
      </nav>
    </>
  );
}
