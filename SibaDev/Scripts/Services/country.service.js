(function (s, u) {
    s.add({
        save_countries: function (countries, success, error) {
            u.post("/api/country/save", countries, success, error);
        },
        get_countries: function (success, error) {
            u.get("/api/country", success, error);
        },
        search_country: function (query, success, error) {
            u.get("/api/country/search/" + query, success, error);
        },
        check_country_code: function (code, success, error) {
            u.get("/api/country/check/" + code, success, error);
        }
    });
})(window.service, window.utility)