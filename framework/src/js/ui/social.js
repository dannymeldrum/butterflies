define(['jquery'], function($) {

	return {

        init: function() {
            
            $("ul.social-expand > li").click(function() {
                $('.social-hubs--breadcrumb').toggleClass("expand");
                $('ul.social-expand').toggleClass("active");
            });

        }
    }

});