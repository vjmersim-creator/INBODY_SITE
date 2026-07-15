import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { LearnPageMedia } from "@/components/learn-page-media";
import { SectionNavigation } from "@/components/section-navigation";
import { aboutLinks, learnLinks } from "@/content/navigation";
import type { ContentPage } from "@/content/pages";
import type { Product } from "@/content/products";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumb" aria-label="Sayfa yolu">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ProductVisual({ product, priority = false }: { product: Product; priority?: boolean }) {
  if (!product.image) {
    return (
      <div className="product-placeholder" role="img" aria-label={`${product.name} ürün görseli eklenecek`}>
        <span className="product-placeholder__mark" aria-hidden="true" />
        <p>{product.name}</p>
        <small>Onaylı ürün görseli eklenecek</small>
      </div>
    );
  }

  return (
    <div className="product-visual">
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        priority={priority}
        sizes="(max-width: 768px) 82vw, 42vw"
      />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" href={`/urunler/${product.slug}`}>
      <div className="product-card__visual">
        <ProductVisual product={product} />
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.categoryLabel}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <span className="text-link">
          Ürünü inceleyin <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}

const contentHeroImages: Record<string, { src: string; alt: string; position?: string }> = {
  "biz-kimiz": {
    src: "/images/official/about-hero.png",
    alt: "InBody teknolojisinin profesyonel kullanım alanı",
    position: "center 38%",
  },
  tarihce: {
    src: "/images/official/dr-kichul-cha.png",
    alt: "InBody kurucusu Dr. Kichul Cha ve InBody cihazı",
    position: "center 22%",
  },
  "kuresel-ag": {
    src: "/images/hero-970s.jpg",
    alt: "Klinik ortamda InBody teknolojisi",
    position: "center 46%",
  },
  "vucut-kompozisyonu-nedir": {
    src: "/images/hero-results.jpg",
    alt: "Vücut kompozisyonu sonuçlarının değerlendirilmesi",
  },
  "inbody-teknolojisi": {
    src: "/images/learn/technology/hero.png",
    alt: "InBody cihazının ölçüm kolu ve elektrot sistemi",
  },
  "inbody-testi": {
    src: "/images/learn/inbody-test/handle.png",
    alt: "InBody testi sırasında el elektrodunun doğru tutulması",
  },
  "sonuc-sayfasi-yorumlama": {
    src: "/images/learn/results/hero.png",
    alt: "InBody sonuç sayfaları",
  },
  "sikca-sorulan-sorular": {
    src: "/images/professional-section.jpg",
    alt: "InBody hakkında bilgi veren sağlık profesyoneli",
  },
  "guvenlik-ve-temizlik-ipuclari": {
    src: "/images/hero-touch.jpg",
    alt: "InBody cihazında güvenli test deneyimi",
  },
};

function getContentHero(page: ContentPage) {
  if (page.heroImage) return page.heroImage;
  if (contentHeroImages[page.slug]) return contentHeroImages[page.slug];
  if (page.eyebrow === "Hakkımızda") return contentHeroImages["biz-kimiz"];
  if (page.eyebrow === "Öğrenin") return contentHeroImages["inbody-teknolojisi"];
  if (page.eyebrow === "Uygulamalar") {
    return {
      src: "/images/professional-section.jpg",
      alt: `${page.title} için InBody kullanımı`,
    };
  }
  return {
    src: "/images/hero-results.jpg",
    alt: `${page.title} sayfası üst görseli`,
  };
}

