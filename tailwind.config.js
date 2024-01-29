/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundSize: {
        '35vh': '32vh',
        '75vh': '75vh',
        '40vh': '40vh',
      },
      backgroundColor: {
        'header-bg' : '#333D34',
        'card-bg' : '#283029',
        'creamy': '#846F60'
      },
      backgroundImage: {
        'header-img': "url('/drea-header-large.webp')",
        'header-mobile': "url('/drea-header-mobile.webp')",
        'header-small': "url('/drea-header-small.webp')",
        'header-medium': "url('/drea-header-medium.webp')",
      },
      height: {
        'h-header-img': '100%',
        '50vh': '50vh'
      },
      colors: {
        'deep-green': '#283029',
        'forest-green': '#333D34',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}