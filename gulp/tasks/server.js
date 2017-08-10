/**
 * server.js
 *
 * start local server - browserSync
 */

var gulp = require('gulp');
var paths = require('../path.js');
var browserSync = require("browser-sync");


gulp.task('server', function () {
  browserSync({
    open: false,
    server: {
      baseDir: paths.output
    }
  });
});