/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito',
      },
      colors: {
        'woovi-green': '#03D69D',
        'woovi-blue': '#133A6F', 
        'woovi-gray': '#B2B2B2', 
        'woovi-gray-100': '#E5E5E5', 
        'woovi-gray-200': '#AFAFAF', 
        'woovi-text': '#4D4D4D', 
      },
      animation: {
        close: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      },
      keyframes: {
        'slide-up': {
          from: {
            height: 'auto'
          },
          to: {
            height: 0,
          }
        },
      }
    }        
  },
  plugins: [],
}