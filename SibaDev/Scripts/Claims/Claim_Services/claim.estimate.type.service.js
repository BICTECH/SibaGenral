(function (s, u) {
    s.add({
        save_estimate: function (estimates, success, error) {
            u.post("/api/ClaimEstimationType/save", estimates, success, error);
        },
        get_estimates: function (success, error) {
            u.get("/api/ClaimEstimationType", success, error);
        },
        search_estimate: function (query, success, error) {
            u.get("/api/ClaimEstimationType/search/" + query, success, error);
        },
        check_estimate_code: function (code, success, error) {
            u.get("/api/ClaimEstimationType/check/" + code, success, error);
        }
    });
})(window.service, window.utility)