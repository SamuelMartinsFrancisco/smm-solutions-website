'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="absolute inset-0 bg-[url('/assets/img/header-bg.jpg')] bg-cover bg-center opacity-10"></div>
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/img/smm-logo.jpg"
              width={50}
              height={50}
              alt="SMM Solution Logo"
              className="rounded-sm w-10 h-10 sm:w-12 sm:h-12"
            />
            <Link href="/" className="text-xl sm:text-3xl font-bold">
              SMM Solutions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/#sobre" 
              className="text-gray-700 font-medium relative group px-2 py-1"
            >
              <span className="relative z-10">Sobre</span>
              <span className="absolute inset-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out bottom-0"></span>
            </Link>
            <Link 
              href="/#servicos" 
              className="text-gray-700 font-medium relative group px-2 py-1"
            >
              <span className="relative z-10">Serviços</span>
              <span className="absolute inset-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out bottom-0"></span>
            </Link>
            <Link 
              href="/#solucoes" 
              className="text-gray-700 font-medium relative group px-2 py-1"
            >
              <span className="relative z-10">Soluções</span>
              <span className="absolute inset-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out bottom-0"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium">
                Sobre
              </Link>
              <Link href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium">
                Serviços
              </Link>
              <Link href="#solucoes" className="text-gray-700 hover:text-blue-600 font-medium">
                Soluções
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-blue-600 font-medium">
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}