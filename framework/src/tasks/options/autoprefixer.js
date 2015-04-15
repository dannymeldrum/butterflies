// Parse CSS and add vendor prefixes to rule - https://github.com/postcss/autoprefixer

module.exports = {
  options: {
    browsers: ['last 3 version'],

  },
  style: {
    expand: true,
    flatten: true,
    src: '../_assets/css/style.css',
    dest: '../_assets/css/'
  }
}