'use client';

import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: 'Automação de Sistemas Elétricos',
      description: 'Projetos e implementação de sistemas automatizados com CLPs de marcas líderes.',
      icon: '⚡',
    },
    {
      title: 'Projetos Elétricos',
      description: 'Desenvolvimento de projetos elétricos completos e personalizados.',
      icon: '📐',
    },
    {
      title: 'Montagem de Máquinas',
      description: 'Montagem especializada de equipamentos com infraestrutura moderna.',
      icon: '🔧',
    },
    {
      title: 'Facilities',
      description: 'Gerenciamento completo de sistemas prediais e industriais.',
      icon: '🏢',
    },
    {
      title: 'Sistemas de Incêndio',
      description: 'Análise técnica, projeto, instalação e integração de alarmes.',
      icon: '🚨',
    },
    {
      title: 'Suporte Técnico',
      description: 'Manutenção preventiva e corretiva de equipamentos.',
      icon: '🛠️',
    },
     {
      title: 'Cursos',
      description: 'Manutenção preventiva e corretiva de equipamentos.',
      icon: '🎓',
      path: '/courses'
    },
  ];

  const handleOnClick = (path) => {
    if (!path) return;

    router.push(path);
  }

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Oferecemos soluções para otimização de processos e segurança operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => handleOnClick(service.path)} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}