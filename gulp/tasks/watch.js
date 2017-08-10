/**
 * watch.js
 *
 * watch source code change
 */

var gulp = require('gulp');
var paths = require('../path.js');


gulp.task('watch', ['server'], function() {
  gulp.watch([paths.src + '/js/**/*.es6'], ['app:js'])
  gulp.watch([paths.src + '/stylus/**/*.styl'], ['app:css'])
});