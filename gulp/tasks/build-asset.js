/**
 * build-asset.js
 *
 * build front end assets
 */

var gulp = require('gulp');
var paths = require('../path.js');


gulp.task('app:assets', function() {
  gulp.src(paths.assets + '/**/*')
    .pipe(gulp.dest(paths.output + '/assets'));
});