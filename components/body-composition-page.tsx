import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { SectionNavigation } from "@/components/section-navigation";
import { Breadcrumb, ContactCta } from "@/components/ui";
import {
  bodyCompositionBenefits,
  bodyCompositionMethods,
  bodyCompositionOutputs,
  bodyCompositionOverview,
  bodyCompositionStories,
  bodyCompositionWhy,
  skinnyFatContent,
} from "@/content/body-composition";
import { learnLinks } from "@/content/navigation";
import type { ContentPage } from "@/content/pages";

export function BodyCompositionPage({ page }: { page: ContentPage }) {
  return (
    <main id="ana-icerik">
      <SectionNavigation
        label="Öğrenin"
        currentHref="/ogren/vucut-kompozisyonu-nedir"
        links={learnLinks}
        icon="results"
      />

      <section className="subpage-hero subpage-hero--visual">
        <div className="shell subpage-hero__grid">
          <div className="subpage-hero__copy">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Öğrenin" },
                { label: page.title },
              ]}
            />
            <p className="eyebrow">Öğrenin</p>
            <h1>{page.title}</h1>
            <p className="subpage-hero__lead">{page.description}</p>
          </div>
          <div className="subpage-hero__media">
            <Image
              src="/images/hero-results.jpg"
              alt="Vücut kompozisyonu sonuçlarının profesyonel değerlendirmesi"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <article className="bodycomp-page">
        <section className="bodycomp-overview section">
          <div className="shell bodycomp-overview__grid">
            <div className="bodycomp-overview__copy">
              <p className="eyebrow">Vücut kompozisyonu</p>
              <h2>{bodyCompositionOverview.title}</h2>
              {bodyCompositionOverview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="bodycomp-overview__media">
              <Image
                src="/images/learn/body-composition/consultation.png"
                alt="Sağlık profesyoneli ile sonuç değerlendirmesi"
                fill
                sizes="(max-width: 820px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="bodycomp-why section section--soft">
          <div className="shell bodycomp-wide-copy">
            <p className="eyebrow">Kilonun ötesinde</p>
            <h2>{bodyCompositionWhy.title}</h2>
            <div className="bodycomp-wide-copy__columns">
              {bodyCompositionWhy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="bodycomp-story-list">
          {bodyCompositionStories.map((story, index) => (
            <section className="bodycomp-story section" key={story.title}>
              <div
                className={`shell bodycomp-story__grid${index % 2 ? " bodycomp-story__grid--reverse" : ""}`}
              >
                <div className="bodycomp-story__media">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 820px) 100vw, 42vw"
                  />
                </div>
                <div className="bodycomp-story__copy">
                  <p className="eyebrow">{story.eyebrow}</p>
                  <h2>{story.title}</h2>
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="bodycomp-skinny section">
          <div className="shell bodycomp-skinny__grid">
            <div className="bodycomp-skinny__media">
              <Image
                src="/images/learn/body-composition/skinny-fat.png"
                alt="Egzersiz sonrasında dinlenen sporcu"
                fill
                sizes="(max-width: 720px) 100vw, 48vw"
              />
            </div>
            <div className="bodycomp-skinny__copy">
              <p className="eyebrow eyebrow--light">Görünüm ve sağlık</p>
              <h2>{skinnyFatContent.title}</h2>
              {skinnyFatContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bodycomp-benefits section section--soft">
          <div className="shell">
            <div className="bodycomp-benefits__intro">
              <div>
                <p className="eyebrow">Somut ilerleme</p>
                <h2>Vücut kompozisyonunuzu anlamanın faydaları nelerdir?</h2>
              </div>
              <div className="bodycomp-benefits__media">
                <Image
                  src="/images/learn/body-composition/benefits.png"
                  alt="InBody sonucunu bir sporcuya açıklayan profesyonel"
                  fill
                  sizes="(max-width: 820px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="bodycomp-benefits__grid">
              {bodyCompositionBenefits.map((benefit) => (
                <article key={benefit.title}>
                  <Icon name={benefit.icon} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bodycomp-outputs section">
          <div className="shell">
            <div className="bodycomp-section-heading">
              <p className="eyebrow">İlerlemeyi takip edin</p>
              <h2>Temel vücut kompozisyonu çıktıları</h2>
              <p>
                Diyet ve egzersiz programının etkisini tek bir ağırlık değeri yerine,
                birbirini tamamlayan göstergelerle değerlendirin.
              </p>
            </div>
            <div className="bodycomp-outputs__grid">
              {bodyCompositionOutputs.map((output, index) => (
                <article key={output.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{output.title}</h3>
                  <p>{output.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bodycomp-methods section section--soft">
          <div className="shell">
            <div className="bodycomp-section-heading">
              <p className="eyebrow">Karşılaştırmalı rehber</p>
              <h2>Vücut kompozisyonu analiz yöntemleri</h2>
              <p>
                Vücut kompozisyonunu belirlemenin birçok yolu vardır. Bazıları hızlı ve
                kolay, bazıları ise daha uzun, maliyetli ve uzman desteği gerektiren
                yöntemlerdir.
              </p>
            </div>
            <div className="bodycomp-methods__list">
              {bodyCompositionMethods.map((method, index) => (
                <article className="bodycomp-method" key={method.title}>
                  <div className="bodycomp-method__media">
                    <Image
                      src={method.image}
                      alt={method.imageAlt}
                      fill
                      sizes="(max-width: 700px) 100vw, 30vw"
                    />
                    <span>{method.credit}</span>
                  </div>
                  <div className="bodycomp-method__copy">
                    <span className="bodycomp-method__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{method.title}</h3>
                    {method.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bodycomp-next section">
          <div className="shell bodycomp-next__grid">
            <Link href="/ogren/inbody-teknolojisi">
              <span>Sonraki adım</span>
              <strong>InBody’nin BIA teknolojisinin nasıl çalıştığını öğrenin.</strong>
              <Icon name="arrow" />
            </Link>
            <Link href="/ogren/sonuc-sayfasi-yorumlama">
              <span>Kilonun ötesine geçin</span>
              <strong>Vücut kompozisyonu sonuçlarının nasıl göründüğünü keşfedin.</strong>
              <Icon name="arrow" />
            </Link>
          </div>
        </section>
      </article>

      <ContactCta />
    </main>
  );
}
