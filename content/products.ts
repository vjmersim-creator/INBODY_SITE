export type ProductCategoryId =
  | "body-composition"
  | "body-water"
  | "height"
  | "ingrip"
  | "data";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategoryId;
  categoryLabel: string;
  eyebrow: string;
  summary: string;
  sourceUrl?: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  bannerImage?: {
    src: string;
    alt: string;
    position?: string;
  };
  details?: {
    title: string;
    intro: string;
    features: Array<{ title: string; text: string }>;
    specifications: Array<{ label: string; value: string }>;
    note?: string;
  };
  featured?: boolean;
  listed?: boolean;
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
  { id: "ingrip", label: "InGrip", shortLabel: "InGrip" },
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
    details: {
      title: "Araştırma ve profesyonel değerlendirme için kapsamlı analiz.",
      intro:
        "InBody970S; 3 MHz ölçüm teknolojisini, 130'dan fazla parametreyi ve farklı kullanım alanlarına yönelik sonuç sayfalarını tek bir sistemde bir araya getirir.",
      features: [
        {
          title: "Hassas 3 MHz ölçüm teknolojisi",
          text: "Yüksek frekans desteği, hücre içi ve hücre dışı suyun daha ayrıntılı değerlendirilmesini destekler.",
        },
        {
          title: "130'dan fazla parametre",
          text: "Vücut kompozisyonu, vücut suyu, faz açısı, araştırma ve karşılaştırma çıktılarıyla derinlemesine analiz sunar.",
        },
        {
          title: "Vücut suyu dengesi",
          text: "Tüm vücut ve segmental ECW oranları üzerinden vücut suyu dağılımının değerlendirilmesine yardımcı olur.",
        },
        {
          title: "Hücresel bütünlük göstergeleri",
          text: "Tüm vücut ve segmental faz açısı değerleri, sağlık profesyonellerinin hücresel durumu takip etmesini destekler.",
        },
        {
          title: "Sarkopeni değerlendirmesi",
          text: "İskelet Kası Kütle İndeksi ve isteğe bağlı InGrip bağlantısı üzerinden el kavrama gücü verileri birlikte değerlendirilebilir.",
        },
        {
          title: "Akıllı kullanıcı tanıma",
          text: "InBodyBAND, parmak izi veya barkod seçenekleriyle kullanıcı tanıma ve tekrar ölçüm akışı kolaylaştırılabilir.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA ve SMF-BIA" },
        {
          label: "Empedans frekansları",
          value: "5, 50, 250 ve 500 kHz; 1 ve 3 MHz",
        },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 30 ölçüm" },
        { label: "Faz açısı", value: "5, 50 ve 250 kHz; 5 segmentte 15 ölçüm" },
        { label: "Test süresi", value: "Yaklaşık 30 saniye" },
        { label: "Ağırlık aralığı", value: "2-300 kg" },
        { label: "Boy aralığı", value: "95-220 cm" },
        { label: "Yaş aralığı", value: "3 yaş ve üzeri" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Ekran", value: "1280 × 800, 10,1 inç renkli TFT LCD" },
        { label: "Boyutlar", value: "614,1 × 963,8 × 1239,3 mm" },
        { label: "Cihaz ağırlığı", value: "41,1 kg" },
        { label: "Kablosuz bağlantı", value: "Bluetooth ve Wi-Fi" },
      ],
      note: "İçerik ve teknik değerler sağlanan InBody970S kataloğundan aktarılmıştır.",
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
    details: {
      title: "Araştırma seviyesinde vücut kompozisyonu ve vücut suyu analizi.",
      intro:
        "InBody770S, esnek el elektrotları ve 130'dan fazla parametresiyle kapsamlı değerlendirmeyi ergonomik bir test deneyimiyle birleştirir.",
      features: [
        {
          title: "Yenilikçi ölçüm teknolojisi",
          text: "InBody'ye özel ölçüm yaklaşımı, vücut kompozisyonunun ampirik tahmin kullanılmadan değerlendirilmesini destekler.",
        },
        {
          title: "Esnek el elektrotları",
          text: "Kablolu elektrotlar, tutma kollarının doğal ve rahat bir pozisyonda kullanılmasına yardımcı olur.",
        },
        {
          title: "130'dan fazla parametre",
          text: "Vücut kompozisyonu, vücut suyu ve çocuk sonuç sayfalarında yaklaşık 30 saniyede kapsamlı veri sunar.",
        },
        {
          title: "Vücut suyu dengesi",
          text: "Tüm vücut ve segmental ECW oranları üzerinden sıvı dağılımının değerlendirilmesine yardımcı olur.",
        },
        {
          title: "Faz açısı geçmişi",
          text: "Tüm vücut faz açısı geçmişi, hücresel bütünlüğe ilişkin değişimlerin zaman içinde izlenmesini destekler.",
        },
        {
          title: "Sarkopeni değerlendirmesi",
          text: "İskelet Kası Kütle İndeksi ve isteğe bağlı InGrip bağlantısıyla el kavrama gücü birlikte ele alınabilir.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA ve SMFIM" },
        { label: "Empedans frekansları", value: "5, 50, 250 ve 500 kHz; 1 MHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 25 ölçüm" },
        { label: "Faz açısı", value: "50 kHz; 5 segmentte 5 ölçüm" },
        { label: "Test süresi", value: "Yaklaşık 30 saniye" },
        { label: "Ağırlık aralığı", value: "2-270 kg" },
        { label: "Boy aralığı", value: "95-220 cm" },
        { label: "Yaş aralığı", value: "3 yaş ve üzeri" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Ekran", value: "800 × 480, 10,2 inç renkli TFT LCD" },
        { label: "Boyutlar", value: "526 × 854 × 1175 mm" },
        { label: "Cihaz ağırlığı", value: "35,7 kg" },
        { label: "Kablosuz bağlantı", value: "Bluetooth ve Wi-Fi" },
      ],
      note: "İçerik ve teknik değerler sağlanan InBody770S kataloğundan aktarılmıştır.",
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
      src: "/images/products/inbody580.png",
      width: 1202,
      height: 1600,
      alt: "InBody580 vücut kompozisyonu analiz cihazı",
    },
    bannerImage: {
      src: "/images/product-banners/inbody580.png",
      alt: "InBody580 ile profesyonel vücut kompozisyonu ölçümü",
      position: "center 34%",
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
    details: {
      title: "Katlanabilir tasarımda hızlı ve kapsamlı değerlendirme.",
      intro:
        "InBody380; yaklaşık 30 saniyelik ölçüm, taşınabilir gövde yapısı ve QR kodla kullanıcı tanıma özelliklerini profesyonel analiz parametreleriyle birleştirir.",
      features: [
        {
          title: "Hızlı ölçüm",
          text: "Yaklaşık 30 saniyede vücut kompozisyonu değerlendirmesi sunarak danışmanlık akışını destekler.",
        },
        {
          title: "Kullanışlı el elektrodu",
          text: "Ergonomik üç yönlü el elektrodu, ölçüm sırasında doğru ve rahat kavrama pozisyonuna yardımcı olur.",
        },
        {
          title: "Katlanabilir tasarım",
          text: "Kompakt ve katlanabilir yapı, taşıma ile sınırlı alanlarda kullanım süreçlerini kolaylaştırır.",
        },
        {
          title: "QR kodla tanıma",
          text: "Mobil cihaz üzerinden kullanıcı verisi girişini kolaylaştırarak tekrar ölçüm akışını hızlandırır.",
        },
        {
          title: "Vücut suyu dengesi",
          text: "Tüm vücut ECW oranı, vücut suyu dengesinin izlenmesi ve değerlendirilmesi için ek bir gösterge sunar.",
        },
        {
          title: "Faz açısı ve sarkopeni",
          text: "Faz açısı, İskelet Kası Kütle İndeksi ve isteğe bağlı InGrip verileri daha ayrıntılı değerlendirmeyi destekler.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA ve SMF-BIA" },
        { label: "Empedans frekansları", value: "5, 50 ve 250 kHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 15 ölçüm" },
        { label: "Faz açısı", value: "50 kHz; tüm vücut" },
        { label: "Test süresi", value: "Yaklaşık 30 saniye" },
        { label: "Ağırlık aralığı", value: "2-300 kg" },
        { label: "Boy aralığı", value: "95-220 cm" },
        { label: "Yaş aralığı", value: "3 yaş ve üzeri" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Ekran", value: "480 × 800, 7 inç renkli TFT LCD" },
        { label: "Boyutlar", value: "415,5 × 871,5 × 1069,9 mm" },
        { label: "Cihaz ağırlığı", value: "16 kg" },
        { label: "Kablosuz bağlantı", value: "Bluetooth ve Wi-Fi" },
      ],
      note: "İçerik ve teknik değerler sağlanan InBody380 kataloğundan aktarılmıştır.",
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
    details: {
      title: "Taşınabilir yapıda profesyonel vücut kompozisyonu analizi.",
      intro:
        "InBody270S; katlanabilir gövdesi, yaklaşık 30 saniyelik test süresi ve QR kodla sonuç aktarımıyla saha ve kurum içi ölçüm süreçlerini kolaylaştırır.",
      features: [
        {
          title: "Hızlı ölçüm",
          text: "Yaklaşık 30 saniyede tamamlanan test, kullanıcıların sonuçlarına hızlı biçimde erişmesini sağlar.",
        },
        {
          title: "Kompakt ve taşınabilir",
          text: "Katlanabilir gövde ve isteğe bağlı taşıma çantası, farklı ölçüm noktaları arasında kolay taşımayı destekler.",
        },
        {
          title: "Sonuçlar mobil cihazda",
          text: "QR kod özelliği, vücut kompozisyonu sonuçlarının kullanıcı telefonuna aktarılmasını kolaylaştırır.",
        },
        {
          title: "Beslenme değerlendirmesi",
          text: "Protein, mineral ve vücut yağ göstergeleri beslenme danışmanlığına yönelik kapsamlı bir temel sunar.",
        },
        {
          title: "Faz açısı geçmişi",
          text: "Tüm vücut faz açısı geçmişi, hücresel durumla ilişkili değişimlerin zaman içinde takip edilmesini destekler.",
        },
        {
          title: "Sarkopeni değerlendirmesi",
          text: "İskelet Kası Kütle İndeksi ve isteğe bağlı InGrip bağlantısıyla el kavrama gücü birlikte değerlendirilebilir.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA ve SMF-BIA" },
        { label: "Empedans frekansları", value: "20, 50 ve 100 kHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 15 ölçüm" },
        { label: "Faz açısı", value: "50 kHz; tüm vücut" },
        { label: "Test süresi", value: "Yaklaşık 30 saniye" },
        { label: "Ağırlık aralığı", value: "2-250 kg; NAWI sürümünde 2-200 kg" },
        { label: "Boy aralığı", value: "95-220 cm" },
        { label: "Yaş aralığı", value: "3 yaş ve üzeri" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Ekran", value: "480 × 800, 7 inç renkli TFT LCD" },
        { label: "Boyutlar", value: "356 × 796 × 995 mm" },
        { label: "Cihaz ağırlığı", value: "13,4 kg" },
        { label: "Kablosuz bağlantı", value: "Bluetooth ve Wi-Fi" },
      ],
      note: "İçerik ve teknik değerler sağlanan InBody270S kataloğundan aktarılmıştır.",
    },
  },
  {
    slug: "inbody120",
    name: "InBody120",
    category: "body-composition",
    categoryLabel: "Vücut Kompozisyonu Analiz Cihazları",
    eyebrow: "Taşınabilir sağlık çözümü",
    summary:
      "InBody120, boy bilgisiyle hızlı bir test akışı sunan; kas kütlesi, vücut yağ yüzdesi, beden kütle indeksi ve temel vücut kompozisyonu göstergelerini değerlendiren taşınabilir bir analiz cihazıdır.",
    image: {
      src: "/images/products/inbody120.png",
      width: 1280,
      height: 1600,
      alt: "InBody120 taşınabilir vücut kompozisyonu analiz cihazı",
    },
    details: {
      title: "Temel vücut kompozisyonu analizi için hızlı ve taşınabilir çözüm.",
      intro:
        "InBody120, yaklaşık 17 saniyelik ölçüm süresini kompakt bir gövde, Bluetooth bağlantısı ve isteğe bağlı stand, taşıma çantası ya da termal yazıcı seçenekleriyle birleştirir.",
      features: [
        {
          title: "Hızlı test akışı",
          text: "Boy bilgisi girildikten sonra ölçüm yaklaşık 17 saniyede tamamlanır ve temel sonuçlar cihaz ekranında görüntülenir.",
        },
        {
          title: "Temel kompozisyon göstergeleri",
          text: "Kas kütlesi, vücut yağ yüzdesi, beden kütle indeksi, bazal metabolizma hızı ve visseral yağ seviyesi gibi çıktılar sunar.",
        },
        {
          title: "Taşınabilir kullanım",
          text: "Kompakt gövde; isteğe bağlı taşıma çantası, ek batarya ve stand seçenekleriyle farklı ölçüm noktalarını destekler.",
        },
        {
          title: "Kablosuz veri yönetimi",
          text: "Bluetooth üzerinden LookinBody yazılımına bağlanarak ölçümlerin ve vücut kompozisyonu geçmişinin izlenmesini sağlar.",
        },
        {
          title: "Sonuç seçenekleri",
          text: "Termal sonuç çıktısı alınabilir; LookinBody yazılımıyla daha ayrıntılı InBody Sonuç Sayfası oluşturulabilir.",
        },
        {
          title: "Kuruma uyarlanabilir",
          text: "Sonuç sayfasında kurum adı, adresi ve iletişim bilgileri gösterilebilir; dil ve birim ayarları yapılandırılabilir.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA" },
        { label: "Empedans frekansları", value: "20 ve 100 kHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 10 ölçüm" },
        { label: "Elektrot yöntemi", value: "8 noktalı tetrapolar dokunsal elektrot" },
        { label: "Test süresi", value: "Yaklaşık 17 saniye" },
        { label: "Ağırlık aralığı", value: "5-250 kg" },
        { label: "Boy aralığı", value: "50-300 cm" },
        { label: "Yaş aralığı", value: "1-99 yaş" },
        { label: "Ekran", value: "48 × 24 FSTN LCD" },
        { label: "Boyutlar", value: "392 × 434 × 55,2 mm" },
        { label: "Cihaz ağırlığı", value: "4,3 kg" },
        { label: "Bağlantı", value: "RS-232C ve Bluetooth" },
      ],
      note:
        "İçerik ve teknik değerler sağlanan 2022 tarihli InBody120 kataloğundan aktarılmıştır; güncel satış ve uyumluluk durumu doğrulanmalıdır.",
    },
    listed: false,
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
      src: "/images/products/bwa20s.png",
      width: 1202,
      height: 1600,
      alt: "BWA2.0S vücut suyu analiz cihazı",
    },
    details: {
      title: "Farklı hasta koşullarına uyarlanabilen gelişmiş vücut suyu analizi.",
      intro:
        "BWA2.0S; 3 MHz teknolojisi, 16 noktalı klamp elektrotları ve tıbbi ya da araştırma modlarıyla yatar, oturur veya ayakta ölçüm gereksinimlerini destekler.",
      features: [
        {
          title: "Hassas 3 MHz teknolojisi",
          text: "Yüksek frekans desteği, hücre içi ve hücre dışı suyun daha ayrıntılı değerlendirilmesine yardımcı olur.",
        },
        {
          title: "Klamp elektrot sistemi",
          text: "Bilek ve ayak bileğine bağlanan ergonomik elektrotlar, farklı pozisyonlarda yüksek tekrarlanabilirliği destekler.",
        },
        {
          title: "Geniş hasta kapsamı",
          text: "Ampütasyon, felç, lenfödem ve damar erişim bölgesi gibi koşulların sisteme girilmesiyle ölçüm süreci uyarlanabilir.",
        },
        {
          title: "Araştırma parametreleri",
          text: "ECW oranı, yaşa göre dağılım grafikleri ve BIVA gibi göstergeler klinik ve araştırma çalışmalarını destekler.",
        },
        {
          title: "Vücut suyu dengesi",
          text: "Tüm vücut ve segmental ECW oranları üzerinden sıvı dağılımının ayrıntılı biçimde değerlendirilmesine yardımcı olur.",
        },
        {
          title: "Tıbbi ve araştırma modu",
          text: "Yaklaşık 30 saniyelik tıbbi mod ile daha kapsamlı araştırma modu arasında kullanım amacına göre seçim yapılabilir.",
        },
      ],
      specifications: [
        { label: "Ölçüm yöntemi", value: "DSM-BIA ve SMF-BIA" },
        { label: "Empedans frekansları", value: "5, 50, 250 ve 500 kHz; 3 MHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 30 ölçüm" },
        { label: "Faz açısı", value: "5, 50 ve 250 kHz; 5 segmentte 15 ölçüm" },
        { label: "Elektrot yöntemi", value: "16 noktalı klamp elektrotları" },
        { label: "Test süresi", value: "Tıbbi mod yaklaşık 30 saniye; araştırma modu yaklaşık 60 saniye" },
        { label: "Ağırlık aralığı", value: "2-250 kg" },
        { label: "Boy aralığı", value: "95-220 cm" },
        { label: "Yaş aralığı", value: "3 yaş ve üzeri" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Ekran", value: "1280 × 800, 10,1 inç renkli TFT LCD" },
        { label: "Sistem boyutları", value: "502 × 564 × 1260 mm" },
        { label: "Kablosuz bağlantı", value: "Bluetooth ve Wi-Fi" },
      ],
      note: "İçerik ve teknik değerler sağlanan BWA2.0S kataloğundan aktarılmıştır.",
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
    details: {
      title: "Hareket kısıtlılığı olan kullanıcılar için araştırma düzeyinde analiz.",
      intro:
        "InBodyS10; sırtüstü, oturarak veya ayakta ölçüm gerektiren durumlarda takılabilir elektrotlarla vücut suyu dağılımını ve hücresel durum göstergelerini değerlendirmek üzere tasarlanmıştır.",
      features: [
        {
          title: "Sırtüstü ölçüm",
          text: "Hareket edemeyen veya yatak istirahatindeki kullanıcılar, parmaklara ve ayak bileklerine bağlanan elektrotlarla ölçülebilir.",
        },
        {
          title: "Ampütasyon durumuna uyarlanabilir",
          text: "Takılabilir dokunmatik ya da isteğe bağlı yapışkan elektrot seçenekleri farklı fiziksel koşullara uygun bir test akışını destekler.",
        },
        {
          title: "Segmental vücut suyu",
          text: "Kollar, bacaklar ve gövdedeki hücre içi ve hücre dışı su dağılımını ayrı ayrı değerlendirmeye yardımcı olur.",
        },
        {
          title: "Faz açısı analizi",
          text: "50 kHz'de tüm vücut ve segmental faz açısı değerleri üzerinden hücresel bütünlüğün takibini destekler.",
        },
        {
          title: "Değişim geçmişi",
          text: "Vücut suyu kompozisyonundaki değişikliklerin zaman içinde izlenmesine ve program yanıtının değerlendirilmesine yardımcı olur.",
        },
        {
          title: "Taşınabilir klinik kullanım",
          text: "İsteğe bağlı tekerlekli taşıma arabası ve batarya, farklı oda ve ölçüm alanlarında kullanımı kolaylaştırır.",
        },
      ],
      specifications: [
        { label: "Empedans frekansları", value: "1, 5, 50, 250, 500 ve 1000 kHz" },
        { label: "Empedans ölçümleri", value: "5 segmentte toplam 30 ölçüm" },
        { label: "Test süresi", value: "Yaklaşık 1 dakika 50 saniye" },
        { label: "Ağırlık aralığı", value: "10-250 kg" },
        { label: "Yaş aralığı", value: "3-99 yaş" },
        { label: "Veri kapasitesi", value: "100.000 sonuç" },
        { label: "Boyutlar", value: "202 × 53 × 322 mm" },
        { label: "Cihaz ağırlığı", value: "2 kg" },
        { label: "Bağlantı", value: "Wi-Fi, Bluetooth ve HL7 uyumlu EMR entegrasyonu" },
        { label: "Elektrotlar", value: "Dokunmatik tip; isteğe bağlı yapışkan tip" },
      ],
      note: "İçerik ve teknik değerler güncel InBody Türkiye ürün sayfasından derlenmiştir.",
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
    details: {
      title: "Boy, ağırlık ve BMI ölçümünü tek sistemde birleştirin.",
      intro:
        "BSM 370, sağlık ve eğitim ortamlarında taşınabilir kullanım için tekerlekli gövdeyi hızlı boy ve ağırlık ölçümüyle bir araya getirir.",
      features: [
        {
          title: "Üç ölçüm modu",
          text: "Boy ve ağırlık birlikte ya da her biri ayrı olarak ölçülebilir; BMI sonucu otomatik olarak hesaplanabilir.",
        },
        {
          title: "Kolay taşınabilirlik",
          text: "Katlanabilir boy ölçüm kolu ve gövdeye eklenen tekerlekler, cihazın farklı alanlara taşınmasını kolaylaştırır.",
        },
        {
          title: "Hızlı sonuç",
          text: "Boy ve ağırlık ölçümü yaklaşık 7 saniyede, yalnızca ağırlık ölçümü yaklaşık 2 saniyede tamamlanır.",
        },
        {
          title: "Uzaktan kontrol seçeneği",
          text: "İsteğe bağlı uzaktan kumanda ünitesi, ölçüm ve sonuç kontrolünün kullanıcı yerinden ayrılmadan yönetilmesini sağlar.",
        },
        {
          title: "Termal çıktı",
          text: "İsteğe bağlı termal yazıcıyla boy, ağırlık ve BMI sonuçları basılabilir.",
        },
        {
          title: "Profesyonel bağlantı",
          text: "RS-232C bağlantısı, desteklenen sistemlerle veri aktarımına olanak tanır.",
        },
      ],
      specifications: [
        { label: "Ölçümler", value: "Boy, ağırlık ve BMI" },
        { label: "Boy aralığı", value: "90-200 cm" },
        { label: "Boy ölçüm hassasiyeti", value: "±1 mm" },
        { label: "Ağırlık aralığı", value: "10-200 kg" },
        { label: "Test süresi", value: "Boy + ağırlık yaklaşık 7 sn; ağırlık yaklaşık 2 sn" },
        { label: "Boyutlar", value: "Kapalı 380 × 510 × 1350 mm; açık 380 × 510 × 2126 mm" },
        { label: "Cihaz ağırlığı", value: "15,5 kg" },
        { label: "Bağlantı", value: "RS-232C" },
        { label: "Yazıcı", value: "İsteğe bağlı termal yazıcı" },
      ],
      note: "İçerik ve teknik değerler InBody Türkiye BSM 370 ürün sayfasından derlenmiştir.",
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
    details: {
      title: "Hızlı boy ölçümü ve kablosuz veri aktarımı.",
      intro:
        "BSM 170; sade kullanım arayüzü, arkadan aydınlatmalı ekranı ve Bluetooth bağlantısıyla boy ölçümünü profesyonel InBody iş akışına ekler.",
      features: [
        {
          title: "Basit kullanım",
          text: "Baş çubuğu, iki düğmeli kontrol alanı ve büyük ekran, boy ölçümünü hızlı ve anlaşılır hâle getirir.",
        },
        {
          title: "Bluetooth uyumluluğu",
          text: "Ölçülen boy değeri, uyumlu profesyonel InBody cihazlarına kablosuz olarak aktarılabilir.",
        },
        {
          title: "Arkadan aydınlatmalı ekran",
          text: "55 × 31 mm LCD ekran, farklı ortam ışıklarında ölçüm sonucunun okunmasını kolaylaştırır.",
        },
        {
          title: "Otomatik veri kilidi",
          text: "Ölçüm değeri, kullanıcı sonucunu kaydetmeden önce belirlenen süre boyunca ekranda tutulabilir.",
        },
        {
          title: "Enerji tasarrufu",
          text: "Cihaz son ölçümden 150 saniye sonra otomatik olarak kapanabilir.",
        },
        {
          title: "Hızlı montaj",
          text: "Modüler gövde yapısı, parçaların alt bölümden üste doğru birleştirilmesiyle kurulumu kolaylaştırır.",
        },
      ],
      specifications: [
        { label: "Ölçüm", value: "Boy" },
        { label: "Boy aralığı", value: "35-210 cm" },
        { label: "Hassasiyet", value: "±1 mm" },
        { label: "Minimum ölçüm birimi", value: "1 mm" },
        { label: "Ekran", value: "55 × 31 mm arkadan aydınlatmalı LCD" },
        { label: "Veri kilidi", value: "En fazla 10 saniye" },
        { label: "Otomatik kapanma", value: "Son ölçümden 150 saniye sonra" },
        { label: "Boyutlar", value: "390 × 500 × 2190 mm" },
        { label: "Cihaz ağırlığı", value: "8,5 kg" },
        { label: "Bağlantı", value: "Bluetooth" },
      ],
      note: "İçerik ve teknik değerler InBody Türkiye BSM 170 ürün sayfasından derlenmiştir.",
    },
  },
  {
    slug: "fra",
    name: "FRA",
    category: "ingrip",
    categoryLabel: "Wellness",
    eyebrow: "Düşme riski değerlendirmesi",
    summary:
      "FRA, vücut dengesi, alt ekstremite kas kütlesi ve bacak gücünü kapsamlı biçimde değerlendirmek için tasarlanmış bir sistemdir.",
    sourceUrl: "https://tr.inbody.com/product/FRA.php",
    details: {
      title: "Denge ve alt ekstremite fonksiyonunu birlikte değerlendirin.",
      intro:
        "FRA, denge testlerini alt ekstremite kas kütlesi ve bacak gücü verileriyle bir araya getirerek düşme riski değerlendirmesine yapılandırılmış bir yaklaşım sunar.",
      features: [
        {
          title: "Denge testleri",
          text: "Farklı test koşullarında salınım indekslerini ölçerek duruş dengesine ilişkin karşılaştırılabilir sonuçlar sunar.",
        },
        {
          title: "Alt ekstremite değerlendirmesi",
          text: "Uyumlu InBody modeliyle birlikte kullanıldığında bacak kas kütlesi verisini değerlendirme sürecine ekler.",
        },
        {
          title: "Bacak gücü entegrasyonu",
          text: "IB-LS bacak kas gücü sistemiyle birlikte kuvvet verilerinin değerlendirmeye dâhil edilmesini destekler.",
        },
        {
          title: "Yapılandırılmış sonuç sayfası",
          text: "Denge, kas kütlesi ve güç verilerini tek bir raporda bir araya getirerek takip sürecini kolaylaştırır.",
        },
      ],
      specifications: [
        { label: "Test süresi", value: "Yaklaşık 10-15 dakika" },
        { label: "Ölçüm aralığı", value: "0-150 kg" },
        { label: "Ekran", value: "19 inç renkli dokunmatik ekran" },
        { label: "Kiosk boyutları", value: "584 × 635 × 1626 mm" },
        { label: "Ayaklık boyutları", value: "838 × 914 × 864 mm" },
        { label: "Kiosk ağırlığı", value: "51 kg" },
        { label: "Ayaklık ağırlığı", value: "42,5 kg" },
        { label: "Bağlantı", value: "RS-232C, USB ve LAN" },
      ],
      note:
        "Teknik değerler eski InBody Türkiye FRA sayfasından derlenmiştir. Ürünün güncel satış ve destek durumu doğrulanmalıdır.",
    },
    listed: false,
  },
  {
    slug: "ingrip",
    name: "InGrip",
    category: "ingrip",
    categoryLabel: "InGrip",
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
    details: {
      title: "El kavrama gücünü doğru ve tekrarlanabilir biçimde ölçün.",
      intro:
        "InGrip, yük hücresi sensörü ve yönlendirici kulp tasarımıyla el kavrama gücü ölçümlerini standartlaştırmaya yardımcı olur; sonuçlar uyumlu InBody cihazlarına aktarılabilir.",
      features: [
        {
          title: "Yük hücresi sensörü",
          text: "Uygulanan kuvveti elektronik olarak ölçerek hassas ve tekrar edilebilir sonuçlar sunmayı hedefler.",
        },
        {
          title: "Kulp kılavuzu",
          text: "Elin doğru pozisyonda tutulmasına yardımcı olarak farklı ölçümler arasındaki konum değişkenliğini azaltır.",
        },
        {
          title: "Bluetooth 5.0",
          text: "Kavrama gücü sonucunu uyumlu InBody ürünlerine kablosuz olarak aktarmayı destekler.",
        },
        {
          title: "Taşınabilir tasarım",
          text: "Kompakt ve pille çalışan gövde, farklı değerlendirme noktalarında kolay kullanım sağlar.",
        },
        {
          title: "Okunabilir ekran",
          text: "3 inç LCD ekran ölçüm sırasında ve sonrasında değerin kolayca görülmesini sağlar.",
        },
        {
          title: "Profesyonel değerlendirmeye ek veri",
          text: "Kavrama gücü, uyumlu InBody sonuçlarıyla birlikte kas fonksiyonu değerlendirmesini destekleyen ek bir gösterge sunar.",
        },
      ],
      specifications: [
        { label: "Ölçüm aralığı", value: "1-100 kg" },
        { label: "Hata aralığı", value: "±0,5 kg" },
        { label: "Ölçüm birimi", value: "0,1 kg" },
        { label: "Ekran", value: "3 inç LCD" },
        { label: "Bağlantı", value: "Bluetooth 5.0" },
        { label: "Güç", value: "2 adet AA pil" },
        { label: "Boyutlar", value: "140 × 226 × 50 mm" },
        { label: "Cihaz ağırlığı", value: "650 g" },
      ],
      note: "İçerik ve teknik değerler güncel InBody Türkiye InGrip sayfasından derlenmiştir.",
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
    details: {
      title: "InBody ölçüm verilerini tarayıcı üzerinden yönetin.",
      intro:
        "LookinBody Web, uyumlu InBody cihazlarından gelen sonuçları merkezi bir çalışma alanında toplar; danışan takibi, ilerleme analizi ve dijital sonuç paylaşımını destekler.",
      features: [
        {
          title: "Tarayıcı tabanlı erişim",
          text: "Uyumlu bilgisayar ve tabletlerden ek bir masaüstü kurulumuna bağlı kalmadan ölçüm verilerine erişin.",
        },
        {
          title: "Bireysel danışan yönetimi",
          text: "Danışan profillerini ve ölçüm geçmişini tek yerde düzenleyerek takip sürecini kolaylaştırın.",
        },
        {
          title: "İlerleme analizi",
          text: "Kas, yağ ve diğer vücut kompozisyonu göstergelerindeki değişimleri zaman içinde görsel olarak inceleyin.",
        },
        {
          title: "Dijital sonuç paylaşımı",
          text: "Uyumlu iş akışlarında sonuçların mobil uygulama üzerinden kullanıcıya ulaştırılmasını destekleyin.",
        },
        {
          title: "Merkezi veri görünümü",
          text: "Birden fazla ölçüm kaydını tek arayüzde görüntüleyerek kurum içi danışmanlık sürecini düzenleyin.",
        },
        {
          title: "Mobil takip",
          text: "InBody mobil uygulamasıyla uyumlu özellikler üzerinden kullanıcıların kendi ilerlemelerini takip etmesine yardımcı olun.",
        },
      ],
      specifications: [
        { label: "Platform", value: "Web tarayıcısı" },
        { label: "Erişim", value: "Uyumlu bilgisayar ve tabletler" },
        { label: "Temel kullanım", value: "Danışan yönetimi, veri analizi ve ilerleme takibi" },
        { label: "Mobil deneyim", value: "InBody mobil uygulamasıyla uyumlu özellikler" },
        { label: "Veri kaynağı", value: "Desteklenen profesyonel InBody cihazları" },
      ],
      note:
        "Bölgesel hizmet kapsamı, cihaz uyumluluğu ve abonelik koşulları için InBody Türkiye ile güncel durum doğrulanmalıdır.",
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
      title: "Ölçüm verilerinizi tek bir çalışma alanında yönetin.",
      intro:
        "Üye kaydı ve seçimi, vücut kompozisyonu geçmişi, sağlık raporu ve sonuç sayfası özelleştirmelerini tek bir masaüstü yazılımında bir araya getirir.",
      features: [
        {
          title: "İlerleme takibi",
          text: "Üye verilerini düzenleyin ve ölçüm geçmişini görsel grafiklerle takip edin.",
        },
        {
          title: "Özelleştirilebilir çıktılar",
          text: "Sonuç sayfası çıktılarını kurumun ihtiyaçlarına göre düzenleyin.",
        },
        {
          title: "Ağ üzerinden paylaşım",
          text: "Aynı ağdaki bilgisayarlar arasında InBody verilerini paylaşın.",
        },
        {
          title: "Sistem entegrasyonu",
          text: "Elektronik tıbbi kayıt sistemleriyle veri alışverişini destekleyin.",
        },
        {
          title: "Bağlantı seçenekleri",
          text: "Desteklenen cihazlarla Wi-Fi veya Bluetooth bağlantısından yararlanın.",
        },
        {
          title: "Danışan iletişimi",
          text: "Sonuçları e-posta ile paylaşın, tansiyon verilerini yönetin ve güvenlik ayarlarını yapılandırın.",
        },
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

export const listedProducts = products.filter((product) => product.listed !== false);

export const productsByCategory = productCategories.map((category) => ({
  ...category,
  products: listedProducts.filter((product) => product.category === category.id),
}));
