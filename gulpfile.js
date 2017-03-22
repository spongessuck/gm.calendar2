var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var ngc = require('@angular/compiler-cli');

gulp.task('inlineTemplates', function() {
	return gulp.src('src/**/*')
		.pipe(inlineNg2Template({ useRelativePaths: true }))
		.pipe(gulp.dest('dist/temp'));
});

gulp.task('copySass', function() {
	return gulp.src('src/**/*.scss')
		.pipe(copy('dist/sass', { prefix: 1 }));
});

gulp.task('sass', ['copySass'], function() {
	return gulp.src('dist/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['inlineTemplates', 'sass']);