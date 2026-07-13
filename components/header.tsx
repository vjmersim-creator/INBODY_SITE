"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FocusEvent } from "react";
import {
  aboutLinks,
  primaryLearnLinks,
  type NavigationItem,
} from "@/content/navigation";
import { productsByCategory } from "@/content/products";

type MenuKey = "about" | "learn" | "products";

const menuContent: Record<
  Exclude<MenuKey, "products">,
  {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
    linkLabel: string;
    links: NavigationItem[];
  }
> = {
  about: {
    eyebrow: "InBody hakkında",
    title: "Ölçüm teknolojisinin arkasındaki hikâyeyi keşfedin.",
    description:
      "Dr. Kichul Cha ile başlayan inovasyon yolculuğu, bugün 80'den fazla ülkede devam ediyor.",
    image: "/images/official/dr-kichul-cha.png",
    imageAlt: "InBody kurucusu Dr. Kichul Cha",
    href: "/hakkimizda/biz-kimiz",
    linkLabel: "InBody'yi tanıyın",
    links: aboutLinks,
  },
  learn: {
    eyebrow: "InBody bilgi merkezi",
    title: "Vücut kompozisyonunu veriye dönüştüren yaklaşımı anlayın.",
    description:
      "BIA teknolojisinden test hazırlığına ve sonuç sayfasına kadar temel bilgileri tek yerde inceleyin.",
    image: "/images/hero-technology.jpg",
    imageAlt: "InBody cihazında vücut kompozisyonu analizi",
    href: "/ogren/inbody-teknolojisi",
    linkLabel: "Teknolojiyi keşfedin",
    links: primaryLearnLinks,
  },
};

