(function($, u) {
    u.add({
        set_datepicker: function(selector) {
            //$(selector).datepicker();

            $(selector).datetimepicker({
                format: "D MMMM YYYY"
            });
        }
    })
})(window.jQuery, window.utility)