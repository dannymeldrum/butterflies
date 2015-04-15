define(['jquery'], function($) {

	return {

        init: function() {

            this.accordion();

        },

        accordion: function() {

            $('.section--accordion h2').click(function() {
                $(".section--accordion h2").not(this).parent().find(".wrapper").slideUp();
                $(".section--accordion h2").not(this).removeClass('active');
                $(this).parent().find(".wrapper").slideToggle();
                $(this).toggleClass('active');
            });

        }
    }

});