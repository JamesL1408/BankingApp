module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        robotoCondensed:["'Roboto Condensed',sans-serif"],
        zenAntique:["'Zen Antique',serif"],
        roboto:["'Roboto',sans-serif"],
      },
      screens:{
        'xs': '550px'
      },
      textColor:{
        'neonGreen':'#39FF14',
      },
      backgroundColor:{
        'neonGreen':'#39FF14',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
