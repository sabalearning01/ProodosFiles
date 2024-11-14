/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'full-gradient': 'linear-gradient(to right, #773DD3, #40B7D1)',
      },
  
    },
  },
  plugins: [],
}

