/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#c2c5aa",
        "light-green": "#a4ac86",
        "light-brown": "#a68a64",
        "darker-brown": "#936639",
        "lightest-brown": "#b6ad90",
        "dark-green": "#656d4a",
      },
    },
  },
  plugins: [],
};
