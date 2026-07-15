import Image from "next/image";
import { SectionNavigation } from "@/components/section-navigation";
import { Breadcrumb, ContactCta } from "@/components/ui";
import { learnLinks } from "@/content/navigation";
import type { ContentPage } from "@/content/pages";

const comparisonVisuals = [
  {
    src: "/images/learn/technology/hand-only.png",
    alt: "Yalnızca el elektrotlarıyla yapılan ölçüm şeması",
  },
  {
    src: "/images/learn/technology/whole-body.png",
    alt: "Tüm vücudu tek silindir olarak değerlendiren ölçüm şeması",
  },
  {
    src: "/images/learn/technology/foot-only.png",
    alt: "Yalnızca ayak elektrotlarıyla yapılan ölçüm şeması",
  },
  {
    src: "/images/learn/technology/dsm-bia.png",
    alt: "Vücudun beş bölümünü ayrı ölçen DSM-BIA şeması",
  },
];

const principles = [
  {
    image: "/images/learn/technology/water-resistance.png",
    alt: "Vücut suyunun elektrik akımına karşı direncini gösteren şema",
    title: "Çok frekanslı ölçüm",
    text: "Farklı frekanslar, hücre içi ve hücre dışı suyun daha ayrıntılı değerlendirilmesine yardımcı olur.",
  },
  {
    image: "/images/learn/technology/measurement-paths.png",
    alt: "Vücudun kollar, bacaklar ve gövde olarak ölçüm yolları",
    title: "Doğrudan segmental analiz",
    text: "Sağ kol, sol kol, gövde, sağ bacak ve sol bacak tek tek ölçülür; gövde ayrı bir segment olarak ele alınır.",
  },
  {
    image: "/images/learn/technology/direct-measurement.png",
    alt: "Doğrudan ölçüm yaklaşımını açıklayan şema",
    title: "Ölçülen veriyi temel alan yaklaşım",
    text: "Sonuçlar, yaş veya cinsiyete dayalı istatistiksel tahminler yerine ölçülen empedans verisini temel alır.",
  },
];

export function TechnologyPage({ page }: { page: ContentPage }) {
  const getSection = (title: string) =>
    page.sections?.find((section) => section.title === title);
  const resistance = getSection("Direnç kavramı");
  const electrodes = getSection("Sekiz noktalı dokunsal elektrot sistemi");
  const segmental = getSection("Doğrudan Segmental Çok Frekanslı BIA");
  const empirical = getSection("Ampirik tahmin kullanmayan yaklaşım");
  const development = getSection("Teknolojinin gelişimi");

  return (
    <main id="ana-icerik">
      <SectionNavigation
        label="Öğrenin"
        currentHref="/ogren/inbody-teknolojisi"
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
          <div className="subpage-hero__media technology-hero__media">
            <Image
              src="/images/learn/technology/hero.png"
              alt="InBody cihazının ölçüm kolu ve elektrot sistemi"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <article className="technology-guide">
        <section className="section">
          <div className="shell technology-intro">
            <div className="technology-copy">
              <p className="eyebrow">Ölçümün temeli</p>
              <h2>İnsan vücudu ve empedans</h2>
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="technology-media technology-media--contain">
              <Image
                src="/images/learn/technology/segmental-model.png"
                alt="Vücudun beş silindir olarak segmental ölçüm modeli"
                fill
                sizes="(max-width: 820px) 100vw, 44vw"
              />
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="shell technology-resistance">
            <div className="technology-media technology-media--photo">
              <Image
                src="/images/learn/technology/traffic.png"
                alt="Elektrik direncini anlatmak için kullanılan yoğun trafik örneği"
                fill
                sizes="(max-width: 820px) 100vw, 42vw"
              />
            </div>
            <div className="technology-copy">
              <p className="eyebrow">Akımın izlediği yol</p>
              <h2>{resistance?.title}</h2>
              {resistance?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="shell technology-diagram">
            <Image
              src="/images/learn/technology/resistance.png"
              alt="Direnç ve reaktansın empedansı oluşturmasını açıklayan şema"
              fill
              sizes="(max-width: 820px) 100vw, 1180px"
            />
          </div>
        </section>

        <section className="section technology-comparison">
          <div className="shell">
            <div className="technology-heading">
              <p className="eyebrow">Neden segmental ölçüm?</p>
              <h2>Vücudu tek bir bütün olarak değil, beş ayrı bölüm olarak ölçmek</h2>
              <p>{segmental?.paragraphs?.[0]}</p>
            </div>
            <div className="technology-comparison__grid">
              {comparisonVisuals.map((visual) => (
                <figure key={visual.src}>
                  <div className="technology-comparison__media">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 560px) 88vw, (max-width: 1000px) 42vw, 23vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section technology-electrodes">
          <div className="shell technology-electrodes__grid">
            <div className="technology-copy">
              <p className="eyebrow">Tutarlı anatomik sınırlar</p>
              <h2>{electrodes?.title}</h2>
              {electrodes?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="technology-media technology-media--contain">
              <Image
                src="/images/learn/technology/electrodes.png"
                alt="InBody'nin sekiz noktalı dokunsal elektrot sistemi"
                fill
                sizes="(max-width: 820px) 100vw, 42vw"
              />
            </div>
          </div>
        </section>

        <section className="section section--soft technology-principles">
          <div className="shell">
            <div className="technology-heading">
              <p className="eyebrow">InBody ölçüm yaklaşımı</p>
              <h2>Sonucu güçlendiren üç temel prensip</h2>
              <p>{empirical?.paragraphs?.[0]}</p>
            </div>
            <div className="technology-principles__grid">
              {principles.map((principle, index) => (
                <article key={principle.title}>
                  <div className="technology-principles__media">
                    <Image
                      src={principle.image}
                      alt={principle.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, 30vw"
                    />
                  </div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell technology-validation">
            <div className="technology-media technology-media--contain">
              <Image
                src="/images/learn/technology/validation.png"
                alt="InBody ile DEXA sonuçlarını karşılaştıran doğrulama grafiği"
                fill
                sizes="(max-width: 820px) 100vw, 42vw"
              />
            </div>
            <div className="technology-copy">
              <p className="eyebrow">Araştırma ve gelişim</p>
              <h2>{development?.title}</h2>
              {development?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>

      <ContactCta />
    </main>
  );
}
