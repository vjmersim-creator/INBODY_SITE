import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { SectionNavigation } from "@/components/section-navigation";
import { Breadcrumb, ContactCta } from "@/components/ui";
import { learnLinks } from "@/content/navigation";
import type { ContentPage } from "@/content/pages";

const comparisonVisuals = [
  {
    mode: "partial" as const,
    label: "Dolaylı yaklaşım",
    title: "Tek ölçüm, geniş tahmin",
    text: "Sınırlı temas noktalarından alınan veri, vücudun geri kalanı için istatistiksel tahmine dönüştürülür.",
  },
  {
    mode: "direct" as const,
    label: "Doğrudan ölçüm",
    title: "Beş segment, beş ayrı veri yolu",
    text: "Sağ kol, sol kol, gövde, sağ bacak ve sol bacak birbirinden bağımsız olarak ölçülür.",
    isInBody: true,
  },
];

function SegmentBody({ mode }: { mode: "partial" | "direct" }) {
  return (
    <svg
      className={`segment-body segment-body--${mode}`}
      viewBox="0 0 300 390"
      role="img"
      aria-label={
        mode === "direct"
          ? "Vücudun sağ kol, sol kol, gövde, sağ bacak ve sol bacak olarak ayrı ölçülmesi"
          : "Vücudun sınırlı temas noktalarından alınan veriyle tek parça değerlendirilmesi"
      }
    >
      <circle className="segment-body__head" cx="150" cy="42" r="24" />
      <path className="segment-body__arm segment-body__arm--left" d="M110 91 L72 188" />
      <path className="segment-body__arm segment-body__arm--right" d="M190 91 L228 188" />
      <rect className="segment-body__torso" x="112" y="72" width="76" height="142" rx="35" />
      <path className="segment-body__leg segment-body__leg--left" d="M134 199 L116 338" />
      <path className="segment-body__leg segment-body__leg--right" d="M166 199 L184 338" />
      {mode === "direct" ? (
        <>
          <circle className="segment-body__contact" cx="68" cy="196" r="8" />
          <circle className="segment-body__contact" cx="232" cy="196" r="8" />
        </>
      ) : null}
      <circle className="segment-body__contact" cx="113" cy="348" r="8" />
      <circle className="segment-body__contact" cx="187" cy="348" r="8" />
      {mode === "direct" ? (
        <g className="segment-body__labels">
          <text x="22" y="126">Sol kol</text>
          <text x="278" y="126" textAnchor="end">Sağ kol</text>
          <text x="150" y="150" textAnchor="middle">Gövde</text>
          <text x="42" y="295">Sol bacak</text>
          <text x="258" y="295" textAnchor="end">Sağ bacak</text>
        </g>
      ) : (
        <g className="segment-body__estimate">
          <rect x="55" y="84" width="190" height="238" rx="88" />
          <text x="150" y="360" textAnchor="middle">Tek parça model</text>
        </g>
      )}
    </svg>
  );
}

function ResistanceDiagram() {
  return (
    <svg
      className="resistance-visual"
      viewBox="0 0 1000 470"
      role="img"
      aria-label="Hücre içi ve hücre dışı su boyunca ilerleyen elektrik akımının direnç ve reaktans bileşenleri"
    >
      <defs>
        <marker id="resistance-arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" />
        </marker>
        <marker id="resistance-arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" />
        </marker>
      </defs>
      <g className="resistance-visual__cells">
        <ellipse cx="310" cy="126" rx="62" ry="48" />
        <ellipse cx="438" cy="104" rx="58" ry="43" />
        <ellipse cx="574" cy="130" rx="67" ry="51" />
        <ellipse cx="704" cy="106" rx="57" ry="44" />
        <ellipse cx="278" cy="246" rx="58" ry="45" />
        <ellipse cx="414" cy="235" rx="69" ry="53" />
        <ellipse cx="560" cy="252" rx="62" ry="48" />
        <ellipse cx="700" cy="236" rx="68" ry="51" />
        <ellipse cx="344" cy="348" rx="59" ry="43" />
        <ellipse cx="526" cy="352" rx="64" ry="46" />
        <ellipse cx="680" cy="344" rx="57" ry="42" />
      </g>
      <path
        className="resistance-visual__flow resistance-visual__flow--reactance"
        d="M144 382 C190 296 198 205 245 124 C286 52 364 55 398 118 C435 187 388 268 433 374"
        markerEnd="url(#resistance-arrow-red)"
      />
      <path
        className="resistance-visual__flow resistance-visual__flow--resistance"
        d="M570 382 C603 312 630 287 620 223 C612 169 638 111 790 74"
        markerEnd="url(#resistance-arrow-blue)"
      />
      <g className="resistance-visual__label resistance-visual__label--red">
        <text x="122" y="56">Reaktans</text>
        <text x="122" y="82">Hücre zarının etkisi</text>
      </g>
      <g className="resistance-visual__label resistance-visual__label--blue">
        <text x="704" y="398">Direnç</text>
        <text x="704" y="424">Vücut suyunun etkisi</text>
      </g>
      <g className="resistance-visual__legend">
        <circle cx="344" cy="438" r="5" />
        <text x="358" y="444">Hücre içi su</text>
        <circle cx="510" cy="438" r="5" />
        <text x="524" y="444">Hücre zarı</text>
        <circle cx="650" cy="438" r="5" />
        <text x="664" y="444">Hücre dışı su</text>
      </g>
    </svg>
  );
}

