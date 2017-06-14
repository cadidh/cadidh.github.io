var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    });
});

gulp.task('dev', ['browserSync'], function() {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('assets/**/*.js', browserSync.reload);
    gulp.watch('assets/**/*.css', browserSync.reload);
});
