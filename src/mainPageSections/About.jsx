'use client';

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre a SMM Solution</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Com 8 anos de experiência no mercado, a SMM Solution é especializada em automação de sistemas elétricos, projetos elétricos, montagem de máquinas e fornecimento de mão de obra altamente qualificada para a indústria e o comércio.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nosso compromisso é oferecer soluções completas e personalizadas, sempre com foco em eficiência, inovação e custo-benefício.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Missão</h3>
                <p className="text-gray-700">
                  Entregar produtos e serviços competitivos em toda a cadeia corporativa, desenvolvendo projetos sob medida.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Visão</h3>
                <p className="text-gray-700">
                  Ser parceira estratégica para empresas que buscam otimização de processos e segurança operacional.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Por que nos escolher?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">8 anos de experiência</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Equipe especializada</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Soluções personalizadas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Foco em inovação</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Suporte técnico alto nível</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}