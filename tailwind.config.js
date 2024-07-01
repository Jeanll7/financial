/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#18208f',
        blue: '#5353ec',
        red: '#FF0000',
        green: '#008000',
      },
      boxShadow: {
        custom: '0 0 5px #ccc',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-blue',
    'bg-red',
    'bg-green',
  ],
  plugins: [],
}

