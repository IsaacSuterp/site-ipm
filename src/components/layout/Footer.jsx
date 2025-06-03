// src/components/layout/Footer.jsx
import React from 'react';
import logo from '../../assets/images/logo.svg'; // Reutilize o logo

// Exemplo de ícones de redes sociais (substitua por SVGs reais ou React Icons)
const SocialLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-ipm-gray-light hover:text-ipm-orange transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Segmentos', href: '#segments' },
    { name: 'Clientes', href: '#clients' },
    { name: 'IPM Insights', href: '#insights' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Carreiras', href: '#careers' },
    { name: 'Contato', href: '#contact' },
    { name: 'Portal da Privacidade', href: '#privacy' },
  ];

  const socialMedia = [
    { name: 'Facebook', href: 'https://facebook.com/ipmsistemas', label: 'IPM no Facebook' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ipm-sistemas', label: 'IPM no LinkedIn' },
    { name: 'Instagram', href: 'https://instagram.com/ipmsistemas', label: 'IPM no Instagram' },
    { name: 'YouTube', href: 'https://youtube.com/ipmsistemas', label: 'IPM no YouTube' },
  ];

  return (
    <footer className="bg-ipm-blue-dark text-ipm-gray-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="/" aria-label="Página inicial IPM">
              <img src={logo} alt="IPM Logo" className="h-10 mb-5 filter brightness-0 invert" />
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Líder em soluções de tecnologia para a gestão pública, transformando municípios e órgãos governamentais.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map(social => (
                <SocialLink key={social.name} href={social.href} label={social.label}>
                  {/* Substitua por ícones SVG reais */}
                  <span className="sr-only">{social.name}</span> {/* Para acessibilidade se usar ícones sem texto */}
                  {/* Exemplo com texto simples por enquanto: */}
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"> {/* Placeholder Icon */}
                    <path d="M12 .297c-6.63 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.703c-5.42 0-9.854-4.435-9.854-9.854s4.435-9.854 9.854-9.854 9.854 4.435 9.854 9.854-4.435 9.854-9.854 9.854zm0-17.703c-4.34 0-7.854 3.514-7.854 7.854s3.514 7.854 7.854 7.854 7.854-3.514 7.854-7.854-3.514-7.854-7.854-7.854z"/>
                  </svg>
                </SocialLink>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-5">Links Rápidos</h5>
            <ul className="space-y-3">
              {footerLinks.slice(0, Math.ceil(footerLinks.length / 2)).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-ipm-orange transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Mais Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-5 invisible md:visible">ㅤ</h5> {/* Para alinhar */}
            <ul className="space-y-3">
              {footerLinks.slice(Math.ceil(footerLinks.length / 2)).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-ipm-orange transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-ipm-gray-light">
            &copy; {currentYear} IPM Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