export function ContentTemplate({ page }: { page: ContentPage }) {
  const hero = getContentHero(page);
  const sectionLinks =
    page.eyebrow === "Hakkımızda"
      ? aboutLinks
      : page.eyebrow === "Öğrenin"
        ? learnLinks
        : null;
  const currentHref = sectionLinks?.find((item) => item.href.endsWith(`/${page.slug}`))?.href;

  return (
    <main id="ana-icerik">
      {sectionLinks ? (
        <SectionNavigation
          label={page.eyebrow}
          currentHref={currentHref}
          links={sectionLinks}
          icon={page.eyebrow === "Hakkımızda" ? "precision" : "results"}
        />
      ) : null}
      <section className="subpage-hero subpage-hero--visual">
        <div className="shell subpage-hero__grid">
          <div className="subpage-hero__copy">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: page.eyebrow },
                { label: page.title },
              ]}
            />
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="subpage-hero__lead">{page.description}</p>
          </div>
          <div className="subpage-hero__media">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
              style={{ objectPosition: hero.position }}
            />
          </div>
        </div>
      </section>
      <section className="content-page section">
        <div className="shell shell--narrow content-page__copy">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <LearnPageMedia slug={page.slug} />
        {page.feature ? (
          <article className="shell content-feature">
            <div className="content-feature__media">
              <Image
                src={page.feature.image}
                alt={page.feature.alt}
                fill
                sizes="(max-width: 820px) 100vw, 45vw"
              />
            </div>
            <div className="content-feature__copy">
              <p className="eyebrow">{page.feature.eyebrow}</p>
              <h2>{page.feature.title}</h2>
              <p>{page.feature.text}</p>
            </div>
          </article>
        ) : null}
        <div className="shell shell--narrow content-page__copy content-page__copy--details">
          {page.sections ? (
            <div className="content-sections">
              {page.sections.map((section) => (
                <section className="content-section" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          ) : null}
          {page.faq ? (
            <div className="content-faq">
              {page.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          ) : null}
          {page.timeline ? (
            <ol className="content-timeline" aria-label={`${page.title} zaman çizelgesi`}>
              {page.timeline.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          ) : null}
          {page.steps ? (
            <ol className="content-steps" aria-label={`${page.title} adımları`}>
              {page.steps.map((item) => (
                <li key={item.label}>
                  <span aria-hidden="true">{item.label}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          ) : null}
          {page.cta ? (
            <Link className="button button--red content-page__cta" href={page.cta.href}>
              {page.cta.label} <span aria-hidden="true">↗</span>
            </Link>
          ) : null}
          {page.sourceUrl ? (
            <p className="content-source">İçerik, InBody Türkiye’nin herkese açık sayfasından doğrulanmıştır.</p>
          ) : null}
        </div>
        {page.locations ? (
          <section className="shell content-locations" aria-labelledby="global-locations-title">
            <div className="content-locations__heading">
              <p className="eyebrow">Küresel InBody ağı</p>
              <h2 id="global-locations-title">Dünya genelindeki InBody merkezleri</h2>
              <p>
                Genel merkez, bölgesel şubeler ve InBody Türkiye iletişim bilgilerini
                aşağıda bulabilirsiniz.
              </p>
            </div>
            <div className="content-locations__grid">
              {page.locations.map((location) => (
                <article className="location-card" key={`${location.name}-${location.region}`}>
                  <div className="location-card__title">
                    <Icon name="location" />
                    <div>
                      <span>{location.region}</span>
                      <h3>{location.name}</h3>
                    </div>
                  </div>
                  <address>{location.address}</address>
                  <dl>
                    {location.phone ? (
                      <div>
                        <dt>Telefon</dt>
                        <dd>{location.phone}</dd>
                      </div>
                    ) : null}
                    {location.customerCenter ? (
                      <div>
                        <dt>Müşteri merkezi</dt>
                        <dd>{location.customerCenter}</dd>
                      </div>
                    ) : null}
                  </dl>
                  <a href={location.website} target="_blank" rel="noreferrer" className="text-link">
                    {location.websiteLabel} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </section>
      <ContactCta />
    </main>
  );
}

export function ContactCta() {
  return (
    <section className="contact-cta section">
      <div className="shell contact-cta__inner">
        <div>
          <p className="eyebrow eyebrow--light">InBody Türkiye</p>
          <h2>Ürünlerimiz hakkında daha fazla bilgi alın.</h2>
        </div>
        <Link href="/iletisim" className="button button--light">
          Bize ulaşın <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
