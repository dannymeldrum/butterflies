define(['jquery', 'swiper'], function($) {

	return {

        init: function() {

			/* Initialize sliders */

			var swiper = [];
			$('.swiper').each(function(i,obj){
				swiper[i] = new Swiper(obj, {
					loop: false,
					calculateHeight: true
				});
				// Bind navigation arrows
				$(this).children('.nav-left').on('click', function(e){
					e.preventDefault();
					swiper[i].swipePrev();
				});
				$(this).children('.nav-right').on('click', function(e){
					e.preventDefault();
					swiper[i].swipeNext();
				});
			});

			/* Resize fix for IE11 */

			$(window).on('load', function(){
				swiper.forEach(function(entry) {
					window.setTimeout(function() { entry.resizeFix(); }, 500);
				});
			});

			/* Fullscreen slider */
		    var swiper = new Swiper('.swiper-container', {
		        paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        speed: 1000,
		        autoplay: 5000,
		        autoplayDisableOnInteraction: false
		    });
			// Bind external navigation arrows for fullscreen slider
			$('#nav-arrows .nav-left').on('click', function(e){
				e.preventDefault();
				fSwiper.swipePrev();
			});
			$('#nav-arrows .nav-right').on('click', function(e){
				e.preventDefault();
				fSwiper.swipeNext();
			});

        }
    }

});