# InBody Türkiye — Proje Planı

Son güncelleme: 13 Temmuz 2026

## Amaç

InBody Türkiye için mevcut sitenin kaynak kodunu kullanmadan, yerel olarak çalışan, modern ve erişilebilir bir kurumsal web sitesi oluşturmak.

## Kaynak kullanımı

- Türkçe içerik, ürün adları, teknik özellikler, iletişim bilgileri ve sayfa yapısı: `https://tr.inbody.com/`
- Yalnızca görsel tasarım ve kullanıcı deneyimi yaklaşımı: `https://inbodyusa.com/`
- ABD sitesinin metinleri, istatistikleri, müşteri logoları ve fotoğrafları kullanılmayacaktır.
- Yayınlama, domain, FTP ve canlı ortam işlemi yapılmayacaktır.

## Teknik temel

- Next.js 16.2.10, App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4 ve global tasarım değişkenleri
- ESLint
- Yerel TypeScript içerik dosyaları
- Server Component ağırlıklı yapı; yalnızca menü ve form gibi etkileşimler Client Component
- Görseller `public/images` altında yerel olarak saklanır; canlı siteye çalışma zamanında bağımlılık yoktur.

## İlk teslim kapsamı

1. Global tasarım sistemi
2. Masaüstü navbar
3. Ürün mega menüsü
4. Mobil menü
5. Ana sayfa
6. Footer
7. InBody580 pilot ürün sayfası
8. Ön yüz iletişim formu
9. Diğer ürünler için route ve içerik şablonu
10. Hakkımızda, Öğrenin, Uygulamalar ve Kaynaklar menü bağlantıları için yerel içerik şablonları
11. Sayfa bazlı Türkçe SEO metadatası, canonical düzeni ve Open Graph temel yapısı

## Ana sayfa sırası

1. Büyük ürün odaklı hero
2. InBody Türkiye tanıtımı
3. Ürün kategorileri
4. Öne çıkan ürünler
5. InBody teknolojisi
6. InBody testi
7. Sonuç sayfası yorumlama
8. Kurumsal içerik
9. İletişim CTA alanı
10. Footer

## İçerik ilkeleri

- Yalnızca Türkiye sitesinde doğrulanan sağlık, teknik ve ürün ifadeleri kullanılır.
- Erişilemeyen veya doğrulanamayan metinlerde `Onaylı Türkçe içerik eklenecek.` etiketi gösterilir.
- Ürün görseli bulunmayan sayfalarda cihaz çizimi ya da yapay cihaz görseli üretilmez; oranı koruyan sade yer tutucu kullanılır.
- Türkiye sitesinden alınan görseller yerelleştirilmiş ve kaynakları `docs/gorsel-listesi.md` içinde kaydedilmiştir.

## Doğrulama

- `npm run lint`
- `npm run build`
- Yerel geliştirme sunucusu
- 1440, 1024, 768, 390 ve 360 px genişliklerde tarayıcı kontrolü
- Mobil menü, ürün mega menüsü ve demo iletişim formu etkileşim kontrolü
