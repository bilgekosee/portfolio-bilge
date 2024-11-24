/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "600px",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        wave: "wave 1s infinite",
      },
      colors: {
        customGray: "#fafafa",
        customWhite: "#fff",
        customBorder: "#00000014",
      },
    },
  },
  plugins: [],
};
