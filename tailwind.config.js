/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Anadolu Modern paleti
        ink: {
          50: '#F5EFE6',
          100: '#EBE2D2',
          200: '#D6C5A8',
          300: '#A89272',
          400: '#7A6448',
          500: '#4A3923',
          600: '#3A2C1B',
          700: '#2B2014',
          800: '#1F170E',
          900: '#15100A',
        },
        clay: {        // Pazaryeri / Kınık çömlek tonu
          100: '#F4DCC4',
          200: '#E5BC95',
          300: '#D29563',
          400: '#B66E36',
          500: '#8E4F22',
          600: '#6B3917',
        },
        cesme: {       // Çoban çeşmesi su yeşili - Gölpazarı tonu
          100: '#D6E5DD',
          200: '#A4C4B3',
          300: '#6F9D87',
          400: '#3F7560',
          500: '#235244',
          600: '#163A30',
        },
        sun: {         // Gün batımı
          200: '#F6C988',
          300: '#EDA458',
          400: '#D87B30',
          500: '#A85820',
        },
        cream: '#F8F2E6',
        cocoa: '#231810',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'paper':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.93 0 0 0 0 0.88 0 0 0 0 0.78 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        ink: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        ink: 'ink 350ms cubic-bezier(.2,.8,.2,1) forwards',
        shimmer: 'shimmer 3s linear infinite',
        rise: 'rise 600ms cubic-bezier(.2,.8,.2,1) forwards',
      },
    },
  },
  plugins: [],
};
