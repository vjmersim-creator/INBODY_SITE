"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon, type IconName } from "@/components/icon";

export type SectionNavigationItem = {
  label: string;
  href: string;
};

export function SectionNavigation({
  label,
  currentHref,
  links,
  icon = "switch",
}: {
  label: string;
  currentHref?: string;
  links: SectionNavigationItem[];
  icon?: IconName;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = trackRef.current?.querySelector<HTMLElement>("[aria-current='page']");
    active?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [currentHref]);

  return (
    <nav className="section-quick-nav" aria-label={`${label} sayfaları`}>
      <div className="shell section-quick-nav__inner">
        <div className="section-quick-nav__label">
          <Icon name={icon} />
          <span>{label}</span>
        </div>
        <div className="section-quick-nav__track" ref={trackRef}>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === currentHref ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
