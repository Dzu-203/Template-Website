/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideMenu: {
          '0%': { transform : 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation : {
        slideMenu : 'slideMenu 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

