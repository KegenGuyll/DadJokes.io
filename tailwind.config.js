module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '320px', max: '480px' },
      md: { min: '481px', max: '768px' },
      lg: { min: '1025px', max: '1200px' },
      xl: { min: '1201px' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
