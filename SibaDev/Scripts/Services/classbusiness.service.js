(function (s, u) {
    s.add({
        save_class: function (classbusinesses, success, error) {
            u.post("/api/classbusiness/save", classbusinesses, success, error);
        },
        get_classes: function (success, error) {
            u.get("/api/classbusiness", success, error);
        },
        search_class: function (query, success, error) {
            u.get("/api/classbusiness/search/" + query, success, error);
        },
        check_classbusiness_code: function (code, success, error) {
            u.get("/api/classbusiness/check/" + code, success, error);
        }
    });
})(window.service, window.utility)