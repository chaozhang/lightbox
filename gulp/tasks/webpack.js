/**
 * webpack.js
 *
 * build javascript
 */

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../../webpack.config.js');
var paths = require('../path.js');


gulp.task('app:js', function () {
  gulp.src(paths.app + '/web/app.es6')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.output + '/js'));
});