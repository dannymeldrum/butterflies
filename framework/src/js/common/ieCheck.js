define(['jquery'], function($) {

	return { 

        versionNumber: function() {
            /* 
            * Return a breakpoint value for media query checks 
            */
            var ieVersion = null,
                $html = $("html");
                
            if( $html.hasClass("lt-ie9") ) {
              ieVersion = 8
            };

            return ieVersion; 

        }
	}
});
