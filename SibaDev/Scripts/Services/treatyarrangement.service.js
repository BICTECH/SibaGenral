(function (s, u) {
    s.add({
        save_treaty: function (treaty, success, error) {
            u.post("/api/TreatyArrangement/save", treaty, success, error);
        },
        search_ttyHead: function (query, success, error) {
            u.get("/api/TreatyArrangement/search/" + query, success, error);
        },

    });
})(window.service, window.utility)