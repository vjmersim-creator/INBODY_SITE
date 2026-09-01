import type { Metadata } from "next";
import { SectionNavigation } from "@/components/section-navigation";
import { Breadcrumb, ProductCard, SectionHeading } from "@/components/ui";
import { productsByCategory } from "@/content/products";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "InBody Türkiye vücut kompozisyonu, vücut suyu analizi, boy ölçer, InGrip ve veri yönetimi ürünleri.",
  alternates: { canonical: "/urunler" },
  openGraph: {
    title: "Ürünler | InBody Türkiye",
    description:
      "InBody Türkiye vücut kompozisyonu, vücut suyu analizi, boy ölçer, InGrip ve veri yönetimi ürünleri.",
    url: "/urunler",
    images: [{ url: "/images/products-hero.jpg", alt: "InBody ürün ailesi" }],
  },
};

const anchorByCategory = {
  "body-composition": "vucut-kompozisyonu",
  "body-water": "vucut-suyu",
  height: "boy-olcer",
  ingrip: "ingrip",
  data: "veri-yonetimi",
} as const;

const categoryNavigation = [
  { label: "Vücut Kompozisyonu", href: "/urunler#vucut-kompozisyonu" },
  { label: "Vücut Suyu", href: "/urunler#vucut-suyu" },
  { label: "Boy Ölçer", href: "/urunler#boy-olcer" },
  { label: "InGrip", href: "/urunler#ingrip" },
  { label: "Veri Yönetimi", href: "/urunler#veri-yonetimi" },
];

export default function ProductsPage() {
  return (
    <main id="ana-icerik">
      <SectionNavigation
        label="Ürün kategorileri"
        links={categoryNavigation}
        icon="measure"
      />
      <section className="products-hero">
        <div
          className="products-hero__image"
          aria-hidden="true"
          style={{
            backgroundImage: `url("${withBasePath("/images/products-hero.jpg")}")`,
          }}
        />
        <div className="products-hero__shade" />
        <div className="shell products-hero__content">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Ürünler" }]} />
          <p className="eyebrow eyebrow--light">InBody ürün ailesi</p>
          <h1>Ölçümden içgörüye uzanan çözümler.</h1>
          <p>
            İhtiyacınıza uygun vücut kompozisyonu, vücut suyu analizi, boy
            ölçümü, InGrip ve veri yönetimi ürününü keşfedin.
          </p>
        </div>
      </section>

      {productsByCategory.map((category, index) => (
        <section
          className={`catalog-section section${index % 2 === 1 ? " section--soft" : ""}`}
          id={anchorByCategory[category.id]}
          key={category.id}
        >
          <div className="shell">
            <SectionHeading eyebrow="Ürün kategorisi" title={category.label} />
            <div className="product-grid product-grid--catalog">
              {category.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
