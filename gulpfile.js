var gulp = require('gulp');
var requireDir = require('require-dir');

// require all gulp tasks
requireDir('./gulp/tasks', { recurse: true });

// default build process
gulp.task('default', ['app:js', 'app:html', 'app:css', 'app:assets']);
