module.exports = function(grunt) {

  cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'public/assets/css/output.css': ['bower_components/animate.css/animate.css']
	    }
	  }
	}

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};