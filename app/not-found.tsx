import Link from "next/link";

export default function NotFound() {
  return (
    <main id="ana-icerik" className="not-found-page section">
      <div className="shell shell--narrow">
        <p className="eyebrow">404</p>
        <h1>Aradığınız sayfa bulunamadı.</h1>
        <p>Bağlantıyı kontrol edin veya ana sayfadan devam edin.</p>
        <Link className="button button--dark" href="/">
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
