

var gulp 		= require('gulp');
var path  		= require('path');
var gutil  		= require('gulp-util');
var plumber  	= require('gulp-plumber');
var imagemin 	= require('gulp-imagemin'); //Minify PNG, JPEG, GIF and SVG images
var cache 		= require('gulp-cache');
var del 		= require('del');

// paths setup
var paths = {
	scripts : ["js/**/*.js"],
	s_less	: ["styles/less/**/*.less"],
	s_css	: ["styles/css/**/*.css"],
	html	: ["index.html"],
	img		: ["img-src"] 
};


gulp.task('hello', function(){
	console.log("Hello World")
});

/*--------------------------------------------------------------------------*/ 
/** TASKS FOR DEV
 *
 ****************************************************************************
	/** Less *******************************
	 *
	 *
	 ***************************************



	/** JS *********************************
	 *
	 *
	 ***************************************/



	/** Watch *******************************
	 *
	 ****************************************/
		gulp.task('watch', function() {

			// Watch .less files
			gulp.watch('src/styles/**/*.less', ['styles']);

			// Watch .js files
			gulp.watch('src/scripts/**/*.js', ['scripts']);

			// Watch image files
			gulp.watch('src/images/**/*', ['images']);

		});


	/** Server ******************************
	 *
	 *
	 ****************************************/

	/** Clear Cache **************************
	 *
	 *
	 ****************************************/
		gulp.task('cc', function (done) {
			return cache.clearAll(done);
		});

	/** Clean *******************************
	 *
	 *
	 ****************************************/
		gulp.task('clean', function(callback) {
			del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], callback)
		});





/*--------------------------------------------------------------------------*/ 
/** TASKS FOR GRAFISTS
 *
 *
 ****************************************************************************/
	// ???
	gulp.task('images', function() {
		return gulp.src('src/images/**/*')
			// only changed or new image are compressed
			.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
			.pipe(gulp.dest('dist/assets/img'))
			.pipe(notify({ message: 'Images task complete' }));
	});

	// ???
	
	// ???
	
	// ???
