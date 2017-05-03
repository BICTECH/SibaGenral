(function (s, u) {
    s.add({
        save_regions: function (regions, success, error) {
            u.post("/api/regions/save", regions, success, error);
        },
        get_regions: function (success, error) {
            u.get("/api/regions", success, error);
        },
        search_region: function (query, success, error) {
            u.get("/api/regions/search/" + query, success, error);
        },
        get_lov_country: function (success, error) {
            u.get("/api/country/lov", success, error);
        },
        check_country_lov_code: function (code, success, error) {
            u.get("/api/country/check/" + code, success, error);
        },
        check_region_code: function (code, success, error) {
            u.get("/api/regions/check/" + code, success, error);
        }
    });
})(window.service, window.utility)