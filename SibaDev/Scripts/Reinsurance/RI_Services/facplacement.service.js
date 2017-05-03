(function (s, u) {
    s.add({
        save_treaty: function (facs, success, error) {
            u.post("/api/FacPlacement/save", facs, success, error);
        },
        search_ttyHead: function (query, success, error) {
            u.get("/api/FacPlacement/search/" + query, success, error);
        },
        getTreatyAllocLOV: function (data, success, error) {
            u.post("/api/TreatyArrangement/excess", data, success, error);
        },
        get_lov_ricust: function (success, error) {
            u.get("/api/customercategory/lov", success, error);
        },
    });
})(window.service, window.utility)