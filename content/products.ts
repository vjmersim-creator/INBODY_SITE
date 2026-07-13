export type ProductCategoryId =
  | "body-composition"
  | "body-water"
  | "height"
  | "wellness"
  | "data";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategoryId;
  categoryLabel: string;
  eyebrow: string;
  summary: string;
  sourceUrl: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  details?: {
    intro: string;
    features: string[];
    specifications: Array<{ label: string; value: string }>;
    note?: string;
  };
  featured?: boolean;
};

export const productCategories: Array<{
  id: ProductCategoryId;
  label: string;
  shortLabel: string;
}> = [
  {
    id: "body-composition",
    label: "Vücut Kompozisyonu Analiz Cihazları",
    shortLabel: "Vücut Kompozisyonu",
  },
  {
    id: "body-water",
    label: "Vücut Suyu Analiz Cihazları",
    shortLabel: "Vücut Suyu",
  },
  { id: "height", label: "Boy Ölçer", shortLabel: "Boy Ölçer" },
  { id: "wellness", label: "Wellness", shortLabel: "Wellness" },
  { id: "data", label: "Veri Yönetimi", shortLabel: "Veri Yönetimi" },
];

export const products: Product[] = [
  {
    slug: "inbody970s",
    name: "InBody970S",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Yeni bir inovasyon standardı",
    summary:
      "InBody970S, 3 MHz teknolojisi ve ergonomik tasarımıyla farklı koşullara ve tıbbi uzmanlıklara uygun ayrıntılı analiz seçenekleri sunar.",
    sourceUrl: "https://tr.inbody.com/urun-970s/",
    image: {
      src: "/images/inbody-hero-device.png",
      width: 411,
      height: 711,
      alt: "InBody970S vücut kompozisyonu analiz cihazı",
    },
    featured: true,
  },
  {
    slug: "inbody770s",
    name: "InBody770S",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Araştırma seviyesinde analiz",
    summary:
      "InBody770S, vücut kompozisyonu ve vücut suyu için iki farklı sonuç raporu sunan araştırma seviyesinde bir analiz cihazıdır.",
    sourceUrl: "https://tr.inbody.com/product/InBody-770S.php",
    image: {
      src: "/images/products/inbody770s.png",
      width: 1066,
      height: 1600,
      alt: "InBody770S vücut kompozisyonu analiz cihazı",
    },
  },
  {
    slug: "inbody580",
    name: "InBody580",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Premium vücut kompozisyonu analizörü",
    summary:
      "InBody580, sağlık profesyonelleri için yeni nesil premium vücut kompozisyonu analizörüdür. Segmental ECW Oranı ve Segmental Faz Açısı ile detaylı değerlendirmeyi destekler.",
    sourceUrl: "https://tr.inbody.com/urun-580/",
    image: {
      src: "/images/inbody580-device.jpg",
      width: 580,
      height: 740,
      alt: "InBody580 vücut kompozisyonu analiz cihazı",
    },
    featured: true,
  },
  {
    slug: "inbody380",
    name: "InBody380",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Akıllı sağlık çözümleri",
    summary:
      "InBody380, kompakt ve katlanabilir tasarımıyla profesyoneller için kolay taşıma ve kapsamlı vücut kompozisyonu değerlendirmesi sağlar.",
    sourceUrl: "https://tr.inbody.com/product/InBody-380.php",
    image: {
      src: "/images/products/inbody380.png",
      width: 1202,
      height: 1600,
      alt: "InBody380 vücut kompozisyonu analiz cihazı",
    },
  },
  {
    slug: "inbody270s",
    name: "InBody270S",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Taşınabilir analiz",
    summary:
      "InBody270S, taşınabilir bir tasarımda profesyonel düzeyde vücut kompozisyonu analizi sunar.",
    sourceUrl: "https://tr.inbody.com/product/InBody-270S.php",
    image: {
      src: "/images/products/inbody270s.png",
      width: 681,
      height: 1600,
      alt: "InBody270S taşınabilir vücut kompozisyonu analiz cihazı",
    },
  },
  {
    slug: "bwa2-0s",
    name: "BWA2.0S",
    category: "body-water",
    categoryLabel: "Vücut Suyu Analiz Cihazları",
    eyebrow: "Gelişmiş vücut suyu analizi",
    summary:
      "BWA2.0S, 3 MHz teknolojisiyle farklı koşullar ve tıbbi uzmanlıklar için kapsamlı araştırma parametreleri sunar.",
    sourceUrl: "https://tr.inbody.com/urun-bwa2s/",
    image: {
      src: "/images/product-category-water.png",
      width: 241,
      height: 455,
      alt: "BWA2.0S vücut suyu analiz cihazı",
    },
    featured: true,
  },
  {
    slug: "inbodys10",
    name: "InBodyS10",
    category: "body-water",
    categoryLabel: "Vücut Suyu Analiz Cihazları",
    eyebrow: "Medikal sınıf vücut suyu analizi",
    summary:
      "InBodyS10, hareket edemeyen veya amputasyon geçirmiş hastalar için tasarlanmış, takılabilir elektrotlu bir vücut suyu analiz cihazıdır.",
    sourceUrl: "https://tr.inbody.com/urun-s10/",
    image: {
      src: "/images/products/inbodys10.png",
      width: 1280,
      height: 1600,
      alt: "InBodyS10 vücut suyu analiz cihazı",
    },
  },
  {
    slug: "bsm-370",
    name: "BSM 370",
    category: "height",
    categoryLabel: "Boy Ölçer",
    eyebrow: "Boy, ağırlık ve BMI ölçümü",
    summary:
      "BSM 370, boy, ağırlık ve BMI ölçümü için taşınabilirliği destekleyen tekerlekli bir stadiyometredir.",
    sourceUrl: "https://tr.inbody.com/product/BSM-370.php",
    image: {
      src: "/images/products/bsm370.png",
      width: 1280,
      height: 1600,
      alt: "BSM 370 boy ve ağırlık ölçüm cihazı",
    },
  },
  {
    slug: "bsm-170",
    name: "BSM 170",
    category: "height",
    categoryLabel: "Boy Ölçer",
    eyebrow: "Dijital stadiyometre",
    summary:
      "BSM 170, büyük LCD ekranı ve Bluetooth uyumluluğuyla boy ölçümünü InBody ekosistemine aktarır.",
    sourceUrl: "https://tr.inbody.com/product/BSM-170.php",
    image: {
      src: "/images/products/bsm170.png",
      width: 1280,
      height: 1600,
      alt: "BSM 170 dijital boy ölçer",
    },
  },
  {
    slug: "fra",
    name: "FRA",
    category: "wellness",
    categoryLabel: "Wellness",
    eyebrow: "Düşme riski değerlendirmesi",
    summary:
      "FRA, vücut dengesi, alt ekstremite kas kütlesi ve bacak gücünü kapsamlı biçimde değerlendirmek için tasarlanmış bir sistemdir.",
    sourceUrl: "https://tr.inbody.com/product/FRA.php",
  },
  {
    slug: "ingrip",
    name: "InGrip",
    category: "wellness",
    categoryLabel: "Wellness",
    eyebrow: "El kavrama gücü testi",
    summary:
      "InGrip, doğru ve tekrarlanabilir el kavrama gücü ölçümü için yük hücresi yöntemi ve kulp kılavuzu kullanır.",
    sourceUrl: "https://tr.inbody.com/urun-ingrip/",
    image: {
      src: "/images/products/ingrip.png",
      width: 1280,
      height: 1600,
      alt: "InGrip el kavrama gücü ölçüm cihazı",
    },
  },
  {
    slug: "lookinbody-web",
    name: "LookinBody Web",
    category: "data",
    categoryLabel: "Veri Yönetimi",
    eyebrow: "Bulut veritabanı yönetimi",
    summary:
      "LookinBody Web, InBody verilerini farklı bilgisayar ve tabletlerden takip etmeye yönelik bulut tabanlı veri yönetimi çözümüdür.",
    sourceUrl: "https://tr.inbody.com/urun-lookinbody-web/",
    image: {
      src: "/images/product-category-data.png",
      width: 151,
      height: 307,
      alt: "LookinBody Web veri yönetimi ekranı",
    },
  },
  {
    slug: "lookinbody-120",
    name: "LookinBody 120",
    category: "data",
    categoryLabel: "Veri Yönetimi",
    eyebrow: "Veri yönetimi yazılımı",
    summary:
      "LookinBody 120, InBody ölçüm verilerini düzenlemek, ilerlemeyi görsel grafiklerle takip etmek ve sonuç sayfası çıktılarını özelleştirmek için kullanılan veri yönetimi yazılımıdır.",
    sourceUrl: "https://tr.inbody.com/product/LookinBody-120.php",
    image: {
      src: "/images/products/lookinbody120.png",
      width: 1280,
      height: 1600,
      alt: "LookinBody 120 veri yönetimi yazılımı ekranı",
    },
    details: {
      intro:
        "Üye kaydı ve seçimi, vücut kompozisyonu geçmişi, sağlık raporu ve sonuç sayfası özelleştirmelerini tek bir masaüstü yazılımında bir araya getirir.",
      features: [
        "Yeni tasarımla üye verilerini düzenleme ve ilerlemeyi görsel grafiklerle takip etme",
        "Sonuç sayfası çıktılarını kuruma göre özelleştirme",
        "Aynı ağdaki bilgisayarlar arasında veri paylaşımı",
        "Elektronik tıbbi kayıt sistemleriyle entegrasyon",
        "Wi-Fi ve Bluetooth bağlantı seçenekleri",
        "Geliştirilmiş güvenlik ayarları",
        "Sonuçları danışanlara e-posta ile gönderme",
        "Tansiyon verilerini yönetme",
      ],
      specifications: [
        {
          label: "İşletim sistemi",
          value: "Windows XP SP3, Vista SP1, Windows 7 veya Windows 8 — 32/64 bit",
        },
        { label: "İşlemci", value: "Intel 1,7 GHz veya üzeri" },
        { label: "Kullanılabilir disk alanı", value: "1 GB üzeri" },
        { label: "Bellek", value: "1 GB RAM veya üzeri" },
        {
          label: "Ekran",
          value: "1024 × 768 çözünürlük ve 16 bit ekran kartı",
        },
        { label: "Giriş birimleri", value: "Klavye ve fare" },
        {
          label: "Bağlantı",
          value: "RS232C, USB, LAN, Wi-Fi veya Bluetooth; destek ürüne göre değişir",
        },
      ],
      note:
        "Sistem gereksinimleri sağlanan LookinBody120 belgesinden aktarılmıştır. Güncel işletim sistemi ve cihaz uyumluluğu kurulum öncesinde doğrulanmalıdır.",
    },
  },
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, Product>;

export const productsByCategory = productCategories.map((category) => ({
  ...category,
  products: products.filter((product) => product.category === category.id),
}));
