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
        <div className="learn-media-heading">
          <p className="eyebrow">Sonuçları birlikte okuyun</p>
          <h2>Her bölüm, vücudun farklı bir yönünü açıklar.</h2>
          <p>
            Kas, yağ ve vücut suyu değerlerini tek başına değil; birbirleriyle ve
            değişim geçmişiyle birlikte değerlendirin.
          </p>
        </div>
        <div className="learn-results-media__grid">
          <figure className="learn-results-media__overview">
            <Image
              src="/images/learn/results/how-inbody-can-help.png"
              alt="InBody cihazları ve sonuç sayfaları"
              fill
              sizes="(max-width: 820px) 100vw, 56vw"
            />
          </figure>
          <figure className="learn-results-media__guide">
            <Image
              src="/images/learn/results/bwa-guide.png"
              alt="BWA sonuç sayfası yorumlama rehberi"
              fill
              sizes="(max-width: 820px) 82vw, 30vw"
            />
          </figure>
        </div>
      </div>
    );
  }

  return null;
}
