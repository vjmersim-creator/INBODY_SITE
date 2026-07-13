# İçerik Ekleme Rehberi

Son güncelleme: 13 Temmuz 2026

## En kolay yöntem

Kod dosyalarını değiştirmeniz gerekmiyor. Finder'da proje klasörünün içindeki
`GELEN_ICERIKLER` klasörünü açın ve elinizdeki dosyaları ilgili alt klasöre
sürükleyin. İşiniz bitince Codex'e yalnızca **“Dosyaları koydum”** yazın.

## Hangi dosya nereye konulacak?

| Elinizdeki dosya | Koyacağınız klasör | Örnek dosya adı |
|---|---|---|
| Onaylı sayfa metinleri | `GELEN_ICERIKLER/METINLER` | `tarihce.docx` |
| Ürün fotoğrafları | `GELEN_ICERIKLER/URUN_GORSELLERI` | `inbody770s.png` |
| Ürün sayfası üst görselleri | `GELEN_ICERIKLER/SAYFA_GORSELLERI` | `inbody770s-header.png` |
| Sonuç sayfası ve kurumsal fotoğraflar | `GELEN_ICERIKLER/SAYFA_GORSELLERI` | `sonuc-sayfasi.png` |
| Katalog ve broşürler | `GELEN_ICERIKLER/BELGELER` | `inbody580-katalog.pdf` |
| İletişim/form kararları | `GELEN_ICERIKLER/METINLER` | `iletisim-bilgileri.txt` |

Word, PDF, Excel, düz metin, PNG, WebP ve yüksek kaliteli JPG kabul edilir.

## Gerekli Türkçe metinler

1. Tarihçe
2. InBody Testi: hazırlık ve uygulama adımları
3. Sıkça Sorulan Sorular ve cevapları
4. Tıbbi Uygulamalar
5. Fitness / Spor Salonu
6. Sağlık uygulama sayfası
7. LookinBody 120 ürün açıklaması
8. Blog, video ve katalog/broşür listeleri
9. Her ürün için kısa SEO açıklaması
10. Gizlilik politikası

Metinlerin başına hangi sayfaya ait olduklarını yazmanız yeterlidir. Özel bir
şablona dönüştürmeniz gerekmez.

## Gerekli ürün görselleri

- InBody770S
- InBody380
- InBody270S
- InBodyS10
- BSM 370
- BSM 170
- FRA
- InGrip
- LookinBody 120
- Güncel InBody Sonuç Sayfası görseli

Ürün görsellerinde mümkünse şeffaf arka planlı PNG veya WebP tercih edin.
Görselde filigran ve üzerine gömülü açıklama metni olmaması daha iyi sonuç verir.
Kullanım izni olmayan görselleri eklemeyin.

### Ürün sayfası üst görselini sonradan değiştirmek

Her aktif ürün sayfasında şu anda bir üst görsel alanı bulunur. Özel bir yaşam
tarzı veya kullanım fotoğrafı yoksa onaylı ürün PNG'si koyu bir başlık bandında
gösterilir. Yeni bir görsel eklemek için dosyayı
`GELEN_ICERIKLER/SAYFA_GORSELLERI` klasörüne aşağıdaki adla koymanız yeterlidir:

- `inbody970s-header.png`
- `inbody770s-header.png`
- `inbody380-header.png`
- `inbody270s-header.png`
- `bwa2-0s-header.png`
- `inbodys10-header.png`
- `bsm-370-header.png`
- `bsm-170-header.png`
- `ingrip-header.png`
- `lookinbody-web-header.png`
- `lookinbody-120-header.png`

Görselin yatay, yazısız ve tercihen en az 2000 px genişliğinde PNG olması iyi
sonuç verir. Dosyaları koyduktan sonra Codex'e “Üst görselleri ekledim” yazın.

## İletişim formu için gereken kararlar

- Taleplerin gideceği e-posta adresi
- Kullanılacak gönderim servisi
- Kullanıcıya otomatik yanıt gönderilip gönderilmeyeceği
- Onaylı gizlilik politikası bağlantısı/metni
- Spam koruması tercihi

Parola, e-posta şifresi veya API anahtarını bu klasöre koymayın. Bu bilgiler
gerekirse daha sonra güvenli ortam değişkenleriyle eklenir.

## Görseller için önerilen minimum kalite

- Ürün görseli: uzun kenar en az 1200 px
- Sayfa/hero görseli: tercihen en az 2000 px genişlikte PNG
- Logo: mümkünse şeffaf PNG veya kurumsal vektör dosyası
- Baskı PDF'leri: web kullanımına onaylı güncel sürüm
