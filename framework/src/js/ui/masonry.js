define(['jquery'], function($) {

	return {

        init: function() {

		/*==========================================================*/
		/* Masonry blog
		/*==========================================================*/

			// 3 columns with images
			$('.masonry-3').imagesLoaded( function(){
				$('.masonry-3').masonry({
					itemSelector: 'article',
					columnWidth: '.col-4'
			  	});
			});	

			// 4 columns
			$('.masonry-4').masonry({
				itemSelector: 'article',
				columnWidth: '.col-3'
			});

        }
    }

});