/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./assets/**/*.{html,js,css}",
    "./components/**/*.{html,js}",
    "./apps/**/*.{html,js}",
    "./dashboard/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./assets/css/**/*.css",
    "./assets/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'size': 'width, height',
      },
      scale: {
        '102': '1.02',
        '98': '.98',
      },
    },
  },
  plugins: [],
}
