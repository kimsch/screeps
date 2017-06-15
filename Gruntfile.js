module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    screeps: {
      options: {
        email: 'acriax@gmail.com',
        password: 'rlRX6lePkM0Y',
        branch: 'default',
        ptr: false
      },
      dist: {
        src: ['dist/*.js']
      }
    }
  });
}
