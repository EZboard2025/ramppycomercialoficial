import RamppyLogo from "./RamppyLogo";

export default function Footer() {
  return (
    <footer className="flex gap-[1px]">
      <div className="content-side rounded-r-lg" />
      <div className="content-center">
        <div className="px-6 md:px-8 lg:px-16 xl:px-[104px] py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center mb-4">
                <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-9 object-contain" />
              </a>
              <p className="text-sm text-text-secondary leading-relaxed">
                Ecossistema completo de vendas com IA. Treine, analise e evolua.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-4 text-sm">
                Produto
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Simulacao",
                  "Analise Meet",
                  "WhatsApp IA",
                  "Copiloto Nicole",
                  "PDI",
                  "Gestao",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#funcionalidades"
                      className="text-sm text-text-secondary hover:text-primary-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-4 text-sm">
                Empresa
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Sobre nos",
                  "Blog",
                  "Carreiras",
                  "Contato",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-primary-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-4 text-sm">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Termos de uso",
                  "Privacidade",
                  "Cookies",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-primary-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border-light mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary">
              &copy; 2026 Ramppy. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-surface-hover flex items-center justify-center text-text-secondary hover:text-primary-green hover:bg-green-surface transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-surface-hover flex items-center justify-center text-text-secondary hover:text-primary-green hover:bg-green-surface transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-surface-hover flex items-center justify-center text-text-secondary hover:text-primary-green hover:bg-green-surface transition-colors"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-side rounded-l-lg" />
    </footer>
  );
}
