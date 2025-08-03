/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        pokemon: {
          bug: '#A8B820',
          dark: '#705848',
          dragon: '#7038F8',
          electric: '#F8D030',
          fairy: '#EE99AC',
          fighting: '#C03028',
          fire: '#F08030',
          flying: '#A890F0',
          ghost: '#705898',
          grass: '#78C850',
          ground: '#E0C068',
          ice: '#98D8D8',
          normal: '#A8A878',
          poison: '#A040A0',
          psychic: '#F85888',
          rock: '#B8A038',
          steel: '#B8B8D0',
          water: '#6890F0',
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
