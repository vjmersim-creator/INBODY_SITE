# Eksik İçerikler

Son güncelleme: 13 Temmuz 2026

Dosyaları nereye ve hangi adla koyacağınız için proje kökündeki
`GELEN_ICERIKLER` klasörünü kullanın. Ayrıntılı yönlendirme:
`docs/icerik-ekleme-rehberi.md`.

## Türkçe içerik onayı gereken alanlar

- Sıkça Sorulan Sorular sayfasının güncel cevapları
- Uygulamalar: Tıbbi, Fitness / Spor Salonu ve Sağlık sayfalarının kapsamlı içerikleri
- Kaynaklar: blog, video ve katalog/broşür içerik listeleri
- FRA ürününün yeni site navigasyonundaki nihai konumu ve adlandırması
- Her ürün için onaylı kısa SEO description metni

Bu alanlarda arayüzde `Onaylı Türkçe içerik eklenecek.` etiketi kullanılır.

## Eksik veya doğrulanamayan görseller

- FRA ayrı ürün görseli
- Sonuç Sayfası Yorumlama bölümü için güncel Türkiye sonuç sayfası görseli

Bu sayfalarda yapay cihaz görseli yerine sade, oranı koruyan yer tutucu kullanılır.

## Bu turda eklenenler

- `tarihce.docx` içeriğinden kurumsal zaman çizelgesi
- `inbodytesti.docx` içeriğinden beş adımlı InBody test prosedürü
- `lookinbody120.docx` içeriğinden ürün özeti, özellikler ve sistem gereksinimleri
- InBody770S, InBody380, InBody270S, InBodyS10, BSM 370, BSM 170, InGrip ve LookinBody 120 için optimize edilmiş ürün görselleri

## Teknik ve entegrasyon eksikleri

- İletişim formunun gerçek e-posta alıcısı ve gönderim servisi
- SMTP veya e-posta API sağlayıcısı
- Gönderim endpoint'i, doğrulama politikası ve spam koruması
- Gizlilik metni bağlantısının yeni site için onaylı nihai metni
- Production canonical alan adı; yerel sürüm `NEXT_PUBLIC_SITE_URL` ile hazırlanmıştır
- Analitik, çerez yönetimi ve izin metinleri

## Kaynak erişim notları

- Türkiye sitesinin eski `.php` ürün adreslerinin bir bölümü yeni WordPress adreslerine taşınmış veya 404 vermektedir.
- `sitemap.xml` ve `robots.txt` otomatik incelemede alınamadı.
- Eski sayfaların bazıları otomatik isteklerde doğrulama ekranı gösterdi; arama dizininde doğrulanabilen içerikler ve güncel tarayıcı sayfaları kullanıldı.
- InBody580 sayfasındaki frekans satırlarında kaynaklar arasında 1000 kHz ifadesi açısından tutarsızlık görüldü. Pilot sayfadaki teknik tabloda eski sayfa ve ölçüm satırıyla ortak olan 5, 50, 250 ve 500 kHz değerleri kullanıldı; nihai ürün ekibi onayı gerekir.
- Erişilemeyen mevcut SEO title/description değerleri kopyalanmadı veya tahmin edilmedi.
