var gulp = require('gulp');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var karma = require('gulp-karma');

gulp.task('default', function () {

	return gulp.src('./foobar')
		// gulp-jasmine works on filepaths so you can't have any plugins before it
		.pipe(karma({
      configFile: 'karma.config.js',
      action: 'run'
    }));
});
