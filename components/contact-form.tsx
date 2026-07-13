"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="organization">Kuruluş Adı</label>
          <input id="organization" name="organization" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="name">Ad Soyad</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon Numarası</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">İlgilendiğiniz ürün veya konu</label>
        <select id="interest" name="interest" defaultValue="">
          <option value="" disabled>
            Lütfen seçin
          </option>
          <option value="body-composition">Vücut Kompozisyonu Analiz Cihazları</option>
          <option value="body-water">Vücut Suyu Analiz Cihazları</option>
          <option value="height">Boy Ölçer</option>
          <option value="data">Veri Yönetimi</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Mesajınız</label>
        <textarea id="message" name="message" rows={6} required />
      </div>

      <label className="check-field">
        <input type="checkbox" name="privacy" required />
        <span>Gizlilik politikasını kabul ediyorum.</span>
      </label>

      <button className="button button--red" type="submit">
        Talebi gönder <span aria-hidden="true">↗</span>
      </button>

      <p className="form-note">
        Bu form yalnızca demo amaçlıdır; gerçek e-posta gönderimi yapmaz.
      </p>
      <div className="form-status" role="status" aria-live="polite">
        {submitted ? "Talebiniz demo ortamında alınmıştır." : ""}
      </div>
    </form>
  );
}

