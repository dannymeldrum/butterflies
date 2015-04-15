// Copy over files from src to _assets https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
  src_images: {
    files: [
      // Move over entire image folder to '_assets'
      {expand: true, cwd: './src/', src: ['img/**'], dest: '../_assets/'},
    ],
  },
  fonts: {
    files: [
      // Move over entire image folder to '_assets'
      {expand: true, cwd: './src/', src: ['fonts/**'], dest: '../_assets/'},
    ],
  },
  videos: {
    files: [
      // Move over entire image folder to '_assets'
      {expand: true, cwd: './src/', src: ['videos/**'], dest: '../_assets/'},
    ],
  },
  modernizr: {
    files: [
      // Move over entire image folder to '_assets'
      {expand: true, cwd: './src/js/libs/', src: ['modernizr.custom.js'], dest: '../_assets/js/'},
    ],
  },
}