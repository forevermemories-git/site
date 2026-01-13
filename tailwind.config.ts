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
        // === PALETTE "MAGENTA RAFFINÉ" - Désaturée et harmonieuse ===

        // Fonds sombres
        dark: {
          DEFAULT: '#0C0C0E',      // Noir profond légèrement bleuté
          lighter: '#121216',      // Fond secondaire
          card: '#18181D',         // Surface des cartes
          elevated: '#1E1E24',     // Surfaces élevées
        },

        // Magenta/Fuchsia désaturé (accent principal)
        primary: {
          DEFAULT: '#9B3B8A',      // Fuchsia raffiné, moins saturé
          dark: '#7A2E6D',         // Hover, profondeur
          light: '#B85AA6',        // Version plus claire
          muted: 'rgba(155, 59, 138, 0.12)', // Backgrounds subtils
        },

        // Rose poudré (accent secondaire)
        rose: {
          DEFAULT: '#C17BA8',      // Rose doux
          light: '#D4A5C5',        // Plus clair
          muted: 'rgba(193, 123, 168, 0.15)',
        },

        // Textes
        cream: {
          DEFAULT: '#F5F3F0',      // Texte principal - légèrement chaud
          muted: '#A8A4A0',        // Texte secondaire
          dark: '#6E6A66',         // Texte tertiaire
        },
      },

      fontFamily: {
        // Une seule famille pour la cohérence
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },

      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.6s ease-out 0.15s forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9B3B8A 0%, #7A2E6D 100%)',
        'gradient-soft': 'linear-gradient(135deg, #B85AA6 0%, #9B3B8A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0C0C0E 0%, #121216 100%)',
        'gradient-radial': 'radial-gradient(circle at center, rgba(155, 59, 138, 0.08) 0%, transparent 70%)',
      },

      boxShadow: {
        'glow': '0 0 40px rgba(155, 59, 138, 0.25)',
        'glow-lg': '0 0 60px rgba(155, 59, 138, 0.35)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
