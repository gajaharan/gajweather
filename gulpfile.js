var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglifyjs');
var minifyCSS = require('gulp-minify-css');

var config = {
  scripts: {
    src: './src/app/**/*.js',
  },
  css: {
    src: './src/css/*.css'
  }
}

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(concat('gaj.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./src/bundle'));
});

gulp.task('styles', function() {
  return gulp.src(config.css.src)
    .pipe(concat('gaj.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./src/bundle'));
});

gulp.task('lib', function() {
  var jsFilter = filter('*.js', {restore: true}),
      cssFilter = filter('*.css');
  return gulp.src(mainBowerFiles())
    .pipe(jsFilter)
    .pipe(concat('lib.js'))
    .pipe(uglify())    
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./src/bundle'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(concat('lib.css'))
    .pipe(minifyCSS())    
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./src/bundle'));
});

gulp.task('webserver', function() {
  return gulp.src('./src')
    .pipe(webserver({reload: true, open: true}));
});

gulp.task('build', ['scripts', 'styles', 'lib']);

gulp.task('default', ['webserver'], function() {
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.css.src, ['styles']);
});