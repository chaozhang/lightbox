/**
 * deploy.js
 *
 * deploy to gulp-gh-pages
 */

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var paths = require('../path.js');


gulp.task('deploy', function() {
  gulp.src(paths.output + '/**/*')
    .pipe(deploy())
});