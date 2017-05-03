(function (s, u) {
    s.add({
        save_covers: function (covers, success, error) {
            u.post("/api/cover/save", covers, success, error);
        },
        get_covers: function (success, error) {
            u.get("/api/cover", success, error);
        },
        search_cover: function(query, success, error) {
            u.get("/api/cover/search/" + query, success, error);
        },
        check_cover_code: function (code, success, error) {
            u.get("/api/cover/check/" + code, success, error);
        }
    });
})(window.service, window.utility)