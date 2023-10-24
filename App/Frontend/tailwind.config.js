/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    fontFamily:{
      'sans': ['Montserrat', 'sans-serif'],
    },

    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#312e81',
        'secondary': '#134e4a',
        'neutral': '#a78bfa'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#312e81',
        'secondary': '#134e4a',
        'neutral': '#a78bfa'
      }),
  },
  plugins:[],
}
}

