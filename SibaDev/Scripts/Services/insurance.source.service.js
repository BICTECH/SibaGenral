(function (s, u) {
    s.add({
        save_insource: function (insource, success, error) {
            u.post("/api/insurancesource/save", insource, success, error);
        },
        get_insources: function (success, error) {
            u.get("/api/insurancesource", success, error);
        },
        search_insource: function (query, success, error) {
            u.get("/api/insurancesource/search/" + query, success, error);
        },
        get_insurancesource_lov: function (success, error) {
            u.get("/api/insurancesource/lov", success, error);
        },
        check_country_code: function (code, success, error) {
            u.get("/api/insurancesource/check/" + code, success, error);
        }
    });
})(window.service, window.utility)