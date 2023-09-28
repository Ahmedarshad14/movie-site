/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    backgroundColor: {
      'dark': '#1a1a1a', // Define dark background color
    },
    textColor: {
      'dark': '#ffffff', // Define dark text color
    },
  },
  plugins: [],
}