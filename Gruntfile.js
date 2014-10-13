module.exports = function(grunt) {

	grunt.initConfig({
		pkg: require('./package'),
		less: {
			all: {
				options: {
					paths: ['less']
				},
				files: {
					'dist/<%= pkg.name %>.css': 'less/<%= pkg.name %>.less'
				}
			}
		}
	});

	// plugins
	grunt.loadNpmTasks('grunt-contrib-less');

	// tasks
	grunt.registerTask('default', ['less']);
};