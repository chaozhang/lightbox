var gulp = require('gulp');
var del = require('del');

var paths = require('./gulp/path.js');
var requireDir = require('require-dir');

// require all gulp tasks
requireDir('./gulp/tasks', { recurse: true });







// default build process
gulp.task('default', ['app:js', 'app:html', 'app:css', 'app:assets']);



// build watch
gulp.task('watch', ['server'], function() {
  gulp.watch([paths.src + '/js/**/*.es6'], ['app:js'])
  gulp.watch([paths.src + '/stylus/**/*.styl'], ['app:css'])
});

// clean up
gulp.task('clean', function (cb) {
  del([
    paths.output + '/**/*',
    paths.npm
  ], cb);
});
