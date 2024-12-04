/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
      extend: {
          colors: {
              "red": "#E94B4A",
              "white": "#FFFFFF"
          },
          fontFamily: {
              "arimo": "Arimo",
              "rowdies": "Rowdies"
          }
      },
  },
  plugins: [],
}

