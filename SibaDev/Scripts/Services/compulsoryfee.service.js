(function (s, u) {
    s.add({
        save_compulsoryfees: function (compulsoryfees, success, error) {
            u.post("/api/compulsoryfee/save", compulsoryfees, success, error)
        },
        get_compulsoryfees: function (success, error) {
            u.get("/api/compulsoryfee", success, error)
        },
        search_compulsoryfee: function (query, success, error) {
            u.get("/api/compulsoryfee/search/" + query, success, error);
        },
        check_compulsoryfee_code: function (code, success, error) {
            u.get("/api/compulsoryfee/check/" + code, success, error)
        },
        get_lov_main_account: function (success, error) {
            u.get("/api/mainaccount/lov", success, error);
        },
        get_lov_sub_account: function (success, error) {
            u.get("/api/SubAccount/lov", success, error);
        },
    })
})(window.service, window.utility)