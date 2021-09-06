module.exports = {
  mode:"jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#00A19D",
      secondery: "#FFF8E5",
      yelloCustom: "#FFB344",
      pinkCustom: "#E05D5D",
    },
    fontFamily: {
      Inconsolata: ['Inconsolata', "monospace"],

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
