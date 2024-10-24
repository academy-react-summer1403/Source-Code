/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9F0099",
        sub: "#36c54E",
      },
      spacing: {
        "50%": "50%",
        "40%": "40%",
        "60%": "60%",
        "30%": "30%",
      },
    },
  },
  plugins: [],
};
