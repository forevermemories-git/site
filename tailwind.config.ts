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

        // Violet-rose raffiné (accent principal) — orchidée lumineuse
        primary: {
          DEFAULT: '#B65EAB',      // Orchidée propre et lumineuse
          dark: '#8E4486',         // Hover, prune profonde
          light: '#D89BD0',        // Lilas-rose pour highlights / mots accent
          muted: 'rgba(182, 94, 171, 0.12)', // Backgrounds subtils
        },

        // Rose lumineux (stop clair du gradient)
        rose: {
          DEFAULT: '#E0A8D6',      // Rose doux lumineux
          light: '#EAC2E2',        // Plus clair
          muted: 'rgba(224, 168, 214, 0.15)',
        },

        // Textes
        cream: {
          DEFAULT: '#F5F3F0',      // Texte principal - légèrement chaud
          muted: '#A8A4A0',        // Texte secondaire
          dark: '#6E6A66',         // Texte tertiaire
        },
      },

      fontFamily: {
        // Texte/UI : Geist · Titres : Bricolage Grotesque
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-2xl': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['clamp(2.75rem, 6vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(1.875rem, 3vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'overline': ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
      },

      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.6s ease-out 0.15s forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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
        'gradient-primary': 'linear-gradient(135deg, #B65EAB 0%, #8E4486 100%)',
        'gradient-soft': 'linear-gradient(135deg, #D89BD0 0%, #B65EAB 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0C0C0E 0%, #121216 100%)',
        'gradient-radial': 'radial-gradient(circle at center, rgba(182, 94, 171, 0.08) 0%, transparent 70%)',
      },

      boxShadow: {
        'glow': '0 0 40px rgba(182, 94, 171, 0.25)',
        'glow-lg': '0 0 60px rgba(182, 94, 171, 0.35)',
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
