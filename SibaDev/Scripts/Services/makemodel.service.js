(function (s, u) {
    s.add({
        save_makemodels: function (makemodels, success, error) {
            u.post("/api/makemodel/save", makemodels, success, error)
        },
        get_makemodels: function (success, error) {
            u.get("/api/makemodel", success, error)
        },
        search_makemodel: function (query, success, error) {
            u.get("/api/makemodel/search/" + query, success, error);
        },
        check_makemodel_code: function (code, success, error) {
            u.get("/api/makemodel/check/" + code, success, error);
        },
        check_make_code: function (code, success, error) {
            u.get("/api/make/check/" + code, success, error);
        },
        get_lov_make: function (success, error) {
            u.get("/api/make/lov", success, error);
        },
    })
})(window.service, window.utility)