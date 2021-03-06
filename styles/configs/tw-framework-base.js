/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    screens: {
      xs: "352px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)",
    },
    extend: {
      animation: {
        spiner: "spin .6s linear infinite",
      },
      opacity: {
        15: "0.15",
        85: "0.85",
      },
    },
  },
};
