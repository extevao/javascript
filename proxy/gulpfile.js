var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('default', ['server'], function() {});

gulp.task('server', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./client"
        }
    });

    gulp.watch('client/**/*').on("change", reload);
});
