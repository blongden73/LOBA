module.exports = function (grunt) {
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
  
    // Project configuration
    grunt.initConfig({
      // Configure the connect plugin for the local server
      connect: {
        server: {
          options: {
            port: 8000,             // Port to run the server
            base: '',         // Folder to serve
            hostname: 'localhost',  // Hostname for the server
            livereload: true        // Enable LiveReload
          }
        }
      },
  
      // Configure the watch plugin
      watch: {
        options: {
          livereload: true         // Trigger LiveReload on file changes
        },
        files: ['public/**/*'],    // Watch all files in the 'public' directory
        tasks: []                  // No additional tasks to run during watching
      }
    });
  
    // Default task that starts the server and watches for changes
    grunt.registerTask('default', ['connect', 'watch']);
  };
  