define(['jquery', 'ieCheck'], function($, ieCheck) {

	return { 
    // These need matching up to css breakpoints
		BREAKPOINT_MOBILE: 320,
		BREAKPOINT_MOBILE_WIDE: 480,
    BREAKPOINT_TABLET: 720,
    BREAKPOINT_DESKTOP: 1024,


    getBreakpoint: function() {
      /* 
      * Return a breakpoint value for media query checks 
      */
      var breakpoint = null;

     if ( Modernizr.mq('(min-width: 1024px)') ) {
          breakpoint = this.BREAKPOINT_DESKTOP;
      } else if ( Modernizr.mq('(min-width: 720px)') ) {
          breakpoint = this.BREAKPOINT_TABLET;
      } else if ( Modernizr.mq('(min-width: 480px)') ) {
          breakpoint = this.BREAKPOINT_MOBILE_WIDE;
      } else {
          // IE8 will resolve to this so manually set it to Desktop.
          if (ieCheck.versionNumber() === 8) {
              breakpoint = this.BREAKPOINT_DESKTOP;
          } else {
              // Normal mobile resolves here
              breakpoint = this.BREAKPOINT_MOBILE;
          }
      }
      return breakpoint;
    },

    
    breakpointMobile: function() {
      return (this.getBreakpoint() >= this.BREAKPOINT_MOBILE);
    },

		breakpointMobileWide: function() {
      return (this.getBreakpoint() >= this.BREAKPOINT_MOBILE_WIDE);
		},

		breakpointTablet: function() {
      return (this.getBreakpoint() >= this.BREAKPOINT_TABLET);
		},

		breakpointDesktop: function() {
			return (this.getBreakpoint() >= this.BREAKPOINT_DESKTOP);
		},

	}
});
