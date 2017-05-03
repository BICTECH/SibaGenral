(function (s, u) {
    s.add({
        save_agencycomms: function (agencycommissions, success, error) {
            u.post("/api/agencycommission/save", agencycommissions, success, error);
        },
        get_agencycomms: function (success, error) {
            u.get("/api/agencycommission", success, error);
        },
        search_agencycomm: function (query, success, error) {
            u.get("/api/agencycommission/search/" + query, success, error);
        },
        check_agencycommission_code: function (code, success, error) {
            u.get("/api/agencycommission/check/" + code, success, error);
        }
    });
})(window.service, window.utility)