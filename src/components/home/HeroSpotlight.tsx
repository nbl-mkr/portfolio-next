"use client";

import { useRef } from "react";

interface HeroSpotlightProps {
  children: React.ReactNode;
}

export default function HeroSpotlight({ children }: HeroSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;
    const rect = container.getBoundingClientRect();
    glow.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    glow.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="group relative"
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(250, 249, 248, 0.06), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
