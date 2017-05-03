(function (s, u) {
    s.add({
        save_accountperiods: function (accountperiods, success, error) {
            u.post("/api/accountperiod/save", accountperiods, success, error);
        },
        get_accountperiods: function (success, error) {
            u.get("/api/accountperiod", success, error);
        },
        search_accountperiod: function (query, success, error) {
            u.get("/api/accountperiod/search/" + query, success, error);
        },
        check_accountperiod_code: function (code, success, error) {
            u.get("/api/accountperiod/check/" + code, success, error);
        }
    });
})(window.service, window.utility)