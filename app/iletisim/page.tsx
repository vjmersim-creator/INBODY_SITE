import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "InBody Türkiye ürünleri ve çözümleri hakkında bilgi almak için iletişime geçin.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | InBody Türkiye",
    description:
      "InBody Türkiye ürünleri ve çözümleri hakkında bilgi almak için iletişime geçin.",
    url: "/iletisim",
  },
};

export default function ContactPage() {
  return (
    <main id="ana-icerik">
      <section className="contact-page section">
        <div className="shell">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]} />
          <div className="contact-page__grid">
            <div className="contact-page__intro">
              <p className="eyebrow">InBody Türkiye</p>
              <h1>Size nasıl yardımcı olabiliriz?</h1>
              <p>
                Ürünlerimiz, demo talepleri ve çözüm alanlarımız hakkında bilgi
                almak için formu doldurun.
              </p>
              <div className="contact-details">
                <div>
                  <span>E-posta</span>
                  <Link href="mailto:inbody_turkiye@inbody.com">
                    inbody_turkiye@inbody.com
                  </Link>
                </div>
                <div>
                  <span>Telefon</span>
                  <Link href="tel:+902168070515">0216 807 05 15</Link>
                </div>
                <div>
                  <span>Adres</span>
                  <address>
                    Fulya, Büyükdere Cd. No:76 D:177, 34394 Şişli / İstanbul,
                    Türkiye
                  </address>
                </div>
              </div>
            </div>
            <div className="contact-page__form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
