import type { MetadataRoute } from "next";
import {
  aboutPages,
  applicationPages,
  learnPages,
  resourcePages,
} from "@/content/pages";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/urunler",
    "/iletisim",
    ...products.map((product) => `/urunler/${product.slug}`),
    ...aboutPages.map((page) => `/hakkimizda/${page.slug}`),
    ...learnPages.map((page) => `/ogren/${page.slug}`),
    ...applicationPages.map((page) => `/uygulamalar/${page.slug}`),
    ...resourcePages.map((page) => `/kaynaklar/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/urunler" ? 0.9 : 0.7,
  }));
}
