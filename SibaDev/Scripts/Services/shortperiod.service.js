(function (s, u) {
    s.add({
        save_short_period: function (classbusinesses, success, error) {
            u.post("/api/shortperiod/save", classbusinesses, success, error)
        },
        get_short_periods: function (success, error) {
            u.get("/api/shortperiod", success, error)
        },
        search_short_period: function (query, success, error) {
            u.get("/api/shortperiod/search/" + query, success, error);
        },
        check_short_period_code: function (code, success, error) {
            u.get("/api/shortperiod/check/" + code, success, error);
        },
        get_class_business: function (success, error) {
             u.get("/api/classbusiness/lov", success, error);
        },
    })
})(window.service, window.utility)