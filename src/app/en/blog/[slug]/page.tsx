import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import BlogPostContent from "@/components/pages/BlogPostContent";
import posts from "@/data/blog-posts.json";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_URL } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found | Ramppy" };
  return buildMetadata({
    locale: "en",
    path: `/blog/${post.slug}`,
    title: `${post.title} | Ramppy Blog`,
    description: post.excerpt,
    ogImage: post.image ?? undefined,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Ramppy" },
    publisher: {
      "@type": "Organization",
      name: "Ramppy",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/Ramppy logo branca site.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/en/blog/${post.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={articleLd} />
      <BlogPostContent post={post} />
    </PageShell>
  );
}
