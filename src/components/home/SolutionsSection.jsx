// src/components/home/SolutionsSection.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion

const solutionsData = [
  {
    id: 1,
    title: 'Solução 1',
    description: 'Descrição da solução 1 que ajuda a modernizar a gestão pública.',
    icon: '/path/to/icon1.png', // Substitua pelo caminho do ícone
  },
  {
    id: 2,
    title: 'Solução 2',
    description: 'Descrição da solução 2 que simplifica processos administrativos.',
    icon: '/path/to/icon2.png', // Substitua pelo caminho do ícone
  },
  {
    id: 3,
    title: 'Solução 3',
    description: 'Descrição da solução 3 que otimiza a transparência no setor público.',
    icon: '/path/to/icon3.png', // Substitua pelo caminho do ícone
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-ipm-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-ipm-blue-dark mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossas Soluções
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-ipm-gray-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Conheça as soluções que oferecemos para transformar a gestão pública.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }} // Estado inicial
              animate={{ opacity: 1, y: 0 }} // Estado final
              transition={{ duration: 0.5, delay: index * 0.1 }} // Transição com atraso
            >
              <img src={solution.icon} alt={solution.title} className="h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-ipm-blue-dark mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
