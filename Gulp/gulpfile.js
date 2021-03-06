

var gulp		= require('gulp');
var path		= require('path');

var cache		= require('gulp-cache'); 	// A cache proxy task for Gulp
var gutil		= require('gulp-util'); 	// Utility functions for gulp plugins
var plumber		= require('gulp-plumber'); 	// Prevent pipe breaking caused by errors from gulp plugins

var imagemin	= require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images

var del			= require('del'); 			// Delete files/folders using globs
var filter 		= require('gulp-filter'); 	// Enables you to work on a subset of the original files by filtering them using globbing. When you're done and want all the original files back you just call the restore method.
var less 		= require('gulp-less'); 	// Less for Gulp
var notify 		= require("gulp-notify"); 	// send messages
var shell 		= require('gulp-shell'); 	// A handy command line interface for gulp
var browserSync = require("browser-sync"); 	// Livereload and sync with others devices
var reload 		= browserSync.reload;

// Paths setup
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
		gulp.task('browser-sync', function() {
		    //watch files
		    var files = [
			    'styles/main.css',
			    'scripts/**/*.js',
			    'images/**/*',
			    'templates/**/*.twig'
		    ];
		    //initialize browsersync
		    browserSync.init(files, {
		    //browsersync with a php server
		    proxy: "drupal8.dev",
		    notify: true
		    });
		});



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
	// Minify Image
	gulp.task('images', function() {
		return gulp.src('src/images/**/*')
			// only changed or new image are compressed
			.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
			.pipe(gulp.dest('dist/assets/img'))
			.pipe(notify({ message: 'Images task complete' }));
	});

	// Rename Images (Remove special caracters)
	
	// ???
	
	// ???
