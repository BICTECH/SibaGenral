(function (s, u) {
    s.add({
        save_areas: function (areas, success, error) {
            u.post("/api/area/save", areas, success, error);
        },
        get_areas: function (success, error) {
            u.get("/api/area", success, error);
        },
        search_area: function (query, success, error) {
            u.get("/api/area/search/" + query, success, error);
        },
        get_area_lov: function(success, error) {
            u.get("/api/area/lov", success, error);
        },
        check_area_code: function (code, success, error) {
            u.get("/api/area/check/" + code, success, error);
        },
        check_area_lov_code: function (code, success, error) {
            u.get("/api/area/check/" + code, success, error);
        },
        get_lov_regions: function (success, error) {
            u.get("/api/regions/lov", success, error);
         },
        check_region_code: function (code, success, error) {
            u.get("/api/regions/check/" + code, success, error);
        },
    });
})(window.service, window.utility)