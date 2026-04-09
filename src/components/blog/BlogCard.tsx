import Link from "next/link";
import { formatDate } from "@/lib/format-date";

const categoryColors: Record<string, string> = {
  "Atualização": "bg-green-100 text-green-700",
  "Parceria": "bg-blue-100 text-blue-700",
  "Evento": "bg-purple-100 text-purple-700",
  "Conteúdo": "bg-orange-100 text-orange-700",
};

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
};

export default function BlogCard({ article }: { article: Article }) {
  const formattedDate = formatDate(article.date);

  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <div className="bg-white border border-border-light rounded-2xl overflow-hidden hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {article.image ? (
          <div className="w-full h-48 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-green-surface to-[#c8e6c9]" />
        )}

        <div className="p-6 flex flex-col flex-1">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
            {article.category}
          </span>

          <h3 className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-2 group-hover:text-primary-green transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 text-xs text-text-secondary/70 mt-auto pt-4 border-t border-border-light">
            <span>{formattedDate}</span>
            <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
            <span>{article.readTime} de leitura</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
