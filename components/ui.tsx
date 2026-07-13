import Image from "next/image";
import Link from "next/link";
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

export function ContentTemplate({ page }: { page: ContentPage }) {
  return (
    <main id="ana-icerik">
      <section className="subpage-hero">
        <div className="shell shell--narrow">
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
      </section>
      <section className="content-page section">
        <div className="shell shell--narrow content-page__copy">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
