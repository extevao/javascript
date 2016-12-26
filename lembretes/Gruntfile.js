module.exports = function(grunt) {

	grunt.initConfig({

		browserSync: {
			public: {
				bsFiles: {
					watchTask: true,
					src: ['app/**/*']
				},
				options: {
					server: {
						baseDir: 'app'
					}
				}
			}
		}


	});

	grunt.registerTask('serve', ['browserSync']);

	grunt.loadNpmTasks('grunt-browser-sync');
}
