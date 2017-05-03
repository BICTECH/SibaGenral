(function (s, u) {
    s.add({
        save_intermcomms: function (agencycommissions, success, error) {
            u.post("/api/intermediarycommission/save", agencycommissions, success, error)
        },
        get_intermcomms: function (success, error) {
            u.get("/api/intermediarycommission", success, error)
        },
        search_intermcomm: function (query, success, error) {
            u.get("/api/intermediarycommission/search/" + query, success, error);
        },
        check_intermcommission_code: function (code, success, error) {
            u.get("/api/intermediarycommission/check/" + code, success, error);
        },
        get_lov_intermediary: function (success, error) {
            u.get("/api/intermediary/lov", success, error);
        },
        get_lov_product: function (success, error) {
            u.get("/api/product/lov", success, error);
        },

    })
})(window.service, window.utility)