/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { title: ["Rubik Vinyl", "sans-serif"] },
      boxShadow: { upShadow: ["0px -20px 50px -12px rgb(0 0 0 / 0.25)"] },
    },
  },
  plugins: [],
};
