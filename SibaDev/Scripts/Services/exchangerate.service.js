(function (s, u) {
    s.add({
        save_exchangerates: function (exchangerates, success, error) {
            u.post("/api/exchangerate/save", exchangerates, success, error);
        },
        get_exchangerates: function (success, error) {
            u.get("/api/exchangerate", success, error);
        },
        search_exchangerate: function (query, success, error) {
            u.get("/api/exchangerate/search/" + query, success, error);
        },

        get_lov_currencys: function (success, error) {
            u.get("/api/currency/lov", success, error);
        },
        check_exrates_code: function (code, success, error) {
            u.get("/api/exchangerate/check/" + code, success, error);
        }
    });
})(window.service, window.utility)