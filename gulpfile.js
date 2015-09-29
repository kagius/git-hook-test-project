'use strict';

var gulp = require('gulp');
var jasmine = require("gulp-jasmine");

gulp.task('test', function() {
    return gulp.src('test/**/*.js').pipe(jasmine());
});

var jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter("fail"));
});