(function (s, u) {
    s.add({
        save_offices: function (offices, success, error) {
            u.post("/api/office/save", offices, success, error);
        },
        get_offices: function (success, error) {
            u.get("/api/office", success, error);
        },
        search_office: function (query, success, error) {
            u.get("/api/office/search/" + query, success, error);
        },
        get_lov_companies: function (success, error) {
              u.get("/api/company/lov", success, error);
        },
        get_lov_office: function (success, error) {
            u.get("/api/office/lov", success, error);
        },
        check_office_code: function (code, success, error) {
            u.get("/api/office/check/" + code, success, error);
        }

    });
})(window.service, window.utility)