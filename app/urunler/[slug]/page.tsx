import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, type IconName } from "@/components/icon";
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

const featureIcons: IconName[] = [
  "precision",
  "measure",
  "results",
  "switch",
  "time",
  "specs",
];

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

type ProductMetric = {
  value: string;
  label: string;
  icon: IconName;
};

const productMetricMap: Record<string, ProductMetric[]> = {
  inbody970s: [
    { value: "3 MHz", label: "En yüksek ölçüm frekansı", icon: "precision" },
    { value: "≈30 sn", label: "Test süresi", icon: "time" },
    { value: "130+", label: "Analiz parametresi", icon: "results" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "specs" },
  ],
  inbody770s: [
    { value: "1 MHz", label: "En yüksek ölçüm frekansı", icon: "precision" },
    { value: "≈30 sn", label: "Test süresi", icon: "time" },
    { value: "130+", label: "Analiz parametresi", icon: "results" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "specs" },
  ],
  inbody380: [
    { value: "≈30 sn", label: "Test süresi", icon: "time" },
    { value: "3", label: "Ölçüm frekansı", icon: "precision" },
    { value: "2–300 kg", label: "Ağırlık aralığı", icon: "weight" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "results" },
  ],
  inbody270s: [
    { value: "≈30 sn", label: "Test süresi", icon: "time" },
    { value: "13,4 kg", label: "Cihaz ağırlığı", icon: "weight" },
    { value: "2–250 kg", label: "Ağırlık aralığı", icon: "measure" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "results" },
  ],
  inbody120: [
    { value: "≈17 sn", label: "Test süresi", icon: "time" },
    { value: "4,3 kg", label: "Cihaz ağırlığı", icon: "weight" },
    { value: "Bluetooth", label: "Kablosuz bağlantı", icon: "switch" },
    { value: "Taşınabilir", label: "Kompakt kullanım", icon: "measure" },
  ],
  "bwa2-0s": [
    { value: "3 MHz", label: "En yüksek ölçüm frekansı", icon: "precision" },
    { value: "30 / 60 sn", label: "Tıbbi ve araştırma modu", icon: "time" },
    { value: "16 nokta", label: "Klamp elektrot sistemi", icon: "measure" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "results" },
  ],
  inbodys10: [
    { value: "6", label: "Ölçüm frekansı", icon: "precision" },
    { value: "≈1 dk 50 sn", label: "Test süresi", icon: "time" },
    { value: "2 kg", label: "Cihaz ağırlığı", icon: "weight" },
    { value: "100.000", label: "Sonuç kapasitesi", icon: "results" },
  ],
  "bsm-370": [
    { value: "≈7 sn", label: "Boy ve ağırlık ölçümü", icon: "time" },
    { value: "±1 mm", label: "Boy ölçüm hassasiyeti", icon: "precision" },
    { value: "10–200 kg", label: "Ağırlık aralığı", icon: "weight" },
    { value: "3 bir arada", label: "Boy, ağırlık ve BMI", icon: "results" },
  ],
  "bsm-170": [
    { value: "±1 mm", label: "Boy ölçüm hassasiyeti", icon: "precision" },
    { value: "35–210 cm", label: "Boy ölçüm aralığı", icon: "measure" },
    { value: "Bluetooth", label: "Kablosuz aktarım", icon: "switch" },
    { value: "8,5 kg", label: "Cihaz ağırlığı", icon: "weight" },
  ],
  fra: [
    { value: "10–15 dk", label: "Test süresi", icon: "time" },
    { value: "0–150 kg", label: "Ölçüm aralığı", icon: "weight" },
    { value: "19 inç", label: "Dokunmatik ekran", icon: "results" },
    { value: "USB + LAN", label: "Bağlantı", icon: "switch" },
  ],
  ingrip: [
    { value: "1–100 kg", label: "Ölçüm aralığı", icon: "weight" },
    { value: "±0,5 kg", label: "Hata aralığı", icon: "precision" },
    { value: "Bluetooth 5.0", label: "Kablosuz aktarım", icon: "switch" },
    { value: "650 g", label: "Cihaz ağırlığı", icon: "measure" },
  ],
  "lookinbody-web": [
    { value: "Web", label: "Tarayıcı tabanlı erişim", icon: "results" },
    { value: "Bulut", label: "Merkezi veri yönetimi", icon: "switch" },
    { value: "Çoklu cihaz", label: "Uyumlu InBody bağlantısı", icon: "measure" },
    { value: "Mobil", label: "Dijital sonuç paylaşımı", icon: "specs" },
  ],
  "lookinbody-120": [
    { value: "Windows", label: "Masaüstü yazılım", icon: "results" },
    { value: "Ağ", label: "Bilgisayarlar arası paylaşım", icon: "switch" },
    { value: "Grafik", label: "İlerleme takibi", icon: "measure" },
    { value: "EMR", label: "Sistem entegrasyonu", icon: "specs" },
  ],
};

