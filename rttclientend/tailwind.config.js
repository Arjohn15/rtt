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
          },
          screens: {
              "sm": "640px",
              "md": "768px",
              "lg": "1024px",
              "xl": "1280px",
              "2xl": "1536px",
          }
      },
  },
    plugins: [],

}

