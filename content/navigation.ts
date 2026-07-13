export type NavigationItem = {
  label: string;
  href: string;
};

export const aboutLinks: NavigationItem[] = [
  { label: "Biz Kimiz", href: "/hakkimizda/biz-kimiz" },
  { label: "Tarihçe", href: "/hakkimizda/tarihce" },
  { label: "Küresel Ağ", href: "/hakkimizda/kuresel-ag" },
];

export const learnLinks: NavigationItem[] = [
  {
    label: "Vücut Kompozisyonu Nedir?",
    href: "/ogren/vucut-kompozisyonu-nedir",
  },
  { label: "InBody Teknolojisi", href: "/ogren/inbody-teknolojisi" },
  { label: "InBody Testi", href: "/ogren/inbody-testi" },
  {
    label: "Sonuç Sayfası Yorumlama",
    href: "/ogren/sonuc-sayfasi-yorumlama",
  },
  {
    label: "Sıkça Sorulan Sorular",
    href: "/ogren/sikca-sorulan-sorular",
  },
  {
    label: "Güvenlik ve Temizlik İpuçları",
    href: "/ogren/guvenlik-ve-temizlik-ipuclari",
  },
];

export const applicationLinks: NavigationItem[] = [
  { label: "Tıbbi", href: "/uygulamalar/tibbi" },
  {
    label: "Fitness / Spor Salonu",
    href: "/uygulamalar/fitness-spor-salonu",
  },
  { label: "Beslenme", href: "/uygulamalar/beslenme" },
  { label: "Sağlık", href: "/uygulamalar/saglik" },
];

export const resourceLinks: NavigationItem[] = [
  { label: "Blog", href: "/kaynaklar/blog" },
  { label: "Video", href: "/kaynaklar/video" },
  { label: "Katalog / Broşür", href: "/kaynaklar/katalog-brosur" },
];

