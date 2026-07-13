# InBody Türkiye Tasarım Sistemi

Son güncelleme: 13 Temmuz 2026

## Tasarım yönü

Modern, premium ve bilimsel bir sağlık teknolojisi dili. Geniş beyaz alanlar, sakin açık gri yüzeyler, koyu bölüm geçişleri ve InBody kırmızısının kontrollü kullanımı temel yaklaşımı oluşturur.

ABD sitesi yalnızca deneyim referansı olarak incelendi. Uygulamaya aktarılan ilkeler:

- İnce, yatay ve sade bir üst navigasyon
- Geniş ekranı kaplayan ürün odaklı hero
- Kategori bazlı, çok sütunlu mega menü
- Büyük başlık ve kısa açıklama eşleşmesi
- 12 kolon hissi veren dengeli grid
- Yuvarlatılmış ama aşırı yumuşak olmayan kart yüzeyleri
- Açık ve koyu bölümler arasında net ritim
- Büyük CTA alanı ile footer arasında güçlü geçiş
- Mobilde üst menünün tam genişlikli akordeon panele dönüşmesi
- Hareket azaltma tercihini dikkate alan hafif giriş animasyonları

## Renk değişkenleri

| Ad | Değer | Kullanım |
|---|---|---|
| `--ink` | `#15171a` | Ana metin ve koyu yüzey |
| `--ink-soft` | `#3f454c` | İkincil metin |
| `--paper` | `#ffffff` | Ana zemin |
| `--mist` | `#f3f5f6` | Bölüm ve kart zemini |
| `--line` | `#dfe3e6` | Kenarlık ve ayırıcı |
| `--red` | `#a3212d` | InBody vurgu rengi |
| `--red-bright` | `#c6313f` | Hover ve küçük vurgu |
| `--red-soft` | `#f6e9eb` | Hafif vurgu zemini |
| `--night` | `#0f1519` | Koyu teknoloji bölümü |
| `--white-muted` | `#d8dee1` | Koyu zeminde ikincil metin |

## Tipografi

- Gövde ve arayüz: sistem sans-serif ailesi, yüksek okunabilirlik
- Büyük editoryal vurgu: sistem serif ailesi; yalnızca hero ve büyük bölüm cümlelerinde
- H1: masaüstü 64–84 px, mobil 42–52 px, sıkı satır yüksekliği
- H2: masaüstü 44–60 px, mobil 34–42 px
- H3: 24–32 px
- Gövde: 16–18 px, 1.65 satır yüksekliği
- Küçük etiket: 12–13 px, harf aralığı açık, büyük harf

## Yerleşim

- Ana içerik genişliği: 1280 px
- Okuma genişliği: 720 px
- Genel yatay boşluk: masaüstü 32 px, tablet 24 px, mobil 20 px
- Bölüm dikey boşluğu: masaüstü 112–144 px, mobil 72–88 px
- Grid boşluğu: 16, 24 ve 32 px

## Bileşenler

### Butonlar

- Birincil: koyu veya kırmızı zemin, beyaz metin, 48–54 px yükseklik
- İkincil: şeffaf zemin, ince kenarlık
- Metin bağlantısı: ok işareti ve kontrollü alt çizgi hareketi
- Klavye odağı için en az 3 px görünür focus halkası

### Ürün kartları

- 4:5 veya 3:4 görsel alanı
- Açık gri zemin, 20–28 px radius
- Kategori etiketi, ürün adı, kısa doğrulanmış açıklama
- Hover'da en fazla 4 px yükselme ve gölge artışı

### Bilgi kartları

- Sayı/ikon yerine kısa sıra numarası
- Koyu bölümde yarı saydam kenarlık
- Başlık + 2–3 satır açıklama

### Form alanları

- Üstte kalıcı label
- En az 48 px kontrol yüksekliği
- Hata ve yardım metni için ayrılmış alan
- `aria-live` ile demo gönderim mesajı

### Navbar ve mega menü

- Sticky beyaz navbar
- Masaüstünde ürün düğmesiyle açılan dört sütunlu panel
- Ürünler kategori başlıkları altında listelenir
- Mobilde menü düğmesi, akordeon gruplar ve tam genişlikli CTA

### Footer

- Koyu zemin
- Üstte büyük iletişim CTA'sı
- Alt kısımda Hakkımızda, Öğrenin ve Ürünler sütunları
- Doğrulanmış Türkiye e-posta, telefon ve adres bilgileri

### Breadcrumb

- Ana Sayfa / Ürünler / Ürün adı
- Küçük boyut, yüksek kontrast ve aktif sayfada `aria-current="page"`

### Teknik özellik tablosu

- İki sütunlu tanım listesi görünümü
- Mobilde etiket ve değerin alt alta gelmesi
- Uzun değerlerde satır kırılması

## Animasyon

- 180–420 ms arası opacity ve transform geçişleri
- İçerik yalnızca 8–16 px hareket eder
- Büyük parallax, sürekli kayan metin ve dikkat dağıtan döngüler kullanılmaz
- `prefers-reduced-motion: reduce` durumunda animasyonlar kapatılır

