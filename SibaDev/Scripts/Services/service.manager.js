(function () {
    var service = {
        add: function (serve) { for (var i in serve) this[i] = serve[i]; }
    };


    window.service = service;

})();