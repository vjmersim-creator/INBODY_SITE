import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import {
  ProductQuickNav,
  ProductRail,
  type ProductNavigationItem,
} from "@/components/product-navigation";
import {
  Breadcrumb,
  ContactCta,
  ProductVisual,
  SectionHeading,
} from "@/components/ui";
import { listedProducts, products, type Product } from "@/content/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const navigationProducts: ProductNavigationItem[] = listedProducts.map(
  ({ slug, name, categoryLabel, image }) => ({ slug, name, categoryLabel, image }),
);

const featureIcons = ["◎", "⌁", "▦", "⇄", "◌", "✓"];

function brochureHref(product: Product) {
  return `/iletisim?urun=${product.slug}&talep=brosur#iletisim-formu`;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/urunler/${product.slug}` },
    openGraph: {
      title: `${product.name} | InBody Türkiye`,
      description: product.summary,
      url: `/urunler/${product.slug}`,
      images: product.bannerImage
        ? [{ url: product.bannerImage.src, alt: product.bannerImage.alt }]
        : product.image
          ? [{ url: product.image.src, alt: product.image.alt }]
        : undefined,
    },
  };
}

const detailCards = [
  {
    image: "/images/inbody580-detail-1.jpg",
    title: "10,1 inç TFT LCD",
    text: "Geniş dokunmatik ekran, kolay anlaşılır bir test akışını destekler.",
    alt: "InBody580 dokunmatik ekran detayı",
  },
  {
    image: "/images/inbody580-detail-2.jpg",
    title: "Üç yönlü el elektrodu",
    text: "Ergonomik el elektrodu, doğru kavrama pozisyonuna yardımcı olur.",
    alt: "InBody580 üç yönlü el elektrodu detayı",
  },
  {
    image: "/images/inbody580-detail-3.jpg",
    title: "Duruş desteği",
    text: "Platform tasarımı, test sırasında stabil duruşu destekler.",
    alt: "InBody580 platform ve duruş desteği detayı",
  },
  {
    image: "/images/inbody580-detail-4.jpg",
    title: "Akıllı tanıma",
    text: "Kullanıcı tanıma seçenekleri, tekrar eden testlerde akışı kolaylaştırır.",
    alt: "InBody580 kullanıcı tanıma detayı",
  },
];

const specifications = [
  ["Ölçüm yöntemi", "Doğrudan Segmental Çok Frekanslı Bioelektrik İmpedans Analizi"],
  ["Empedans ölçümleri", "5 segmentte, 4 frekansta toplam 20 ölçüm"],
  ["Frekanslar", "5, 50, 250 ve 500 kHz"],
  ["Test süresi", "Yaklaşık 30 saniye"],
  ["Ağırlık aralığı", "5–300 kg"],
  ["Boy aralığı", "95–220 cm"],
  ["Yaş aralığı", "3 yaş ve üzeri"],
  ["Veritabanı", "100.000 sonuç"],
  ["Cihaz ağırlığı", "24,4 kg"],
  ["Boyutlar", "501,9 × 892,4 × 1124,4 mm (G × D × Y)"],
  ["Bağlantı", "Wi-Fi ve Bluetooth"],
  ["Garanti", "2 yıl"],
];

function ProductBanner({ product }: { product: Product }) {
  const visual = product.bannerImage ?? product.image;
  if (!visual) return null;

  const isPhoto = Boolean(product.bannerImage);

  return (
    <section
      className={`product-page-banner product-page-banner--${isPhoto ? "photo" : "cutout"}`}
      aria-label={`${product.name} üst görseli`}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: product.bannerImage?.position }}
      />
      <div className="product-page-banner__shade" />
      <div className="shell product-page-banner__caption">
        <Icon name="measure" />
        <div>
          <span>{product.categoryLabel}</span>
          <strong>{product.name}</strong>
        </div>
      </div>
    </section>
  );
}

function InBody580Page({ product }: { product: Product }) {
  return (
    <main id="ana-icerik">
      <ProductQuickNav currentSlug={product.slug} products={navigationProducts} />
      <ProductBanner product={product} />
      <section className="product-detail-hero">
        <div className="shell">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: product.name },
            ]}
          />
          <div className="product-detail-hero__grid">
            <div className="product-detail-hero__copy">
              <p className="eyebrow">{product.eyebrow}</p>
              <h1>{product.name}</h1>
              <h2>Uzman görüşleri için derinlemesine sağlık değerlendirmeleri.</h2>
              <p>{product.summary}</p>
              <div className="button-row">
                <Link className="button button--red" href={brochureHref(product)}>
                  <Icon name="brochure" /> Broşür Talep Et
                </Link>
                <a className="button button--outline" href="#teknik-ozellikler">
                  <Icon name="specs" /> Teknik özellikler
                </a>
              </div>
            </div>
            <ProductVisual product={product} priority />
          </div>
        </div>
      </section>

      <section className="product-metrics" aria-label="InBody580 temel özellikleri">
        <div className="shell product-metrics__grid">
          <div><strong>≈30 sn</strong><span>Test süresi</span></div>
          <div><strong>5–300 kg</strong><span>Ağırlık aralığı</span></div>
          <div><strong>3+</strong><span>Yaş aralığı</span></div>
          <div><strong>100.000</strong><span>Sonuç kapasitesi</span></div>
        </div>
      </section>

      <section className="product-story section">
        <div className="shell product-story__intro">
          <p className="eyebrow">Yeni nesil analiz</p>
          <div>
            <h2>Profesyonel değerlendirme için daha ayrıntılı içgörüler.</h2>
            <p>
              Segmental ECW Oranı ve Segmental Faz Açısı; fitness, wellness ve
              beslenme uygulamalarında daha ayrıntılı değerlendirmeyi destekler.
            </p>
          </div>
        </div>
        <div className="shell product-detail-grid">
          {detailCards.map((card, index) => (
            <article className="detail-card" key={card.title}>
              <Image src={card.image} alt={card.alt} width={278} height={398} />
              <div>
                <span className="detail-card__icon" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-tech section">
        <div className="shell product-tech__grid">
          <div className="product-tech__image">
            <Image
              src="/images/hero-touch.jpg"
              alt="InBody cihazında dokunmatik ölçüm deneyimi"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
          <div className="product-tech__copy">
            <p className="eyebrow eyebrow--light">Kolay test deneyimi</p>
            <h2>Teknoloji ve ergonomi bir arada.</h2>
            <p>
              QR ile tanıma, dokunmatik ekran, sesli yönlendirme ve bağlantı
              seçenekleri test sürecini kolaylaştırmak için bir araya gelir.
            </p>
            <ul>
              <li>Yaklaşık 30 saniyede ölçüm</li>
              <li>Wi-Fi ve Bluetooth bağlantısı</li>
              <li>Dokunmatik ekran ve sesli yönlendirme</li>
              <li>LookinBody yazılımlarıyla uyumluluk</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="teknik-ozellikler" className="spec-section section section--soft">
        <div className="shell spec-section__grid">
          <SectionHeading
            eyebrow="InBody580"
            title="Teknik özellikler"
            description="Yayınlanmış InBody Türkiye ürün bilgilerinden doğrulanan temel özellikler."
          />
          <dl className="spec-list">
            {specifications.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta />
      <ProductRail currentSlug={product.slug} products={navigationProducts} />
    </main>
  );
}

function StandardProductPage({ product }: { product: Product }) {
  return (
    <main id="ana-icerik">
      <ProductQuickNav currentSlug={product.slug} products={navigationProducts} />
      <ProductBanner product={product} />
      <section className="product-detail-hero product-detail-hero--standard">
        <div className="shell">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: product.name },
            ]}
          />
          <div className="product-detail-hero__grid">
            <div className="product-detail-hero__copy">
              <p className="eyebrow">{product.categoryLabel}</p>
              <h1>{product.name}</h1>
              <h2>{product.eyebrow}</h2>
              <p>{product.summary}</p>
              <div className="button-row">
                <Link className="button button--red" href={brochureHref(product)}>
                  <Icon name="brochure" /> Broşür Talep Et
                </Link>
                {product.details ? (
                  <a className="button button--outline" href="#teknik-ozellikler">
                    <Icon name="specs" /> Teknik özellikler
                  </a>
                ) : null}
              </div>
            </div>
            <ProductVisual product={product} priority />
          </div>
        </div>
      </section>
      {product.details ? (
        <>
          <section className="product-content section">
            <div className="shell product-content__grid">
              <SectionHeading
                eyebrow={product.name}
                title={product.details.title}
                description={product.details.intro}
              />
              <ul className="product-feature-list">
                {product.details.features.map((feature, index) => (
                  <li key={feature.title}>
                    <span className="product-feature-icon" aria-hidden="true">
                      {featureIcons[index % featureIcons.length]}
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section id="teknik-ozellikler" className="spec-section section section--soft">
            <div className="shell spec-section__grid">
              <SectionHeading
                eyebrow={product.name}
                title="Teknik özellikler"
                description={product.details.note}
              />
              <dl className="spec-list">
                {product.details.specifications.map(({ label, value }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </>
      ) : (
        <section className="product-template-note section">
          <div className="shell shell--narrow">
            <p className="eyebrow">Ürün içeriği</p>
            <h2>Bu sayfanın ayrıntılı ürün modülleri hazırlanıyor.</h2>
            <p>Onaylı Türkçe içerik eklenecek.</p>
          </div>
        </section>
      )}
      <ContactCta />
      <ProductRail currentSlug={product.slug} products={navigationProducts} />
    </main>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return product.slug === "inbody580" ? (
    <InBody580Page product={product} />
  ) : (
    <StandardProductPage product={product} />
  );
}
