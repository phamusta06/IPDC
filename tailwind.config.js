/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
    },
    colors: {
      'primary': '#ED017F',
      'secondary':'#FFEAF5',
      'white':'#fff',
      'black':'#000',
      'bg-button': '#ED017F',
      'primary-dark': '#000000',
    },
     
  },
  plugins: [],
}

