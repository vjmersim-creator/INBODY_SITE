import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCta, ProductCard, SectionHeading } from "@/components/ui";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "InBody Türkiye | Sağlığı Verilerle Anlayın",
  description:
    "InBody Türkiye’nin vücut kompozisyonu, vücut suyu analizi, boy ölçümü ve veri yönetimi çözümlerini keşfedin.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "InBody Türkiye | Sağlığı Verilerle Anlayın",
    description:
      "InBody Türkiye’nin vücut kompozisyonu, vücut suyu analizi, boy ölçümü ve veri yönetimi çözümlerini keşfedin.",
    url: "/",
    images: [{ url: "/images/hero-970s.jpg", alt: "InBody analiz çözümü" }],
  },
};

const categories = [
  {
    title: "Vücut Kompozisyonu",
    description: "Profesyoneller için ayrıntılı vücut kompozisyonu analizi.",
    image: "/images/inbody-hero-device.png",
    width: 411,
    height: 711,
    href: "/urunler#vucut-kompozisyonu",
  },
  {
    title: "Vücut Suyu",
    description: "Klinik ihtiyaçlar için gelişmiş vücut suyu değerlendirmesi.",
    image: "/images/product-category-water.png",
    width: 241,
    height: 455,
    href: "/urunler#vucut-suyu",
  },
  {
    title: "Boy Ölçer",
    description: "Boy ve ağırlık ölçümünü InBody ekosistemiyle birleştirin.",
    image: "/images/product-category-height.png",
    width: 112,
    height: 419,
    href: "/urunler#boy-olcer",
  },
  {
    title: "Veri Yönetimi",
    description: "InBody sonuçlarını güvenli ve düzenli biçimde yönetin.",
    image: "/images/product-category-data.png",
    width: 151,
    height: 307,
    href: "/urunler#veri-yonetimi",
  },
];

const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <main id="ana-icerik">
      <section className="home-hero">
        <Image
          className="home-hero__background"
          src="/images/hero-970s.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__content shell">
          <p className="hero-pill">Vücut kompozisyonunda yeni bir bakış</p>
          <h1>Sağlığı yalnızca tartmayın. Derinlemesine anlayın.</h1>
          <p>
            InBody teknolojisi, sağlık profesyonellerinin vücut
            kompozisyonunu ayrıntılı verilerle değerlendirmesine yardımcı olur.
          </p>
          <div className="button-row">
            <Link className="button button--light" href="/urunler">
              Ürünleri keşfedin <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button--ghost-light" href="/iletisim">
              Bize ulaşın
            </Link>
          </div>
        </div>
        <a className="hero-scroll" href="#cozumler" aria-label="Çözümlere ilerle">
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="home-intro section">
        <div className="shell home-intro__grid">
          <p className="eyebrow">InBody Türkiye</p>
          <div>
            <h2>Vücudu oluşturan bileşenlere daha yakından bakın.</h2>
            <p>
              Vücut kompozisyonu; yağ, protein, mineral ve vücut suyu gibi
              temel bileşenlerin değerlendirilmesidir. InBody çözümleri bu
              değerlendirmeyi anlaşılır verilere dönüştürür.
            </p>
            <Link href="/ogren/vucut-kompozisyonu-nedir" className="text-link">
              Vücut kompozisyonunu öğrenin <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="cozumler" className="category-section section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Çözüm alanları"
            title="Her ihtiyaca uygun bir InBody çözümü."
            description="Klinik değerlendirmeden fitness takibine, ölçümden veri yönetimine uzanan ürün ailemizi inceleyin."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <Link className="category-card" href={category.href} key={category.title}>
                <div className="category-card__copy">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="round-arrow" aria-hidden="true">↗</span>
                </div>
                <Image
                  src={category.image}
                  alt={`${category.title} ürün kategorisi`}
                  width={category.width}
                  height={category.height}
                  sizes="(max-width: 768px) 40vw, 18vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section section">
        <div className="shell">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Öne çıkan ürünler"
              title="Daha iyi kararlar için doğru veriler."
            />
            <Link href="/urunler" className="button button--outline">
              Tüm ürünler
            </Link>
          </div>
          <div className="product-grid product-grid--three">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="technology-feature">
        <Image
          src="/images/hero-technology.jpg"
          alt="InBody analiz teknolojisi"
          fill
          sizes="100vw"
        />
        <div className="technology-feature__shade" />
        <div className="shell technology-feature__content">
          <p className="eyebrow eyebrow--light">InBody teknolojisi</p>
          <h2>Ölçümün arkasındaki teknoloji.</h2>
          <p>
            Bioelektrik İmpedans Analizi ve doğrudan segmental ölçüm yaklaşımı
            vücudun beş bölümünü ayrı ayrı değerlendirmeyi destekler.
          </p>
          <Link className="button button--light" href="/ogren/inbody-teknolojisi">
            Teknolojiyi inceleyin <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="test-section section">
        <div className="shell test-section__grid">
          <div className="test-section__copy">
            <p className="eyebrow">InBody testi</p>
            <h2>Doğru ölçüm deneyimine hazırlanın.</h2>
            <p>Onaylı Türkçe içerik eklenecek.</p>
            <Link href="/ogren/inbody-testi" className="text-link">
              InBody testini inceleyin <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="test-section__image">
            <Image
              src="/images/hero-touch.jpg"
              alt="InBody cihazında test deneyimi"
              fill
              sizes="(max-width: 768px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="insight-section section">
        <div className="shell insight-section__grid">
          <div className="insight-section__image">
            <Image
              src="/images/hero-results.jpg"
              alt="InBody sonuçlarının profesyonel değerlendirmesi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="insight-section__copy">
            <p className="eyebrow">Sonuçları anlayın</p>
            <h2>Bir ölçümden daha fazlası.</h2>
            <p>
              InBody Sonuç Sayfası, vücut kompozisyonu verilerini düzenli bir
              yapıda sunar ve zaman içindeki değişimleri izlemeyi kolaylaştırır.
            </p>
            <Link href="/ogren/sonuc-sayfasi-yorumlama" className="text-link">
              Sonuç sayfasını tanıyın <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="professional-section section section--soft">
        <div className="shell professional-section__grid">
          <div>
            <p className="eyebrow">Kurumsal</p>
            <h2>Sağlık teknolojisine daha yakından bakın.</h2>
            <p>
              InBody, insanları daha sağlıklı bir yaşam sürmeye teşvik etmek ve
              bu yolda öncülük etmek için çalışır.
            </p>
            <Link href="/hakkimizda/biz-kimiz" className="button button--dark">
              InBody’yi tanıyın <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <Image
            src="/images/professional-section.jpg"
            alt="InBody sonuçlarını değerlendiren bir sağlık profesyoneli"
            width={613}
            height={455}
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
