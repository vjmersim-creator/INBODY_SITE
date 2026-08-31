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

const storyCaptions = [
  "Tartı toplam ağırlığı gösterir; değişimin yağdan, kastan veya vücut suyundan geldiğini göstermez.",
  "Çevre ölçümü yararlı bir referanstır; kas ve yağ dokusunu tek başına birbirinden ayırmaz.",
];

export function BodyCompositionPage({ page }: { page: ContentPage }) {
  return (
    <main id="ana-icerik">
      <SectionNavigation
        label="Öğrenin"
        currentHref="/ogren/vucut-kompozisyonu-nedir"
        links={learnLinks}
        icon="results"
      />

      <section className="subpage-hero subpage-hero--visual bodycomp-hero">
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
          <figure className="subpage-hero__media bodycomp-hero__media">
            <Image
              src="/images/curated/learn/body-composition-measurement.jpg"
              alt="InBody770 cihazında vücut kompozisyonu ölçümü yapan kullanıcı"
              fill
              preload
              sizes="(max-width: 820px) calc(100vw - 38px), (max-width: 1400px) 43vw, 590px"
            />
            <figcaption className="bodycomp-hero__note">
              <span aria-hidden="true" />
              İyi bir ölçüm, iyi bir sohbetle başlar.
            </figcaption>
          </figure>
        </div>
      </section>

      <article className="bodycomp-page">
        <section className="bodycomp-overview section">
          <div className="shell">
            <div className="bodycomp-overview__copy">
              <p className="eyebrow">Vücut kompozisyonu</p>
              <h2>{bodyCompositionOverview.title}</h2>
              {bodyCompositionOverview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="bodycomp-overview__figure">
              <div className="bodycomp-overview__media">
                <Image
                  src="/images/learn/body-composition/composition-still-life-v2.jpg"
                  alt="Mezura, egzersiz ekipmanı, su ve vücut kompozisyonu sonuçlarını gösteren doğal bir düzenleme"
                  fill
                  sizes="(max-width: 1248px) calc(100vw - 48px), 1200px"
                />
              </div>
              <figcaption className="bodycomp-figure-caption bodycomp-figure-caption--lead">
                <strong>Bir sayıdan fazlası.</strong>
                <span>
                  Kas, yağ ve vücut suyu birlikte değerlendirildiğinde toplam ağırlık anlam kazanır.
                </span>
              </figcaption>
            </figure>
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
                <figure className="bodycomp-story__figure">
                  <div className="bodycomp-story__media">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      loading="eager"
                      unoptimized={index === 0}
                      sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1400px) 52vw, 720px"
                    />
                  </div>
                  <figcaption className="bodycomp-figure-caption">
                    <span>{String(index + 2).padStart(2, "0")}</span>
                    {storyCaptions[index]}
                  </figcaption>
                </figure>
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
            <div className="bodycomp-skinny__copy">
              <p className="eyebrow eyebrow--light">Görünüm ve sağlık</p>
              <h2>{skinnyFatContent.title}</h2>
              {skinnyFatContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="bodycomp-skinny__figure">
              <div className="bodycomp-skinny__media">
                <Image
                  src="/images/learn/body-composition/healthy-weight-training.jpg"
                  alt="Egzersiz sonrasında spor salonunda dinlenen sporcu"
                  fill
                  sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1400px) 52vw, 720px"
                />
              </div>
              <figcaption className="bodycomp-figure-caption bodycomp-figure-caption--dark">
                <span>04</span>
                Görünüm tek başına kas miktarını veya visseral yağ düzeyini göstermez.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bodycomp-benefits section section--soft">
          <div className="shell">
            <div className="bodycomp-benefits__intro">
              <div>
                <p className="eyebrow">Somut ilerleme</p>
                <h2>Vücut kompozisyonunuzu anlamanın faydaları nelerdir?</h2>
              </div>
              <figure className="bodycomp-benefits__figure">
                <div className="bodycomp-benefits__media">
                  <Image
                    src="/images/learn/body-composition/benefits.png"
                    alt="InBody sonucunu bir sporcuya açıklayan profesyonel"
                    fill
                    sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1400px) 54vw, 740px"
                  />
                </div>
                <figcaption className="bodycomp-figure-caption">
                  <span>05</span>
                  Düzenli ölçüm, planın vücudunuzda gerçekten neyi değiştirdiğini görünür kılar.
                </figcaption>
              </figure>
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
                  <figure
                    className={`bodycomp-method__figure${
                      index === 2 || index === 4 ? " bodycomp-method__figure--compact" : ""
                    }`}
                  >
                    <div className="bodycomp-method__media">
                      <Image
                        src={method.image}
                        alt={method.imageAlt}
                        fill
                        sizes={
                          index === 2 || index === 4
                            ? "(max-width: 720px) calc(100vw - 96px), 360px"
                            : "(max-width: 720px) calc(100vw - 48px), (max-width: 1400px) 34vw, 440px"
                        }
                      />
                    </div>
                    <figcaption>{method.credit}</figcaption>
                  </figure>
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
