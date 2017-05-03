(function (s, u) {
    s.add({
        save_ncd: function (noclmdiscount, success, error) {
            u.post("/api/noclaimdiscount/save", noclmdiscount, success, error);
        },
        get_ncds: function (success, error) {
            u.get("/api/noclaimdiscount", success, error);
        },
        search_ncd: function (query, success, error) {
            u.get("/api/noclaimdiscount/search/" + query, success, error);
        },
        get_lov_product: function (success, error) {
            u.get("/api/product/lov", success, error);
        },

        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        }
    });
})(window.service, window.utility)