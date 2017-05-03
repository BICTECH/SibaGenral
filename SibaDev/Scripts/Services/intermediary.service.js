(function (s, u) {
    s.add({
        save_intermediaries: function (ntermediaries, success, error) {
            u.post("/api/intermediary/save", ntermediaries, success, error);
        },
        get_intermediaries: function (success, error) {
            u.get("/api/intermediary", success, error);
        },
        search_intermediary: function (query, success, error) {
            u.get("/api/intermediary/search/" + query, success, error);
        },
        get_lov_companies: function (success, error) {
        u.get("/api/company/lov", success, error);
        },
        get_lov_offices: function (success, error) {
            u.get("/api/office/lov", success, error);
        },
        check_intermediary_code: function (code, success, error) {
            u.get("/api/intermediary/check/" + code, success, error);
        },
        check_company_code: function (code, success, error) {
            u.get("/api/company/check/" + code, success, error);
        },
        check_office_code: function (code, success, error) {
            u.get("/api/office/check/" + code, success, error);
        }
    });
})(window.service, window.utility)