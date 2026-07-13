"use client";

import { useRef, type ReactNode } from "react";
import { Icon } from "@/components/icon";

export function HorizontalRail({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.9, 1040),
      behavior: "smooth",
    });
  };

  return (
    <div className={`horizontal-rail${className ? ` ${className}` : ""}`}>
      <div className="horizontal-rail__controls" aria-label={`${label} kaydırma kontrolleri`}>
        <button type="button" onClick={() => move(-1)} aria-label="Önceki içerikleri göster">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Sonraki içerikleri göster">
          <Icon name="arrow" />
        </button>
      </div>
      <div className="horizontal-rail__track" ref={trackRef} aria-label={label}>
        {children}
      </div>
    </div>
  );
}
