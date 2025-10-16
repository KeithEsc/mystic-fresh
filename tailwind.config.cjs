/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],   // default body
        serif: ['"Abril Fatface"', 'ui-serif', 'Georgia'],  // headings
      },
    },
  },
  plugins: [],
};