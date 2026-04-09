export default function Footer() {
  return (
    <footer className="flex gap-[1px]">
      <div className="content-side rounded-r-lg" />
      <div className="content-center">
        <div className="px-6 md:px-8 lg:px-16 xl:px-[104px] py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <a href="/" className="flex items-center mb-5">
                <img src="/images/Logo Moderna Verde branco (1).png" alt="Ramppy" className="h-9 object-contain" />
              </a>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-6">
                O ecossistema completo de vendas com IA. Treine, analise e evolua seu time de vendas.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/ramppy.ai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-surface-hover flex items-center justify-center text-text-secondary hover:text-primary-green hover:bg-green-surface transition-all" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/108633945/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-surface-hover flex items-center justify-center text-text-secondary hover:text-primary-green hover:bg-green-surface transition-all" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="md:col-span-2">
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-5 text-sm">
                Produto
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Simulação", href: "/#funcionalidades" },
                  { label: "Análise Meet", href: "/como-funciona#passo-04" },
                  { label: "Copiloto Nicole", href: "/#nicole" },
                  { label: "Gestão", href: "/como-funciona#passo-06" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-text-secondary hover:text-primary-green transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-2">
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-5 text-sm">
                Recursos
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Como funciona", href: "/como-funciona" },
                  { label: "Metodologia SPIN", href: "/metodologia-spin" },
                  { label: "Blog", href: "/blog" },
                  { label: "Central de ajuda", href: "/ajuda" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-text-secondary hover:text-primary-green transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-5 text-sm">
                Empresa
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Sobre nós", href: "/sobre" },
                  { label: "Contato", href: "/contato" },
                  { label: "Parceiros", href: "/parceiros" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-text-secondary hover:text-primary-green transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <h4 className="font-[var(--font-fustat)] font-semibold text-teal-dark mb-5 text-sm">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Termos de uso", href: "/legal#termos" },
                  { label: "Privacidade", href: "/legal#privacidade" },
                  { label: "Segurança", href: "/legal#seguranca" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-text-secondary hover:text-primary-green transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border-light mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-secondary/60">
              &copy; 2026 Ramppy. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      <div className="content-side rounded-l-lg" />
    </footer>
  );
}
