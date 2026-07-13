import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { Breadcrumb } from "@/components/ui";
import { products } from "@/content/products";

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

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ urun?: string; talep?: string }>;
}) {
  const { urun, talep } = await searchParams;
  const selectedProduct = products.find((product) => product.slug === urun);
  const productOptions = products
    .filter((product) => product.listed !== false || product.slug === selectedProduct?.slug)
    .map((product) => ({ value: product.slug, label: product.name }));
  const initialMessage =
    selectedProduct && talep === "brosur"
      ? `${selectedProduct.name} ürün broşürünü talep ediyorum.`
      : "";

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
                  <Icon name="mail" />
                  <div>
                    <span>E-posta</span>
                    <Link href="mailto:inbody_turkiye@inbody.com">
                      inbody_turkiye@inbody.com
                    </Link>
                  </div>
                </div>
                <div>
                  <Icon name="phone" />
                  <div>
                    <span>Telefon</span>
                    <Link href="tel:+902168070515">0216 807 05 15</Link>
                  </div>
                </div>
                <div>
                  <Icon name="location" />
                  <div>
                    <span>Adres</span>
                    <address>
                      Fulya, Büyükdere Cd. No:76 D:177, 34394 Şişli / İstanbul,
                      Türkiye
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page__form-wrap">
              <ContactForm
                initialMessage={initialMessage}
                initialProduct={selectedProduct?.slug}
                productOptions={productOptions}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
