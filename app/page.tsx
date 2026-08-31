import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroCarousel } from "@/components/home-hero-carousel";
import { HorizontalRail } from "@/components/horizontal-rail";
import { TestimonialShowcase } from "@/components/testimonial-showcase";
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
    images: [{ url: "/images/home-hero/product-family.png", alt: "InBody ürün ailesi" }],
  },
};

const categories = [
  {
    id: "body-composition",
    title: "Vücut Kompozisyonu",
    description: "Profesyoneller için ayrıntılı vücut kompozisyonu analizi.",
    image: "/images/inbody-hero-device.png",
    width: 411,
    height: 711,
    href: "/urunler#vucut-kompozisyonu",
  },
  {
    id: "body-water",
    title: "Vücut Suyu",
    description: "Klinik ihtiyaçlar için gelişmiş vücut suyu değerlendirmesi.",
    image: "/images/product-category-water.png",
    width: 241,
    height: 455,
    href: "/urunler#vucut-suyu",
  },
  {
    id: "height-measurement",
    title: "Boy Ölçer",
    description: "Boy ve ağırlık ölçümünü InBody ekosistemiyle birleştirin.",
    image: "/images/product-category-height.png",
    width: 112,
    height: 419,
    href: "/urunler#boy-olcer",
  },
  {
    id: "ingrip",
    title: "InGrip",
    description: "El kavrama gücünü doğru ve tekrarlanabilir biçimde ölçün.",
    image: "/images/products/ingrip.png",
    width: 1280,
    height: 1600,
    href: "/urunler#ingrip",
  },
  {
    id: "data-management",
    title: "Veri Yönetimi",
    description: "InBody sonuçlarını güvenli ve düzenli biçimde yönetin.",
    image: "/images/product-category-data.png",
    width: 151,
    height: 307,
    href: "/urunler#veri-yonetimi",
  },
];

const featuredProductSlugs = ["inbody270s", "inbody380", "inbody580"];
const featuredProducts = featuredProductSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is (typeof products)[number] => product !== undefined);

const homeStories = [
  {
    eyebrow: "Vücut kompozisyonu",
    title: "Kapsamlı analiz için InBody970S",
    description:
      "3 MHz teknolojisi, farklı sonuç raporu seçenekleri ve ayrıntılı vücut kompozisyonu verileriyle profesyonel değerlendirmeyi destekler.",
    image: "/images/home-stories/inbody970s.png",
    alt: "InBody970S, InGrip ve InBody Touch ile profesyonel danışmanlık",
    href: "/urunler/inbody970s",
  },
  {
    eyebrow: "Vücut suyu analizi",
    title: "Klinik ve araştırma uygulamaları için BWA2.0S",
    description:
      "Yatarak, oturarak veya ayakta ölçüm desteği; diyaliz takibi, araştırma ve hareket kabiliyeti kısıtlı kullanıcılar için esnek bir analiz yaklaşımı sunar.",
    image: "/images/home-stories/bwa20s.png",
    alt: "Stüdyo ortamında BWA2.0S vücut suyu analiz cihazı",
    href: "/urunler/bwa2-0s",
  },
  {
    eyebrow: "Taşınabilir analiz",
    title: "Profesyonel değerlendirmeyi farklı noktalara taşıyın",
    description:
      "InBody270S; kompakt tasarımı, yaklaşık 30 saniyelik testi ve temel kas, yağ ve faz açısı göstergeleriyle saha ve kurum içi ölçümleri kolaylaştırır.",
    image: "/images/products/inbody270s.png",
    alt: "Taşınabilir InBody270S vücut kompozisyonu analiz cihazı",
    href: "/urunler/inbody270s",
    contain: true,
  },
  {
    eyebrow: "Araştırma seviyesi",
    title: "Vücut kompozisyonu ve vücut suyunu birlikte değerlendirin",
    description:
      "InBody770S; kapsamlı parametreleri, segmental analizleri ve iki farklı sonuç raporuyla klinik ve araştırma odaklı iş akışlarını destekler.",
    image: "/images/product-experience/inbody770s.png",
    alt: "InBody770S vücut kompozisyonu analiz cihazı",
    href: "/urunler/inbody770s",
    contain: true,
  },
];

