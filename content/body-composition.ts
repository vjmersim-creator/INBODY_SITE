import type { IconName } from "@/components/icon";

export const bodyCompositionOverview = {
  title: "Vücut kompozisyonu, kilonun arkasındaki yapıyı gösterir.",
  paragraphs: [
    "Vücut kompozisyonu, vücudu temel bileşenlerine ayırma yöntemidir: yağ, protein, mineraller ve vücut suyu. Vücut kompozisyonu, kilonuzu daha doğru bir şekilde tanımlar ve geleneksel yöntemlere göre genel sağlığınız hakkında daha iyi bir fikir verir.",
    "Vücut kompozisyonu analizi; yağ kütlesi, kas kütlesi ve vücut yağ yüzdesindeki değişiklikleri doğru bir şekilde gösterebilir.",
  ],
};

export const bodyCompositionWhy = {
  title: "Vücut kompozisyonu neden ölçülmelidir?",
  paragraphs: [
    "Diyet ve fitness üzerine yapılan konuşmalar genellikle kazanmak ve kaybetmek istediğimiz kilo miktarına odaklanır. Ancak aynı cinsiyet ve kiloya sahip iki kişi, vücut kompozisyonları farklı olduğu için birbirlerinden tamamen farklı görünebilir. Vücut kompozisyonu, vücutta bulunan yağ, kemik, su ve kas miktarını tanımlar. Vücut kompozisyonunuzu ölçmek, vücudunuzun kendine özgü yapısını ortaya çıkarır ve genel sağlık ile zindeliğinizi iyileştirmek için üzerinde çalışmanız gereken alanları belirlemenize yardımcı olur.",
    "Vücut kompozisyonu analizi, vücudun neyle yapıldığını tanımlama yöntemidir. Yağ, protein, mineraller ve vücut suyunu ayırarak sağlığınızın bir özetini sunar. InBody, sağlıklı yaşam hedeflerinize içten dışa ulaşmanıza yardımcı olmak için vücut kompozisyonu analizinin önemini anlaşılır hale getirir.",
  ],
};

export const bodyCompositionStories = [
  {
    eyebrow: "BMI ve vücut kompozisyonu",
    title: "BMI neden yanıltıcı ve yanlış yönlendiren bir ölçüt olabilir?",
    image: "/images/learn/body-composition/scale.png",
    imageAlt: "Tartı üzerinde duran bir kişinin iki ayağı",
    paragraphs: [
      "Vücut Kitle İndeksi (BMI), bir kişinin sağlık durumunu taşıdığı ağırlığı boyuyla karşılaştırarak değerlendiren yaygın bir yöntemdir: BMI = kg/m².",
      "BMI klinik pratikte yaygın olarak kullanılsa da birçok sınırlamaya sahiptir. Ağırlıkta meydana gelen değişikliğin yağ mı, kas mı yoksa vücut suyu mu olduğunu göstermez. Sağlık risklerini tek bir sayıyla değerlendirmek, sağlıklı olmayı etkileyen önemli faktörleri göz ardı edebilir.",
      "Sağlıklı olmayı hedeflerken çoğu kişi yağ kaybetmeye ve kas kazanmaya odaklanır. Tartı veya BMI bu değişimin kaynağını söyleyemez; vücut kompozisyonu analizi ise bileşenleri ayrı ayrı gösterir.",
    ],
  },
  {
    eyebrow: "Kas ve yağ dengesi",
    title: "Kilonuzu kas ve yağ olarak anlamanız neden önemlidir?",
    image: "/images/learn/body-composition/tape-measure.png",
    imageAlt: "Tartı üzerinde vücut ölçümü için kullanılan mezura",
    paragraphs: [
      "Normal kilo aralıklarını fark etmiş olabilirsiniz, ancak yalnızca kilo vermeye odaklanmak kas kütlesi kaybına yol açabilir ve çabalarınızı sabote edebilir. Kas ve yağı ayıran vücut kompozisyonu analizi, kilo dalgalanmalarının kas kazanımı, yağ kaybı veya başka bir değişimden kaynaklanıp kaynaklanmadığını anlamanıza yardımcı olur.",
      "Amacınız ne olursa olsun, sağlık yolculuğunda akılda tutulması gereken önemli nokta şudur: zayıf olmak her zaman sağlıklı olmak anlamına gelmez.",
    ],
  },
];

