/**
 * build-html.js
 *
 * build html
 */

var gulp = require('gulp');
var paths = require('../path.js');


gulp.task('app:html', function () {
  gulp.src(paths.app + '/index.html')
    .pipe(gulp.dest(paths.output))
});