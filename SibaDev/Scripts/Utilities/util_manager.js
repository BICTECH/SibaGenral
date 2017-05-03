(function () {
    var utility = {
        add: function (util) {
            for (var i in util) {
                this[i] = util[i];
            }
        }
    };
    window.utility = utility;
})();