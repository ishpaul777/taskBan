/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': "#20212c",
        'dark-secondary': "#2b2c37",
        'accent': "#635fc7",
      },
    },
  },
  plugins: [],
}
