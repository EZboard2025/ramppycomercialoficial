import Link from "next/link";

const categoryColors: Record<string, string> = {
  "Atualização": "bg-green-100 text-green-700",
  "Parceria": "bg-blue-100 text-blue-700",
  "Evento": "bg-purple-100 text-purple-700",
  "Conteúdo": "bg-orange-100 text-orange-700",
};

type Article = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export default function BlogCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href="#" className="block group">
      <div className="bg-white border border-border-light rounded-2xl p-7 hover:border-primary-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Gradient placeholder for image */}
        <div className="w-full h-40 rounded-xl bg-gradient-to-br from-green-surface to-[#c8e6c9] mb-5 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-green/40">
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
            <path d="M2 14l5.5-5.5a2 2 0 012.8 0L16 14" />
            <path d="M14 12l1.5-1.5a2 2 0 012.8 0L22 14" />
          </svg>
        </div>

        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
          {article.category}
        </span>

        <h3 className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-2 group-hover:text-primary-green transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-xs text-text-secondary/70 mt-auto pt-4 border-t border-border-light">
          <span>{formattedDate}</span>
          <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
          <span>{article.readTime} de leitura</span>
        </div>
      </div>
    </Link>
  );
}
