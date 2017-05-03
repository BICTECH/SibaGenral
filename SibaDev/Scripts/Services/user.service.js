(function (s, u) {
    s.add({
        save_users: function (data, success, error) {
            u.post("/api/user/save", data, success, error);
        },
        search_users: function (query, success, error) {
            u.get("/api/user/search/" + query, success, error);
        },
        get_users: function (success, error) {
            u.get("/api/user", success, error);
        },
        check_user_lov_code: function (code, success, error) {
            u.get("/api/user/check/" + code, success, error);
        },
        check_user_code: function (code, success, error) {
            u.get("/api/user/check/" + code, success, error);
        },
        get_user_lov: function (success, error) {
            u.get("/api/user/lov", success, error);
        }
    });
})(window.service, window.utility)