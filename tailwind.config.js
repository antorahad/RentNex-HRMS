/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'googleFont': 'Manrope, sans-serif'
      },
      colors: {
        'bodyColor' : '#191919',
        'primeColor': '#38E54D'
      }
    },
  },
  plugins: [require("daisyui")],
}