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
        slideDownAndFade:
        'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      }
    }        
  },
  plugins: [],
}