/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#DA722C',
        'custom-blue': '#057ADA',
        'custom-white': '#E8F7FB',
        'custom-green': '#023047',
        'custom-dark-blue': '#070917',
        'custom-lilac': '#6F7DFB',
        'custom-gradient-dark': '#26308C',
      },
      spacing: {
        '116': '116px',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}