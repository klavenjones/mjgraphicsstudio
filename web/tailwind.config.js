module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        10: '10px'
      },
      borderRadius: {
        half: '50%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