export const skinnyFatContent = {
  title: "Zayıf olmak her zaman sağlıklı mı?",
  paragraphs: [
    "Mümkün olan en az yağ miktarına sahip olmanın sağlıklı olduğunu varsaymak yaygındır. Ancak ince olmak sağlık risklerini otomatik olarak azaltmaz. 'Zayıf yağlı' olarak tanımlanan kişiler, obezitesi olan biriyle benzer sağlık risklerine sahip olabilir.",
    "Bu kişiler ince ve sağlıklı görünebilir; çünkü cilt altındaki yağ miktarları kabul edilebilir seviyededir. Buna karşın fazla visseral yağ ve düşük kas kütlesi sağlık riskini artırabilir.",
    "Visseral yağ BMI ve standart tartılarla görülemediği için potansiyel riskler gözden kaçabilir. Kas dengesini anlamak, sağlıklı değişikliklere başlamak için güçlü bir temel oluşturur.",
    "Sağlıklı bir yağ ve kas dengesi uzun vadeli sağlık için önemlidir. Yeterli kas kütlesi; hareketliliği, duruşu, bağışıklık sistemini ve ileri yaşlarda fiziksel bağımsızlığı destekler.",
  ],
};

export const bodyCompositionBenefits: Array<{
  title: string;
  text: string;
  icon: IconName;
}> = [
  {
    title: "Başlangıç noktanızı belirleyin",
    text: "Kaybetmeniz, kazanmanız veya korumanız gereken bileşenleri görün ve hedeflerinizi vücudunuzun ihtiyaçlarına göre belirleyin.",
    icon: "precision",
  },
  {
    title: "Beslenme planınızı kişiselleştirin",
    text: "Kalori ihtiyacınızı ve vücut kompozisyonu verilerinizi kullanarak size uygun, sağlıklı bir beslenme yaklaşımı oluşturun.",
    icon: "specs",
  },
  {
    title: "Kilo kaybı yerine yağ kaybını izleyin",
    text: "Vücut yağ yüzdesini ölçerek yalnızca toplam ağırlığa değil, sağlıklı yağ kaybına odaklanın.",
    icon: "weight",
  },
  {
    title: "Gerçekçi hedefler belirleyin",
    text: "İlerlemenizi doğru şekilde takip edin, ulaşılabilir hedefler belirleyin ve ölçülebilir değişimle motivasyonunuzu koruyun.",
    icon: "results",
  },
  {
    title: "Egzersiz rutininizi optimize edin",
    text: "Programınızı benzersiz sağlık ve fitness hedeflerinize göre düzenlemek için kas, yağ ve segmental denge verilerini kullanın.",
    icon: "time",
  },
  {
    title: "Daha bilinçli kararlar alın",
    text: "Vücut kompozisyonunuzu iyileştirmek için hangi alışkanlıkların işe yaradığını somut verilerle değerlendirin.",
    icon: "measure",
  },
];

export const bodyCompositionOutputs = [
  {
    title: "Vücut Yağ Yüzdesi (PBF)",
    text: "Toplam vücut ağırlığınızın ne kadarının yağ olduğunu gösterir. PDF'deki genel referansa göre sağlıklı vücut yağ yüzdesi erkeklerde yüzde 10-20, kadınlarda yüzde 18-28 aralığında ele alınır; bireysel değerlendirme sağlık profesyoneli tarafından yapılmalıdır.",
  },
  {
    title: "İskelet Kas Kütlesi (SMM)",
    text: "Hareketlilik, duruş ve uzun vadeli sağlık için önemli olan iskelet kası miktarını gösterir. Segmental analiz, kas dağılımındaki dengesizlikleri ve geliştirilmesi gereken bölgeleri görünür hale getirir.",
  },
  {
    title: "Vücut Suyu",
    text: "Toplam Vücut Suyu (TBW), hücre dışı su (ECW) ve hücre içi su (ICW) bileşenlerinden oluşur. Bu değerlerin birlikte izlenmesi vücut suyu dengesindeki değişikliklerin değerlendirilmesine yardımcı olur.",
  },
];

