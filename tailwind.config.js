const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [
    './**/*.html'
  ],
  theme: {
    fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        "niebieski": "#1a69b0",
        "granatowy": "#005698",
        "blekitny": "#59c7bb",
        "rozowy": "#f35d85",
        "zolty": "#ddbc65"
      }
    }
  },
  variants: {},
  plugins: [],
}