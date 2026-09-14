/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        frg: {
          navy: "#053D5A",
          red: "#EE2E2E",
          silver: "#A2ABAA",
          gray: "#787D7B",
          white: "#F8F8F8"
        }
      }
    }
  },
  plugins: []
};