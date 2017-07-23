var gulp = require('gulp')
var sass = require('gulp-sass')

var input = './styles/**/*.scss'
var output = './static'

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass({ includePaths: ['node_modules'] }))
    .pipe(gulp.dest(output))
})


gulp.task('default', ['sass']);
