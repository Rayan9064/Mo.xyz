/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand_green: '#077330',
        brand_green_2: '#098B3A',
        brand_green_3: '#0AA344',
        brand_purple: '#8420F4',
        brand_teal: '#05D7F7',
        home: '#EFEFEF',
        gray_1: '#343434',
        gray_2: '#686868',
        gray_3: '#9D9D9D',
        gray_5: '#DADADA',
      },
    },
  },
  plugins: [],
}

