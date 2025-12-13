/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evaGreen: '#39ff14',
        evaPurple: '#9d00ff',
        evaDark: '#0a0a0a',
        evaGray: '#1a1a1a',
      },
      fontFamily: {
        'eva': ['"Rajdhani"', 'sans-serif'], // Assuming we might add a font later, or just use sans
      },
       boxShadow: {
        'neon-green': '0 0 10px #39ff14, 0 0 20px #39ff14',
        'neon-purple': '0 0 10px #9d00ff, 0 0 20px #9d00ff',
      }
    },
  },
  plugins: [],
}
