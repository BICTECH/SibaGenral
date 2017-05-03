(function (s, u) {
    s.add({
        save_make: function (motors, success, error) {
            u.post("/api/make/save", motors, success, error);
        },
        get_makes: function (success, error) {
            u.get("/api/make", success, error);
        },
        search_make: function (query, success, error) {
            u.get("/api/make/search/" + query, success, error);
        },
        check_make_code: function (code, success, error) {
            u.get("/api/make/check/" + code, success, error);
        }
    });
})(window.service, window.utility)