const principles = [
  {
    image: "/images/learn/technology/water-resistance.png",
    alt: "Vücut suyunun elektrik akımına karşı direncini gösteren şema",
    label: "Su dağılımı",
    title: "Çok frekanslı ölçüm",
    text: "Farklı frekanslar, hücre içi ve hücre dışı suyun daha ayrıntılı değerlendirilmesine yardımcı olur.",
  },
  {
    image: "/images/learn/technology/measurement-paths.png",
    alt: "Vücudun kollar, bacaklar ve gövde olarak ölçüm yolları",
    label: "Beş segment",
    title: "Doğrudan segmental analiz",
    text: "Sağ kol, sol kol, gövde, sağ bacak ve sol bacak tek tek ölçülür; gövde ayrı bir segment olarak ele alınır.",
  },
  {
    image: "/images/learn/technology/direct-measurement.png",
    alt: "Doğrudan ölçüm yaklaşımını açıklayan şema",
    label: "Ölçülen veri",
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

      <section className="subpage-hero subpage-hero--visual technology-hero">
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
          <figure className="subpage-hero__media technology-hero__media">
            <Image
              src="/images/curated/learn/technology-electrode.webp"
              alt="InBody cihazının sekiz noktalı el elektrodunu tutan kullanıcı"
              fill
              preload
              sizes="(max-width: 980px) calc(100vw - 48px), (max-width: 1400px) 43vw, 590px"
            />
            <figcaption className="technology-hero__note">
              <strong>8 temas noktası</strong>
              <span>Vücudu beş ayrı segment üzerinden dinleyen tek ölçüm.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <nav className="shell technology-jumpnav" aria-label="Teknoloji sayfası bölüm bağlantıları">
        <span>Bu sayfada</span>
        <div>
          <a href="#empedans">Empedans</a>
          <a href="#segmental-olcum">Segmental ölçüm</a>
          <a href="#elektrot-sistemi">Elektrot sistemi</a>
          <a href="#olcum-yaklasimi">Ölçüm yaklaşımı</a>
        </div>
      </nav>

      <article className="technology-guide">
        <section className="section" id="empedans">
          <div className="shell technology-intro">
            <div className="technology-copy">
              <p className="technology-kicker">Ölçümün temeli</p>
              <h2>İnsan vücudu ve empedans</h2>
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <dl className="technology-definition" aria-label="Empedansın iki bileşeni">
                <div>
                  <dt>Direnç (R)</dt>
                  <dd>Vücut sıvılarının akımın geçişine gösterdiği karşı koyma.</dd>
                </div>
                <div>
                  <dt>Reaktans (Xc)</dt>
                  <dd>Hücre zarlarının alternatif akıma verdiği kapasitif yanıt.</dd>
                </div>
              </dl>
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
              <p className="technology-kicker">Akımın izlediği yol</p>
              <h2>{resistance?.title}</h2>
              {resistance?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <figure className="shell technology-diagram">
            <div className="technology-diagram__media">
              <ResistanceDiagram />
            </div>
            <figcaption>
              Empedans, akımın vücut sıvıları ve hücre zarlarıyla karşılaşırken verdiği
              iki farklı yanıtın birlikte değerlendirilmesiyle açıklanır.
            </figcaption>
          </figure>
        </section>

        <section className="section technology-comparison" id="segmental-olcum">
          <div className="shell">
            <div className="technology-heading">
              <p className="technology-kicker">Neden segmental ölçüm?</p>
              <h2>Vücudu tek bir bütün olarak değil, beş ayrı bölüm olarak ölçmek</h2>
              <p>{segmental?.paragraphs?.[0]}</p>
            </div>
            <div className="technology-comparison__grid">
              {comparisonVisuals.map((visual) => (
                <figure className={visual.isInBody ? "is-inbody" : undefined} key={visual.mode}>
                  <div className="technology-comparison__media">
                    <SegmentBody mode={visual.mode} />
                  </div>
                  <figcaption>
                    <span>{visual.label}</span>
                    <strong>{visual.title}</strong>
                    <p>{visual.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section technology-electrodes" id="elektrot-sistemi">
          <div className="shell technology-electrodes__grid">
            <div className="technology-copy">
              <p className="technology-kicker">Tutarlı anatomik sınırlar</p>
              <h2>{electrodes?.title}</h2>
              {electrodes?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="technology-electrodes__figure">
              <div className="technology-media technology-electrodes__photo">
                <Image
                  src="/images/home-stories/inbody-test.png"
                  alt="Vücut kompozisyonu ölçümü sırasında iki el elektrodunu doğru konumda tutan kullanıcı"
                  fill
                  sizes="(max-width: 820px) calc(100vw - 48px), 42vw"
                />
              </div>
              <figcaption className="technology-electrodes__facts">
                <span>Eller</span>
                <span>Ayaklar</span>
                <strong>8 temas noktası</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section section--soft technology-principles" id="olcum-yaklasimi">
          <div className="shell">
            <div className="technology-heading">
              <p className="technology-kicker">InBody ölçüm yaklaşımı</p>
              <h2>Sonucu güçlendiren üç temel prensip</h2>
              <p>{empirical?.paragraphs?.[0]}</p>
            </div>
            <div className="technology-principles__grid">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <div className="technology-principles__media">
                    <Image
                      src={principle.image}
                      alt={principle.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, 30vw"
                    />
                  </div>
                  <span>{principle.label}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell technology-validation">
            <figure className="technology-validation__figure">
              <div className="technology-validation__art">
                <Image
                  src="/images/learn/technology/inbody-impedance-development.png"
                  alt="Elektrotlardan empedans analizine uzanan BIA ölçüm yaklaşımı"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 820px) 92vw, 48vw"
                />
              </div>
              <figcaption>
                <span>Ölçüm zinciri</span>
                <p>Elektrot temasından doğrudan empedans verisine uzanan ölçüm yaklaşımı.</p>
              </figcaption>
            </figure>
            <div className="technology-copy">
              <p className="technology-kicker">Araştırma ve gelişim</p>
              <h2>{development?.title}</h2>
              {development?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ol className="technology-milestones" aria-label="BIA teknolojisinin gelişimi">
                <li>
                  <strong>1960’ların sonu</strong>
                  <span>BIA araştırmaları ve tek frekanslı ölçüm sistemleri</span>
                </li>
                <li>
                  <strong>1996</strong>
                  <span>Doğrudan segmental ölçüm ve sekiz noktalı elektrot yaklaşımı</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section section--soft technology-next" aria-labelledby="technology-next-title">
          <div className="shell">
            <div className="technology-next__heading">
              <h2 id="technology-next-title">Teknolojiyi ölçüm deneyiminde görün.</h2>
              <p>
                Ölçümün nasıl uygulandığını ve elde edilen verinin sonuç sayfasında
                nasıl sunulduğunu inceleyin.
              </p>
            </div>
            <div className="technology-next__grid">
              <Link href="/ogren/inbody-testi">
                <span>Uygulama</span>
                <strong>InBody testinin nasıl yapıldığını inceleyin.</strong>
                <Icon name="arrow" />
              </Link>
              <Link href="/ogren/sonuc-sayfasi-yorumlama">
                <span>Sonuçlar</span>
                <strong>Ölçüm verisinin raporda nasıl göründüğünü keşfedin.</strong>
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <ContactCta />
    </main>
  );
}
