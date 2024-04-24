/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./assets/*/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "bluevio":"#6655FF",
        "mygray":"#7575cc"
      }
    },
  },
  plugins: [],
}