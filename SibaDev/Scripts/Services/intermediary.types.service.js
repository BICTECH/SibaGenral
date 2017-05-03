(function (s, u) {
    s.add({
        save_intermtypes: function (intermtypes, success, error) {
            u.post("/api/intermediarytypes/save", intermtypes, success, error);
        },
        get_intermtypes: function (success, error) {
            u.get("/api/intermediarytypes", success, error);
        },
        get_interm_type_lov: function (success, error) {
            u.get("/api/intermediarytypes/lov", success, error);
        },
        search_intermtype: function (query, success, error) {
            u.get("/api/intermediarytypes/search/" + query, success, error);
        },
        check_intermtype_code: function (code, success, error) {
            u.get("/api/intermediarytypes/check/" + code, success, error);
        },
        get_custcat_lov: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
        check_custcat_code: function (code, success, error) {
            u.get("/api/customercategory/check/" + code, success, error);
        },
    });
})(window.service, window.utility)