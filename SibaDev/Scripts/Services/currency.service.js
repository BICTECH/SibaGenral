(function (s, u) {
    s.add({
        save_currencys: function (currencys, success, error) {
            u.post("/api/currency/save", currencys, success, error);
        },
        get_currencys: function (success, error) {
            u.get("/api/currency", success, error);
        },
        search_currency: function (query, success, error) {
            u.get("/api/currency/search/" + query, success, error);
        },

        get_currency_lov: function (success, error) {
            u.get("/api/exchangerate/lov", success, error);
        },
        check_currency_code: function (code, success, error) {
            u.get("/api/currency/check/" + code, success, error);
        }
    });
})(window.service, window.utility)