/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ['Roboto', 'sans-serif']
    },
    gridTemplateColumns: {
      '50/50': '49% 49%',
      '33/33/33': '32% 32% 32%',
      '70/30': '70% 20%',
    }
  },
  plugins: [],
}