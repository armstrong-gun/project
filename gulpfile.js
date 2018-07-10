var gulp = require('gulp');
var sass = require('gulp-sass');
// var livereload = require('gulp-livereload')
gulp.task('sass', function() {
    gulp.src('sass/all.scss')
        .pipe(sass())
        .pipe(gulp.dest("css"))
})
gulp.task('watch', ['sass'], function() {
    gulp.watch('sass/*.scss', ['sass'])
})