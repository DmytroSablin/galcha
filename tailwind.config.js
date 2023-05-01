/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateRows: {
        'body': 'auto 50px'
      },
      gridTemplateColumns: {
        'footer': '250px auto 347px auto 200px'
      },
      backgroundImage: {
        'bg1': 'url("./src/assets/bg1.jpg")',
        'bg2': 'url("./src/assets/bg2.jpg")',
        'bg3': 'url("./src/assets/bg3.jpg")'
      }
    },
  },
  plugins: [],
}

