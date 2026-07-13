export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  body: string[];
  timeline?: Array<{ label: string; text: string }>;
  steps?: Array<{ label: string; text: string }>;
  cta?: { href: string; label: string };
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
    body: [
      "InBody'nin yolculuğu, Bioelektrik İmpedans Analizi teknolojisini daha doğru ve güvenilir hâle getirme hedefiyle başladı. Sağlanan kurumsal tarihçe metnindeki önemli dönüm noktaları aşağıda yer alıyor.",
    ],
    timeline: [
      {
        label: "1990'ların başları",
        text: "Dr. Kichul Cha, dönemin BIA cihazlarının doğru sonuç vermediğini fark ederek vücut kompozisyonu analizine yönelik yeni bir yaklaşım geliştirmeye başladı.",
      },
      {
        label: "1996",
        text: "InBody Güney Kore'de kuruldu. Doğrudan Segmental Çok Frekanslı BIA ve sekiz noktalı dokunsal elektrot sistemiyle ampirik tahminlere dayanmayan ölçüm yaklaşımı geliştirildi.",
      },
      {
        label: "2000",
        text: "İlk yurt dışı şubesi Beverly Hills'te açıldı. InBody teknolojisi FDA onayı aldı ve araştırmalarla doğrulandı.",
      },
      {
        label: "2009",
        text: "GE Healthcare ile stratejik iş ortaklığı kuruldu.",
      },
      {
        label: "2012",
        text: "ABD ofisi Cerritos'a taşındı.",
      },
      {
        label: "2013",
        text: "Segmental yağ analizi ve visseral yağ seviyesi sunan InBody570 piyasaya sürüldü.",
      },
      {
        label: "2014",
        text: "InBody770 piyasaya sürüldü; InBody570, Red Dot Tasarım Ödülü'nü kazandı.",
      },
      {
        label: "2015",
        text: "InBody770 iF Tasarım Ödülü'nü kazandı. InBody, doğrudan yabancı yatırım ödülüne layık görüldü; BAND ve InLab CES İnovasyon Ödülü aldı ve ilk giyilebilir ürün BAND tanıtıldı.",
      },
      {
        label: "2016",
        text: "LookinBody Web ve InBody270 piyasaya sürüldü.",
      },
      {
        label: "2017",
        text: "BAND2 ve EZTraining tanıtıldı.",
      },
      {
        label: "2019",
        text: "BPBIO320S nisan ayında, H20N ise mayıs ayında piyasaya sürüldü.",
      },
    ],
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
    body: [
      "Doğru ve tutarlı bir test deneyimi için ölçüm sırasında aşağıdaki adımları sırayla uygulayın.",
    ],
    steps: [
      {
        label: "01",
        text: "Ellerinizi ve ayaklarınızı bir InBody Bezi ile silin. InBody Bezi, akım iletkenliğini artırmaya yardımcı olacaktır.",
      },
      {
        label: "02",
        text: "InBody'ye çıkın ve kilonuzu ölçün. Ayaklarınızı ayak elektrotlarıyla hizaladığınızdan emin olun.",
      },
      {
        label: "03",
        text: "İstendiğinde kişisel profilinizi girin. Profiliniz, ilerlemenizi takip etmenize olanak tanıyacaktır. Kişisel profilinizi onayladıktan sonra Enter tuşuna basarak testi başlatın.",
      },
      {
        label: "04",
        text: "Kollarınızı tutun ve başparmaklarınızı oval elektrotlara yerleştirin.",
      },
      {
        label: "05",
        text: "Kollarınızı düz tutun ve vücudunuzdan uzak tutun. Test tamamlanana kadar rahat ve hareketsiz kalın. InBody sonuçlarınız test tamamlandığında otomatik olarak yazdırılacaktır. İşte böylece bir InBody Testi yaptınız.",
      },
    ],
    cta: {
      href: "/ogren/sonuc-sayfasi-yorumlama",
      label: "Sonuç Sayfası Yorumunu inceleyin",
    },
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
