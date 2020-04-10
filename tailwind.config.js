module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    margin: ['direct-children', 'default', 'responsive'],
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindvue/direct-children-plugin'),
  ]
}
