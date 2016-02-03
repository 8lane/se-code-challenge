var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
	gulp.src('assets/sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(livereload());
});

gulp.task('default', ['sass']);

gulp.task('default',function() {
	livereload.listen();
    gulp.watch('assets/sass/**/*.sass',['styles']);
});