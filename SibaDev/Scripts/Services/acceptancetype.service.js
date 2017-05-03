(function (s, u) {
    s.add({
        save_acceptancetypes: function (acceptancetypes, success, error) {
            u.post("/api/acceptancetype/save", acceptancetypes, success, error);
        },
        get_acceptancetypes: function (success, error) {
            u.get("/api/acceptancetype", success, error);
        },
        search_acceptancetype: function (query, success, error) {
            u.get("/api/acceptancetype/search/" + query, success, error);
        },
        check_acceptancetype_code: function (code, success, error) {
            u.get("/api/acceptancetype/check/" + code, success, error);
        }
    });
})(window.service, window.utility)