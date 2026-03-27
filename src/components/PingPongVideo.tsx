"use client";

import { useRef, useEffect } from "react";

export default function PingPongVideo({ src, className }: { src: string, className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReversingRef = useRef(false);

  // Play immediately if paused
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.play().catch(() => {});
    }
  }, [src]);

  const startReverse = () => {
    const video = videoRef.current;
    if (!video) return;

    // Safety cleanup
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    isReversingRef.current = true;
    video.pause();

    // 40ms interval = approx 25 frames per second rewind
    intervalRef.current = setInterval(() => {
      if (!isReversingRef.current || !video) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      const nextTime = video.currentTime - 0.04;
      
      if (nextTime <= 0.05) {
        // We reached the beginning! Clear interval and play forward.
        if (intervalRef.current) clearInterval(intervalRef.current);
        isReversingRef.current = false;
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        // Step back
        video.currentTime = nextTime;
      }
    }, 40);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      playsInline
      autoPlay
      preload="auto"
      onEnded={startReverse}
    />
  );
}
