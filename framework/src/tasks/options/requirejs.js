// Require js
module.exports = {
  compile: {
    options: {
      name: 'main',
      baseUrl: "src/js/",
      //paths: { 'jquery': 'empty:' },
      include: ['libs/require', 'main'],
      mainConfigFile: "src/js/main.js",
      out: "../_assets/js/all.js"
    }
  }
}
