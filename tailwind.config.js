modules.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  variants:{
    extends: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
