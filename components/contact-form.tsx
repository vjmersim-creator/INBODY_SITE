"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/icon";

type ProductOption = { value: string; label: string };

export function ContactForm({
  initialMessage = "",
  initialProduct = "",
  productOptions,
}: {
  initialMessage?: string;
  initialProduct?: string;
  productOptions: ProductOption[];
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      id="iletisim-formu"
      className="contact-form"
      onSubmit={handleSubmit}
      onChange={() => {
        if (submitted) setSubmitted(false);
      }}
    >
      {initialProduct ? (
        <div className="form-intent">
          <Icon name="brochure" />
          <div>
            <strong>Broşür talebi</strong>
            <span>Seçtiğiniz ürün formda hazır.</span>
          </div>
        </div>
      ) : null}
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
        <select id="interest" name="interest" defaultValue={initialProduct}>
          <option value="" disabled>
            Lütfen seçin
          </option>
          {productOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          <option value="other">Diğer</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Mesajınız</label>
        <textarea id="message" name="message" rows={6} defaultValue={initialMessage} required />
      </div>

      <label className="check-field">
        <input type="checkbox" name="privacy" required />
        <span>Gizlilik politikasını kabul ediyorum.</span>
      </label>

      <button className="button button--red" type="submit">
        {submitted ? (
          <>
            Talep alındı <span aria-hidden="true">✓</span>
          </>
        ) : (
          <>
            Talebi gönder <Icon name="arrow" />
          </>
        )}
      </button>

      <p className="form-note">
        Bu form yalnızca demo amaçlıdır; gerçek e-posta gönderimi yapmaz.
      </p>
      <div
        className={`form-status${submitted ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {submitted ? "Talebiniz demo ortamında alınmıştır." : ""}
      </div>
    </form>
  );
}
