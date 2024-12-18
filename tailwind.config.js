const { Playfair } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "15px",
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },

    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
      playfair: 'var(--font-playfair)',
    },

    backgroundImage: {
      hero: "url('/assets/img/hero/bg.png')",
      membership: "url('/assets/img/membership/bg.jpg')",
    },

    extend: {
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
        // primary: {
        //   DEFAULT: "#333",
        //   100: "#484848",
        //   200: "#151515",
        //   300: "#111",
        // },
        // accent: '#d4000d',
      },
    },
  },
  plugins: [],
};
