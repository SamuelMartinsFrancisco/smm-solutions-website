import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[200px] lg:min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/smm-background.jpg"
          fill
          priority
          className="object-cover"
          alt="Industrial background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Automação Industrial & Engenharia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Soluções completas e personalizadas com 8 anos de experiência no mercado
          </p>
        </div>
      </div>
    </section>
  );
}