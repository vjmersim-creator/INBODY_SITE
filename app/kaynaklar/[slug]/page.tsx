import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentTemplate } from "@/components/ui";
import { getPageBySlug, resourcePages } from "@/content/pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(resourcePages, slug);
  if (!page) notFound();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/kaynaklar/${page.slug}` },
    openGraph: {
      title: `${page.title} | InBody Türkiye`,
      description: page.description,
      url: `/kaynaklar/${page.slug}`,
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(resourcePages, slug);
  if (!page) notFound();
  return <ContentTemplate page={page} />;
}
