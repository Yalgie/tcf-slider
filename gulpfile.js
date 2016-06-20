"use strict";

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
   clean = require('gulp-clean-css'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
     del = require('del');

gulp.task('compileSass', function() {
  return gulp.src("src/tcf-slider.scss")
      .pipe(sass())
      .pipe(gulp.dest('css'));
});

gulp.task("minifySass", ["compileSass"], function() {
  return gulp.src("css/tcf-slider.css")
  	.pipe(clean({compatibility: 'ie8'}))
    .pipe(rename('tcf-slider.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task("minifyJs", function() {
  return gulp.src("src/tcf-slider.js")
    .pipe(uglify())
    .pipe(rename('tcf-slider.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('clean', function() {
  del(['dist', 'css', 'js']);
});

gulp.task("build", ['minifyJs', 'compileSass','minifySass'], function() {
  return gulp.src(["css/tcf-slider.min.css", "js/tcf-slider.min.js"])
  	.pipe(gulp.dest('dist'));
});

gulp.task('watchFiles', function() {
  gulp.watch('src/*.scss', ['compileSass', 'minifySass']);
  gulp.watch('src/tcf-slider.js', ['minifyJs']);
})

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["clean"], function() {
  gulp.start('build');
});
