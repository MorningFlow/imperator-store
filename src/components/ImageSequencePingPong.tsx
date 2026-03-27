"use client";

import { useRef, useEffect } from "react";

interface Props {
  folderPath: string; 
  frameCount: number; 
  className?: string; 
}

export default function ImageSequencePingPong({ folderPath, frameCount, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement)[]>([]);

  // We don't use React state for rapid frame animation to keep DOM stable
  const frameRef = useRef(1);
  const reversingRef = useRef(false);

  useEffect(() => {
    // 1. Kick off image buffering automatically
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedNum = i.toString().padStart(3, '0');
        img.src = `${folderPath}/ezgif-frame-${paddedNum}.jpg`;
        imgs[i] = img;
    }
    imagesRef.current = imgs;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let reqId: number;
    let lastTime = performance.now();
    const fps = 25; 
    const frameDuration = 1000 / fps;

    // 2. Play loop mechanism
    const loop = (time: number) => {
      reqId = requestAnimationFrame(loop);

      const delta = time - lastTime;
      if (delta < frameDuration) return; 
      
      const currentImage = imagesRef.current[frameRef.current];
      
      // Paint only if the image has finished downloading and is valid
      if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
        if (canvas.width !== currentImage.naturalWidth) {
           canvas.width = currentImage.naturalWidth;
           canvas.height = currentImage.naturalHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
      }

      // Step frame logic forward or backward
      if (reversingRef.current) {
        frameRef.current -= 1;
        if (frameRef.current <= 1) {
          frameRef.current = 1;
          reversingRef.current = false;
        }
      } else {
        frameRef.current += 1;
        if (frameRef.current >= frameCount) {
          frameRef.current = frameCount;
          reversingRef.current = true;
        }
      }

      lastTime = time - (delta % frameDuration); 
    };

    reqId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, [folderPath, frameCount]);

  return <canvas ref={canvasRef} className={className} />;
}
