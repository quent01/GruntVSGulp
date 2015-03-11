module.exports = function(grunt) {
		
	grunt.initConfig({
	  
		// minify svg
		svgmin: {
	        options: {
	            plugins: [
	                {
	                    removeViewBox: false
	                }, {
	                    removeUselessStrokeAndFill: false
	                },  {
	                		removeDoctype: false
	                }
	            ]
	        },
	        dist: {
	        		expand			:	true,
						cwd         : '1_dev/sources',
					    src         : ['*.svg'],
					    dest        : '2_taskrunning/svgmin',
					    ext         : '.svg'
	        }
	    },


	    // svg_sprite 
	    svg_sprite: {
			your_target: {
			    expand      : true,
			    cwd         : '2_taskrunning/svgmin',
			    src         : ['*.svg'],
			    dest        : '2_taskrunning/svgsprites',
			    options     : {
			        shape:{
			        	dimension:{
			        		maxWidth:100, //affects the svg directly, not the css
			        		maxHeight:100 //affects the svg directly, not the css
			        	},
			        	spacing: {
			        		padding:0,
			        		box:'content'
			        	},
			        },
			        mode:{
			        	css:{
			        		render:{
			        			css:true
			        		},

			        		layout: 'horizontal',
			        		dest: '.',
			        		sprite: 'sprite'
			        	}
			        }
			    }
			} // your target
	    }, 

	  	// GRUNTICON STANDARD USE
		_grunticon: {
		    myIcons: {
		        files: [{
		            expand: true,
		            cwd: '1_dev/sources',
		            src: ['*.svg'],
		            dest: '2_taskrunning/grunticon_standard_use'
		        }],
		        options: {

		        }
		    }
		},


		// GRUNTICON USED TO CONVERT SVG_SPRITE IN PNG SPRITE
		grunticon: {
		    myIcons: {
		        files: [{
		            expand: true,
		            cwd: '2_taskrunning/svgsprites',
		            src: ['*.svg'],
		            dest: '2_taskrunning/grunticon_custom_use'
		        }],
		        options: {

		        }
		    }
		},


	    // copy svg sprite.svg in prod folder
		copy: {
		  spritepng: {
		    cwd: '2_taskrunning/grunticon_custom_use/png/',  // set working folder / root to copy
		    src: '*.png',           // copy all files and subfolders
		    dest: '3_prod/icons/',    // destination folder
		    expand: true           // required when using cwd
		  },
		  spritesvg: {
		    cwd: '2_taskrunning/svgsprites/',  // set working folder / root to copy
		    src: '**',  // set working folder / root to copy
		    dest: '3_prod/icons/',    // destination folder
		    expand: true           // required when using cwd
		  }			  
		}

	})
	
	// création d'une tâche par défaut
	// grunt.registerTask('default', ['svgmin', 'svg_sprite', 'grunticon', 'copy']);

	// loadNpmTasks here
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-svg-sprite');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-copy');	
}