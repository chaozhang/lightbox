var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var del = require('del');
var browserSync = require("browser-sync");
var stylus = require('gulp-stylus');
var nib = require('nib');
var webpack = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");

var paths = {
  assets: './assets',
  src: './src',
  output: './dist',
  npm: './node_modules'
};

// deploy to prod server
gulp.task('deploy', function() {
  gulp.src(paths.output + '/**/*')
    .pipe(deploy())
});

// build app js
gulp.task('app:js', function () {
  gulp.src(paths.src + '/js/app/app.es6')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.output + '/js'));
});

// build index html file
gulp.task('app:html', function () {
  gulp.src(paths.src + '/index.html')
    .pipe(gulp.dest(paths.output))
});

// build app css
gulp.task('app:css', function() {
  gulp.src(paths.src + '/stylus/app.styl')
    .pipe(stylus({
      'include css': true,
      use: [nib()], 
      errors: true
    }))
    .pipe(gulp.dest(paths.output + '/css'));
});

// build app assets
gulp.task('app:assets', function() {
  gulp.src(paths.assets + '/**/*')
    .pipe(gulp.dest(paths.output + '/assets'));
});

// default build process
gulp.task('default', ['app:js', 'app:html', 'app:css', 'app:assets']);

// local web http server - browserSync
gulp.task('server', function () {
  browserSync({
    open: false,
    server: {
      baseDir: paths.output
    }
  });
});

// build watch
gulp.task('watch', function() {
  gulp.watch([paths.src + '/js/**/*.es6'], ['app:js'])
  gulp.watch([paths.src + '/stylus/**/*.styl'], ['app:css'])
});

// clean up
gulp.task('clean', function (cb) {
  del([
    paths.output + '/**/*',
    paths.npm
  ], cb);
});
