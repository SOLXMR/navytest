/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001F3F',
        'ripple-blue': '#23292F',
        'xrp-blue': '#0095D9',
        'gold': '#FFD700',
      },
      fontFamily: {
        'military': ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/src/assets/wave-bg.svg')",
      },
    },
  },
  plugins: [],
}
