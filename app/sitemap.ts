import type { MetadataRoute } from "next";
import {
  aboutPages,
  learnPages,
} from "@/content/pages";
import { listedProducts } from "@/content/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/urunler",
    "/iletisim",
    ...listedProducts.map((product) => `/urunler/${product.slug}`),
    ...aboutPages.map((page) => `/hakkimizda/${page.slug}`),
    ...learnPages.map((page) => `/ogren/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/urunler" ? 0.9 : 0.7,
  }));
}
