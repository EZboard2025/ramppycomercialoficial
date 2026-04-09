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

export default function FeaturedArticle({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href="#" className="block group">
      <div className="relative bg-gradient-to-br from-teal-dark via-[#1e4d38] to-[#245a3a] rounded-2xl p-8 md:p-12 overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-green/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-2xl">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
            {article.category}
          </span>

          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[40px] font-semibold leading-[110%] tracking-[-0.04em] text-white mb-4 group-hover:text-green-200 transition-colors">
            {article.title}
          </h2>

          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6 max-w-lg">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>{formattedDate}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>{article.readTime} de leitura</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