const productShowcaseVisuals: Record<
  string,
  { src: string; alt: string; fit?: "cover" | "contain" }
> = {
  inbody970s: {
    src: "/images/home-stories/inbody970s.png",
    alt: "InBody970S, InGrip ve InBody Touch ile profesyonel sonuç değerlendirmesi",
  },
  inbody770s: {
    src: "/images/product-experience/inbody770s.png",
    alt: "InBody770S ürün görseli",
    fit: "contain",
  },
  inbody380: {
    src: "/images/product-experience/inbody380.png",
    alt: "Katlanabilir InBody380 cihazının yan görünümü",
    fit: "contain",
  },
  inbody270s: {
    src: "/images/product-experience/inbody270s-folded-clear.png",
    alt: "Katlanarak taşımaya hazır InBody270S",
    fit: "contain",
  },
  inbody120: {
    src: "/images/products/inbody120.png",
    alt: "Taşınabilir InBody120 cihazı",
    fit: "contain",
  },
  "bwa2-0s": {
    src: "/images/product-experience/bwa20s.png",
    alt: "BWA2.0S ile klinik vücut suyu ölçümü",
  },
  inbodys10: {
    src: "/images/product-experience/inbodys10.png",
    alt: "Taşıma arabası üzerinde InBodyS10",
    fit: "contain",
  },
  "bsm-370": {
    src: "/images/product-experience/bsm370-colorways.png",
    alt: "BSM 370 yeşil, kahverengi ve siyah renk seçenekleri",
    fit: "contain",
  },
  "bsm-170": {
    src: "/images/products/bsm170.png",
    alt: "BSM 170 dijital boy ölçer",
    fit: "contain",
  },
  fra: {
    src: "/images/professional-section.jpg",
    alt: "Profesyonel değerlendirme ortamında InBody çözümü",
  },
  ingrip: {
    src: "/images/product-experience/ingrip.png",
    alt: "InGrip ile el kavrama gücü ölçümü",
  },
  "lookinbody-web": {
    src: "/images/product-experience/lookinbody.png",
    alt: "LookinBody veri yönetimi ekranı",
    fit: "contain",
  },
  "lookinbody-120": {
    src: "/images/product-experience/lookinbody.png",
    alt: "LookinBody 120 veri yönetimi yazılımı",
    fit: "contain",
  },
};

