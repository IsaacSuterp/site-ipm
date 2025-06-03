// src/components/common/Card.jsx
import React from 'react';
import Button from './Button'; // Nosso botão reutilizável

// Um componente de ícone placeholder. Substitua por ícones reais ou uma biblioteca.
const PlaceholderIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-ipm-orange" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.16 12.75M9.75 3.104a2.25 2.25 0 00-1.659 1.591L3.104 9.75m6.646 0v5.714a2.25 2.25 0 01-1.591 1.659l-5.714.659M9.75 3.104l5.714-.659a2.25 2.25 0 011.659 1.591l.659 5.714m0 0v5.714a2.25 2.25 0 01-.659 1.591l-5.16 2.405M14.25 9.75l.659-5.714a2.25 2.25 0 00-1.659-1.591l-5.714-.659M14.25 9.75L5.16 12.75m9.09 0l5.714.659a2.25 2.25 0 011.659 1.591l.659 5.714m0 0l-5.714.659a2.25 2.25 0 01-1.659-1.591l-.659-5.714m0 0l-5.16 2.405" />
  </svg>
);


const Card = ({
  icon,
  title,
  description,
  linkHref,
  linkText = "Saiba Mais",
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) => {
  const IconComponent = icon || PlaceholderIcon;

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${className}`}
    >
      <div className="mb-5 text-ipm-orange">
        <IconComponent className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <h3 className={`text-xl md:text-2xl font-semibold text-ipm-blue-dark mb-3 ${titleClassName}`}>
        {title}
      </h3>
      <p className={`text-ipm-gray-dark text-sm md:text-base leading-relaxed mb-6 flex-grow ${descriptionClassName}`}>
        {description}
      </p>
      {linkHref && (
        <Button href={linkHref} variant="outline" size="sm" as="a">
          {linkText}
        </Button>
      )}
    </div>
  );
};

export default Card;
