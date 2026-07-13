import Image from "next/image";
import Link from "next/link";
import { aboutLinks, learnLinks } from "@/content/navigation";
import { products } from "@/content/products";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cta shell">
        <div>
          <p className="eyebrow eyebrow--light">Bir sonraki adım</p>
          <h2>InBody çözümleri hakkında konuşalım.</h2>
        </div>
        <Link className="button button--light" href="/iletisim">
          İletişime geçin <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="site-footer__main shell">
        <div className="site-footer__brand">
          <Image
            src="/images/inbody-logo-footer.png"
            alt="InBody"
            width={125}
            height={37}
          />
          <p>
            Fulya, Büyükdere Cd. No:76 D:177,
            <br />
            34394 Şişli / İstanbul, Türkiye
          </p>
          <a href="mailto:inbody_turkiye@inbody.com">
            inbody_turkiye@inbody.com
          </a>
          <a href="tel:+902168070515">0216 807 05 15</a>
        </div>

        <div className="site-footer__column">
          <p className="footer-title">Hakkımızda</p>
          {aboutLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <p className="footer-title">Öğrenin</p>
          {learnLinks.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <p className="footer-title">Ürünler</p>
          {products.slice(0, 6).map((product) => (
            <Link key={product.slug} href={`/urunler/${product.slug}`}>
              {product.name}
            </Link>
          ))}
          <Link href="/urunler" className="footer-all-link">
            Tüm ürünler ↗
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom shell">
        <p>© {new Date().getFullYear()} InBody Türkiye. Tüm hakları saklıdır.</p>
        <p>Yerel demo sürümü</p>
      </div>
    </footer>
  );
}

