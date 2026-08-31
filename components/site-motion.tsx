"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const rhythmSelectors = [
  ".product-grid",
  ".category-grid",
  ".content-locations__grid",
  ".content-steps",
  ".product-feature-list",
  ".bodycomp-benefits__grid",
  ".bodycomp-outputs__grid",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const main = document.querySelector<HTMLElement>("main#ana-icerik");
    if (!main) return;

    const runningAnimations: Animation[] = [];
    const markedElements: HTMLElement[] = [];
    const heroSection = main.querySelector<HTMLElement>("h1")?.closest<HTMLElement>("section");

    const heroImage = heroSection?.querySelector<HTMLImageElement>("img");
    const isCarouselHero = heroSection?.classList.contains("home-hero");
    if (heroImage && !isCarouselHero && heroImage.dataset.siteMotionPlayed !== pathname) {
      heroImage.dataset.siteMotionPlayed = pathname;
      markedElements.push(heroImage);
      const animation = heroImage.animate(
        [
          { opacity: 0.82, transform: "scale(1.035)", filter: "saturate(0.82)" },
          { opacity: 1, transform: "scale(1)", filter: "saturate(1)" },
        ],
        {
          duration: 760,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      );
      animation.id = "site-hero-media";
      runningAnimations.push(animation);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = entry.target as HTMLElement;
          observer.unobserve(group);
          group.dataset.siteMotionPlayed = "true";
          markedElements.push(group);

          Array.from(group.children).slice(0, 10).forEach((element, index) => {
            if (!(element instanceof HTMLElement)) return;
            const animation = element.animate(
              [
                { opacity: 0.78, transform: "translateY(16px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 480,
                delay: Math.min(index * 45, 270),
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              },
            );
            animation.id = `site-list-item-${index}`;
            runningAnimations.push(animation);
          });
        });
      },
      { threshold: 0.13 },
    );

    main.querySelectorAll<HTMLElement>(rhythmSelectors).forEach((group) => {
      if (!group.dataset.siteMotionPlayed) observer.observe(group);
    });

    return () => {
      observer.disconnect();
      runningAnimations.forEach((animation) => animation.cancel());
      markedElements.forEach((element) => delete element.dataset.siteMotionPlayed);
    };
  }, [pathname]);

  return null;
}
