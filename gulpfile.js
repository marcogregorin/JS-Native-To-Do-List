// DECLARE VARS
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('css-build', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('css-minify', ['css-build'], function(){
  return gulp.src('./dist/css/main.css')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css'))
});
