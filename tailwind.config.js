/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#f4f5f9",
        "bluish-purple": "#8278c5",
      },
    },
  },
  plugins: [],
};
