const gulp = require('gulp')

gulp.task('copy-less', () => {
  gulp.src('src/**/*.less')
    .pipe(gulp.dest('lib'))
})
