module.exports = {
  options: {
    assets: '../_assets/',
    layout: "src/html/layouts/default.hbs",
    partials: ['src/html/partials/**/**/*.hbs'],
    helpers: ['*-helper-module'],
    flatten: true,
  },
  docs: {
    files: {
        '../': ['src/html/pages/*.hbs']
        //'../': ['src/html/index/*.hbs']
    }
  }
}