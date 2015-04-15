module.exports = {
  options: {
    livereload: false,
  },
  scripts: {
    files: ['src/js/**/*.js'],
    tasks: ['requirejs'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['src/sass/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['src/img/**/*.{png,jpg,gif,svg}'],
    tasks: ['clean:asset_images', 'copy:src_images', 'svg2png'],
    options: {
      spawn: false,
    }
  }
}