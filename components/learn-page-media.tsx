import Image from "next/image";

export function LearnPageMedia({ slug }: { slug: string }) {
  if (slug === "inbody-testi") {
    return (
      <div className="shell learn-test-media">
        <div className="learn-media-heading">
          <p className="eyebrow">Uygulamalı anlatım</p>
          <h2>InBody testi nasıl yapılır?</h2>
          <p>
            Elektrot temasından doğru duruşa kadar test akışını videodan adım adım
            izleyin.
          </p>
        </div>
        <div className="learn-test-video">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/learn/inbody-test/handle.png"
          >
            <source src="/videos/inbody-test-procedure.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
        </div>
      </div>
    );
  }

  if (slug === "sonuc-sayfasi-yorumlama") {
    return (
      <div className="shell learn-results-media">
        <div className="learn-results-media__heading">
          <div>
            <p className="eyebrow">Sonuçları birlikte okuyun</p>
            <h2>Her bölüm, vücudun farklı bir yönünü açıklar.</h2>
          </div>
          <p>
            Kas, yağ ve vücut suyu değerlerini tek başına değil; birbirleriyle ve
            değişim geçmişiyle birlikte değerlendirin.
          </p>
        </div>
        <div className="learn-results-media__workspace">
          <figure className="learn-results-media__sheet">
            <div className="learn-results-media__sheet-frame">
              <Image
                src="/images/home-stories/result-sheet.png"
                alt="Türkçe InBody970S örnek sonuç sayfası"
                width={1310}
                height={1800}
                sizes="(max-width: 980px) calc(100vw - 88px), 540px"
              />
            </div>
            <figcaption>
              <span>Örnek rapor</span>
              InBody970S sonuç sayfası; bileşenleri, dengeyi ve değişim geçmişini
              aynı görünümde bir araya getirir.
            </figcaption>
          </figure>
          <div className="learn-results-media__reading">
            <p className="learn-results-media__reading-label">Okuma sırası</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Önce bileşenleri görün.</strong>
                  <p>Toplam ağırlığın kas, yağ, protein, mineral ve sudaki karşılığını okuyun.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Sonra dağılımı karşılaştırın.</strong>
                  <p>Kollar, bacaklar ve gövdedeki dengeyi tek bir sonuçtan bağımsız değerlendirin.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>En son değişime bakın.</strong>
                  <p>Benzer koşullarda yapılan ölçümler, eğilimin yönünü daha anlamlı gösterir.</p>
                </div>
              </li>
            </ol>
            <p className="learn-results-media__caveat">
              Parametreler cihaz modeline göre değişebilir. Sonuçları profesyonel
              değerlendirmeyle birlikte ele alın.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
