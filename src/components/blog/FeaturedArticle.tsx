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

export default function FeaturedArticle({ article }: { article: Article }) {
  const formattedDate = formatDate(article.date);

  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col lg:flex-row">
          {article.image && (
            <div className="lg:w-1/2 flex-shrink-0">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover min-h-[250px] lg:min-h-[400px] group-hover:scale-105 transition-transform duration-500" />
            </div>
          )}

          <div className={`bg-gradient-to-br from-teal-dark via-[#1e4d38] to-[#245a3a] p-8 md:p-12 flex flex-col justify-center ${article.image ? "lg:w-1/2" : "w-full"}`}>
            <div className="relative z-10">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                {article.category}
              </span>

              <h2 className="font-[var(--font-fustat)] text-[24px] md:text-[32px] font-semibold leading-[115%] tracking-tight text-white mb-4 group-hover:text-green-200 transition-colors">
                {article.title}
              </h2>

              <p className="text-base text-white/60 leading-relaxed mb-6 max-w-lg">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-white/40">
                <span>{formattedDate}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
