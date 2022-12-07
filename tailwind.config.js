module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors : {
      annen : {
        yazi : '#897ffa',
        2 : '#2E4240',
        3 : '#12786C',
        4 : '#4BBFB2',
        DEFAULT : '#212529'
      } ,
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
