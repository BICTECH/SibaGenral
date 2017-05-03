(function (s, u) {
    s.add({
        save_product: function (companys, success, error) {
            u.post("/api/product/save", companys, success, error);
        },
        get_products: function (success, error) {
            u.get("/api/product", success, error);
        },
        search_product: function (query, success, error) {
            u.get("/api/product/search/" + query, success, error);
        },
        get_lov_covers: function (success, error) {
            u.get("/api/cover/lov", success, error);
        },
        get_lov_conditionsclausescovers: function (success, error) {
            u.get("/api/conditionsclauses/lov", success, error);
        },
        get_lov_classes: function (success, error) {
            u.get("/api/classbusiness/lov", success, error);
        },
        get_lov_discload: function (success, error) {
            u.get("/api/discountloading/lov", success, error);
        },
        check_cover_code: function (code, success, error) {
            u.get("/api/cover/check/" + code, success, error);
        },
        check_conditionsclauses_code: function (code, success, error) {
            u.get("/api/conditionsclauses/check/" + code, success, error);
        },
        check_classes_code: function (code, success, error) {
            u.get("/api/classbusiness/check/" + code, success, error);
        },
        check_discload_code: function (code, success, error) {
            u.get("/api/discountloading/check/" + code, success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        }
    });
})(window.service, window.utility)