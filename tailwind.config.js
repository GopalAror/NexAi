/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'poppins',
      },
      backgroundImage: {
        "overlay": "linear-gradient(180deg, #040404 24.07%, rgba(4, 4, 4, 0) 96.3%)",

      },
      backgroundSize: {
        "full": "100% 100%"
      },
    },
  },
  plugins: [],
}

