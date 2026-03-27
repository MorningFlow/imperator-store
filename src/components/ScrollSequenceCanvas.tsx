"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface Props {
  folderPath: string;
  frameCount: number;
  className?: string;
}

export default function ScrollSequenceCanvas({ folderPath, frameCount, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into framer-motion's scroll tracker based on our parent's full height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // Background buffer loading all images directly on mount
    const imgs: HTMLImageElement[] = [];
    
    // Explicitly load frame 1 into the canvas automatically so it isn't blank
    let firstFrameLoaded = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedNum = i.toString().padStart(3, '0');
      img.src = `${folderPath}/ezgif-frame-${paddedNum}.jpg`;
      imgs[i] = img;

      if (i === 1) {
        img.onload = () => {
          if (!firstFrameLoaded) {
            drawFrame(1);
            firstFrameLoaded = true;
          }
        };
      }
    }
    imagesRef.current = imgs;
  }, [folderPath, frameCount]);

  const drawFrame = (frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentImage = imagesRef.current[frameNum];
    if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
      if (canvas.width !== currentImage.naturalWidth) {
        canvas.width = currentImage.naturalWidth;
        canvas.height = currentImage.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    }
  };

  // Redraw the canvas absolutely perfectly scrub-synced to the current scroll decimal perfectly
  useMotionValueEvent(scrollYProgress, "change", (latestVal) => {
    const frameIndex = Math.max(1, Math.min(frameCount, Math.ceil(latestVal * frameCount)));
    drawFrame(frameIndex);
  });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full">
      {/* Sticky box ensuring the canvas scrubs directly in front of the camera instead of scrolling out of view */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className={className} />
        {/* Soft edge gradients matching the theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-50 pointer-events-none" />
      </div>
    </div>
  );
}
