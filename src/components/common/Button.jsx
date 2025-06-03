// src/components/common/Button.jsx
import React from 'react';

/**
 * Componente de botão reutilizável com variantes de estilo e tamanho.
 *
 * @param {object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo do botão (texto, ícone, etc.).
 * @param {Function} [props.onClick] - Função a ser chamada quando o botão é clicado.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} [props.variant='primary'] - A variante de estilo do botão.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - O tamanho do botão.
 * @param {string} [props.className=''] - Classes CSS adicionais para aplicar ao botão.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - O tipo HTML do botão.
 * @param {boolean} [props.disabled=false] - Se o botão deve estar desabilitado.
 * @param {React.ElementType} [props.as='button'] - O elemento a ser renderizado (ex: 'a' para um link estilizado como botão).
 * @param {string} [props.href] - O URL para onde o link deve apontar (usado se as='a').
 * @returns {JSX.Element} O elemento do botão renderizado.
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  as: Component = 'button', // Permite renderizar como 'a' ou outro elemento
  href,
  ...props // Para passar outros atributos HTML como aria-label, etc.
}) => {
  const baseStyles =
    'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out inline-flex items-center justify-center select-none';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-ipm-orange text-white hover:bg-orange-700 focus:ring-ipm-orange shadow-sm hover:shadow-md';
      break;
    case 'secondary':
      variantStyles = 'bg-ipm-blue text-white hover:bg-ipm-blue-dark focus:ring-ipm-blue shadow-sm hover:shadow-md';
      break;
    case 'outline':
      variantStyles =
        'border border-ipm-orange text-ipm-orange hover:bg-ipm-orange hover:text-white focus:ring-ipm-orange bg-transparent';
      break;
    case 'outline-secondary': // Adicionando uma variação de outline
      variantStyles =
        'border border-ipm-blue text-ipm-blue hover:bg-ipm-blue hover:text-white focus:ring-ipm-blue bg-transparent';
      break;
    case 'ghost':
      variantStyles = 'text-ipm-blue hover:bg-ipm-blue/10 focus:ring-ipm-blue bg-transparent';
      break;
    case 'danger':
      variantStyles = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md';
      break;
    default:
      variantStyles = 'bg-ipm-orange text-white hover:bg-orange-700 focus:ring-ipm-orange shadow-sm hover:shadow-md';
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1.5 text-sm leading-5'; // leading-5 para melhor alinhamento vertical
      break;
    case 'md':
      sizeStyles = 'px-5 py-2.5 text-base leading-6'; // leading-6
      break;
    case 'lg':
      sizeStyles = 'px-7 py-3 text-lg leading-7'; // leading-7
      break;
    default:
      sizeStyles = 'px-5 py-2.5 text-base leading-6';
  }

  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'hover:scale-[1.02] active:scale-[0.98]';

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`.trim();

  const commonProps = {
    className: combinedClassName,
    onClick: !disabled ? onClick : undefined, // Só passa onClick se não estiver desabilitado
    disabled: Component === 'button' ? disabled : undefined, // 'disabled' é específico para <button>
    ...props,
  };

  if (Component === 'a') {
    return (
      <a href={disabled ? undefined : href} {...commonProps} role="button" aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <Component type={Component === 'button' ? type : undefined} {...commonProps}>
      {children}
    </Component>
  );
};

export default Button;
