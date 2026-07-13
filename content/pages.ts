export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  body: string[];
  sourceUrl?: string;
};

export const aboutPages: ContentPage[] = [
  {
    slug: "biz-kimiz",
    title: "Biz Kimiz",
    eyebrow: "Hakkımızda",
    description:
      "InBody'nin misyonu, vizyonu ve sağlık teknolojisine yaklaşımı.",
    body: [
      "InBody, insanları daha sağlıklı bir yaşam sürmeye ilham vermek ve liderlik etmek için kendini adamıştır.",
      "InBody’nin vizyonu, sağlığın yalnızca kiloyla değil, vücut kompozisyonuna dair doğru içgörüyle değerlendirilmesidir.",
    ],
    sourceUrl: "https://tr.inbody.com/hakkimizda/",
  },
  {
    slug: "tarihce",
    title: "Tarihçe",
    eyebrow: "Hakkımızda",
    description: "InBody'nin kuruluşundan bugüne gelişim yolculuğu.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "kuresel-ag",
    title: "Küresel Ağ",
    eyebrow: "Hakkımızda",
    description: "InBody'nin dünya genelindeki merkezleri ve çalışma ağı.",
    body: [
      "InBody dünya çapında 80'den fazla ülkede faaliyet göstermektedir. Merkezi Güney Kore'de bulunan InBody'nin Amerika Birleşik Devletleri, Avrupa, Çin, Japonya, Hindistan ve Malezya'da şubeleri bulunmaktadır.",
    ],
    sourceUrl: "https://tr.inbody.com/about/global-location.php",
  },
];

export const learnPages: ContentPage[] = [
  {
    slug: "vucut-kompozisyonu-nedir",
    title: "Vücut Kompozisyonu Nedir?",
    eyebrow: "Öğrenin",
    description:
      "Vücudun yağ, protein, mineral ve vücut suyu bileşenlerini anlamaya giriş.",
    body: [
      "Vücut kompozisyonu, vücudu temel bileşenlerine ayırma yöntemidir: yağ, protein, mineraller ve vücut suyu.",
      "Vücut kompozisyonu analizi; yağ kitlesi, kas kitlesi ve vücut yağ yüzdesindeki değişiklikleri göstermeye yardımcı olur.",
    ],
    sourceUrl: "https://tr.inbody.com/ogren-vucut-kompozisyonu/",
  },
  {
    slug: "inbody-teknolojisi",
    title: "InBody Teknolojisi",
    eyebrow: "Öğrenin",
    description:
      "Bioelektrik İmpedans Analizi ve InBody'nin doğrudan segmental ölçüm yaklaşımı.",
    body: [
      "InBody cihazları vücut kompozisyonunu ölçmek için Bioelektrik İmpedans Analizi yöntemini kullanır.",
      "InBody teknolojisi, vücudu beş ayrı bölümde değerlendirir ve gövde empedansını ayrı olarak ölçer.",
    ],
    sourceUrl: "https://tr.inbody.com/ogren-teknoloji/",
  },
  {
    slug: "inbody-testi",
    title: "InBody Testi",
    eyebrow: "Öğrenin",
    description: "InBody testine hazırlık ve test prosedürü.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "sonuc-sayfasi-yorumlama",
    title: "Sonuç Sayfası Yorumlama",
    eyebrow: "Öğrenin",
    description:
      "InBody Sonuç Sayfasındaki vücut kompozisyonu verilerini anlamaya giriş.",
    body: [
      "InBody Sonuç Sayfası'nın farklı bölümleri, her vücut kompozisyonu çıktısının ne anlama geldiğine dair genel bir bakış sunar.",
      "Sonuçları doğru kullanabilmek için verilerin nasıl raporlandığını ve bu verilerle ne yapılabileceğini anlamak gerekir.",
    ],
    sourceUrl: "https://tr.inbody.com/ogren-sonuclar/",
  },
  {
    slug: "sikca-sorulan-sorular",
    title: "Sıkça Sorulan Sorular",
    eyebrow: "Öğrenin",
    description: "InBody cihazları ve test süreci hakkında sık sorulan sorular.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "guvenlik-ve-temizlik-ipuclari",
    title: "Güvenlik ve Temizlik İpuçları",
    eyebrow: "Öğrenin",
    description: "InBody test deneyimi için güvenlik ve temizlik yaklaşımı.",
    body: [
      "InBody cihazlarının dezenfeksiyon adımları ve test deneyiminin güvenli biçimde düzenlenmesi için güncel kurum yönergeleri izlenmelidir.",
      "Onaylı ayrıntılı temizlik prosedürü eklenecek.",
    ],
    sourceUrl: "https://tr.inbody.com/ogren-ipuclari/",
  },
];

export const applicationPages: ContentPage[] = [
  {
    slug: "tibbi",
    title: "Tıbbi Uygulamalar",
    eyebrow: "Uygulamalar",
    description: "InBody'nin tıbbi alanlardaki kullanım başlıkları.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "fitness-spor-salonu",
    title: "Fitness / Spor Salonu",
    eyebrow: "Uygulamalar",
    description: "Fitness ve spor salonu profesyonelleri için InBody çözümleri.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "beslenme",
    title: "Beslenme",
    eyebrow: "Uygulamalar",
    description:
      "Beslenme profesyonelleri için vücut kompozisyonu takibi.",
    body: [
      "InBody testleri, vücut kompozisyonundaki değişiklikleri takip ederek beslenme ve egzersiz ihtiyaçlarının değerlendirilmesini destekler.",
    ],
    sourceUrl: "https://tr.inbody.com/application/nutrition.php",
  },
  {
    slug: "saglik",
    title: "Sağlık",
    eyebrow: "Uygulamalar",
    description: "Sağlık ve wellness alanları için InBody çözümleri.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
];

export const resourcePages: ContentPage[] = [
  {
    slug: "blog",
    title: "Blog",
    eyebrow: "Kaynaklar",
    description: "InBody Türkiye bilgi ve içerik merkezi.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "video",
    title: "Video",
    eyebrow: "Kaynaklar",
    description: "InBody ürün ve uygulama videoları.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
  {
    slug: "katalog-brosur",
    title: "Katalog / Broşür",
    eyebrow: "Kaynaklar",
    description: "InBody ürün katalogları ve broşürleri.",
    body: ["Onaylı Türkçe içerik eklenecek."],
  },
];

export function getPageBySlug(pages: ContentPage[], slug: string) {
  return pages.find((page) => page.slug === slug);
}

