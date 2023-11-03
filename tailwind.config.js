/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}