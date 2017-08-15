/**
 * watch.js
 *
 * watch source code change
 */

var gulp = require('gulp');
var paths = require('../path.js');


gulp.task('watch', ['server'], function() {
  gulp.watch([paths.client + '/js/**/*.es6'], ['app:js'])
  gulp.watch([paths.client + '/stylus/**/*.styl'], ['app:css'])
});