const knowledgeCards = [
  {
    eyebrow: "Temel bilgi",
    title: "Vücut kompozisyonu nedir?",
    description:
      "Yağ, protein, mineral ve vücut suyu bileşenlerinin neden toplam ağırlıktan daha kapsamlı bir değerlendirme sunduğunu öğrenin.",
    image: "/images/home-stories/athlete.png",
    alt: "Sporcu performans verilerinin değerlendirilmesi",
    href: "/ogren/vucut-kompozisyonu-nedir",
  },
  {
    eyebrow: "Test rehberi",
    title: "InBody testine doğru hazırlanın",
    description:
      "Ölçüm koşullarını standartlaştırın, elektrotlara doğru yerleşin ve tekrarlı testleri karşılaştırılabilir hâle getirin.",
    image: "/images/home-stories/inbody-test.png",
    alt: "InBody cihazında vücut kompozisyonu testi yapan kullanıcı",
    href: "/ogren/inbody-testi",
  },
  {
    eyebrow: "Sonuçları anlayın",
    title: "Sonuç sayfasındaki verileri okuyun",
    description:
      "Kas, yağ, vücut suyu, segmental analiz ve değişim geçmişi alanlarını birlikte değerlendirerek sonuçların ne anlattığını keşfedin.",
    image: "/images/home-stories/result-sheet.png",
    alt: "InBody970S sonuç sayfası örnekleri",
    href: "/ogren/sonuc-sayfasi-yorumlama",
    contain: true,
  },
  {
    eyebrow: "Kas fonksiyonu",
    title: "El kavrama gücünü değerlendirmeye ekleyin",
    description:
      "InGrip, yük hücresi sensörü ve yönlendirici kulp tasarımıyla kavrama gücü ölçümlerini standartlaştırmaya yardımcı olur.",
    image: "/images/home-stories/ingrip.png",
    alt: "Sağlık profesyoneli tarafından InGrip ölçümü uygulanması",
    href: "/urunler/ingrip",
  },
];

const testimonialPlaceholders = [
  {
    focus: "Klinik değerlendirme",
    quote: "Onaylı Türkçe müşteri görüşü eklenecek.",
    name: "İsim ve unvan onayı bekleniyor",
    organization: "Kurum adı onayı bekleniyor",
  },
  {
    focus: "Performans takibi",
    quote: "Onaylı Türkçe müşteri görüşü eklenecek.",
    name: "İsim ve unvan onayı bekleniyor",
    organization: "Kurum adı onayı bekleniyor",
  },
  {
    focus: "Wellness programları",
    quote: "Onaylı Türkçe müşteri görüşü eklenecek.",
    name: "İsim ve unvan onayı bekleniyor",
    organization: "Kurum adı onayı bekleniyor",
  },
];

