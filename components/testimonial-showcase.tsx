"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  focus: string;
  quote: string;
  name: string;
  organization: string;
};

export function TestimonialShowcase({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div
      className="home-testimonials__list"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      {items.map((testimonial, index) => (
        <figure
          className={`testimonial-card testimonial-card--${index + 1}${activeIndex === index ? " is-active" : ""}`}
          key={testimonial.focus}
          onClick={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)}
          onKeyDown={(event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            setActiveIndex(index);
          }}
          role="button"
          tabIndex={0}
          aria-label={`${testimonial.focus}, müşteri görüşü ${index + 1} / ${items.length}`}
        >
          <div className="testimonial-card__meta">
            <span>{testimonial.focus}</span>
            <span aria-hidden="true">0{index + 1}</span>
          </div>
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.organization}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
