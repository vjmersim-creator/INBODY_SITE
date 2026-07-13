"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/icon";

export type ProductNavigationItem = {
  slug: string;
  name: string;
  categoryLabel: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function ProductQuickNav({
  currentSlug,
  products,
}: {
  currentSlug: string;
  products: ProductNavigationItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = trackRef.current?.querySelector<HTMLElement>("[aria-current='page']");
    active?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [currentSlug]);

  return (
    <nav className="product-quick-nav" aria-label="Ürünler arasında geçiş">
      <div className="shell product-quick-nav__inner">
        <div className="product-quick-nav__label">
          <Icon name="switch" />
          <span>Ürün seçin</span>
        </div>
        <div className="product-quick-nav__track" ref={trackRef}>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              aria-current={product.slug === currentSlug ? "page" : undefined}
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function ProductRail({
  currentSlug,
  products,
}: {
  currentSlug: string;
  products: ProductNavigationItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleProducts = products.filter((product) => product.slug !== currentSlug);

  const move = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(trackRef.current.clientWidth * 0.82, 780),
      behavior: "smooth",
    });
  };

  return (
    <section className="product-rail section" aria-labelledby="product-rail-title">
      <div className="shell">
        <div className="product-rail__heading">
          <div>
            <p className="eyebrow eyebrow--light">InBody ürün ailesi</p>
            <h2 id="product-rail-title">Diğer cihazlarımız</h2>
          </div>
          <div className="product-rail__controls" aria-label="Ürünleri kaydır">
            <button type="button" onClick={() => move(-1)} aria-label="Önceki cihazları göster">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Sonraki cihazları göster">
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div className="product-rail__track" ref={trackRef}>
          {visibleProducts.map((product) => (
            <Link className="product-rail-card" href={`/urunler/${product.slug}`} key={product.slug}>
              <div className="product-rail-card__visual">
                {product.image ? (
                  <Image
                    src={product.image.src}
                    alt=""
                    width={product.image.width}
                    height={product.image.height}
                    sizes="220px"
                  />
                ) : (
                  <Icon name="measure" />
                )}
              </div>
              <div className="product-rail-card__copy">
                <span>{product.categoryLabel}</span>
                <strong>{product.name}</strong>
                <Icon name="arrow" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
