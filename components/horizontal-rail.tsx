"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/icon";

const SCROLL_EDGE_EPSILON = 8;

export function HorizontalRail({
  children,
  label,
  className = "",
  pageByPage = false,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  pageByPage?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    hasOverflow: false,
    canScrollBackward: false,
    canScrollForward: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const hasOverflow = maxScrollLeft > 1;

      setScrollState({
        hasOverflow,
        canScrollBackward: hasOverflow && track.scrollLeft > SCROLL_EDGE_EPSILON,
        canScrollForward:
          hasOverflow && track.scrollLeft < maxScrollLeft - SCROLL_EDGE_EPSILON,
      });
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [children]);

  const move = (direction: -1 | 1, shouldWrap = false) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    if (
      shouldWrap &&
      direction === 1 &&
      track.scrollLeft >= maxScrollLeft - SCROLL_EDGE_EPSILON
    ) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    track.scrollBy({
      left: direction * (pageByPage ? track.clientWidth : Math.min(track.clientWidth * 0.9, 1040)),
      behavior: "smooth",
    });
  };

  return (
    <div className={`horizontal-rail${className ? ` ${className}` : ""}`}>
      {scrollState.hasOverflow ? (
        <div className="horizontal-rail__controls" aria-label={`${label} kaydırma kontrolleri`}>
          <button
            type="button"
            disabled={!scrollState.canScrollBackward}
            onClick={() => move(-1)}
            aria-label="Önceki içerikleri göster"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            disabled={!scrollState.canScrollForward}
            onClick={() => move(1)}
            aria-label="Sonraki içerikleri göster"
          >
            <Icon name="arrow" />
          </button>
        </div>
      ) : null}
      <div className="horizontal-rail__track" ref={trackRef} aria-label={label}>
        {children}
      </div>
    </div>
  );
}
