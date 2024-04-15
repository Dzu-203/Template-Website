/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes : {
        slideDown : {
          '0%' : {top : '-10%'},
          '100%':{top : '50%'}
        },
        slideMenu : {
          '0%' : {transform : "translateX(-100%)"},
          '100%':{transform : "translateX(0)"}
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideMenu: 'slideMenu 0.5s ease-in',
      },
    
    },
  },
  plugins: [],
}

