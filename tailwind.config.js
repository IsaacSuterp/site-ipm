    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'ipm-blue': '#004A99',
            'ipm-blue-dark': '#003366',
            'ipm-orange': '#FF6600',
            'ipm-gray': {
              light: '#F0F0F0', // Usado no Hero e Footer
              DEFAULT: '#CCCCCC',
              dark: '#333333',
            }
          },
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            // Adicione outras keyframes se necessário
          },
          animation: {
            fadeInUp: 'fadeInUp 0.7s ease-out forwards', // Ajustei a duração
            // Adicione outras animações se necessário
          },
          // Adicione esta seção para animation-delay
          animationDelay: {
            '100': '100ms',
            '200': '200ms',
            '300': '300ms',
            '400': '400ms',
            '500': '500ms',
            '600': '600ms',
            '700': '700ms',
            '800': '800ms',
            '900': '900ms',
            '1000': '1000ms',
          }
        },
      },
      plugins: [
        // Adicione este plugin para habilitar as classes de animation-delay
        function ({ addUtilities, theme, e }) {
          const delays = theme('animationDelay');
          const utilities = Object.entries(delays).map(([key, value]) => ({
            [`.${e(`animation-delay-${key}`)}`]: { 'animation-delay': value },
          }));
          addUtilities(utilities, ['responsive']);
        }
      ],
    }
    