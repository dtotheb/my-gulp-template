var gulp = require('gulp');
var config = require('../config');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('test', function() {
    gulp.watch(['src/**', 'test/**'], ['mocha']);
});
