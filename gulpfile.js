const gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var config = {
	path: {
		scss: './src/scss/**/*.scss',
		html: '*.html'
	},
	output: {
		cssName: 'bundle.min.css',
		path: './'
	}
};



gulp.task('scss', function () {
	return gulp.src(config.path.scss)
		.pipe(sass())
		.pipe(concat(config.output.cssName))
		.pipe(autoprefixer({ browserlist: ['last 25 versions'] }))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.output.path))
		.pipe(browserSync.stream());
});



gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: config.output.path
		}
	});

	gulp.watch(config.path.scss, gulp.series('scss'));
	gulp.watch(config.path.html).on('change', browserSync.reload);

});

gulp.task('default', gulp.series('scss', 'serve'));