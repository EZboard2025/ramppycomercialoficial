import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Contato | Ramppy",
  description:
    "Entre em contato com a equipe da Ramppy. Estamos prontos para ajudar.",
};

const team = [
  {
    name: "Gabriel Gomide",
    email: "gabriel@ramppy.com",
    image: "/images/Gabriel Gomide.png",
    linkedin: "https://www.linkedin.com/in/gabriel-gomide-922694365/",
  },
  {
    name: "Arthur Xavier",
    email: "xavier@ramppy.com",
    image: "/images/1769295670916.jpg",
    linkedin: "https://www.linkedin.com/in/arthur-xavier-98b495336/",
  },
  {
    name: "Matheus Muniz",
    email: "matheus@ramppy.com",
    image: "/images/Matheus Muniz.png",
    linkedin: "https://www.linkedin.com/in/matheus-moreira-84b413374/",
  },
];

export default function ContatoPage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Contato
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Fale com a gente
            </h1>
            <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Quer saber mais sobre a Ramppy, agendar uma demo ou tirar uma dúvida? Escolha o melhor canal e a gente responde rápido.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-12">
            Nossa equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person) => (
              <div key={person.name} className="bg-white border border-border-light rounded-2xl p-8 text-center hover:border-primary-green/30 hover:shadow-lg transition-all duration-300">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-surface mx-auto mb-5" style={{ boxShadow: "0 12px 35px -8px rgba(0, 0, 0, 0.15)" }}>
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-1">
                  {person.name}
                </p>
                <p className="text-sm text-text-secondary mb-1">Co-founder</p>

                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 text-sm text-primary-green hover:text-green-dark transition-colors mt-4"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {person.email}
                </a>

                <div className="mt-3">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-[#0077B5] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* WhatsApp CTA */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <a
            href="https://wa.me/5531995525157?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Ramppy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-teal-dark via-[#1e4d38] to-[#245a3a] rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-white group-hover:text-green-200 transition-colors">
                Fale pelo WhatsApp
              </p>
              <p className="text-white/60 mt-1">
                Respondemos em minutos. Clique para iniciar uma conversa.
              </p>
            </div>
            <div className="md:ml-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
