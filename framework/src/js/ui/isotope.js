define(['jquery'], function($) {

	return {


        init: function() {

    $('.isotope').isotope({
        resizable: 'false',
        itemSelector: '.isotope-item',
        masonry: {
            columnWidth: colW()
        }
    });

    /* Smart resize */

    function colW() {
        var colN;
        if ($('.isotope').hasClass('isotope-2')) {
            colN = 2;
        } else if ($('.isotope').hasClass('isotope-3')) {
            colN = 3;
        } else {
            colN = 4;
        }
        var colW = Math.floor($('.isotope').width() / colN);
        $('.isotope').find('.isotope-item').each(function() {
            $(this).css({
                width: colW
            });
        });
        return colW;
    }

    $(window).smartresize(function(){
        $('.isotope').isotope({
            masonry: {
                columnWidth: colW()
            }
        });
    });

    /* Filter */

    $('.filter-dropdown ul li').click(function(){
        var selector = $(this).attr('data-filter');
        $('.isotope').isotope({
            filter: selector
        });
    });

    /* Dropdown list */

    $('.filter-dropdown').click(function(){
        $(this).toggleClass('open');
    });

    $('.filter-dropdown ul li').click(function(){
        $(this).parent('ul').prev('.selected').children('span.val').text($(this).text());
    });

    /* Resize fix */

    $(window).on('load', function(){
        $(window).smartresize();
    });

        }

	}

});