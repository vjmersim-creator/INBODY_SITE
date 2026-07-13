import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InBody Türkiye | Vücut Kompozisyonu Analizi",
    template: "%s | InBody Türkiye",
  },
  description:
    "InBody Türkiye vücut kompozisyonu, vücut suyu analizi, boy ölçümü ve veri yönetimi çözümleri.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "InBody Türkiye",
    title: "InBody Türkiye | Vücut Kompozisyonu Analizi",
    description:
      "Sağlık profesyonelleri için vücut kompozisyonu analizi ve veri yönetimi çözümleri.",
    images: [
      {
        url: "/images/hero-970s.jpg",
        width: 2560,
        height: 1067,
        alt: "InBody vücut kompozisyonu analiz çözümü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InBody Türkiye",
    description: "Vücut kompozisyonu analizi ve veri yönetimi çözümleri.",
    images: ["/images/hero-970s.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#ana-icerik">
          Ana içeriğe geç
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
