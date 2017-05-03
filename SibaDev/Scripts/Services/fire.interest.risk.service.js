(function (s, u) {
    s.add({
        save_risks: function (risks, success, error) {
            u.post("/api/firerisk/save", risks, success, error);
        },
        get_risks: function (success, error) {
            u.get("/api/firerisk", success, error);
        },
        search_risk: function (query, success, error) {
            u.get("/api/firerisk/search/" + query, success, error);
        },
        check_risk_code: function (code, success, error) {
            u.get("/api/firerisk/check/" + code, success, error);
        }
    });
})(window.service, window.utility)