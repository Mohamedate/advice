/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(218, 23%, 16%)",
        green: "hsl(150, 100%, 66%)",
        grayish: "hsl(217, 19%, 38%)",
        dGrayish: "hsl(217, 19%, 24%)",
        cyan: "hsl(193, 38%, 86%)",
      },
    },
  },
  plugins: [],
};
