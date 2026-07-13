import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentTemplate } from "@/components/ui";
import { applicationPages, getPageBySlug } from "@/content/pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(applicationPages, slug);
  if (!page) notFound();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/uygulamalar/${page.slug}` },
    openGraph: {
      title: `${page.title} | InBody Türkiye`,
      description: page.description,
      url: `/uygulamalar/${page.slug}`,
    },
  };
}

export default async function ApplicationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(applicationPages, slug);
  if (!page) notFound();
  return <ContentTemplate page={page} />;
}
