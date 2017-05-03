(function (s, u) {
    s.add({
        save_occupancy: function (occupancies, success, error) {
            u.post("/api/occupancy/save", occupancies, success, error);
        },
        get_occupancies: function (success, error) {
            u.get("/api/occupancy", success, error);
        },
        search_occupancy: function (query, success, error) {
            u.get("/api/occupancy/search/" + query, success, error);
        },
        check_occupancy_code: function (code, success, error) {
            u.get("/api/occupancy/check/" + code, success, error);
        }
    });
})(window.service, window.utility)