export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  body: string[];
  sections?: Array<{
    title: string;
    paragraphs?: string[];
    items?: string[];
  }>;
  faq?: Array<{ question: string; answer: string }>;
  timeline?: Array<{ label: string; text: string }>;
  steps?: Array<{ label: string; text: string }>;
  locations?: Array<{
    name: string;
    region: string;
    address: string;
    phone?: string;
    customerCenter?: string;
    website: string;
    websiteLabel: string;
  }>;
  cta?: { href: string; label: string };
  heroImage?: { src: string; alt: string; position?: string };
  feature?: {
    image: string;
    alt: string;
    eyebrow: string;
    title: string;
    text: string;
  };
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
      "1990'ların başında kurucumuz ve CEO'muz Dr. Kichul Cha, mevcut BIA cihazlarının sınırlı ve hatalı olduğunu fark etti. Bu cihazlar çoğu zaman yanlış sonuçlar veriyor ve vücut kompozisyonu analizine ihtiyaç duyulan tıbbi uygulamalarda yeterli faydayı sağlayamıyordu.",
      "Makine mühendisliği geçmişinden yararlanan Dr. Cha, daha iyi bir çözüm tasarlamak için çalışmaya başladı.",
      "1996 yılında InBody'yi kurdu. İki yıl sonra ilk InBody cihazı geliştirildi. Bugün InBody, Güney Kore'deki küçük bir biyoteknoloji girişiminden 80'den fazla ülkede şubeleri ve distribütörleri bulunan uluslararası bir şirkete dönüştü.",
      "Müşterilerimiz InBody'nin kullanım kolaylığı, doğruluk ve tekrarlanabilirliği bir arada sunduğunu biliyor. Yaklaşımın merkezinde, kullanıcıların doğru, kullanışlı ve hassas vücut kompozisyonu verilerine ulaşması yer alıyor.",
    ],
    heroImage: {
      src: "/images/official/about-hero.png",
      alt: "InBody teknolojisinin profesyonel kullanım alanı",
      position: "center 38%",
    },
    feature: {
      image: "/images/official/dr-kichul-cha.png",
      alt: "InBody kurucusu ve CEO'su Dr. Kichul Cha",
      eyebrow: "Kurucumuz",
      title: "Dr. Kichul Cha",
      text: "Makine mühendisliği yaklaşımını vücut kompozisyonu analizine taşıyan Dr. Kichul Cha, daha doğru ve tekrarlanabilir bir BIA sistemi geliştirme hedefiyle InBody'yi 1996 yılında kurdu.",
    },
    sections: [
      {
        title: "Misyonumuz",
        paragraphs: [
          "InBody, insanları daha sağlıklı bir yaşam sürmeye teşvik etmek ve bu yolda öncülük etmek için çalışır.",
        ],
      },
      {
        title: "Vizyonumuz",
        paragraphs: [
          "InBody'nin vizyonu, sağlığın yalnızca kilonuzu bilmekle değil, vücut kompozisyonunuza ilişkin doğru bir içgörüye sahip olmakla ölçüldüğü bir gelecek oluşturmaktır.",
        ],
      },
      {
        title: "Değerlerimiz",
        items: [
          "Eğitim: Yalnızca kilo kaybına odaklanmanın yeterli olmadığını anlatarak konuşmayı BMI ve toplam ağırlıktan yağ kaybı ile kas kazanımının önemine taşımak.",
          "Motivasyon: Kurumların danışanlarını yaşam tarzlarını dönüştürmeye ve daha sağlıklı seçimler yapmaya nasıl teşvik edebileceğini desteklemek.",
          "Uygulama: InBody Sonuç Sayfası ile hangi beslenme ve egzersiz yaklaşımlarının işe yaradığını görünür kılmak; tahmin yerine ölçülebilir veriler sunmak.",
          "İnovasyon: Her yeni üründe daha iyi sonuçlar üretmek için kendimizi geliştirmek ve bugünün yanı sıra gelecek nesiller için de daha iyi bir dünya hedeflemek.",
        ],
      },
      {
        title: "Küresel deneyim, yerel destek",
        paragraphs: [
          "InBody Türkiye; ürün seçimi, uygulama, eğitim ve satış sonrası süreçlerde kurumların ihtiyaçlarına uygun bir temas noktası sunar.",
        ],
      },
      {
        title: "CEO Mesajı",
        paragraphs: [
          "InBody, 1996 yılında kurulduğundan beri 21. yüzyılın örnek şirketlerinden biri olmak için çalışmaktadır.",
          "Dünya lideri teknolojimizle topluma katkıda bulunma kurumsal misyonumuzu yerine getirerek, yüksek katma değerli ürün ve hizmetlerle toplumun gelişimini desteklemeye devam edeceğiz.",
          "Tüm zorluklarla yüzleşerek ve güçlü bir sorumluluk duygusuyla beklentilerinizi karşılamak için çalışıyoruz. InBody her geçen gün büyüyor; çünkü yalnızca büyük başarıları değil, her gün elde edilen küçük başarıların birikimini de önemsiyoruz.",
          "İnsanları daha sağlıklı bir yaşam sürmeye teşvik etme ve bu yolda öncülük etme hedefimizi koruyacağız. Geleceğe doğru 'Hayatı Daha İyi Yapmak' yaklaşımımızı sürdürecek; tutku, emek ve yenilik ilkelerimize bağlı kalacağız.",
        ],
      },
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
    sections: [
      {
        title: "Dünya çapında InBody",
        paragraphs: [
          "Küresel ağ; farklı pazarlardaki araştırma, klinik, fitness ve beslenme profesyonellerinin ihtiyaçlarını yerel ekipler ve iş ortakları aracılığıyla destekler.",
        ],
        items: [
          "Genel merkez: Güney Kore",
          "Bölgesel yapılanmalar: Amerika Birleşik Devletleri, Avrupa, Çin, Japonya, Hindistan ve Malezya",
          "Erişim: 80’den fazla ülkede ürün ve çözüm ağı",
        ],
      },
    ],
    locations: [
      {
        name: "InBody HQ",
        region: "Kore",
        address: "625, InBody Binası, Eonju-ro, Gangnam-gu, Seul 06106, Kore",
        phone: "+82-2-501-3939",
        customerCenter: "1899-5841",
        website: "https://inbody.co.kr",
        websiteLabel: "inbody.co.kr",
      },
      {
        name: "InBody China",
        region: "Çin",
        address: "306b-308, MT2 Tower, MIXC, 3999 Hongxin Road, Minhang District, Shanghai, China",
        phone: "+86-21-6443-9705",
        website: "https://www.inbodychina.com",
        websiteLabel: "inbodychina.com",
      },
      {
        name: "InBody Europe",
        region: "Avrupa",
        address: "Gyroscoopweg 122, 1042 AZ Amsterdam, Netherlands",
        phone: "+31 20-238-6080",
        website: "https://nl.inbody.com",
        websiteLabel: "nl.inbody.com",
      },
      {
        name: "InBody India",
        region: "Hindistan",
        address: "SF-B-03, Roz-A-Rio Bungalow, Phoenix Market City, 2nd floor, Art Guild House, Lal Bahadur Shastri Marg, Kurla West, Mumbai, Maharashtra 400070, India",
        phone: "+91 89767-86290",
        website: "https://www.inbody.in",
        websiteLabel: "inbody.in",
      },
      {
        name: "InBody Japan",
        region: "Japonya",
        address: "1 Chome 28-6, Kameido, Koto City, Tokyo 136-0071, Japan",
        phone: "+81-3-5875-5780",
        website: "https://inbody.co.jp",
        websiteLabel: "inbody.co.jp",
      },
      {
        name: "InBody Asia",
        region: "Malezya",
        address: "Unit 3A-11 Oval Damansara, No.685 Jalan Damansara, Kuala Lumpur 60000, Malaysia",
        phone: "+60 3-7732-0790",
        website: "https://inbodyasia.com",
        websiteLabel: "inbodyasia.com",
      },
      {
        name: "InBody UK",
        region: "Birleşik Krallık",
        address: "Orega, Belmont Road, Uxbridge, UB8 1HE, United Kingdom",
        phone: "+44 15305 69620",
        website: "https://uk.inbody.com",
        websiteLabel: "uk.inbody.com",
      },
      {
        name: "InBody Vietnam",
        region: "Vietnam",
        address: "COBI TOWER 2, 2-4 Đường Số 8, Tân Phú, Tân Mỹ, Hồ Chí Minh 70000, Vietnam",
        phone: "+84 969 836 595",
        website: "https://inbodyvietnam.com",
        websiteLabel: "inbodyvietnam.com",
      },
      {
        name: "InBody Oceania",
        region: "Avustralya",
        address: "2/82-86 Minnie St, Southport QLD 4215, Australia",
        phone: "+61 7 5681 1900",
        website: "https://au.inbody.com",
        websiteLabel: "au.inbody.com",
      },
      {
        name: "InBody USA",
        region: "ABD — California",
        address: "13850 Cerritos Corporate Dr C, Cerritos, CA 90703, United States",
        phone: "+1 323-932-6503",
        website: "https://inbodyusa.com",
        websiteLabel: "inbodyusa.com",
      },
      {
        name: "InBody USA",
        region: "ABD — New York",
        address: "2550 Eisenhower Ave, Suite C209, Audubon, PA 19403, United States",
        phone: "+1-562-741-3986",
        website: "https://inbodyusa.com",
        websiteLabel: "inbodyusa.com",
      },
      {
        name: "InBody Mexico",
        region: "Meksika",
        address: "Av. Insurgentes Sur 1457, Piso 15, Insurgentes Mixcoac, Benito Juárez, 03920 Ciudad de México, Mexico",
        phone: "+52 55-5025-0147",
        website: "https://www.inbodymexico.com",
        websiteLabel: "inbodymexico.com",
      },
      {
        name: "InBody Türkiye",
        region: "Türkiye",
        address: "Fulya, Büyükdere Cd. No:76 D:177, 34394 Şişli / İstanbul, Türkiye",
        phone: "+90 216 807 05 15",
        website: "https://tr.inbody.com",
        websiteLabel: "tr.inbody.com",
      },
    ],
    sourceUrl: "https://tr.inbody.com/kuresel-ag/",
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
      "Tartı yalnızca toplam ağırlığı gösterir. Vücut kompozisyonu analizi ise aynı kilodaki iki kişinin kas, yağ ve su dağılımının neden farklı olabileceğini görünür hâle getirir.",
    ],
    sections: [
      {
        title: "Neden ölçülür?",
        paragraphs: [
          "Vücut ağırlığı veya Beden Kütle İndeksi tek başına kas ile yağ arasındaki farkı açıklamaz. Bileşenleri ayrı izlemek; beslenme, egzersiz ve sağlık programlarının etkisini daha anlamlı biçimde değerlendirmeye yardımcı olur.",
        ],
      },
      {
        title: "Temel göstergeler",
        items: [
          "Vücut yağ yüzdesi: Toplam ağırlığın ne kadarının yağ dokusundan oluştuğunu gösterir.",
          "İskelet kas kütlesi: Hareketi sağlayan kasların izlenmesine yardımcı olur.",
          "Vücut suyu: Hücre içi ve hücre dışı su dağılımı hakkında bilgi verir.",
          "Yağsız kütle: Su, protein ve mineral bileşenlerinin toplamını ifade eder.",
        ],
      },
      {
        title: "Vücut kompozisyonu nasıl ölçülür?",
        paragraphs: [
          "Cilt kıvrımı ölçümü, su altı tartımı, hava deplasmanı, DEXA, görüntüleme yöntemleri ve Bioelektrik İmpedans Analizi farklı ortamlarda kullanılan yöntemlerdir. InBody cihazları, hızlı ve girişimsel olmayan BIA yaklaşımını kullanır.",
        ],
      },
      {
        title: "Tek ölçümden daha fazlası",
        paragraphs: [
          "En yararlı değerlendirme, benzer koşullarda yapılan düzenli ölçümlerin birlikte incelenmesidir. Böylece değişimin kas, yağ veya vücut suyu kaynaklı olup olmadığı daha iyi anlaşılır.",
        ],
      },
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
      "InBody cihazları, vücuttan güvenli düzeyde alternatif akım geçirerek oluşan empedansı ölçen Bioelektrik İmpedans Analizi yöntemini kullanır.",
      "Empedans; dokuların akıma gösterdiği direnç ile hücre zarlarının oluşturduğu reaktans bileşenlerinden oluşur. Bu veriler vücut suyu ve kompozisyonunun değerlendirilmesinde kullanılır.",
    ],
    sections: [
      {
        title: "İnsan vücudu ve empedans",
        paragraphs: [
          "Bioelektrik İmpedans Analizi, vücuda alternatif akımlar uygulayarak empedansı ölçer. Bu ölçüm, yağsız vücut kütlesi ve yağ kütlesi gibi bileşenlerin değerlendirilmesini sağlar.",
        ],
      },
      {
        title: "Direnç kavramı",
        paragraphs: [
          "Direnci anlamak için trafikteki arabaları düşünün: araba elektrik akımını, yol ise vücut suyunu temsil eder. Yolda başka araç yoksa hareket kolaydır; benzer şekilde yalnızca su bulunan bir ortam elektrik akımına çok az direnç gösterir.",
          "İnsan vücudu yalnızca sudan oluşmaz. Yağ, kas, kemik ve mineraller akımın geçişini farklı düzeylerde etkiler. Bu bileşenler, vücuttan geçen elektrik akımına karşı ölçülebilir bir direnç oluşturur.",
          "Kas dokusu yağ dokusuna göre daha fazla su içerir. Bu nedenle kas kütlesi ve vücut suyu arttıkça elektrik akımına karşı ölçülen direnç genellikle azalır.",
        ],
      },
      {
        title: "Sekiz noktalı dokunsal elektrot sistemi",
        paragraphs: [
          "El ve ayaklardaki sekiz temas noktası, ölçümün her seferinde aynı anatomik sınırlar üzerinden yapılmasını destekler ve kullanıcı konumlandırmasını kolaylaştırır.",
        ],
      },
      {
        title: "Doğrudan Segmental Çok Frekanslı BIA",
        paragraphs: [
          "Sağ kol, sol kol, gövde, sağ bacak ve sol bacak ayrı ayrı ölçülür. Düşük frekanslar ağırlıklı olarak hücre dışı suyu, yüksek frekanslar ise hücre dışı ve hücre içi suyu birlikte değerlendirmeye yardımcı olur.",
        ],
      },
      {
        title: "Ampirik tahmin kullanmayan yaklaşım",
        paragraphs: [
          "InBody ölçüm yaklaşımı, vücut kompozisyonu sonuçlarını yaş veya cinsiyete dayalı istatistiksel tahminlerle üretmek yerine ölçülen empedans verisini temel alır.",
        ],
      },
      {
        title: "Teknolojinin gelişimi",
        paragraphs: [
          "BIA araştırmalarının 1960’ların sonunda başlamasından sonra tek frekanslı ölçüm sistemleri geliştirildi. InBody, 1996’da doğrudan segmental ölçüm ve sekiz noktalı elektrot yaklaşımını bir araya getirerek teknolojinin profesyonel kullanım alanını genişletti.",
        ],
      },
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
    sections: [
      {
        title: "Ölçüm öncesi hazırlık",
        paragraphs: [
          "BIA sonuçları; vücut pozisyonu, sıvı dağılımı, yiyecek ve içecek tüketimi, ortam ve cilt sıcaklığı ile yakın zamandaki fiziksel aktiviteden etkilenebilir. Düzenli takipte bu koşulları mümkün olduğunca standart tutun.",
        ],
        items: [
          "Ölçümü çıplak ayakla ve mümkün olduğunca hafif kıyafetle yapın.",
          "Egzersizden, duş veya banyodan önce ölçüm yapın.",
          "Ölçüm öncesinde yemek ve içecek tüketmeyin; kurumunuzun bekleme süresi talimatını izleyin.",
          "Gerekliyse ölçümden önce tuvalete gidin.",
          "Ölçümü normal oda sıcaklığında gerçekleştirin.",
          "Tekrarlı ölçümlerde aynı boy bilgisini ve benzer gün/saat koşullarını kullanın.",
          "Kolları düz ve gövdeden ayrı, bacakları birbirine temas etmeyecek biçimde konumlandırın.",
          "Uyandıktan hemen sonra ölçüm yapmak yerine vücut suyunun yeniden dengelenmesi için kurum prosedürünü izleyin.",
        ],
      },
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
      "Bölümler ve sunulan parametreler cihaz modeline göre değişebilir. Sonuçlar tek bir değerden çok, kişinin ölçüm geçmişi ve profesyonel değerlendirmeyle birlikte ele alınmalıdır.",
    ],
    sections: [
      {
        title: "Vücut Kompozisyonu Analizi",
        paragraphs: [
          "Toplam vücut suyu, protein, mineral ve vücut yağ kütlesi; toplam ağırlığın hangi bileşenlerden oluştuğunu gösterir.",
        ],
      },
      {
        title: "Kas-Yağ Analizi",
        paragraphs: [
          "Ağırlık, iskelet kas kütlesi ve vücut yağ kütlesini yan yana göstererek kişinin genel kompozisyon profilini hızlıca değerlendirmeye yardımcı olur.",
        ],
      },
      {
        title: "Obezite Analizi",
        paragraphs: [
          "Beden Kütle İndeksi ile vücut yağ yüzdesini birlikte gösterir. Böylece yalnızca boy ve ağırlığa dayalı değerlendirme, doğrudan yağ oranı bilgisiyle tamamlanır.",
        ],
      },
      {
        title: "Segmental Analiz",
        paragraphs: [
          "Kolları, bacakları ve gövdeyi ayrı değerlendirir. Segmental Yağsız Kütle Analizi doğrudan yalnızca kası değil; ilgili bölgedeki kas, su ve diğer yağsız bileşenlerin toplamını gösterir. Modele bağlı olarak segmental yağ kütlesi ve vücut suyu dengesi de görülebilir.",
        ],
      },
      {
        title: "Vücut Suyu ve Faz Açısı",
        paragraphs: [
          "Hücre içi/hücre dışı su ve ECW/TBW oranı sıvı dağılımının; faz açısı ise hücresel bütünlüğün değerlendirilmesine yardımcı olan göstergelerdir. Bu alanlar her modelde bulunmayabilir.",
        ],
      },
      {
        title: "Değişim Geçmişi",
        paragraphs: [
          "Düzenli ölçümler, ağırlıktaki değişimin kas, yağ veya vücut suyundan kaynaklanıp kaynaklanmadığını izlemeyi sağlar. Karşılaştırma için testlerin benzer hazırlık koşullarında yapılması önerilir.",
        ],
      },
    ],
    sourceUrl: "https://tr.inbody.com/ogren-sonuclar/",
  },
  {
    slug: "sikca-sorulan-sorular",
    title: "Sıkça Sorulan Sorular",
    eyebrow: "Öğrenin",
    description: "InBody cihazları ve test süreci hakkında sık sorulan sorular.",
    body: [
      "Aşağıdaki yanıtlar, InBody Türkiye’nin güncel öğrenme ve ürün sayfalarındaki temel bilgilerden derlenmiştir. Cihaza ve kullanım alanına özgü ayrıntılar için ürün kılavuzu ve InBody Türkiye ekibi esas alınmalıdır.",
    ],
    faq: [
      {
        question: "BIA nedir?",
        answer:
          "Bioelektrik İmpedans Analizi, vücuttan düşük düzeyde alternatif akım geçirerek dokuların gösterdiği empedansı ölçen, hızlı ve girişimsel olmayan bir vücut kompozisyonu değerlendirme yöntemidir.",
      },
      {
        question: "Vücut ağırlığı tek başına neden yeterli değildir?",
        answer:
          "Aynı ağırlıktaki iki kişinin kas, yağ ve vücut suyu dağılımı farklı olabilir. Vücut kompozisyonu analizi, toplam kilonun hangi bileşenlerden oluştuğunu göstererek daha anlamlı bir takip sunar.",
      },
      {
        question: "InBody ölçümü ne kadar sürer?",
        answer:
          "Süre modele göre değişir. Ayakta ölçüm yapan birçok profesyonel modelde test yaklaşık 30 saniyede tamamlanırken bazı vücut suyu analizleri daha uzun sürebilir. Ürün sayfasındaki teknik süreyi kontrol edin.",
      },
      {
        question: "Teste nasıl hazırlanmalıyım?",
        answer:
          "Ölçüm öncesinde cihazın ve kurumun hazırlık talimatlarını izleyin; ayakları elektrotlara doğru yerleştirin, el elektrotlarını belirtildiği gibi kavrayın ve test boyunca hareketsiz kalın. Tekrarlı ölçümlerde benzer koşulları korumak karşılaştırmayı kolaylaştırır.",
      },
      {
        question: "Sonuç Sayfası nasıl değerlendirilir?",
        answer:
          "Ağırlık, kas, yağ ve vücut suyu göstergeleri birlikte incelenmelidir. Tek bir sonuç tanı amacıyla kullanılmamalı; cihaz modeline ve kişinin durumuna göre yetkin bir profesyonel tarafından yorumlanmalıdır.",
      },
      {
        question: "Cihaz nasıl temizlenmelidir?",
        answer:
          "Her testten sonra el ve ayak elektrotları ile sık temas edilen yüzeyler uygun ürünle silinmelidir. Sıvıyı doğrudan cihaza püskürtmeyin; güncel cihaz kılavuzu ve kurumunuzun enfeksiyon kontrol prosedürlerini izleyin.",
      },
    ],
  },
  {
    slug: "guvenlik-ve-temizlik-ipuclari",
    title: "Güvenlik ve Temizlik İpuçları",
    eyebrow: "Öğrenin",
    description: "InBody test deneyimi için güvenlik ve temizlik yaklaşımı.",
    body: [
      "InBody cihazlarında hijyen, her testten sonra düzenli yüzey temizliği ve doğru ürün kullanımıyla korunur. Aşağıdaki özet, InBody Türkiye’nin yayımladığı cihaz bakım önerilerini temel alır.",
      "Tıbbi veya yoğun kullanımlı ortamlarda kurumun enfeksiyon kontrol prosedürü ile ilgili cihazın güncel kullanım kılavuzu her zaman önceliklidir.",
    ],
    sections: [
      {
        title: "Her ölçümden sonra",
        items: [
          "Tek kullanımlık eldiven kullanın.",
          "El elektrotlarını, ayak plakasını, ekranı ve sık temas edilen diğer yüzeyleri silin.",
          "Yüzeyin bir sonraki kullanıcıdan önce kurumasını bekleyin.",
        ],
      },
      {
        title: "Uygun temizlik ürünü",
        paragraphs: [
          "InBody Türkiye’nin bakım sayfası, yüzde 70 veya üzeri izopropil alkol içeren mendil kullanımını önerir. Ürünün cihaz modeliniz için uygunluğunu güncel kılavuzdan doğrulayın.",
        ],
      },
      {
        title: "Kaçınılması gerekenler",
        items: [
          "Temizlik sıvısını doğrudan cihazın üzerine püskürtmeyin veya dökmeyin.",
          "Cihazı ya da herhangi bir parçasını sıvıya batırmayın.",
          "Renk değişimi veya korozyona yol açabilecek kuaterner amonyum bileşikleri içeren ürünleri kullanmayın.",
        ],
      },
      {
        title: "Temassız iş akışı seçenekleri",
        paragraphs: [
          "Uyumlu modellerde sesli yönlendirme ve LookinBody Web üzerinden dijital sonuç paylaşımı, ortak yüzey temasını azaltan bir test akışını destekleyebilir.",
        ],
      },
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
