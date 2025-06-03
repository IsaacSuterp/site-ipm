// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SolutionsSection from '../components/home/SolutionsSection'; // Importar a nova seção
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SolutionsSection /> {/* Adicionar a nova seção aqui */}
      <ClientsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
