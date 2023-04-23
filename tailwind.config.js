/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/media/unsplash.jpg')",
      },
      colors:{
        primary:'#00172C',
        secondary : '#E1688C',
        menu: '#C8C8C8'
      }
    },
  },
  plugins: [],
};
