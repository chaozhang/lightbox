/**
 * build-css.js
 *
 * compile stylus to css
 */

var gulp = require('gulp');
var paths = require('../path.js');
var stylus = require('gulp-stylus');
var nib = require('nib');


gulp.task('app:css', function() {
  gulp.src(paths.client + '/stylus/app.styl')
    .pipe(stylus({
      'include css': true,
      use: [nib()], 
      errors: true
    }))
    .pipe(gulp.dest(paths.output + '/css'));
});