'use client';

export default function Solutions() {
  const solutions = [
    {
      category: 'Controladores Lógicos Programáveis (CLPs)',
      items: ['ABB', 'ALTUS', 'ATIVA', 'MITSUBISHI', 'OMRON', 'SIEMENS', 'SCHNEIDER', 'REXROTH', 'ALERTON', 'HONEYWELL'],
    },
    {
      category: 'Interfaces Homem-Máquina (IHM)',
      items: ['ROCKWELL', 'ALTUS', 'SIEMENS', 'SCHNEIDER', 'EBI-HONEYWELL'],
    },
    {
      category: 'Redes de Comunicação',
      items: ['AS-i', 'Ethernet', 'Fieldbus Foundation', 'Profibus DP e PA', 'Modbus RTU/TCP-IP'],
    },
  ];

  return (
    <section id="solucoes" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Tecnologias de ponta das principais marcas mundiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">{solution.category}</h3>
              <div className="flex flex-wrap gap-2">
                {solution.items.map((item, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
