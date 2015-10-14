var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var html2js = require('gulp-html2js');
var merge = require('gulp-merge');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


// Runs JSHint on the src/*.js file(s)
gulp.task('jshint', function () {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Minifies the CSS
gulp.task('minify-css', function() {
  return gulp.src('src/*.css')
    .pipe(minifyCss({compatibility: 'ie10'}))
    .pipe(gulp.dest('dist/'));
});

// Converts HTML to JS and uglifys it with the app
gulp.task('build-app', ['jshint'], function () {
  return merge(
    gulp.src('src/*.html')
      .pipe(html2js({
        outputModuleName: 'angular-feedback-form.templates',
        useStrict: true
      }))
      .pipe(uglify()),
    gulp.src('src/*.js')
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
  )
    .pipe(concat('angular-feedback-form.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.css', ['minify-css']);
  gulp.watch('src/*.js', ['build-app']);
  gulp.watch('src/*.html', ['build-app']);
});
gulp.task('build', ['jshint', 'build-app', 'minify-css']);

//gulp.task('compile', ['cssCompile', 'fontsCompile', 'injectCompile']);
//gulp.task('default', ['compile'] );

