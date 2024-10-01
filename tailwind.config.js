/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'text': '#e7ebf3',
        'background': '#0a1015',
        'primary': '#164478',
        'secondary': '#0d1e2b',
        'accent': '#CCFFFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      width: {
        '128': '32rem',
        '160': '40rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
      }
    },
  },
  plugins: [],
}

