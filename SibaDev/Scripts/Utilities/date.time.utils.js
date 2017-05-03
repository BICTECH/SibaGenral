(function(m, u) {
    u.add({
        get_date: function() {
            return m().format("MM/DD/YYYY");
        },
        get_datetime: function() {
            return m().format("MM/DD/YYYY HH:mm:ss");
        },
        dateFormatUk: function(date) {
            return m(date).format("D MMMM YYYY");
        },
        dateFormatUsa: function(date) {
            return m(date).format("MMMM D YYYY");
        },
        dbDate: function(date) {
            return m(date).format("MM/DD/YYYY");
        },

        /**---------------------------------------------------------------------------------
         * function to move the date specefied to a future specefied by the amount and the
         * unit used for the fast forward whether days/months/years.
         * @param string date 
         * @param int amnt 
         * @param string unit 
         * @returns string 
         *----------------*/
        dateFastForward: function(date, amnt, unit) {
            return m(date).add(amnt, unit).format("D MMMM YYYY");
        }
    });
})(window.moment, window.utility);