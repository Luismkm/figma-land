/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/background-people.png')",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      colors: {
        gray: {
          800: '#18171D',
          500: '#252B42',
          400: '#374754',
        },
        blue: {
          500: '#2091F9',
        },
        white: {
          800: '#D8D8D8',
          700: '#DEDEDE',
          600: '#E8E8E8',
          500: '#F4F4F4',
          100: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
