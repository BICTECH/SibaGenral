(function (s, u) {
    s.add({
        save_locations: function (locations, success, error) {
            u.post("/api/location/save", locations, success, error);
        },
        get_locations: function (success, error) {
            u.get("/api/location", success, error);
        },
        search_location: function (query, success, error) {
            u.get("/api/location/search/" + query, success, error);
        },
        get_lov_areas: function (success, error) {
            u.get("/api/area/lov", success, error);
        },
        check_location_code: function (code, success, error) {
            u.get("/api/location/check/" + code, success, error);
        },
        check_area_code: function (code, success, error) {
            u.get("/api/area/check/" + code, success, error);
        }
    });
})(window.service, window.utility)