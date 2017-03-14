var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');
var copy = require('gulp-copy');
var ngc = require('@angular/compiler-cli');

gulp.task('default', function() {
	gulp.src('src/**/*')
		.pipe(inlineNg2Template({ useRelativePaths: true }))
		.pipe(gulp.dest('dist/temp'));
});