export default function Home() {
  return (
    <main id="ana-icerik">
      <HomeHeroCarousel />

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

      <section className="home-story-section section section--soft">
        <div className="shell">
          <div className="section-heading-row section-heading-row--rail">
            <SectionHeading
              eyebrow="InBody Türkiye'den öne çıkanlar"
              title="İhtiyaca göre şekillenen profesyonel çözümler."
              description="Güncel InBody Türkiye ürün ailesindeki farklı kullanım senaryolarını sağa kaydırarak inceleyin."
            />
          </div>
          <HorizontalRail
            label="Öne çıkan InBody çözümleri"
            className="home-story-rail"
            pageByPage
          >
            {homeStories.map((story, index) => (
              <Link className="home-story-card" href={story.href} key={story.title}>
                <div
                  className={`home-story-card__media${story.contain ? " home-story-card__media--contain" : ""}`}
                >
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    sizes="(max-width: 820px) 88vw, 54vw"
                  />
                </div>
                <div className="home-story-card__copy">
                  <span className="home-story-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow">{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <span className="text-link">
                    Detayları inceleyin <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section id="cozumler" className="category-section section">
        <div className="shell">
          <SectionHeading
            eyebrow="Çözüm alanları"
            title="Her ihtiyaca uygun bir InBody çözümü."
            description="Klinik değerlendirmeden fitness takibine, ölçümden veri yönetimine uzanan ürün ailemizi inceleyin."
          />
          <HorizontalRail label="InBody ürün kategorileri" className="home-category-rail">
            {categories.map((category) => (
              <Link
                className={`category-card category-card--rail category-card--${category.id}`}
                href={category.href}
                key={category.title}
              >
                <div className="category-card__copy">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="round-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="category-card__media">
                  <Image
                    src={category.image}
                    alt={`${category.title} ürün kategorisi`}
                    width={category.width}
                    height={category.height}
                    sizes="(max-width: 768px) 40vw, 18vw"
                  />
                </div>
              </Link>
            ))}
          </HorizontalRail>
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
          <HorizontalRail label="Öne çıkan InBody ürünleri" className="home-product-rail">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="research-proof section">
        <div className="shell research-proof__grid">
          <div className="research-proof__metric">
            <span className="research-proof__metric-label">Yayınlanmış araştırma</span>
            <strong>
              8.000<sup>+</sup>
            </strong>
            <span className="research-proof__metric-caption">Hakemli uluslararası yayın</span>
            <div className="research-proof__fields" aria-label="Araştırma alanları">
              <span>Klinik</span>
              <span>Beslenme</span>
              <span>Spor</span>
              <span>Vücut kompozisyonu</span>
            </div>
          </div>
          <div className="research-proof__copy">
            <p className="eyebrow eyebrow--light">Profesyoneller için güvenilir kalite</p>
            <h2>Ölçüm verileri, dünya çapındaki araştırmalarda kullanılıyor.</h2>
            <p>
              InBody teknolojisi; klinik, beslenme, spor ve vücut kompozisyonu
              araştırmalarında kullanılan verileriyle binlerce hakemli uluslararası
              yayında yer alıyor.
            </p>
            <Link className="button button--light" href="/ogren/inbody-teknolojisi">
              Araştırma temelini keşfedin <span aria-hidden="true">↗</span>
            </Link>
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

      <section className="knowledge-section section">
        <div className="shell">
          <div className="section-heading-row section-heading-row--rail">
            <SectionHeading
              eyebrow="Öğrenin"
              title="Verinin ne anlattığını adım adım keşfedin."
              description="Vücut kompozisyonundan test hazırlığına, sonuç yorumlamadan kas fonksiyonuna kadar temel bilgi başlıkları."
            />
            <Link href="/ogren/vucut-kompozisyonu-nedir" className="button button--outline">
              Tüm rehberler
            </Link>
          </div>
          <HorizontalRail label="InBody bilgi ve kullanım rehberleri" className="home-knowledge-rail">
            {knowledgeCards.map((card) => (
              <Link className="knowledge-card" href={card.href} key={card.title}>
                <div
                  className={`knowledge-card__media${card.contain ? " knowledge-card__media--contain" : ""}`}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 820px) 82vw, 33vw"
                  />
                </div>
                <div className="knowledge-card__copy">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="text-link">
                    İnceleyin <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </HorizontalRail>
        </div>
      </section>

      <section className="home-testimonials section" aria-labelledby="musteri-gorusleri">
        <div className="shell home-testimonials__grid">
          <div className="home-testimonials__intro">
            <p className="eyebrow">Müşteri görüşleri</p>
            <h2 id="musteri-gorusleri">Gerçek çalışma düzenleri. Daha anlaşılır sonuçlar.</h2>
            <p>
              Klinikler, performans ekipleri ve wellness programları; değerlendirme
              sürecini daha görünür verilerle desteklemek için InBody çözümlerinden
              yararlanır.
            </p>
            <p className="home-testimonials__notice">
              Yayınlanacak görüşler, kurum ve konuşmacı onayı tamamlandıktan sonra
              burada yer alacaktır.
            </p>
            <Link href="/iletisim" className="text-link">
              Kendi kullanım alanınızı konuşalım <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <TestimonialShowcase items={testimonialPlaceholders} />
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
