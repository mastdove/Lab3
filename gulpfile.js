'use strict';
var gulp = require('gulp'),
	pug = require('gulp-pug');
	
gulp.task('pug',function(){
	return gulp.src('scr/*.pug')
	.pipe(pug({
	pretty:true}))
	.pipe(gulp.dest('built'));
});