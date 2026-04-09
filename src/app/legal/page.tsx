import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Termos e Privacidade | Ramppy",
  description:
    "Termos de uso, política de privacidade e segurança da plataforma Ramppy.",
};

export default function LegalPage() {
  return (
    <PageShell>
      {/* Hero */}
      <SectionWrapper>
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-surface text-primary-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Legal
            </span>
            <h1 className="font-[var(--font-fustat)] text-[36px] md:text-[52px] font-semibold leading-[110%] tracking-[-0.04em] text-teal-dark">
              Termos e Privacidade
            </h1>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Última atualização: Abril de 2026
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Termos de Uso */}
      <SectionWrapper id="termos">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-8">
              Termos de Uso
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">1. Aceitação dos termos</h3>
                <p className="text-text-secondary leading-relaxed">
                  Ao acessar e utilizar a plataforma Ramppy, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize a plataforma. O uso continuado da plataforma constitui aceitação de eventuais alterações nestes termos.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">2. Descrição do serviço</h3>
                <p className="text-text-secondary leading-relaxed">
                  A Ramppy é uma plataforma SaaS de treinamento e assistência em vendas com inteligência artificial. O serviço inclui simulações de vendas com IA, análise automática de reuniões, assistente virtual (Nicole IA) e dashboard de gestão de equipes comerciais.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">3. Conta e acesso</h3>
                <p className="text-text-secondary leading-relaxed">
                  O acesso à plataforma é feito por convite do gestor da empresa contratante. Cada usuário é responsável por manter a confidencialidade de suas credenciais de acesso. Você deve notificar a Ramppy imediatamente sobre qualquer uso não autorizado da sua conta.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">4. Propriedade intelectual</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Todo o conteúdo da plataforma Ramppy:incluindo mas não se limitando a software, algoritmos, interface, design, textos, metodologias de avaliação, modelos de IA e documentação:é propriedade exclusiva da Ramppy e protegido por leis de propriedade intelectual.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-800 mb-2">Proibições absolutas:</p>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Copiar, reproduzir, distribuir ou criar obras derivadas de qualquer parte da plataforma</li>
                    <li>• Fazer engenharia reversa, descompilar ou desmontar o software</li>
                    <li>• Compartilhar, vazar ou tornar público qualquer conteúdo, dado, avaliação ou funcionalidade da plataforma</li>
                    <li>• Utilizar dados da plataforma para treinar modelos de IA externos</li>
                    <li>• Capturar telas, gravar ou exportar conteúdo para uso fora da plataforma sem autorização expressa</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">5. Uso aceitável</h3>
                <p className="text-text-secondary leading-relaxed">
                  A plataforma deve ser utilizada exclusivamente para fins de treinamento e gestão de equipes de vendas. É proibido utilizar a plataforma para fins ilegais, abusivos, ou que violem direitos de terceiros. A Ramppy reserva-se o direito de suspender ou encerrar contas que violem estes termos.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">6. Planos e pagamento</h3>
                <p className="text-text-secondary leading-relaxed">
                  Os planos e preços estão disponíveis na página de planos do site. O pagamento é realizado mensalmente ou anualmente, conforme o plano escolhido. Não há fidelidade:o cancelamento pode ser feito a qualquer momento diretamente na plataforma.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">7. Limitação de responsabilidade</h3>
                <p className="text-text-secondary leading-relaxed">
                  A Ramppy fornece o serviço &ldquo;como está&rdquo;. Não garantimos que a plataforma estará disponível de forma ininterrupta ou livre de erros. As avaliações geradas por IA são ferramentas de apoio e não substituem o julgamento profissional humano. A Ramppy não se responsabiliza por decisões tomadas com base exclusivamente nas análises da plataforma.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">8. Rescisão</h3>
                <p className="text-text-secondary leading-relaxed">
                  A Ramppy pode suspender ou encerrar seu acesso à plataforma a qualquer momento, com ou sem motivo, mediante notificação. Em caso de violação destes termos, especialmente das cláusulas de propriedade intelectual, o encerramento será imediato e sem aviso prévio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Política de Privacidade */}
      <SectionWrapper id="privacidade">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-white leading-[115%] tracking-tight mb-8">
              Política de Privacidade
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">1. Dados que coletamos</h3>
                <div className="space-y-3">
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">Dados pessoais:</strong> Nome, e-mail e informações de perfil fornecidas no cadastro.</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">Dados de uso:</strong> Transcrições de simulações e reuniões analisadas, notas de avaliação SPIN, histórico de atividades na plataforma.</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">Dados de integração:</strong> Informações do Google Agenda para agendamento automático do bot de análise de reuniões.</p>
                  <p className="text-text-secondary leading-relaxed"><strong className="text-teal-dark">Importante:</strong> Não armazenamos áudio ou vídeo das simulações ou reuniões. Apenas as transcrições em texto são processadas e armazenadas.</p>
                </div>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">2. Como usamos seus dados</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Gerar avaliações SPIN Selling das simulações e reuniões</li>
                  <li>• Personalizar a experiência de treinamento e coaching via Nicole IA</li>
                  <li>• Fornecer métricas e relatórios de performance ao gestor da equipe</li>
                  <li>• Melhorar a qualidade dos modelos de avaliação da plataforma</li>
                  <li>• Comunicações sobre o serviço e atualizações da plataforma</li>
                </ul>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">3. Com quem compartilhamos</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  Seus dados são processados pelos seguintes provedores de tecnologia, estritamente para funcionamento da plataforma:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• <strong className="text-teal-dark">OpenAI</strong>:Processamento de linguagem natural para avaliações e assistente IA</li>
                  <li>• <strong className="text-teal-dark">Recall AI</strong>:Transcrição automática de reuniões</li>
                  <li>• <strong className="text-teal-dark">Supabase</strong>:Banco de dados e autenticação</li>
                  <li>• <strong className="text-teal-dark">Hostinger</strong>:Hospedagem da aplicação</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">4. Seus direitos (LGPD)</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Acessar seus dados pessoais armazenados na plataforma</li>
                  <li>• Solicitar correção de dados incorretos ou desatualizados</li>
                  <li>• Solicitar a exclusão dos seus dados pessoais</li>
                  <li>• Revogar o consentimento para o tratamento de dados</li>
                  <li>• Solicitar a portabilidade dos seus dados</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Para exercer qualquer desses direitos, entre em contato pelo e-mail <a href="mailto:gabriel@ramppy.com" className="text-primary-green hover:underline">gabriel@ramppy.com</a>.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-fustat)] text-xl font-semibold text-teal-dark mb-3">5. Retenção de dados</h3>
                <p className="text-text-secondary leading-relaxed">
                  Seus dados são mantidos enquanto sua conta estiver ativa. Após o cancelamento da assinatura, os dados são retidos por 30 dias para possível reativação. Após esse período, os dados são excluídos permanentemente, exceto quando houver obrigação legal de retenção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Segurança */}
      <SectionWrapper id="seguranca">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-fustat)] text-[28px] md:text-[36px] font-semibold text-teal-dark leading-[115%] tracking-tight mb-8">
              Segurança
            </h2>

            <div className="space-y-6">
              {[
                { title: "Sem armazenamento de áudio/vídeo", desc: "Não armazenamos gravações de áudio ou vídeo. Apenas transcrições em texto são processadas e armazenadas de forma segura." },
                { title: "Banco de dados protegido", desc: "Utilizamos Supabase com Row Level Security (RLS), garantindo que cada empresa acesse apenas seus próprios dados, com isolamento completo entre organizações." },
                { title: "Comunicação criptografada", desc: "Todas as comunicações entre seu navegador e nossos servidores são protegidas por HTTPS/TLS." },
                { title: "Autenticação segura", desc: "Login via Google OAuth ou credenciais com hash seguro. Suporte a autenticação de dois fatores." },
                { title: "Código versionado", desc: "Todo o código-fonte é versionado no GitHub com controle de acesso restrito à equipe de desenvolvimento." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[var(--font-fustat)] text-lg font-semibold text-teal-dark mb-1">{item.title}</p>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contato */}
      <SectionWrapper>
        <div className="py-12 md:py-20">
          <div className="bg-green-surface/50 border border-primary-green/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-fustat)] text-2xl md:text-3xl font-semibold text-teal-dark mb-3">
              Dúvidas sobre termos ou privacidade?
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Entre em contato com nossa equipe.
            </p>
            <a
              href="mailto:gabriel@ramppy.com"
              className="font-[var(--font-fustat)] inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full bg-primary-green text-white hover:bg-green-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              gabriel@ramppy.com
            </a>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
