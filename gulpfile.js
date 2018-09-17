// DECLARE VARS
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');


// COMPILE SCSS INTO CSS
gulp.task('css-compile', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// MINIFY COMPILED CSS
gulp.task('css-minify', ['css-compile'], function(){
  return gulp.src('./dist/css/main.css')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css'))
});

// COMPILE+MINIFY
gulp.task('css-build', ['css-compile', 'css-minify']);

// COMPILE JS THROUGH WEBPACK
gulp.task('scripts', function(callback){
  webpack(require('./webpack.config.js'), function(err, stats){
    if(err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
})


// WATCH
gulp.task('watch', function(){

  // INITIALIZE BROWSER SYNC
  browserSync.init({
    notify: false,
    server: {
      baseDir: '.'
    }
  })

  // CSSINJECT - Refresh when css changes. It won't start untill Minify has ran
  gulp.task('cssInject', ['css-build'], function() {
    return gulp.src('./dist/css/main.min.css')
      .pipe(browserSync.stream());
  });

  // SCRIPTSREFRESH - Refresh when js changes. It won't start untill Scripts has ran
  gulp.task('scriptsRefresh', ['scripts'],function(){
    browserSync.reload();
  })

  // REFRESH BROWSER WHEN INDEX.HTML CHANGES
  watch('index.html', function(){
    browserSync.reload();
  });

  gulp.watch('./dist/css/main.css', ['cssInject']);

  // Compile+minify
  gulp.watch('./assets/scss/**/*.scss', ['css-build']);

  // Run when .js changes
  gulp.watch('./assets/js/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });

})
