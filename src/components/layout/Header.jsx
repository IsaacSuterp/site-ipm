// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg'; // Certifique-se que este arquivo existe
import Button from '../common/Button';

// Ícones SVG para o menu
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navLinks = [
  { name: 'Soluções', href: '#solutions' },
  { name: 'Segmentos', href: '#segments' },
  { name: 'Clientes', href: '#clients' },
  { name: 'IPM Insights', href: '#insights' }, // Blog
  { name: 'Sobre Nós', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerBaseClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out";
  const headerScrolledClass = isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5";
  const linkColorClass = isScrolled ? "text-ipm-blue-dark hover:text-ipm-orange" : "text-white hover:text-ipm-orange/80";
  // Ajuste o filtro do logo conforme necessário. Se seu logo SVG for adaptável ou já branco, pode não precisar.
  const logoFilterClass = isScrolled || (logo && !logo.endsWith('.svg')) ? "" : "brightness-0 invert";


  return (
    <header className={`${headerBaseClass} ${headerScrolledClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex-shrink-0">
          <img
            className={`h-8 md:h-10 transition-all duration-300 ${logoFilterClass}`}
            src={logo}
            alt="IPM Logo"
          />
        </a>

        <nav className="hidden lg:flex space-x-5 xl:space-x-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide ${linkColorClass} transition-colors duration-200`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={isScrolled ? "primary" : "outline"}
            size="sm"
            className={!isScrolled ? "border-white text-white hover:bg-white hover:text-ipm-blue-dark" : "border-ipm-orange text-ipm-orange hover:bg-ipm-orange hover:text-white"}
          >
            Fale com um especialista
          </Button>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menu"
            className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled ? 'text-ipm-blue-dark hover:text-ipm-orange' : 'text-white hover:text-ipm-orange/80'}`}
          >
            {isMenuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {isMenuOpen && (
          <nav className="px-4 pt-2 pb-4 space-y-1 sm:px-6 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-ipm-blue-dark hover:bg-ipm-gray-light hover:text-ipm-orange transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 px-3">
              <Button variant="primary" size="md" className="w-full" onClick={toggleMenu}>
                Fale com um especialista
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
