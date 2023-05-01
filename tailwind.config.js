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
        'bg1': 'url("bg1.png")',
        'bg2': 'url("bg2.png")',
        'bg3': 'url("bg3.png")'
      }
    },
  },
  plugins: [],
}

