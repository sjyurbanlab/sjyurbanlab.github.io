const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        white: '#FFF',
        'emerald-green': '#50C878',
        'cobalt-blue': '#1446A0',
        'razzmatazz-red': '#DB3069',
        'mustard-yellow': '#F5D547',
        'jet-black': '#3C3C3B',
      },
    },
  },
  variants: {},
  plugins: [],
};
