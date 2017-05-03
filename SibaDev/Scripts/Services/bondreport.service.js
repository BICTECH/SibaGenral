(function (s, u) {
    s.add({

        search_bond: function (query, success, error) {
            u.get("/api/policybond/search/" + query, success, error);
        },

});
})(window.service, window.utility)