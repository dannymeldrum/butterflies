define(['jquery'], function($) {

    var DESKTOP_WIDTH = 1024,
        DESKTOP_ACTIVE = true;

	return {

        init: function() {
            
            if($(window).width() < DESKTOP_WIDTH) {
                this.switchLayout();
            } else {
                DESKTOP_ACTIVE = false;
            }

            this.listenToResize();

        },

        listenToResize: function() {

            $(window).bind("resize",$.proxy(function() {

                if($(window).width() > DESKTOP_WIDTH && DESKTOP_ACTIVE == true) {
                    DESKTOP_ACTIVE = false;
                    this.ulLayout();
                }

                if($(window).width() < DESKTOP_WIDTH && DESKTOP_ACTIVE == false) {
                    DESKTOP_ACTIVE = true;
                    this.switchLayout();
                }


            },this));

        },

        switchLayout: function() {
        $('.filter .filter__list-horizontal').each(function() {
                var $select = $('<select />');

                $(this).find('a').each(function() {
                    var $option = $('<option />');
                    $option.attr('value', $(this).attr('href')).html($(this).html());
                    $select.append($option);
                });

                $(this).replaceWith($select);
            });
        },

        ulLayout: function() {
            $('.filter select').parent().append('<ul class="filter__list-horizontal"></ul>');
            $('.filter select option').each(function(){
              $('.filter__list-horizontal').append('<li><a href="' + $(this).val() + '">'+$(this).text()+'</a></li>');
            });
            $('.filter select').remove();
        }
    }

});