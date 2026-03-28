"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)"
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }
    return Color.formatRGBA(Color.parse(cssColor));
  } catch (e) {
    console.error("Color parsing failed:", e);
    return fallback;
  }
};

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string; // Can be any valid CSS color
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (!maskCtx) return;

      if (text) {
        maskCtx.save();
        maskCtx.scale(dpr, dpr);
        maskCtx.fillStyle = "white";
        // Swapped to Cinzel for the background serif text
        maskCtx.font = `${fontWeight} ${fontSize}px var(--font-cinzel), serif`;
        maskCtx.textAlign = "center";
        maskCtx.textBaseline = "middle";
        maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
        maskCtx.restore();
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;
          const squareWidth = squareSize * dpr;
          const squareHeight = squareSize * dpr;

          const maskData = maskCtx.getImageData(x, y, squareWidth, squareHeight).data;
          const hasText = maskData.some((value, index) => index % 4 === 0 && value > 0);

          const opacity = squares[i * rows + j];
          const finalOpacity = hasText ? Math.min(1, opacity * 3 + 0.4) : opacity;

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
          ctx.fillRect(x, y, squareWidth, squareHeight);
        }
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight]
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div ref={containerRef} className={cn(`h-full w-full ${className}`)} {...props}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function checkQuery() {
      const result = window.matchMedia(query);
      setValue(result.matches);
    }
    checkQuery();
    window.addEventListener("resize", checkQuery);
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);

    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

export const siteConfig = {
  hero: {
    badgeIcon: null,
    badge: "",
    title: "Imperator Bows",
    description: "Forged in Texas. Built for Legends.",
  },
  footerLinks: [
    {
      title: "Information",
      links: [
        { id: 1, title: "Bow Care Guide", url: "/care" },
        { id: 2, title: "Limited Warranty", url: "/warranty" },
        { id: 3, title: "Legal Disclaimer", url: "/legal" },
      ],
    },
    {
      title: "Contact",
      links: [
        { id: 4, title: "imperatorbows@gmail.com", url: "mailto:imperatorbows@gmail.com" },
        { id: 5, title: "Conroe, Texas", url: "#" },
        { id: 6, title: "Veteran-Owned & Operated", url: "#" },
      ],
    }
  ],
};

export const FlickeringFooter = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0 bg-obsidian border-t border-gold/20 flex flex-col justify-end pt-10 relative overflow-hidden text-sm shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="flex flex-col md:flex-row md:items-start justify-between px-10 pt-4 pb-0 max-w-7xl mx-auto w-full relative z-20">
        
        {/* Left Side: Brand */}
        <div className="flex flex-col items-start justify-start gap-y-4 max-w-sm mx-0">
          <Link href="/" className="cursor-pointer z-20 group">
            <Image 
              src="/logo.png" 
              alt="Imperator Bows Logo" 
              width={220} 
              height={60} 
              className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]" 
            />
          </Link>
          <p className="tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-offwhite/80 to-offwhite/40 italic font-serif z-20 text-xs border-l-2 border-gold/50 pl-3 py-0.5">
            {siteConfig.hero.description}
          </p>
          
          {/* Social Links Replacing Badges */}
          <div className="flex items-center gap-4 mt-1 text-gold z-20">
             <a href="https://www.facebook.com/share/18EbXY1LWm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
               <FaFacebook className="w-5 h-5" />
             </a>
             <a href="https://www.instagram.com/imperatorbows?igsh=eG9renNyODRiNG9n&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
               <FaInstagram className="w-5 h-5" />
             </a>
             <a href="#" aria-label="YouTube" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
               <FaYoutube className="w-6 h-6 -mt-0.5" />
             </a>
             <a href="#" aria-label="TikTok" className="hover:text-offwhite transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
               <FaTiktok className="w-5 h-5" />
             </a>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="pt-8 md:pt-0 w-full md:w-1/2 z-20">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-end gap-x-16 gap-y-6">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-3">
                <li className="mb-1 text-[10px] uppercase tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[12px]/snug text-offwhite/60 hover:text-gold-light transition-all duration-300"
                  >
                    <Link href={link.url} className="relative overflow-hidden">
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-light transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                    <div className="flex size-4 items-center justify-center border border-transparent rounded-full translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-hover:border-gold/40 group-hover:bg-gold/10 text-gold-light">
                      <ChevronRightIcon className="h-2.5 w-2.5" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Background Flickering Grid */}
      <div className="w-full h-40 md:h-48 relative mt-[-2rem] md:mt-[-3rem] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-obsidian/60 to-obsidian z-10 from-5%" />
        {/* We use #D4AF37 which is `gold` to flicker over the dark background */}
        <div className="absolute inset-x-0 bottom-0 top-10 mx-6 mix-blend-plus-lighter opacity-40">
          <FlickeringGrid
            text="IMPERATOR"
            fontSize={tablet ? 60 : 120}
            className="h-full w-full"
            squareSize={3}
            gridGap={tablet ? 2 : 4}
            color="#D4AF37" 
            maxOpacity={0.8}
            flickerChance={0.4}
          />
        </div>
      </div>
    </footer>
  );
};
