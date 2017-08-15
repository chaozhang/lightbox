/**
 * watch.js
 *
 * watch source code change
 */

var gulp = require('gulp');
var paths = require('../path.js');


gulp.task('watch', ['server'], function() {
  gulp.watch([paths.app + '/js/**/*.es6'], ['app:js'])
  gulp.watch([paths.app + '/stylus/**/*.styl'], ['app:css'])
});