function ProductMetrics({ product }: { product: Product }) {
  const metrics = productMetricMap[product.slug];
  if (!metrics) return null;

  return (
    <section className="product-metrics" aria-label={`${product.name} temel özellikleri`}>
      <div className="shell product-metrics__grid">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <Icon name={metric.icon} />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase({ product }: { product: Product }) {
  const visual = productShowcaseVisuals[product.slug];
  if (!visual || !product.details) return null;

  return (
    <section className="product-showcase section">
      <div className="shell product-showcase__grid">
        <div className={`product-showcase__media product-showcase__media--${visual.fit ?? "cover"}`}>
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(max-width: 820px) 100vw, 52vw"
          />
        </div>
        <div className="product-showcase__copy">
          <p className="eyebrow">{product.name} deneyimi</p>
          <h2>{product.details.title}</h2>
          <p>{product.details.intro}</p>
          <ul>
            {product.details.features.slice(0, 3).map((feature) => (
              <li key={feature.title}>
                <Icon name="precision" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
          <Link className="text-link" href={brochureHref(product)}>
            Broşür talep edin <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

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

type CampaignBenefit = {
  title: string;
  text: string;
  icon: IconName;
};

type CampaignHeroContent = {
  headline: string;
  description?: string;
  visual?: string;
  visualWidth?: number;
  visualHeight?: number;
  benefits?: CampaignBenefit[];
};

const campaignHeroContent: Record<string, CampaignHeroContent> = {
  inbody970s: {
    headline: "Araştırma derinliği. Günlük kullanım kolaylığı.",
    visual: "/images/product-heroes/normalized/inbody970s-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "3 MHz hassasiyet", text: "Gelişmiş frekans desteği", icon: "precision" },
      { title: "130+ parametre", text: "Çok yönlü analiz çıktıları", icon: "results" },
      { title: "Akıllı tanıma", text: "Hızlı tekrar ölçüm akışı", icon: "switch" },
    ],
  },
  inbody770s: {
    headline: "Araştırma düzeyi veri. Rahat bir test deneyimi.",
    visual: "/images/product-heroes/normalized/inbody770s-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "130+ parametre", text: "Kompozisyon ve vücut suyu", icon: "results" },
      { title: "Yaklaşık 30 saniye", text: "Hızlı ölçüm akışı", icon: "time" },
      { title: "Esnek elektrotlar", text: "Doğal kavrama pozisyonu", icon: "measure" },
    ],
  },
  inbody580: {
    headline: "Ayrıntılı içgörü. Akıcı danışmanlık.",
    visual: "/images/product-heroes/normalized/inbody580-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "Segmental faz açısı", text: "Daha ayrıntılı değerlendirme", icon: "precision" },
      { title: "ECW oranı", text: "Vücut suyu dengesi", icon: "measure" },
      { title: "100.000 sonuç", text: "Geniş takip kapasitesi", icon: "results" },
    ],
  },
  inbody380: {
    headline: "Kapsamlı analiz. Daha fazla hareket alanı.",
    visual: "/images/product-heroes/normalized/inbody380-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "Hızlı değerlendirme", text: "Yaklaşık 30 saniyede ölçüm", icon: "time" },
      { title: "Kolay veri akışı", text: "QR kod ve kablosuz bağlantı", icon: "switch" },
      { title: "İhtiyaca uygun sonuçlar", text: "Özelleştirilebilir takip verileri", icon: "results" },
    ],
  },
  inbody270s: {
    headline: "Profesyonel analiz. İhtiyaç duyduğunuz her yerde.",
    visual: "/images/product-heroes/normalized/inbody270s-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "13,4 kg", text: "Taşınabilir gövde", icon: "weight" },
      { title: "Katlanabilir tasarım", text: "Kolay taşıma ve kurulum", icon: "measure" },
      { title: "Mobil sonuçlar", text: "QR kodla kolay paylaşım", icon: "switch" },
    ],
  },
  "bwa2-0s": {
    headline: "Vücut suyunu daha ayrıntılı görün.",
    visual: "/images/product-heroes/normalized/bwa20s-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "3 MHz teknoloji", text: "Ayrıntılı su analizi", icon: "precision" },
      { title: "16 noktalı elektrot", text: "Farklı pozisyonlarda ölçüm", icon: "measure" },
      { title: "İki çalışma modu", text: "Tıbbi ve araştırma akışı", icon: "switch" },
    ],
  },
  inbodys10: {
    headline: "Ölçümü kullanıcıya uyarlayın.",
    visual: "/images/product-heroes/normalized/inbodys10-front.png",
    visualWidth: 1400,
    visualHeight: 1100,
    benefits: [
      { title: "Üç ölçüm pozisyonu", text: "Yatarak, oturarak veya ayakta", icon: "measure" },
      { title: "Segmental su analizi", text: "Beş ayrı bölge", icon: "precision" },
      { title: "2 kg analiz ünitesi", text: "Taşınabilir klinik kullanım", icon: "weight" },
    ],
  },
  "bsm-370": {
    headline: "Üç temel ölçüm. Tek akıcı deneyim.",
    visual: "/images/product-heroes/normalized/bsm370-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "Yaklaşık 7 saniye", text: "Boy ve ağırlık ölçümü", icon: "time" },
      { title: "Boy, ağırlık, BMI", text: "Üç sonuç tek sistemde", icon: "results" },
      { title: "Kolay taşınabilir", text: "Katlanabilir kol ve tekerlekler", icon: "switch" },
    ],
  },
  "bsm-170": {
    headline: "Boy ölçümünü veri akışına bağlayın.",
    visual: "/images/product-heroes/normalized/bsm170-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "±1 mm hassasiyet", text: "Tekrarlanabilir boy ölçümü", icon: "precision" },
      { title: "Bluetooth aktarımı", text: "Uyumlu InBody bağlantısı", icon: "switch" },
      { title: "Büyük LCD ekran", text: "Kolay okunan sonuçlar", icon: "results" },
    ],
  },
  ingrip: {
    headline: "Kas fonksiyonuna güçlü bir bakış.",
    visual: "/images/product-heroes/normalized/ingrip-front.png",
    visualWidth: 1200,
    visualHeight: 1600,
    benefits: [
      { title: "±0,5 kg hata aralığı", text: "Hassas kavrama ölçümü", icon: "precision" },
      { title: "Kulp kılavuzu", text: "Tutarlı el pozisyonu", icon: "measure" },
      { title: "Bluetooth 5.0", text: "Kablosuz sonuç aktarımı", icon: "switch" },
    ],
  },
  "lookinbody-web": {
    headline: "Ölçüm verileri. Her yerden erişilebilir.",
    visual: "/images/product-heroes/normalized/lookinbody-front.png",
    visualWidth: 1400,
    visualHeight: 1100,
    benefits: [
      { title: "Tarayıcı erişimi", text: "Bilgisayar ve tabletlerden", icon: "results" },
      { title: "Merkezi danışan takibi", text: "Tek çalışma alanı", icon: "measure" },
      { title: "Dijital paylaşım", text: "Mobil sonuç deneyimi", icon: "switch" },
    ],
  },
  "lookinbody-120": {
    headline: "Sonuçları düzenleyin. İlerlemeyi görün.",
    visual: "/images/product-heroes/normalized/lookinbody-front.png",
    visualWidth: 1400,
    visualHeight: 1100,
    benefits: [
      { title: "İlerleme grafikleri", text: "Zaman içindeki değişim", icon: "results" },
      { title: "Özelleştirilebilir çıktı", text: "Kuruma uygun sonuç sayfası", icon: "specs" },
      { title: "Sistem entegrasyonu", text: "Ağ ve EMR bağlantısı", icon: "switch" },
    ],
  },
};

