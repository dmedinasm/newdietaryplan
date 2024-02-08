/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#FB6356'
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif'],
      dancing:['Dancing Script', 'cursive']
    },
    extend: {
      backgroundImage:{
        'bgHome': "url('./assets/top-left-bg.jpg')"
      }
    },
  },
  plugins: [],
}

