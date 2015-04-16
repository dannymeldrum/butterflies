function version($log) {
    window.console && console.log($log);
}
function dbg($log) {
    window.console && console.log($log);
}

require.config({
    baseUrl: 'framework/src/js',

    paths: {
        // App (kicks things off)
        app: 'app',

        // Libraries (third party stuff)
        jquery: 'libs/jquery-1.11.1.min',
        swiper: 'libs/idangerous.swiper.min',
        isotope: 'libs/jquery.isotope.min',
        masonry: 'libs/masonry.pkgd.min',
       
        // Common (Stuff we solve again and again)
        windowListener: 'common/windowListener',
        ieCheck: 'common/ieCheck',

        // Modules (specific tasks for this project)
      
    }
});

require(['app']);

