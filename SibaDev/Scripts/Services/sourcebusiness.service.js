(function (s, u) {
    s.add({
        save_sourcebusinesses: function (businesses, success, error) {
            u.post("/api/SourceBusiness/save", businesses, success, error);
        },
        get_sourcebusinesses: function (success, error) {
            u.get("/api/SourceBusiness", success, error);
        },
        search_sourcebusiness: function (query, success, error) {
            u.get("/api/SourceBusiness/search/" + query, success, error);
        },
        check_sourcebusiness_code: function (code, success, error) {
            u.get("/api/sourcebusiness/check/" + code, success, error);
        }
    });
})(window.service, window.utility)