export const bodyCompositionMethods = [
  {
    title: "Cilt Katmanı Kaliperleri",
    image: "/images/learn/body-composition/calipers.png",
    imageAlt: "Cilt kıvrımı ölçümünde kullanılan kaliper ve mezura",
    credit: "Görsel kaynağı: Flickr",
    paragraphs: [
      "Cilt katmanı testi, parmaklarla cilt altı yağ tabakasını sıkıştırıp kaliperle kalınlığını ölçen antropometrik bir yöntemdir. Taşınabilir, basit ve düşük maliyetlidir.",
      "Yöntem yalnızca cilt altı yağ tabakasına dayanarak toplam vücut yağ yüzdesini tahmin eder. Yağ dağılımı farklı kişilerde doğruluğu azalabilir; kalın cilt katmanlarında ölçüm zorlaşabilir ve tekrarlanabilirlik ölçümü yapan kişinin becerisinden etkilenir.",
    ],
  },
  {
    title: "Hidrostatik Ağırlık Ölçümü",
    image: "/images/learn/body-composition/hydrostatic.png",
    imageAlt: "Su altı ağırlık ölçümü yapılan havuz sistemi",
    credit: "Görsel kaynağı: Texas A&M",
    paragraphs: [
      "Su altı ağırlık ölçümü, vücut yağını vücut yoğunluğunu kullanarak hesaplar ve Arşimet prensibine dayanır. Bir nesnenin havadaki kütlesi ile sudaki kütlesi arasındaki fark hacmini verir.",
      "Vücut yoğunluğu = Hava Kütlesi / (Hava Kütlesi - Su Kütlesi). Doğrudan kadavra analiziyle karşılaştırılmış yöntemlerden biri olduğu için uzun süre vücut kompozisyonu ölçümünde referans yöntemlerden biri kabul edilmiştir.",
    ],
  },
  {
    title: "Hava Deplasman Pletismografisi",
    image: "/images/learn/body-composition/air-displacement.png",
    imageAlt: "Hava deplasman pletismografisi kabini",
    credit: "Görsel kaynağı: U.S. Air Force / Joel Martinez",
    paragraphs: [
      "Bu yöntem, kapalı bir odadaki hava basıncı değişikliklerinden insan vücudunun hacmini hesaplar. Ağırlık ve hacim kullanılarak vücut yoğunluğu; ardından vücut yağ yüzdesi ve yağsız oran belirlenir.",
      "Yoğunluk = Kütle / Hacim; Vücut Yağ Yüzdesi = (495 / Yoğunluk) - 450; Yağsız Oran = 100 - Yağ Yüzdesi. Ölçüm genellikle 3-5 dakika sürer ve kişi kabin içinde normal biçimde nefes almaya devam edebilir.",
    ],
  },
  {
    title: "Çift Enerjili X-Ray Absorbsiyometrisi (DEXA)",
    image: "/images/learn/body-composition/dexa.png",
    imageAlt: "DEXA tarama cihazında yatan kişi",
    credit: "Görsel kaynağı: Wikipedia",
    paragraphs: [
      "DEXA; vücut ağırlığını kemik mineral içeriği, yağsız kütle ve yağ olarak değerlendiren bir görüntüleme yöntemidir. İki farklı enerji seviyesindeki X-ışınlarının dokulardan geçerken azalmasına dayanır ve tarama yaklaşık 5-30 dakika sürebilir.",
      "Kemik yoğunluğu, vücut yağı ve kas kütlesini farklı bölgelere göre değerlendirebilmesi önemli bir avantajdır. Tarama için genellikle bu sisteme sahip bir hastane veya klinikte randevu gerekir.",
    ],
  },
  {
    title: "Manyetik Rezonans Görüntüleme (MRI)",
    image: "/images/learn/body-composition/mri.png",
    imageAlt: "Manyetik rezonans görüntüleme cihazı",
    credit: "Görsel kaynağı: Northwest Radiology",
    paragraphs: [
      "MRI, vücudu kesitler halinde tarayarak iskelet kas kütlesi ve yağ dokusunun değerlendirilmesini sağlar; yağ dokusunu visseral ve cilt altı depolarına ayırabilir.",
      "Yüksek güçlü manyetik alan kullanıldığı için metal implantlar ve diğer metalik materyaller açısından uygunluk önceden değerlendirilmelidir. İyonlaştırıcı radyasyon kullanmaz. Tüm vücut taraması yaklaşık 25-30 dakika, görüntülerin ayrıntılı analizi ise daha uzun sürebilir.",
    ],
  },
  {
    title: "Bioelektrik İmpedans Analizi (BIA)",
    image: "/images/learn/body-composition/bia.png",
    imageAlt: "InBody cihazıyla Bioelektrik İmpedans Analizi",
    credit: "Görsel kaynağı: InBody",
    paragraphs: [
      "BIA, vücuda güvenli düzeyde alternatif elektrik akımı uygulayarak empedansı ölçen ve vücut suyu hacmini değerlendiren girişimsel olmayan bir yöntemdir. Elektrotlar ayaklara, ellere veya her ikisine temas eder.",
      "Kas su içerdiği için elektrik akımını daha kolay iletir; yağ dokusu ise akımın geçişini daha fazla yavaşlatır. BIA cihazları sinyalin farklı dokularda nasıl engellendiğini ölçer ve bu veriler üzerinden vücut suyu ile vücut kompozisyonu değerlendirmeleri üretir.",
    ],
  },
];
