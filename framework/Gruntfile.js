module.exports = function(grunt) {

  // Utility to load the different option files based on their names http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  // Initial config
  var config = {
    pkg: grunt.file.readJSON('package.json')
  }

  // Load tasks from the tasks folder
  grunt.loadTasks('./src/tasks');

  // Load all the tasks options in tasks/options base on the name: watch.js => watch{}
  grunt.util._.extend(config, loadConfig('./src/tasks/options/'));

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-newer');
  
  // Manually load in the assmeble as as it doesn't have have grunt- prefix
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');


  // Default Task - Do everything
  grunt.registerTask('default', ['clean:asset_images', 'svg2png', 'sass', 'autoprefixer', 'cssmin', 'assemble:docs', 'copy:src_images', 'copy:fonts', 'requirejs']);
  // Images only task
  grunt.registerTask('images', ['clean:asset_images', 'svg2png', 'copy:src_images']);
  // JS only task
  grunt.registerTask('js', ['requirejs']);
  // Default Dev Task - Runs the Sass Watch.
  grunt.registerTask('dev', ['watch']);
  
};