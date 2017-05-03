(function (s, u) {
    s.add({      
        save_treaty: function (treaty, success, error) {
            u.post("/api/treatygroup/save", treaty, success, error);
        },
        get_treatygroups: function (success, error) {
            u.get("/api/treatygroup", success, error);
        },
        search_treaty: function (query, success, error) {
            u.get("/api/treatygroup/search/" + query, success, error);
        },
        get_lov_products: function (success, error) {
            u.get("/api/product/lov", success, error);
        },
        check_treaty_code: function (code, success, error) {
            u.get("/api/treatygroup/check/" + code, success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        },


    });
})(window.service, window.utility)