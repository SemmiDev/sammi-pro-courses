/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}/'],
  theme: {
    extend: {
      colors: {
        'my-dark-main': '#0f172a',
      },
    },
  },
  plugins: [],
}
