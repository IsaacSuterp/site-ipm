// src/components/home/ContactSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-ipm-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-ipm-blue-dark mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fale Conosco
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-ipm-gray-dark mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Entre em contato para saber mais sobre nossas soluções.
        </motion.p>
        <motion.a
          href="mailto:contato@seusite.com"
          className="inline-block bg-ipm-blue-dark text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-ipm-blue-light transition"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Enviar Email
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
