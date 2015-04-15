define(['jquery'], function($) {


	return {

        init: function() {


		/*==========================================================*/
		/* Preloader
		/*==========================================================*/

			$(window).on('load', function(){
				$('#status').fadeOut();
				$('#preloader').delay(350).fadeOut('slow');
			});

		/*==========================================================*/
		/* Collapsible sidebar
		/*==========================================================*/

			$('#sidebar-button, #overlay').click(function() {
				$('.portfolio-full').removeClass('portfolio-open');
				$('#top').removeClass('portfolio-open');
				$('#sidebar-button').toggleClass('open');
				$('body').toggleClass('sidebar-open');
				return false;
			});

		/*==========================================================*/
		/* Main menu
		/*==========================================================*/

			$('#mainmenu ul > li:has(ul)').each(function() {
				$(this).addClass('expandable');
			});

			$('#mainmenu ul > li:has(ul) > a').click(function() {
				$(this).parent('li').toggleClass('expanded');
				$(this).parent('li').children('ul').slideToggle();
				return false;
			});

        }
        
    }

});