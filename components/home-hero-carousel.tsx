"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Vücut kompozisyonunda yeni bir bakış",
    title: "Sağlığı yalnızca tartmayın. Derinlemesine anlayın.",
    description:
      "InBody teknolojisi, sağlık profesyonellerinin vücut kompozisyonunu ayrıntılı verilerle değerlendirmesine yardımcı olur.",
    image: "/images/home-hero/product-family.png",
    primaryHref: "/urunler",
    primaryLabel: "Ürünleri keşfedin",
    secondaryHref: "/iletisim",
    secondaryLabel: "Bize ulaşın",
  },
  {
    eyebrow: "Sonuçları anlamlandırın",
    title: "Ölçümden daha fazlası: karar vermeyi kolaylaştıran veriler.",
    description:
      "Kas, yağ, vücut suyu ve segmental analizleri birlikte değerlendirerek her ölçümden daha anlamlı içgörüler elde edin.",
    image: "/images/home-hero/touch-experience.png",
    primaryHref: "/ogren/sonuc-sayfasi-yorumlama",
    primaryLabel: "Sonuçları inceleyin",
    secondaryHref: "/ogren/vucut-kompozisyonu-nedir",
    secondaryLabel: "InBody’yi öğrenin",
  },
  {
    eyebrow: "Doğrudan segmental ölçüm",
    title: "Her ölçümün arkasındaki teknolojiyi keşfedin.",
    description:
      "InBody’nin çok frekanslı ve segmental analiz yaklaşımı, vücudu daha ayrıntılı değerlendirmeye yardımcı olur.",
    image: "/images/hero-770s.jpg",
    primaryHref: "/ogren/inbody-teknolojisi",
    primaryLabel: "Teknolojiyi keşfedin",
    secondaryHref: "/iletisim",
    secondaryLabel: "Uzmanla konuşun",
  },
] as const;

const AUTO_ADVANCE_MS = 5000;

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (isPaused || reduceMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showSlide = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const showPrevious = () => {
    showSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    showSlide((activeIndex + 1) % slides.length);
  };

  return (
    <section
      className="home-hero home-hero--carousel"
      aria-roledescription="carousel"
      aria-label="InBody öne çıkanlar"
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="home-hero__slides" aria-live="polite">
        {slides.map((slide, index) => (
          <div
            className={`home-hero__slide${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
            key={slide.title}
          >
            <Image
              className="home-hero__background"
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
            />
            <div className="home-hero__overlay" />
            <div className="home-hero__content shell">
              <p className="hero-pill">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="button-row">
                <Link className="button button--light" href={slide.primaryHref} tabIndex={index === activeIndex ? 0 : -1}>
                  {slide.primaryLabel} <span aria-hidden="true">↗</span>
                </Link>
                <Link className="button button--ghost-light" href={slide.secondaryHref} tabIndex={index === activeIndex ? 0 : -1}>
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="home-hero__carousel-controls shell">
        <div className="home-hero__navigation" aria-label="Slayt kontrolleri">
          <button type="button" onClick={showPrevious} aria-label="Önceki slayt">
            <span aria-hidden="true">←</span>
          </button>
          <div className="home-hero__dots" role="tablist" aria-label="Slayt seçimi">
            {slides.map((slide, index) => (
              <button
                type="button"
                aria-label={`${index + 1}. slayt: ${slide.eyebrow}`}
                aria-selected={index === activeIndex}
                className={index === activeIndex ? "is-active" : ""}
                key={slide.title}
                onClick={() => showSlide(index)}
                role="tab"
              />
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Sonraki slayt">
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <span className="home-hero__count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <a className="hero-scroll" href="#cozumler" aria-label="Çözümlere ilerle">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
