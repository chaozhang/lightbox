/**
 * clean.js
 *
 * clean up build
 */

var gulp = require('gulp');
var paths = require('../path.js');
var del = require('del');


gulp.task('clean', function (cb) {
  del([
    paths.output + '/**/*',
    paths.npm
  ], cb);
});