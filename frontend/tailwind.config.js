/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        courgette: ['Courgette', 'cursive'],
        unbounded: ['Unbounded'],
      },
    },
  },
  plugins: [require('daisyui')],
};