function ProductCampaignHero({ product }: { product: Product }) {
  const content = campaignHeroContent[product.slug];
  if (!content) return null;

  const benefits = content.benefits ?? productMetricMap[product.slug]?.slice(0, 3).map((metric) => ({
    title: metric.value,
    text: metric.label,
    icon: metric.icon,
  })) ?? [];

  const visual = content.visual ?? product.image?.src;
  const visualWidth = content.visualWidth ?? product.image?.width ?? 1280;
  const visualHeight = content.visualHeight ?? product.image?.height ?? 1600;

  return (
    <section
      className={`product-campaign-hero product-campaign-hero--${product.slug}`}
      aria-labelledby="product-campaign-title"
    >
      <Image
        className="product-campaign-hero__background"
        src="/images/product-heroes/inbody380-clean-studio-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="product-campaign-hero__shade" />
      <div className="shell product-campaign-hero__inner">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Ürünler", href: "/urunler" },
            { label: product.name },
          ]}
        />

        <div className="product-campaign-hero__grid">
          <div className="product-campaign-hero__copy">
            <h1 id="product-campaign-title">
              <span>{product.name}</span>
              {" "}
              {content.headline}
            </h1>
            <p>{content.description ?? product.summary}</p>
            <div className="button-row">
              <Link className="button button--dark" href={brochureHref(product)}>
                Broşür talep edin <span aria-hidden="true">↗</span>
              </Link>
              <a className="product-campaign-hero__spec-link" href="#teknik-ozellikler">
                Teknik özellikleri görün <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="product-campaign-hero__stage" aria-hidden="true">
            {visual ? (
              <Image
                src={visual}
                alt=""
                width={visualWidth}
                height={visualHeight}
                priority
                sizes="(max-width: 760px) 78vw, 42vw"
              />
            ) : (
              <span className="product-campaign-hero__visual-name">{product.name}</span>
            )}
          </div>
        </div>

        <ul className="product-campaign-hero__benefits" aria-label={`${product.name} öne çıkan faydaları`}>
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <Icon name={benefit.icon} />
              <span><strong>{benefit.title}</strong>{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function InBody580Page({ product }: { product: Product }) {
  return (
    <main id="ana-icerik">
      <ProductQuickNav currentSlug={product.slug} products={navigationProducts} />
      <ProductCampaignHero product={product} />

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
  const hasCampaignHero = Boolean(campaignHeroContent[product.slug]);

  return (
    <main id="ana-icerik">
      <ProductQuickNav currentSlug={product.slug} products={navigationProducts} />
      {hasCampaignHero ? (
        <ProductCampaignHero product={product} />
      ) : (
        <>
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
        </>
      )}
      {hasCampaignHero ? null : <ProductMetrics product={product} />}
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
                    <Icon
                      name={featureIcons[index % featureIcons.length]}
                      className="product-feature-icon"
                    />
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <ProductShowcase product={product} />
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
