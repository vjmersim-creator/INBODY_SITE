"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  aboutLinks,
  applicationLinks,
  learnLinks,
  resourceLinks,
  type NavigationItem,
} from "@/content/navigation";
import { productsByCategory } from "@/content/products";

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
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner shell">
          <Link href="/" className="brand" aria-label="InBody Türkiye ana sayfa">
            <Image
              src="/images/inbody-logo.png"
              alt="InBody"
              width={148}
              height={44}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Ana menü">
            <Link href="/hakkimizda/biz-kimiz">Hakkımızda</Link>
            <Link href="/ogren/vucut-kompozisyonu-nedir">Öğrenin</Link>
            <button
              type="button"
              className="desktop-nav__trigger"
              aria-expanded={megaOpen}
              aria-controls="product-mega-menu"
              onClick={() => {
                setMegaOpen((open) => !open);
                setMobileOpen(false);
              }}
            >
              Ürünler <span aria-hidden="true">⌄</span>
            </button>
            <Link href="/uygulamalar/tibbi">Uygulamalar</Link>
            <Link href="/kaynaklar/blog">Kaynaklar</Link>
          </nav>

          <div className="site-header__actions">
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
                setMegaOpen(false);
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          id="product-mega-menu"
          className="mega-menu"
          hidden={!megaOpen}
        >
          <div className="mega-menu__inner shell">
            <div className="mega-menu__intro">
              <p className="eyebrow">InBody ürün ailesi</p>
              <h2>İhtiyacınıza uygun çözümü keşfedin.</h2>
              <Link href="/urunler" className="text-link" onClick={closeAll}>
                Tüm ürünleri görüntüle <span aria-hidden="true">↗</span>
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
                      {product.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobil menü"
          hidden={!mobileOpen}
        >
          <MobileLinkList
            title="Hakkımızda"
            links={aboutLinks}
            onNavigate={closeAll}
          />
          <MobileLinkList
            title="Öğrenin"
            links={learnLinks}
            onNavigate={closeAll}
          />
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
          <MobileLinkList
            title="Uygulamalar"
            links={applicationLinks}
            onNavigate={closeAll}
          />
          <MobileLinkList
            title="Kaynaklar"
            links={resourceLinks}
            onNavigate={closeAll}
          />
          <div className="mobile-nav__footer">
            <Link className="button button--red" href="/iletisim" onClick={closeAll}>
              Bize Ulaşın
            </Link>
          </div>
        </nav>
      </header>
      {(megaOpen || mobileOpen) && (
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
