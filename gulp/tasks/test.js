var gulp   = require('gulp');
var mocha = require('gulp-mocha');
var config = require('../config');


gulp.task('mocha', () => {
  require('babel-core/register');
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha());
});

gulp.task('test',['mocha'], function() {
  gulp.watch(['src/app/**/*.js','test/**/*.js'], ['mocha']);
});
