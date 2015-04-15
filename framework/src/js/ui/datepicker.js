define(['jquery', 'pikaday'], function($, Pikaday) {

	return {

        init: function() {

            var field = document.getElementById('datepicker');
            if(field) {
                var picker = new Pikaday({
                    numberOfMonths: 3,
                    mainCalendar: 'right',
                    firstDay: 1,
                    minDate: new Date('2000-01-01'),
                    maxDate: new Date('2020-12-31'),
                    yearRange: [2000, 2020],
                    onSelect: function(date) {
                        field.value = picker.toString();
                    }
                });
                field.parentNode.insertBefore(picker.el, field.nextSibling);
            }
        }
    }

});