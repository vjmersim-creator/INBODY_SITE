import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BodyCompositionPage } from "@/components/body-composition-page";
import { ContentTemplate } from "@/components/ui";
import { getPageBySlug, learnPages } from "@/content/pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return learnPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(learnPages, slug);
  if (!page) notFound();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/ogren/${page.slug}` },
    openGraph: {
      title: `${page.title} | InBody Türkiye`,
      description: page.description,
      url: `/ogren/${page.slug}`,
    },
  };
}

export default async function LearnPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(learnPages, slug);
  if (!page) notFound();
  return page.slug === "vucut-kompozisyonu-nedir" ? (
    <BodyCompositionPage page={page} />
  ) : (
    <ContentTemplate page={page} />
  );
}
