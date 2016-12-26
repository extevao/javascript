var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('public/**/*').on('change', browserSync.reload);
});
