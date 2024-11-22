/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      myBlack: '#0a0d14',
      myGreen: '#2fd973',
      myWhite: '#f8f8f8',
      'myBlack-200': '#22252B'
    },
    fontFamily: {
      lucky: 'Luckiest Guy',
      roboto: 'Roboto'
    },
    extend: {},
  },
  plugins: [],
}

