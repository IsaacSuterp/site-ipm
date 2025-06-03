// src/components/home/ClientsSection.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion

const clientsData = [
  { id: 1, logo: '/path/to/logo1.png' },
  { id: 2, logo: '/path/to/logo2.png' },
  { id: 3, logo: '/path/to/logo3.png' },
  { id: 4, logo: '/path/to/logo4.png' },
  { id: 5, logo: '/path/to/logo5.png' },
  { id: 6, logo: '/path/to/logo6.png' },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-ipm-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ipm-blue-dark mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg md:text-xl text-ipm-gray-dark max-w-2xl mx-auto">
            Empresas e instituições que confiam em nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientsData.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }} // Estado inicial
              animate={{ opacity: 1, y: 0 }} // Estado final
              transition={{ duration: 0.5, delay: index * 0.1 }} // Transição com atraso
              className="flex justify-center items-center"
            >
              <img src={client.logo} alt={`Logo ${client.id}`} className="max-h-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
