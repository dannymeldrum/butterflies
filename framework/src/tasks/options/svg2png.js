// Rasterize SVG to PNG using Phantom JS - https://github.com/dbushell/grunt-svg2png
module.exports = {
  all: {
    files: [
        // rasterize all SVG files in "src/img/svg/" and its subdirectories to "src/img/raster"
        { cwd: './src/img/svg/', src: ['**/*.svg'], dest: '../_assets/img/svg2png' }
    ]
  }
}