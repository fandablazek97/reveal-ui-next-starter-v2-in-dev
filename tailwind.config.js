/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("./styles/configs/tw-framework-colors"),
    require("./styles/configs/tw-framework-base"),
  ],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
