import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Violette Élégante
        primary: {
          DEFAULT: '#A42396',        // Magenta vif - Couleur principale
          light: '#C44DB8',           // Version plus claire
          dark: '#8B2089',            // Violet moyen
        },
        secondary: {
          DEFAULT: '#701B7A',         // Violet foncé élégant
          dark: '#411060',            // Deep purple - Backgrounds sombres
          darker: '#52156A',          // Violet très foncé
        },
        accent: {
          purple: '#8B2089',          // Violet accent
          light: '#F5E6F3',           // Violet très clair pour backgrounds
          white: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#0A0A0A',         // Noir
          gray: '#1F1F1F',            // Gris foncé
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A42396 0%, #701B7A 100%)',
        'gradient-hero': 'linear-gradient(135deg, #A42396 0%, #8B2089 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F5E6F3 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
