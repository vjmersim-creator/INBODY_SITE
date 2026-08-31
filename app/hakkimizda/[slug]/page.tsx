import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhoWeArePage } from "@/components/who-we-are-page";
import { ContentTemplate } from "@/components/ui";
import { aboutPages, getPageBySlug } from "@/content/pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(aboutPages, slug);
  if (!page) notFound();
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/hakkimizda/${page.slug}` },
    openGraph: {
      title: `${page.title} | InBody Türkiye`,
      description: page.description,
      url: `/hakkimizda/${page.slug}`,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(aboutPages, slug);
  if (!page) notFound();
  if (page.slug === "biz-kimiz") return <WhoWeArePage page={page} />;
  return <ContentTemplate page={page} />;
}
