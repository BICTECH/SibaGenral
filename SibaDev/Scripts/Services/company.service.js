(function (s, u) {
    s.add({
        save_companies: function(companys, success, error) {
            u.post("/api/company/save", companys, success, error);
        },
        get_companies: function(success, error) {
            u.get("/api/company", success, error);
        },
        search_company: function(query, success, error) {
            u.get("/api/company/search/" + query, success, error);
        },
        check_company_code: function (code, success, error) {
            u.get("/api/company/check/" + code, success, error);
        },
        get_lov_country: function (success, error) {
            u.get("/api/country/lov", success, error);
        },
        check_country_code: function (code, success, error) {
            u.get("/api/country/check/" + code, success, error);
        },
    });
})(window.service, window.utility)