function MobileLinkList({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: NavigationItem[];
  onNavigate: () => void;
}) {
  return (
    <details className="mobile-nav__group">
      <summary>{title}</summary>
      <div className="mobile-nav__links">
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={onNavigate}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const openMenu = (menu: MenuKey) => {
    setActiveMenu(menu);
    setMobileOpen(false);
  };

  const toggleMenu = (menu: MenuKey) => {
    setActiveMenu((current) => (current === menu ? null : menu));
    setMobileOpen(false);
  };

  const handleHeaderBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className="site-header"
        onMouseLeave={() => setActiveMenu(null)}
        onBlur={handleHeaderBlur}
      >
        <div className="site-header__inner shell">
          <Link
            href="/"
            className="brand"
            aria-label="InBody Türkiye ana sayfa"
            onMouseEnter={() => setActiveMenu(null)}
            onFocus={() => setActiveMenu(null)}
          >
            <Image
              src="/images/inbody-logo.png"
              alt="InBody"
              width={148}
              height={44}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Ana menü">
            <button
              type="button"
              className="desktop-nav__trigger"
              aria-expanded={activeMenu === "about"}
              aria-controls="site-mega-menu"
              onMouseEnter={() => openMenu("about")}
              onFocus={() => openMenu("about")}
              onClick={() => toggleMenu("about")}
            >
              Hakkımızda <span aria-hidden="true">⌄</span>
            </button>
            <button
              type="button"
              className="desktop-nav__trigger"
              aria-expanded={activeMenu === "learn"}
              aria-controls="site-mega-menu"
              onMouseEnter={() => openMenu("learn")}
              onFocus={() => openMenu("learn")}
              onClick={() => toggleMenu("learn")}
            >
              Öğrenin <span aria-hidden="true">⌄</span>
            </button>
            <button
              type="button"
              className="desktop-nav__trigger"
              aria-expanded={activeMenu === "products"}
              aria-controls="site-mega-menu"
              onMouseEnter={() => openMenu("products")}
              onFocus={() => openMenu("products")}
              onClick={() => toggleMenu("products")}
            >
              Ürünler <span aria-hidden="true">⌄</span>
            </button>
          </nav>

          <div
            className="site-header__actions"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <Link className="button button--dark header-cta" href="/iletisim">
              Bize Ulaşın
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={mobileOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMobileOpen((open) => !open);
                setActiveMenu(null);
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        {activeMenu ? (
          <div id="site-mega-menu" className="mega-menu">
            {activeMenu === "products" ? (
              <div className="mega-menu__inner mega-menu__inner--products shell">
                <Link
                  href="/urunler/inbody970s"
                  className="mega-menu__visual mega-menu__visual--product"
                  onClick={closeAll}
                >
                  <Image
                    src="/images/inbody-hero-device.png"
                    alt="InBody970S vücut kompozisyonu analiz cihazı"
                    fill
                    sizes="360px"
                  />
                  <div className="mega-menu__visual-copy">
                    <span>Yeni nesil analiz</span>
                    <strong>InBody970S</strong>
                    <small>Ürünü inceleyin ↗</small>
                  </div>
                </Link>
                <div className="mega-menu__content">
                  <div className="mega-menu__heading">
                    <div>
                      <p className="eyebrow">InBody ürün ailesi</p>
                      <h2>İhtiyacınıza uygun çözümü keşfedin.</h2>
                    </div>
                    <Link href="/urunler" className="text-link" onClick={closeAll}>
                      Tüm ürünler <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                  <div className="mega-menu__grid">
                    {productsByCategory.map((category) => (
                      <div className="mega-menu__column" key={category.id}>
                        <p>{category.label}</p>
                        {category.products.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/urunler/${product.slug}`}
                            onClick={closeAll}
                          >
                            {product.name} <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mega-menu__inner mega-menu__inner--editorial shell">
                <Link
                  href={menuContent[activeMenu].href}
                  className="mega-menu__visual mega-menu__visual--photo"
                  onClick={closeAll}
                >
                  <Image
                    src={menuContent[activeMenu].image}
                    alt={menuContent[activeMenu].imageAlt}
                    fill
                    sizes="440px"
                  />
                  <div className="mega-menu__visual-copy">
                    <span>{menuContent[activeMenu].eyebrow}</span>
                    <strong>{menuContent[activeMenu].linkLabel}</strong>
                    <small>Keşfedin ↗</small>
                  </div>
                </Link>
                <div className="mega-menu__content">
                  <div className="mega-menu__heading mega-menu__heading--stacked">
                    <p className="eyebrow">{menuContent[activeMenu].eyebrow}</p>
                    <h2>{menuContent[activeMenu].title}</h2>
                    <p>{menuContent[activeMenu].description}</p>
                  </div>
                  <div className="mega-menu__link-grid">
                    {menuContent[activeMenu].links.map((item, index) => (
                      <Link key={item.href} href={item.href} onClick={closeAll}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{item.label}</strong>
                        <small aria-hidden="true">↗</small>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobil menü"
          hidden={!mobileOpen}
        >
          <MobileLinkList title="Hakkımızda" links={aboutLinks} onNavigate={closeAll} />
          <MobileLinkList title="Öğrenin" links={primaryLearnLinks} onNavigate={closeAll} />
          <details className="mobile-nav__group">
            <summary>Ürünler</summary>
            <div className="mobile-nav__products">
              <Link href="/urunler" onClick={closeAll} className="text-link">
                Tüm ürünler
              </Link>
              {productsByCategory.map((category) => (
                <div key={category.id}>
                  <p>{category.label}</p>
                  {category.products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/urunler/${product.slug}`}
                      onClick={closeAll}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </details>
          <div className="mobile-nav__footer">
            <Link className="button button--red" href="/iletisim" onClick={closeAll}>
              Bize Ulaşın
            </Link>
          </div>
        </nav>
      </header>
      {(activeMenu || mobileOpen) && (
        <button
          className="nav-backdrop"
          type="button"
          aria-label="Menüyü kapat"
          onClick={closeAll}
        />
      )}
    </>
  );
}
