type Locale = "pt" | "en" | "es";

export function formatDate(dateStr: string, locale: Locale = "pt"): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (locale === "en") {
    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    }

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "1 month ago";
    if (diffMonths < 12) return `${diffMonths} months ago`;

    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  if (locale === "es") {
    if (diffDays < 1) return "Hoy";
    if (diffDays === 1) return "Ayer";
    if (diffDays < 7) return `hace ${diffDays} días`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return weeks === 1 ? "hace 1 semana" : `hace ${weeks} semanas`;
    }

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "hace 1 mes";
    if (diffMonths < 12) return `hace ${diffMonths} meses`;

    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  if (diffDays < 1) return "Hoje";
  if (diffDays === 1) return "Ontem";
  if (diffDays < 7) return `${diffDays} dias atrás`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 semana atrás" : `${weeks} semanas atrás`;
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return "1 mês atrás";
  if (diffMonths < 12) return `${diffMonths} meses atrás`;

  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
