// Clear files and folders https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	options: {
		force:true
	},
	// Clean entire _assets folder
  assets: ['../_assets'],

  // Clean just the _assets/img folder
  asset_images: ['../_assets/img']
}
