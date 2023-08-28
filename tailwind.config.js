/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'desktop': "url('./images/bg-main-desktop.png')",
        'card-font': "url('./images/bg-card-front.png')",
        'card-back': "url('./images/bg-card-back.png')"
      },

      spacing:{
        '36rem' : '27rem', 
        '70' : '60%',
        '190' : '190%',
      }
    },

    minWidth:{
      '498px' : '397px',
    },

    maxWidth:{
      '400' : '400px',
    },

    minHeight : {
      '292px' : '236px',
    }
  },
  plugins: [],
}

