import Image from "next/image";
import Link from "next/link";
import { SectionNavigation } from "@/components/section-navigation";
import { Breadcrumb, ContactCta } from "@/components/ui";
import { aboutLinks } from "@/content/navigation";
import type { ContentPage } from "@/content/pages";
import styles from "./who-we-are-page.module.css";

const milestones = [
  {
    year: "1990'ların başı",
    title: "Bir soru",
    text: "Dönemin BIA cihazları neden ihtiyacı olan insanlara yeterince güvenilir sonuç veremiyordu?",
  },
  {
    year: "1996",
    title: "InBody kuruldu",
    text: "Dr. Kichul Cha, tahminlere daha az bağımlı ve tekrarlanabilir bir ölçüm sistemi geliştirmek için InBody'yi kurdu.",
  },
  {
    year: "1998",
    title: "İlk cihaz",
    text: "Doğrudan Segmental Çok Frekanslı BIA yaklaşımını kullanan ilk InBody cihazı geliştirildi.",
  },
  {
    year: "Bugün",
    title: "80+ ülkede",
    text: "Küçük bir biyoteknoloji girişimi, kliniklerden performans merkezlerine uzanan küresel bir sağlık teknolojisi ağına dönüştü.",
  },
];

function findSection(page: ContentPage, title: string) {
  return page.sections?.find((section) => section.title === title);
}

export function WhoWeArePage({ page }: { page: ContentPage }) {
  const mission = findSection(page, "Misyonumuz")?.paragraphs?.[0];
  const vision = findSection(page, "Vizyonumuz")?.paragraphs?.[0];
  const localSupport = findSection(page, "Küresel deneyim, yerel destek")?.paragraphs?.[0];
  const ceoMessage = findSection(page, "CEO Mesajı")?.paragraphs ?? [];
  const values = (findSection(page, "Değerlerimiz")?.items ?? []).map((item) => {
    const [title, ...text] = item.split(":");
    return { title, text: text.join(":").trim() };
  });

  return (
    <main id="ana-icerik" className={styles.page}>
      <SectionNavigation
        label="Hakkımızda"
        currentHref="/hakkimizda/biz-kimiz"
        links={aboutLinks}
        icon="precision"
      />

      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Hakkımızda" },
                { label: "Biz Kimiz" },
              ]}
            />
            <div>
              <p className="eyebrow">Hakkımızda</p>
              <h1>Biz Kimiz</h1>
              <p className={styles.heroStatement}>
                Ölçümün insanlara yalnızca bir sayı değil, kendileri hakkında net bir fikir vermesi gerektiğine inanıyoruz.
              </p>
            </div>
            <a className={styles.heroLink} href="#hikayemiz">
              Hikâyemizi keşfedin <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className={styles.heroMedia}>
            <Image
              src="/images/about/founder-showroom.png"
              alt="InBody kurucusu Dr. Kichul Cha, InBody showroomunda"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 52vw"
            />
            <figcaption>
              <span>Kurucu ve CEO</span>
              Dr. Kichul Cha
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.origin} id="hikayemiz">
        <div className="shell">
          <div className={styles.originIntro}>
            <h2>Tahmini bırakıp doğrudan ölçmeye başladık.</h2>
            <div>
              <p>{page.body[0]}</p>
              <p>{page.body[1]}</p>
            </div>
          </div>

          <ol className={styles.timeline} aria-label="InBody kuruluş yolculuğu">
            {milestones.map((milestone) => (
              <li key={milestone.year}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <strong>{milestone.year}</strong>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`shell ${styles.founder}`}>
        <div className={styles.founderMedia}>
          <Image
            src={page.feature?.image ?? "/images/official/dr-kichul-cha.png"}
            alt={page.feature?.alt ?? "InBody kurucusu Dr. Kichul Cha"}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
        <div className={styles.founderCopy}>
          <p className="eyebrow eyebrow--light">Kurucumuz</p>
          <h2>Dr. Kichul Cha</h2>
          <blockquote>
            “Daha iyi bir ölçüm, daha iyi bir sağlık kararının başlangıcıdır.”
          </blockquote>
          <p>{page.feature?.text}</p>
          <Link href="/hakkimizda/tarihce" className="button button--light">
            Yolculuğu inceleyin <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.purpose} aria-labelledby="purpose-title">
        <div className={`shell ${styles.purposeGrid}`}>
          <article className={styles.mission}>
            <span>Misyon</span>
            <h2 id="purpose-title">İnsanları daha sağlıklı bir yaşama yönlendirmek.</h2>
            <p>{mission}</p>
          </article>
          <article className={styles.vision}>
            <span>Vizyon</span>
            <h2>Sağlığı, kilodan daha fazlasıyla konuşmak.</h2>
            <p>{vision}</p>
          </article>
        </div>
      </section>

      <section className={styles.values} aria-labelledby="values-title">
        <div className={`shell ${styles.valuesGrid}`}>
          <div className={styles.valuesIntro}>
            <h2 id="values-title">Değerlerimiz, ölçüm kadar somut.</h2>
            <p>
              Eğitimden inovasyona uzanan dört ilke, teknolojiyi gerçek hayatta faydaya dönüştürme biçimimizi belirliyor.
            </p>
          </div>
          <div className={styles.valueList}>
            {values.map((value, index) => (
              <details key={value.title} name="inbody-values" open={index === 0}>
                <summary>
                  <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span>{value.title}</span>
                  <span className={styles.valueToggle} aria-hidden="true">+</span>
                </summary>
                <p>{value.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ceo}>
        <Image
          src="/images/about/company-values.jpg"
          alt="InBody ölçümü sırasında elektrotları tutan kullanıcı"
          fill
          sizes="100vw"
        />
        <div className={styles.ceoShade} aria-hidden="true" />
        <div className={`shell ${styles.ceoContent}`}>
          <p>CEO mesajı</p>
          <h2>Hayatı daha iyi yapmak.</h2>
          <blockquote>
            {ceoMessage[3] ?? "İnsanları daha sağlıklı bir yaşam sürmeye teşvik etme ve bu yolda öncülük etme hedefimizi koruyacağız."}
          </blockquote>
        </div>
      </section>

      <section className={styles.local}>
        <div className={`shell ${styles.localInner}`}>
          <div>
            <h2>Küresel deneyim. Yerel destek.</h2>
            <p>{localSupport}</p>
          </div>
          <Link className={styles.localLink} href="/hakkimizda/kuresel-ag">
            Küresel ağımızı görün <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <p className={`shell ${styles.source}`}>
          İçerik, InBody Türkiye’nin herkese açık sayfasından doğrulanmıştır.
        </p>
      </section>

      <ContactCta />
    </main>
  );
}
