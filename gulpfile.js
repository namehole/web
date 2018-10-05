var gulp = require('gulp');
var sass = require('gulp-sass')
var minifyCSS = require('gulp-csso');

gulp.task('default', [ 'css' ]);

gulp.task('css', function() {
  return gulp.src('assets/sass/*.sass')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest("static/css/"))
});

gulp.watch('assets/sass/*.sass', ['css'])