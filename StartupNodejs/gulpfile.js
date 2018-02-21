"use strict";
var gulp = require("gulp");

var paths = {
    webroot: "./public/",
    publish: "./published/",
};

gulp.task('copy-css', function () {
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(paths.webroot + '/stylesheets/'));
});

gulp.task('copy-js', function () {
    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(paths.webroot + 'javascripts/'));
    gulp.src('./bower_components/angularjs/angular.min.js')
        .pipe(gulp.dest(paths.webroot + 'javascripts/'));
    gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.min.js')
        .pipe(gulp.dest(paths.webroot + 'javascripts/'));
});

gulp.task('build', function () {

});

gulp.task('publish', function () {
    gulp.src('layout.html')
        .pipe(gulp.dest(paths.publish));
    gulp.src('package.json')
        .pipe(gulp.dest(paths.publish));
    gulp.src('server.js')
        .pipe(gulp.dest(paths.publish));

    gulp.src('app/**/*')
        .pipe(gulp.dest(paths.publish + 'app'));
    gulp.src('public/**/*')
        .pipe(gulp.dest(paths.publish + 'public'));
    gulp.src('data/**/*')
        .pipe(gulp.dest(paths.publish + 'data'));
    gulp.src('bin/**/*')
        .pipe(gulp.dest(paths.publish + 'bin'));
});