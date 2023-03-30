/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/public/unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
