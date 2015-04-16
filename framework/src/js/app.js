

require(['jquery','ui/subnav', 'ui/swiper', 'ui/masonry', 'ui/isotope'], function(
	$,
  	subnav,
  swiper,
  masonry,
  isotope) {


  $(document).ready(function() {
    // Call Your init methods here.
    //console.log("Site js is loading ok :)");

    subnav.init();
    swiper.init();
    masonry.init();
    isotope.init();

  });

});
