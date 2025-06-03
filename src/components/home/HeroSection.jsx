// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion
import Button from '../common/Button';
// import heroBackgroundImage from '../../assets/images/hero-background.jpg'; // Adicione sua imagem de fundo aqui

const HeroSection = () => {
  const sectionStyle = {
    // Se usar uma imagem de fundo:
    // backgroundImage: `url(${heroBackgroundImage})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      id="hero"
      className="relative bg-ipm-blue-dark text-white min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-32 overflow-hidden"
      style={sectionStyle}
    >
      {/* Overlay Opcional: <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }} // Estado inicial
          animate={{ opacity: 1, y: 0 }} // Estado final
          transition={{ duration: 0.5 }} // Transição
        >
          Transformando a Gestão Pública com Tecnologia Inovadora
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-ipm-gray-light mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }} // Estado inicial
          animate={{ opacity: 1, y: 0 }} // Estado final
          transition={{ duration: 0.5, delay: 0.2 }} // Transição com atraso
        >
          Soluções inteligentes que modernizam, simplificam e otimizam
          processos para um setor público mais eficiente e transparente.
        </motion.p>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Estado inicial
            animate={{ opacity: 1, y: 0 }} // Estado final
            transition={{ duration: 0.5, delay: 0.4 }} // Transição com atraso
          >
            <Button
              href="#solutions"
              variant="primary"
              size="lg"
              className="mr-0 mb-4 sm:mr-4 sm:mb-0"
              as="a" // Para que funcione como link
            >
              Conheça Nossas Soluções
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-ipm-blue-dark"
              as="a" // Para que funcione como link
            >
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Adicionar elementos gráficos animados aqui depois, se desejar */}
      {/* Exemplo: <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-ipm-orange/10 rounded-full animate-pulse"></div> */}
      {/* Exemplo: <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full animate-pulse animation-delay-400"></div> */}
    </section>
  );
};

export default HeroSection;
