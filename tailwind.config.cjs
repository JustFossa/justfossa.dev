/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  jit: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': {'max': '450px'}
      },
      colors: {
        'darker-text': '#cccccc',
      }
    },
  },
  plugins: [],
}
