module.exports = function(grunt) {

  cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'bower_components/animate.css/animate.css',
	      src: ['*.css'],
	      dest: 'public/assets/css',
	      ext: '.min.css'
	    	}]
  		}
	}

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};